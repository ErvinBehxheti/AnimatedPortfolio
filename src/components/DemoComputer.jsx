import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const DemoComputer = ({ texture }) => {
  const mountRef = useRef(null);
  const monitorScreenRef = useRef(null); // Reference to the monitor screen mesh
  const sceneRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      35,
      mount.clientWidth / mount.clientHeight, // Dynamically set aspect ratio
      0.1,
      1000
    );
    camera.position.set(0, 1.5, 5);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(mount.devicePixelRatio);
    renderer.setSize(mount.clientWidth, mount.clientHeight); // Match container size
    renderer.setClearColor(0x000000, 0); // Optional: transparent background
    mount.appendChild(renderer.domElement);

    // Load 3D model
    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath(
      "https://www.gstatic.com/draco/versioned/decoders/1.5.7/"
    );
    loader.setDRACOLoader(dracoLoader);

    loader.load(
      `${process.env.PUBLIC_SUPABASE}/storage/v1/object/public/images/computer.glb`,
      (gltf) => {
        const model = gltf.scene;
        model.position.set(-0.1, -1.5, -1);
        model.scale.set(1, 1, 1);
        scene.add(model);

        // Get monitor screen mesh
        const monitorScreen = model.getObjectByName("monitor-screen");
        monitorScreenRef.current = monitorScreen;

        // Load the initial texture
        const textureLoader = new THREE.TextureLoader();
        const screenTexture = textureLoader.load(texture, (tex) => {
          tex.flipY = false;
        });
        monitorScreen.material = new THREE.MeshBasicMaterial({
          map: screenTexture,
        });
      },
      undefined,
      (error) => {
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
    const animate = () => {
      requestAnimationFrame(animate);
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

  // Update the monitor texture when `texture` prop changes
  useEffect(() => {
    if (monitorScreenRef.current) {
      const textureLoader = new THREE.TextureLoader();
      const newTexture = textureLoader.load(texture, (tex) => {
        tex.flipY = false; // Ensure the texture isn't flipped
      });
      monitorScreenRef.current.material.map = newTexture;
      monitorScreenRef.current.material.needsUpdate = true;
    }
  }, [texture]);

  return <div ref={mountRef} className="w-full h-full" />;
};

export default DemoComputer;
