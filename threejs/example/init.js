let camera, scene, renderer, controls, clock
init();
animate();

function init() {
  scene = new THREE.Scene();
  clock = new THREE.Clock();

  const axesHelper = new THREE.AxesHelper(20);
  scene.add(axesHelper);

  const w = window.innerWidth;
  const h = window.innerHeight;
  const asp = w / h;

  camera = new THREE.PerspectiveCamera(60, asp, 0.1, 999999);
  camera.position.set(0, 0, 15);
  scene.add(camera);

 

  const light = new THREE.AmbientLight(0xffffff, 1);
  light.position.copy(camera.position);
  scene.add(light);

  // const dlight = new THREE.DirectionalLight(0xffffff, 1);
  // dlight.position.set(0, 0, 150);
  // scene.add(dlight);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(w, h);

  renderer.outputEncoding = THREE.sRGBEncoding; // 定义渲染器的输出编码
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.5; // 色调映射的曝光级别。默认是1

  document.body.appendChild(renderer.domElement);
  controls = new THREE.OrbitControls(camera, renderer.domElement);
}

function animate() {
  renderer.render(scene, camera);
  controls.update();
  window.requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
  const w = window.innerWidth;
  const h = window.innerHeight;
  const asp = w / h;

  camera.aspect = asp;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
  renderer.render(scene, camera);
  renderer.setPixelRatio(window.devicePixelRatio);
});
