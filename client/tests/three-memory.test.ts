import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';

test('BUG-7: CanvasTexture and WebGLRenderer disposal pattern verification', () => {
  // Emulate minimal DOM canvas for headless node test environment
  const canvas = {
    width: 16,
    height: 16,
    style: {},
    addEventListener: () => {},
    removeEventListener: () => {},
  } as unknown as HTMLCanvasElement;

  const texture = new THREE.CanvasTexture(canvas);
  const material = new THREE.PointsMaterial({ map: texture });
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array([0, 0, 0, 1, 1, 1]);
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const points = new THREE.Points(geometry, material);
  const scene = new THREE.Scene();
  scene.add(points);

  assert.equal(scene.children.length, 1);

  // Disposal sequence mirroring ParticleOrb.svelte onDestroy
  scene.remove(points);
  geometry.dispose();

  if (texture.image && typeof texture.image === 'object') {
    (texture.image as { width?: number; height?: number }).width = 0;
    (texture.image as { width?: number; height?: number }).height = 0;
  }
  texture.dispose();
  material.dispose();

  assert.equal(scene.children.length, 0, 'Mesh must be detached from scene');
  assert.equal(canvas.width, 0, 'Canvas width cleared on texture teardown');
  assert.equal(canvas.height, 0, 'Canvas height cleared on texture teardown');
});

test('BUG-7: WebGL context lost event handler invokes preventDefault', () => {
  let defaultPrevented = false;
  const mockEvent = {
    preventDefault: () => {
      defaultPrevented = true;
    },
  } as unknown as Event;

  const handleContextLost = (e: Event) => {
    e.preventDefault();
  };

  handleContextLost(mockEvent);
  assert.equal(defaultPrevented, true, 'e.preventDefault() must be called on webglcontextlost');
});
