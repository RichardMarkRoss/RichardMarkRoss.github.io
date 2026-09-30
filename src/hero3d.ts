import * as THREE from 'three';

// A faceted icosahedron with a point-cloud shell. It leans toward the cursor and spins with scroll.
export function start(canvas: HTMLCanvasElement) {
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  canvas.style.background = 'none';

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
  camera.position.z = 6;

  const group = new THREE.Group();
  scene.add(group);

  const core = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.3, 1),
    new THREE.MeshStandardMaterial({ color: 0x6366f1, flatShading: true, metalness: 0.3, roughness: 0.35 }),
  );
  const wire = new THREE.LineSegments(
    new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(1.32, 1)),
    new THREE.LineBasicMaterial({ color: 0xc7d2fe, transparent: true, opacity: 0.35 }),
  );
  const shell = new THREE.Points(
    new THREE.IcosahedronGeometry(1.9, 4),
    new THREE.PointsMaterial({ color: 0x94a3b8, size: 0.025, transparent: true, opacity: 0.6 }),
  );
  group.add(core, wire, shell);

  scene.add(new THREE.AmbientLight(0xffffff, 0.35));
  const key = new THREE.DirectionalLight(0xffffff, 2.2);
  key.position.set(3, 4, 5);
  const rim = new THREE.PointLight(0x22d3ee, 18);
  rim.position.set(-3, -2, 2);
  scene.add(key, rim);

  const target = { x: 0, y: 0 };
  addEventListener('pointermove', (e) => {
    target.x = (e.clientY / innerHeight - 0.5) * 0.8;
    target.y = (e.clientX / innerWidth - 0.5) * 1.2;
  }, { passive: true });

  const resize = () => {
    const { clientWidth: w, clientHeight: h } = canvas;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };
  new ResizeObserver(resize).observe(canvas);

  // Pause when off-screen or the tab is hidden
  let visible = true;
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; }).observe(canvas);

  const clock = new THREE.Clock();
  renderer.setAnimationLoop(() => {
    if (!visible || document.hidden) return;
    const t = clock.getElapsedTime();
    const scroll = scrollY * 0.002;
    group.rotation.x += (target.x - group.rotation.x) * 0.05;
    group.rotation.y += (target.y + t * 0.15 + scroll - group.rotation.y) * 0.05;
    shell.rotation.y = -t * 0.05;
    group.position.y = Math.sin(t * 0.8) * 0.08;
    renderer.render(scene, camera);
  });
}
