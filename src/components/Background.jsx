import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const BackgroundMatrix = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Create scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      100,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 100, -200);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Load 3D model
    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath(
      "https://www.gstatic.com/draco/versioned/decoders/1.5.7/"
    );
    loader.setDRACOLoader(dracoLoader);

    let mixer; // For model animations

    loader.load(
      `${process.env.PUBLIC_SUPABASE}/storage/v1/object/public/images/compressed1.glb`,
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(100, 100, 100);
        scene.add(model);
        mixer = new THREE.AnimationMixer(model);

        gltf.animations.forEach((clip) => mixer.clipAction(clip).play());
      },
      undefined,
      (error) => {
        console.error("Error loading model:", error);
      }
    );

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 1);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);

    // Add Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Handle scroll event to move camera
    const handleScroll = () => {
      const scrollY = window.scrollY;
      camera.position.y = 50 - scrollY * 0.2;
      camera.lookAt(scene.position);
    };
    window.addEventListener("scroll", handleScroll);

    // Animation loop
    const clock = new THREE.Clock();
    let isAnimating = true;

    const animate = () => {
      if (!isAnimating) return;
      requestAnimationFrame(animate);
      const delta = clock.getDelta();
      mixer?.update(delta);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup function to remove event listeners and dispose of resources
    return () => {
      if (renderer) {
        renderer.dispose();
      }
      if (controls) {
        controls.dispose();
      }
      // Dispose of the scene and its children if necessary
      scene.traverse((child) => {
        if (child.isMesh) {
          child.geometry.dispose();
          child.material.dispose();
        }
      });
    };
  }, []);

  return (
    <div
      id="background-matrix"
      ref={mountRef}
      className="w-full h-full fixed inset-0 left-0 right-0 bottom-0"
    ></div>
  );
};

export default BackgroundMatrix;
