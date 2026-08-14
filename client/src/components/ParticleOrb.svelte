<!--
  ParticleOrb.svelte — 3D Spectro Flowing Wave Ribbons & Particles powered by Three.js & Web Audio API.
  Morphs dynamically between 3D Wavy Ribbons, Cosmic Helix, and Waveform Field.
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
  const PARTICLE_COUNT = 3200;

  // Spectro Palette (RGB normalized 0-1)
  const COLOR_CYAN = new THREE.Color('#67e8f9');
  const COLOR_BLUE = new THREE.Color('#60a5fa');
  const COLOR_VIOLET = new THREE.Color('#8b5cf6');
  const COLOR_AMBER = new THREE.Color('#fbbf24');
  const COLOR_EMERALD = new THREE.Color('#34d399');
  const COLOR_OFF = new THREE.Color('#52525b');

  onMount(() => {
    if (!containerEl) return;

    const width = 220;
    const height = 220;

    // 1. Scene setup
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 220;

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerEl.appendChild(renderer.domElement);

    // 2. Geometry & Wavy Waveform Rings / Ribbons Distribution
    geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    initialPositions = new Float32Array(PARTICLE_COUNT * 3);
    particleColors = new Float32Array(PARTICLE_COUNT * 3);

    const RINGS = 12;
    const PER_RING = Math.floor(PARTICLE_COUNT / RINGS);

    for (let r = 0; r < RINGS; r++) {
      const ringRadius = 25 + r * 5.5; // Expanding concentric 3D wavy rings
      const heightOffset = (r - RINGS / 2) * 4;

      for (let i = 0; i < PER_RING; i++) {
        const idx = (r * PER_RING + i) * 3;
        if (idx >= PARTICLE_COUNT * 3) break;

        const angle = (i / PER_RING) * Math.PI * 2;
        // Natural organic 3D wave deformation
        const waveY = Math.sin(angle * 4 + r * 0.8) * 8;
        const waveR = ringRadius + Math.cos(angle * 3) * 6;

        const x = Math.cos(angle) * waveR;
        const y = Math.sin(angle) * waveR + heightOffset + waveY;
        const z = Math.sin(angle * 2 + r) * 12;

        positions[idx] = x;
        positions[idx + 1] = y;
        positions[idx + 2] = z;

        initialPositions[idx] = x;
        initialPositions[idx + 1] = y;
        initialPositions[idx + 2] = z;

        // Gradient color transitions along the wavy rings
        const colorRatio = (r / RINGS + i / PER_RING) % 1;
        const col = colorRatio < 0.5
          ? COLOR_CYAN.clone().lerp(COLOR_BLUE, colorRatio * 2)
          : COLOR_BLUE.clone().lerp(COLOR_VIOLET, (colorRatio - 0.5) * 2);

        particleColors[idx] = col.r;
        particleColors[idx + 1] = col.g;
        particleColors[idx + 2] = col.b;
      }
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
      grad.addColorStop(0.3, 'rgba(255,255,255,0.8)');
      grad.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 16, 16);
    }
    const texture = new THREE.CanvasTexture(canvas);

    material = new THREE.PointsMaterial({
      size: 2.6,
      vertexColors: true,
      map: texture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0.88,
    });

    particlesMesh = new THREE.Points(geometry, material);
    scene.add(particlesMesh);

    // 3. Animation Loop (3D Wave Oscillations & Audio Dynamics)
    let clock = 0;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      clock += 0.018;

      const posAttr = geometry.attributes.position as THREE.BufferAttribute;
      const colAttr = geometry.attributes.color as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;
      const colArray = colAttr.array as Float32Array;

      // Get real-time audio frequency data
      const audio = audioAnalyser.getFrequencyData();
      const amp = audio.amplitude;

      // Rotation & Dynamic Tilt
      let rotSpeed = 0.005;
      if (session.status === 'processing') rotSpeed = 0.025;
      else if (session.status === 'speaking') rotSpeed = 0.01;

      particlesMesh.rotation.y += rotSpeed;
      particlesMesh.rotation.x = Math.sin(clock * 0.5) * 0.25;
      particlesMesh.rotation.z = Math.cos(clock * 0.3) * 0.15;

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

        // 3D Flowing Wave Displacement (Sine / Cosine Wave Ribbons)
        const angle = Math.atan2(iz, ix);
        const distFromCenter = Math.sqrt(ix * ix + iz * iz);

        // Continuous wavy motion along 3D space
        let waveY = Math.sin(clock * 2.5 + distFromCenter * 0.08 + angle * 3) * 6;
        let waveZ = Math.cos(clock * 2.0 + distFromCenter * 0.06 + angle * 2) * 5;

        if (session.mode !== 'off') {
          const audioBoost = Math.max(amp, audio.mid, audio.bass, audio.treble);
          
          if (session.status === 'speaking') {
            // High fluid wave oscillations on vocal intonation
            waveY += Math.sin(clock * 8 + angle * 5 + i * 0.05) * (audio.mid * 28 + amp * 18);
            waveZ += Math.cos(clock * 6 + angle * 4 + i * 0.05) * (audio.treble * 22 + amp * 15);
          } else if (session.status === 'listening') {
            // Deep pulsing bass waves on mic audio
            waveY += Math.sin(clock * 6 + angle * 3) * (audio.bass * 24 + amp * 15);
            waveZ += Math.cos(clock * 5 + angle * 2) * (audio.bass * 20 + amp * 12);
          } else {
            waveY += audioBoost * 10 * Math.sin(clock * 4 + angle * 2);
          }
        }

        posArray[idx] = ix;
        posArray[idx + 1] = iy + waveY;
        posArray[idx + 2] = iz + waveZ;

        // Smooth color interpolation
        colArray[idx] += (targetColor.r - colArray[idx]) * 0.04;
        colArray[idx + 1] += (targetColor.g - colArray[idx + 1]) * 0.04;
        colArray[idx + 2] += (targetColor.b - colArray[idx + 2]) * 0.04;
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
  <div bind:this={containerEl} class="w-[220px] h-[220px] flex items-center justify-center pointer-events-none"></div>
</button>

<style>
  .particle-orb-container {
    width: 220px;
    height: 220px;
  }
</style>
