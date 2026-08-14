<!--
  ParticleOrb.svelte — Organic 3D Spectro Particle Sphere with Non-Linear Simplex-style Noise.
  Idle: Organic 3D Orb with subtle organic morphing / "penyok" distortion.
  Voice: Dynamic, non-linear multi-frequency wave morphing (randomized organic fluid displacement).
-->
<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import * as THREE from 'three';
  import { session } from '../lib/stores/session.svelte';
  import { audioAnalyser } from '../lib/audio-analyser';

  let containerEl: HTMLDivElement | undefined = $state();
  let animId: number | null = null;

  let scene: THREE.Scene;
  let camera: THREE.PerspectiveCamera;
  let renderer: THREE.WebGLRenderer;
  let particlesMesh: THREE.Points;
  let geometry: THREE.BufferGeometry;
  let material: THREE.PointsMaterial;

  let initialPositions: Float32Array;
  let particleColors: Float32Array;
  let randomOffsets: Float32Array; // Random seed per particle for non-linear displacement
  // Adaptive mobile/desktop particle budget (4,200 for smooth 60fps mobile GPU safety, 4.8k max)
  const PARTICLE_COUNT = typeof window !== 'undefined' && window.innerWidth < 768 ? 4200 : 4800;

  // Spectro Palette (RGB normalized 0-1)
  const COLOR_CYAN = new THREE.Color('#67e8f9');
  const COLOR_BLUE = new THREE.Color('#60a5fa');
  const COLOR_VIOLET = new THREE.Color('#8b5cf6');
  const COLOR_AMBER = new THREE.Color('#fbbf24');
  const COLOR_EMERALD = new THREE.Color('#34d399');
  const COLOR_OFF = new THREE.Color('#52525b');

  onMount(() => {
    if (!containerEl) return;

    const width = 320;
    const height = 320;

    // 1. Scene setup
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 240;

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerEl.appendChild(renderer.domElement);

    // 2. Spherical Distribution with Randomized Offsets
    geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    initialPositions = new Float32Array(PARTICLE_COUNT * 3);
    particleColors = new Float32Array(PARTICLE_COUNT * 3);
    randomOffsets = new Float32Array(PARTICLE_COUNT * 3);

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

      initialPositions[i * 3] = x;
      initialPositions[i * 3 + 1] = y;
      initialPositions[i * 3 + 2] = z;

      // Unique random frequency phase offset per particle (for non-linear multi-frequency noise)
      randomOffsets[i * 3] = Math.random() * Math.PI * 2;
      randomOffsets[i * 3 + 1] = Math.random() * Math.PI * 2;
      randomOffsets[i * 3 + 2] = Math.random() * Math.PI * 2;

      // Spectro color blend
      const mix = Math.random();
      const col = mix < 0.5
        ? COLOR_CYAN.clone().lerp(COLOR_BLUE, mix * 2)
        : COLOR_BLUE.clone().lerp(COLOR_VIOLET, (mix - 0.5) * 2);

      particleColors[i * 3] = col.r;
      particleColors[i * 3 + 1] = col.g;
      particleColors[i * 3 + 2] = col.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    // Particle texture
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
    const texture = new THREE.CanvasTexture(canvas);

    material = new THREE.PointsMaterial({
      size: 2.4,
      vertexColors: true,
      map: texture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0.9,
    });

    particlesMesh = new THREE.Points(geometry, material);
    scene.add(particlesMesh);

    // 3. Animation Loop (Organic 3D Noise Morphing + Non-Linear Audio Reactivity)
    let clock = 0;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      clock += 0.015;

      const posAttr = geometry.attributes.position as THREE.BufferAttribute;
      const colAttr = geometry.attributes.color as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;
      const colArray = colAttr.array as Float32Array;

      // Get real-time audio frequency data
      const audio = audioAnalyser.getFrequencyData();
      const amp = audio.amplitude;

      // Rotation
      let rotSpeed = 0.003;
      if (session.status === 'processing') rotSpeed = 0.02;
      else if (session.status === 'speaking') rotSpeed = 0.006;

      particlesMesh.rotation.y += rotSpeed;
      particlesMesh.rotation.x += rotSpeed * 0.4;

      // State color targets
      let targetColor = COLOR_CYAN;
      if (session.mode === 'off') targetColor = COLOR_OFF;
      else if (session.status === 'listening') targetColor = COLOR_EMERALD;
      else if (session.status === 'speaking') targetColor = COLOR_VIOLET;
      else if (session.status === 'processing') targetColor = COLOR_AMBER;

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const idx = i * 3;
        const ix = initialPositions[idx];
        const iy = initialPositions[idx + 1];
        const iz = initialPositions[idx + 2];

        const phaseX = randomOffsets[idx];
        const phaseY = randomOffsets[idx + 1];
        const phaseZ = randomOffsets[idx + 2];

        // Normal direction from center
        const len = Math.sqrt(ix * ix + iy * iy + iz * iz);
        const nx = ix / len;
        const ny = iy / len;
        const nz = iz / len;

        // 1. Organic Idle "Penyok" / Morphing (Non-linear 3D noise harmonics)
        const idleNoise =
          Math.sin(clock * 1.5 + ix * 0.04 + phaseX) *
          Math.cos(clock * 1.2 + iy * 0.04 + phaseY) *
          Math.sin(clock * 0.8 + iz * 0.04 + phaseZ);
        
        let displacement = idleNoise * 6.5; // Subtle organic surface "penyok" breathing

        // 2. Dynamic Audio Reactivity (Non-linear multi-frequency wave morphing)
        if (session.mode !== 'off') {
          const audioPower = Math.max(amp, audio.mid, audio.bass, audio.treble);

          // Non-linear organic spikes based on sound intonation
          const voiceNoise =
            Math.sin(clock * 4 + ix * 0.08 + phaseX) *
            Math.cos(clock * 5 + iy * 0.08 + phaseY) +
            Math.sin(clock * 3.5 + iz * 0.08 + phaseZ);

          if (session.status === 'speaking') {
            displacement += voiceNoise * (audio.mid * 10 + audio.treble * 8 + audioPower * 5);
          } else if (session.status === 'listening') {
            displacement += voiceNoise * (audio.bass * 9 + amp * 6);
          } else {
            displacement += idleNoise * audioPower * 6;
          }
        }

        posArray[idx] = ix + nx * displacement;
        posArray[idx + 1] = iy + ny * displacement;
        posArray[idx + 2] = iz + nz * displacement;

        // Smooth color interpolation
        colArray[idx] += (targetColor.r - colArray[idx]) * 0.05;
        colArray[idx + 1] += (targetColor.g - colArray[idx + 1]) * 0.05;
        colArray[idx + 2] += (targetColor.b - colArray[idx + 2]) * 0.05;
      }

      posAttr.needsUpdate = true;
      colAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();
  });

  onDestroy(() => {
    if (animId) cancelAnimationFrame(animId);
    if (geometry) geometry.dispose();
    if (material) material.dispose();
    if (renderer) {
      renderer.dispose();
      renderer.domElement.remove();
    }
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
