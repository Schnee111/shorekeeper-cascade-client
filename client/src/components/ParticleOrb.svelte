<!--
  ParticleOrb.svelte — Organic 3D Spectro Particle Sphere with GPU-Accelerated Shader.
  High performance: GPU vertex shader noise displacement, zero per-frame CPU iteration,
  zero memory leak CanvasTexture disposal, WebGL context loss handling, and visibility-gated rAF.
-->
<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import * as THREE from 'three';
  import { session } from '../lib/stores/session.svelte';
  import { audioAnalyser } from '../lib/audio-analyser';

  let { visible = true } = $props<{ visible?: boolean }>();

  let containerEl: HTMLDivElement | undefined = $state();
  let animId: number | null = null;
  let isDestroyed = false;

  let scene: THREE.Scene | null = null;
  let camera: THREE.PerspectiveCamera | null = null;
  let renderer: THREE.WebGLRenderer | null = null;
  let particlesMesh: THREE.Points | null = null;
  let geometry: THREE.BufferGeometry | null = null;
  let material: THREE.ShaderMaterial | null = null;
  let particleTexture: THREE.CanvasTexture | null = null;

  const currentColor = new THREE.Color('#67e8f9');

  const PARTICLE_COUNT = typeof window !== 'undefined' && window.innerWidth < 768 ? 4200 : 4800;

  // Spectro Palette (RGB normalized 0-1)
  const COLOR_CYAN = new THREE.Color('#67e8f9');
  const COLOR_BLUE = new THREE.Color('#60a5fa');
  const COLOR_VIOLET = new THREE.Color('#8b5cf6');
  const COLOR_AMBER = new THREE.Color('#fbbf24');
  const COLOR_EMERALD = new THREE.Color('#34d399');
  const COLOR_OFF = new THREE.Color('#52525b');

  const vertexShader = `
    attribute vec3 aRandomOffset;
    attribute vec3 aBaseColor;

    uniform float uClock;
    uniform float uAudioPower;
    uniform float uBass;
    uniform float uMid;
    uniform float uTreble;
    uniform float uAmp;
    uniform int uStatus; // 0=off, 1=default, 2=listening, 3=speaking, 4=processing
    uniform vec3 uTargetColor;
    uniform float uPointSize;

    varying vec3 vColor;

    void main() {
      vec3 ix = position;
      vec3 norm = normalize(ix);

      // 1. Organic Idle Morphing (3D noise harmonics)
      float idleNoise =
        sin(uClock * 1.5 + ix.x * 0.04 + aRandomOffset.x) *
        cos(uClock * 1.2 + ix.y * 0.04 + aRandomOffset.y) *
        sin(uClock * 0.8 + ix.z * 0.04 + aRandomOffset.z);

      float displacement = idleNoise * 6.5;

      // 2. Dynamic Audio Reactivity
      if (uStatus != 0) {
        float voiceNoise =
          sin(uClock * 4.0 + ix.x * 0.08 + aRandomOffset.x) *
          cos(uClock * 5.0 + ix.y * 0.08 + aRandomOffset.y) +
          sin(uClock * 3.5 + ix.z * 0.08 + aRandomOffset.z);

        if (uStatus == 3) { // speaking
          displacement += voiceNoise * (uMid * 10.0 + uTreble * 8.0 + uAudioPower * 5.0);
        } else if (uStatus == 2) { // listening
          displacement += voiceNoise * (uBass * 9.0 + uAmp * 6.0);
        } else {
          displacement += idleNoise * uAudioPower * 6.0;
        }
      }

      vec3 newPos = ix + norm * displacement;
      vec4 mvPosition = modelViewMatrix * vec4(newPos, 1.0);
      gl_PointSize = uPointSize * (240.0 / -mvPosition.z);
      gl_Position = projectionMatrix * mvPosition;

      // Smooth color blend towards current target color
      vColor = mix(aBaseColor, uTargetColor, 0.7);
    }
  `;

  const fragmentShader = `
    uniform sampler2D uTexture;
    uniform float uOpacity;
    varying vec3 vColor;

    void main() {
      vec4 tex = texture2D(uTexture, gl_PointCoord);
      if (tex.a < 0.05) discard;
      gl_FragColor = vec4(vColor, tex.a * uOpacity);
    }
  `;

  function startAnimationLoop(): void {
    if (animId !== null || isDestroyed) return;

    let clock = 0;
    const animate = () => {
      if (isDestroyed) return;

      // Gate execution: pause rAF calculations if not visible or tab hidden
      if (!visible || (typeof document !== 'undefined' && document.hidden)) {
        animId = null;
        return;
      }

      animId = requestAnimationFrame(animate);
      clock += 0.015;

      if (!material || !particlesMesh || !renderer || !scene || !camera) return;

      // Get real-time audio frequency data
      const audio = audioAnalyser.getFrequencyData();
      const amp = audio.amplitude;

      // Mesh Rotation
      let rotSpeed = 0.003;
      if (session.status === 'processing') rotSpeed = 0.02;
      else if (session.status === 'speaking') rotSpeed = 0.006;

      particlesMesh.rotation.y += rotSpeed;
      particlesMesh.rotation.x += rotSpeed * 0.4;

      // State color targets & status ID
      let targetColor = COLOR_CYAN;
      let statusId = 1;
      if (session.mode === 'off') {
        targetColor = COLOR_OFF;
        statusId = 0;
      } else if (session.status === 'listening') {
        targetColor = COLOR_EMERALD;
        statusId = 2;
      } else if (session.status === 'speaking') {
        targetColor = COLOR_VIOLET;
        statusId = 3;
      } else if (session.status === 'processing') {
        targetColor = COLOR_AMBER;
        statusId = 4;
      }

      currentColor.lerp(targetColor, 0.05);

      // Fast GPU Uniform updates (zero CPU buffer loops)
      const u = material.uniforms;
      u.uClock.value = clock;
      u.uTargetColor.value.copy(currentColor);
      u.uStatus.value = statusId;
      u.uAudioPower.value = Math.max(amp, audio.mid, audio.bass, audio.treble);
      u.uBass.value = audio.bass;
      u.uMid.value = audio.mid;
      u.uTreble.value = audio.treble;
      u.uAmp.value = amp;

      renderer.render(scene, camera);
    };

    animId = requestAnimationFrame(animate);
  }

  function stopAnimationLoop(): void {
    if (animId !== null) {
      cancelAnimationFrame(animId);
      animId = null;
    }
  }

  // React to visibility changes (2D/3D toggle or tab switching)
  $effect(() => {
    if (visible) {
      startAnimationLoop();
    } else {
      stopAnimationLoop();
    }
  });

  onMount(() => {
    if (!containerEl) return;

    const width = 320;
    const height = 320;

    // 1. Scene setup
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 240;

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    const pixelRatio = Math.min(window.devicePixelRatio, 2);
    renderer.setPixelRatio(pixelRatio);

    const handleContextLost = (e: Event) => {
      e.preventDefault();
      stopAnimationLoop();
    };
    renderer.domElement.addEventListener('webglcontextlost', handleContextLost, false);

    containerEl.appendChild(renderer.domElement);

    // 2. Spherical Distribution with Randomized Offsets
    geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const particleColors = new Float32Array(PARTICLE_COUNT * 3);
    const randomOffsets = new Float32Array(PARTICLE_COUNT * 3);

    const radius = 62;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const phi = Math.acos(-1 + (2 * i) / PARTICLE_COUNT);
      const theta = Math.sqrt(PARTICLE_COUNT * Math.PI) * phi;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      randomOffsets[i * 3] = Math.random() * Math.PI * 2;
      randomOffsets[i * 3 + 1] = Math.random() * Math.PI * 2;
      randomOffsets[i * 3 + 2] = Math.random() * Math.PI * 2;

      const mix = Math.random();
      const col = mix < 0.5
        ? COLOR_CYAN.clone().lerp(COLOR_BLUE, mix * 2)
        : COLOR_BLUE.clone().lerp(COLOR_VIOLET, (mix - 0.5) * 2);

      particleColors[i * 3] = col.r;
      particleColors[i * 3 + 1] = col.g;
      particleColors[i * 3 + 2] = col.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('aRandomOffset', new THREE.BufferAttribute(randomOffsets, 3));
    geometry.setAttribute('aBaseColor', new THREE.BufferAttribute(particleColors, 3));

    // Particle texture generation
    const canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
      grad.addColorStop(0, 'rgba(255,255,255,1)');
      grad.addColorStop(0.35, 'rgba(255,255,255,0.8)');
      grad.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 16, 16);
    }
    particleTexture = new THREE.CanvasTexture(canvas);

    material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uClock: { value: 0 },
        uTargetColor: { value: new THREE.Color('#67e8f9') },
        uStatus: { value: 1 },
        uAudioPower: { value: 0 },
        uBass: { value: 0 },
        uMid: { value: 0 },
        uTreble: { value: 0 },
        uAmp: { value: 0 },
        uPointSize: { value: 2.4 * pixelRatio },
        uTexture: { value: particleTexture },
        uOpacity: { value: 0.9 },
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    particlesMesh = new THREE.Points(geometry, material);
    scene.add(particlesMesh);

    const handleVisibilityChange = () => {
      if (typeof document !== 'undefined' && document.hidden) {
        stopAnimationLoop();
      } else if (visible) {
        startAnimationLoop();
      }
    };
    if (typeof document !== 'undefined') {
      document.addEventListener('visibilitychange', handleVisibilityChange);
    }

    return () => {
      if (typeof document !== 'undefined') {
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      }
      if (renderer?.domElement) {
        renderer.domElement.removeEventListener('webglcontextlost', handleContextLost);
      }
    };
  });

  onDestroy(() => {
    isDestroyed = true;
    stopAnimationLoop();

    // 1. Remove Mesh from Scene
    if (particlesMesh && scene) {
      scene.remove(particlesMesh);
      particlesMesh = null;
    }

    // 2. Dispose Geometry and Clear Attributes
    if (geometry) {
      geometry.dispose();
      geometry = null;
    }

    // 3. Dispose Texture and Material
    if (particleTexture) {
      if (particleTexture.image instanceof HTMLCanvasElement) {
        particleTexture.image.width = 0;
        particleTexture.image.height = 0;
      }
      particleTexture.dispose();
      particleTexture = null;
    }
    if (material) {
      material.dispose();
      material = null;
    }

    // 4. Force WebGL Context Loss & Dispose Renderer
    if (renderer) {
      renderer.forceContextLoss();
      renderer.dispose();
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      renderer = null;
    }

    scene = null;
    camera = null;
  });
</script>

<button
  type="button"
  class="particle-orb-container relative flex items-center justify-center cursor-pointer border-0 bg-transparent p-0 outline-none"
  onclick={() => session.toggleSession()}
  aria-label={session.mode === 'off' ? 'Start session' : 'End session'}
>
  <div bind:this={containerEl} class="w-[320px] h-[320px] flex items-center justify-center pointer-events-none"></div>
</button>

<style>
  .particle-orb-container {
    width: 320px;
    height: 320px;
  }
</style>
