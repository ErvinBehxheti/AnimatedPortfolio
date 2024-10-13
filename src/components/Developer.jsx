import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import HolographicMaterial from "../material/hologramMaterial";

const Developer = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      50,
      mount.clientWidth / mount.clientHeight, // Dynamically set aspect ratio
      0.1,
      1000
    );
    camera.position.set(-3, 1, 5);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(mount.devicePixelRatio);
    renderer.setSize(mount.clientWidth, mount.clientHeight); // Match container size
    renderer.setClearColor(0x000000, 0); // Optional: transparent background
    mount.appendChild(renderer.domElement);

    let mixer;
    const holoMaterial = new HolographicMaterial();

    // Load 3D model
    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath(
      "https://www.gstatic.com/draco/versioned/decoders/1.5.7/"
    );
    loader.setDRACOLoader(dracoLoader);

    loader.load(
      "models/avatar.glb",
      (gltf) => {
        const model = gltf.scene;
        model.position.set(0, -1.5, 0);
        model.scale.set(2, 2, 2);

        model.traverse((node) => {
          if (node instanceof THREE.Mesh) {
            node.material = holoMaterial;
          }
        });

        scene.add(model);
        mixer = new THREE.AnimationMixer(model);

        gltf.animations.forEach((clip) => {
          mixer.clipAction(clip).play();
        });
        loader.load(
          "models/avatar-holo.glb",
          function (secondGltf) {
            const secondModel = secondGltf.scene;
            secondModel.position.set(0, -0.1, 0);
            secondModel.scale.set(0.5, 0.5, 0.5);

            model.add(secondModel);

            secondGltf.animations.forEach((clip) => {
              const secondAction = mixer.clipAction(clip);
              secondAction.play();
            });
          },
          undefined,
          function (error) {
            console.error("Error loading the second model:", error);
          }
        );
      },
      undefined,
      function (error) {
        console.error("Error loading model:", error);
      }
    );

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false; // Disable zoom
    controls.enableDamping = true; // Smooth controls
    controls.dampingFactor = 0.05;

    // Resize handling
    const handleResize = () => {
      const newWidth = mount.clientWidth;
      const newHeight = mount.clientHeight;
      camera.aspect = newWidth / newHeight; // Adjust camera aspect ratio
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight); // Update renderer size
    };

    window.addEventListener("resize", handleResize);

    // Animation loop
    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();
      mixer?.update(delta);
      holoMaterial.update();
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      renderer.dispose();
      renderer.domElement.remove();
      controls.dispose();
      scene.traverse((child) => {
        if (child.isMesh) {
          child.geometry.dispose();
          child.material.dispose();
        }
      });
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
};

export default Developer;
