import './style.css'

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import * as data from './posInitTruncated.json';
const { x } = data;
//alert(data);
//import { xxx } from 'http://www.webglearth.com/v2/api.js'
/*
var array1 = new Array();
var array2 = new Array();

function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
          callback(rawFile.responseText);
      }
  }
  rawFile.send(null);
}

//usage:
readTextFile("./posInit.json", function(text){
  var data = JSON.parse(text);
  //console.log(data);
  //alert(data);

  for (let i = 0; i < data.length; i++) {
    //text += cars[i] + "<br>";
    array1[i] = data[i];
  //  for(let j = 0; i < 3; j++){
  //    alert(JSON.stringify(array1[j]));
  //  }
  }
  //alert(array1[1][1] + array1[2][1] + array1[3][1]);
  alert(JSON.stringify(array1[1]));
  //alert(JSON.stringify(array1[1].x));
  //var lat = (int) jsonObj.get("age");

  //parsefloat will turn x into a number
  alert(parseFloat(array1[1].x));
  alert((parseFloat(array1[1].x)) / 1000);

  var xaxis = (parseFloat(array1[1].x) / 1000);
  alert("x axis" + xaxis);
  //alert(Integer.parseInt(array1[1].x));
  alert(JSON.stringify(array1[1]) + JSON.stringify(array1[2]));
  alert(array1[1] + array1[2] + array1[3]);
});
*/

//const coordinates = posinit.json;
//let sww = JSON.parse('posInit.json');
//var json1 = require('./posInit.json');

//fetch("posInit.json")
//  .then(response => response.json())
//  .then(json => alert(json.x));

function a(){
////  alert(JSON.parse("posInit.json"));
alert(JSON.parse(x));
}

//a.call()
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


/*function initialize() {
  var earth = new WE.map('earth_div');
  WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution: '© OpenStreetMap contributors'
  }).addTo(earth);
  //scene.add( earth );
}
*/
// for a basic sphere
//const geometry = new THREE.SphereGeometry(15, 32, 16);
 const geometry = new THREE.SphereGeometry(8, 16, 8);
/* use one below */
  // solid yellow
   const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
   material.map    = THREE.ImageUtils.loadTexture('earthmap1k.jpg')
   
  // mesh orange
  // const material = new THREE.MeshBasicMaterial( { color: 0xFF6338, wireframe: true } );
 const sphere = new THREE.Mesh( geometry, material );
 scene.add( sphere );


// create donut ring shape
//const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
  //// const material = new THREE.MeshBasicMaterial( { color: 0xFF6333, wireframe: true } );
//const material = new THREE.MeshStandardMaterial( { color: 0xFF6333, wireframe: true } );
//const torus = new THREE.Mesh(geometry,material);
//scene.add(torus);

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
/*
alert(array1[1]);
function b(){
for (let k = 0; k < array1.length; k++) {
  //text += cars[i] + "<br>";
  alert(array1[i]);
  //array1[i] = data[i];
  for(let j = 0; i < 3; j++){
    alert(array1[j]);
  }
}
}
*/
//b.call();
/*
const satelliteTexture = new THREE.TextureLoader().load('satellite.png');
const satellite = new THREE.Mesh(
  new THREE.BoxGeometry(3,3,3),
  new THREE.MeshBasicMaterial({ map: satelliteTexture})
);
*/

var array1 = new Array();
var array2 = new Array();

function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
          callback(rawFile.responseText);
      }
  }
  rawFile.send(null);
}

//usage:
readTextFile("./posInitTruncated.json", function(text){
  var data = JSON.parse(text);
  //console.log(data);
  //alert(data.length);

  for (let i = 0; i < data.length; i++) {
    //text += cars[i] + "<br>";
    //function addSat(){
    array1[i] = data[i];
    const satelliteTexture = new THREE.TextureLoader().load('satellite.png');
  const satellite = new THREE.Mesh(
    new THREE.BoxGeometry(3,3,3),
    new THREE.MeshBasicMaterial({ map: satelliteTexture})
    );
    var xaxis = (parseFloat(array1[i].x) / 1000);
    var yaxis = (parseFloat(array1[i].y) / 1000);
    var zaxis = (parseFloat(array1[i].z) / 1000);
    //satellite.position.x = xaxis;
    //satellite.position.y = yaxis;
    //satellite.position.z = zaxis;
    satellite.position.set(xaxis,yaxis,zaxis);
    //alert("x axis " + xaxis + "y axis " + yaxis + "z axis " + zaxis);
    scene.add(satellite);
    //} 
    //Array(200).fill().forEach(addSat);
    //alert("x axis " + xaxis);
    //alert("y axis " + yaxis);
    //alert("z axis " + zaxis);


  //  for(let j = 0; i < 3; j++){
  //    alert(JSON.stringify(array1[j]));
  //  }
  }
  //alert(array1[1][1] + array1[2][1] + array1[3][1]);
  alert(JSON.stringify(array1[1]));
  //alert(JSON.stringify(array1[1].x));
  //var lat = (int) jsonObj.get("age");

  //parsefloat will turn x into a number
  alert(parseFloat(array1[1].x));
  alert((parseFloat(array1[1].x)) / 1000);

  //var xaxis = (parseFloat(array1[1].x) / 1000);
  //alert("x axis" + xaxis);
  //alert(Integer.parseInt(array1[1].x));
  alert(JSON.stringify(array1[1]) + JSON.stringify(array1[2]));
  alert(array1[1] + array1[2] + array1[3]);
});

// add satellite cube option
/*
const satelliteTexture = new THREE.TextureLoader().load('satellite.png');
const satellite = new THREE.Mesh(
  new THREE.BoxGeometry(3,3,3),
  new THREE.MeshBasicMaterial({ map: satelliteTexture})
);
*/
//scene.add(satellite);

//satellite.position.x = -8;
//satellite.position.y = 13;
//satellite.position.z = -20;


//satellite.position.x = 5;
//satellite.position.y = -10;
//satellite.position.z = 10;

//satellite.position.x = -8855.823863;
//satellite.position.y = 13117.780146;
//satellite.position.z = -20728.353233;

///////////////////////////////////////////////////////

function animate() {
  requestAnimationFrame(animate);

 // torus.rotation.x += 0.01;

  // sphere.rotation.x += 0.01;
  // sphere.rotation.y += 0.005;
  // sphere.rotation.z += 0.01;

  // able to drag scene to see 3d space grid
  controls.update();

  renderer.render(scene, camera);
}

animate();