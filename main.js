import './style.css'

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera (75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

//////////////////////////////////////////////////////////

// for a basic sphere
// const geometry = new THREE.SphereGeometry(8, 16, 8);
/* use one below */
  // solid yellow
  // const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
  // mesh orange
  // const material = new THREE.MeshBasicMaterial( { color: 0xFF6338, wireframe: true } );
// const sphere = new THREE.Mesh( geometry, material );
// scene.add( sphere );


// create donut ring shape
const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
// const material = new THREE.MeshBasicMaterial( { color: 0xFF6333, wireframe: true } );
const material = new THREE.MeshStandardMaterial( { color: 0xFF6333, wireframe: true } );
const torus = new THREE.Mesh(geometry,material);
scene.add(torus);

// standard material needs light source to show

const pointLight = new THREE.PointLight(0xFFFFFF);
pointLight.position.set(5,5,5)
// scene.add(pointLight);

const ambientLight = new THREE.AmbientLight(0xFFFFFF);
scene.add(pointLight, ambientLight);

const lightHelper = new THREE.PointLightHelper(pointLight);
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper);

// uncomment above to add grid
scene.add(lightHelper);


///////////////////////////////////////////////////

// to drag around scene to explor 3d space grid
const controls = new OrbitControls(camera, renderer.domElement);

////////////////////////////////////////////////////

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial( { color: 0xFFFFFF});
  const star = new THREE.Mesh(geometry,material);

  const [x,y,z] = Array(3).fill().map(()=> THREE.MathUtils.randFloatSpread(100));
  star.position.set(x,y,z);
  scene.add(star);
}

Array(200).fill().forEach(addStar);

///////////////////////////////////////////////////

// add background

const spaceTexture = new THREE.TextureLoader().load('space.jpg');
scene.background = spaceTexture;

///////////////////////////////////////////////////////

// add satellite cube option

const satelliteTexture = new THREE.TextureLoader().load('satellite.png');
const satellite = new THREE.Mesh(
  new THREE.BoxGeometry(3,3,3),
  new THREE.MeshBasicMaterial({ map: satelliteTexture})
);

scene.add(satellite);


satellite.position.x = 5;
satellite.position.y = -10;
satellite.position.z = 10;

///////////////////////////////////////////////////////

function animate() {
  requestAnimationFrame(animate);

  torus.rotation.x += 0.01;

  // sphere.rotation.x += 0.01;
  // sphere.rotation.y += 0.005;
  // sphere.rotation.z += 0.01;

  // able to drag scene to see 3d space grid
  controls.update();

  renderer.render(scene, camera);
}

animate();