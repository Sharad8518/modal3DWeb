import * as THREE from 'three';
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader"
import gsap from 'gsap';

// init

const loader = new GLTFLoader();

export function init(){



const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
camera.position.z = 5;

const scene = new THREE.Scene();
const light = new THREE.AmbientLight(0xffffff,1);
scene.add(light);



loader.load("/model/robots/scene.gltf",(gltf)=>{
  let model = gltf.scene
  model.scale.set(.45,.45,.45)
 gsap.to(camera.position,{
    z:0.5,
    duration:1,
    ease:"back.out(1.7)"
 })

  scene.add(model)
})

const renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animation );
renderer.setClearColor(0xffffff,1)
document.body.appendChild( renderer.domElement );

window.addEventListener("resize",()=>{
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth,window.innerHeight);
})

// animation

function animation( time ) {

	// mesh.rotation.x = time / 2000;
	// mesh.rotation.y = time / 1000;

	renderer.render( scene, camera );

}
}