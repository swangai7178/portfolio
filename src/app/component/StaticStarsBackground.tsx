/*
 *   Copyright (c) 2025 
 *   All rights reserved.
 */
// src/components/StaticStarsBackground.tsx
// (Create a components folder if you don't have one)
// src/components/DeveloperVibeBackground.tsx
// (You might want to rename the file and component)

'use client'; // Required because it uses R3F Canvas

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Grid, OrbitControls } from '@react-three/drei'; // Import Grid
import * as THREE from 'three';
export default function DeveloperVibeBackground() {
    return (
        <Canvas
            className="absolute inset-0 z-0" // Position behind everything
            camera={{ position: [0, 4, 10], fov: 42 }} // Geeky: 42, the answer to life, the universe, and everything
            onCreated={({ scene }) => {
                // Dark background color
                scene.background = new THREE.Color('#0d0d17'); // Geeky: A hexadecimal nod to binary (dark blue/purple)
                // Optional: Add fog for atmospheric depth
                // scene.fog = new THREE.FogExp2('#0d0d17', 0.042); // Geeky: Fog density as 42
            }}
        >
            <Suspense fallback={null}>
                <ambientLight intensity={0.2} />
                {/* Optional: Directional light for slight highlights on grid if needed */}
                {/* <directionalLight position={[5, 5, 5]} intensity={0.5} /> */}

                {/* Grid Component */}
                <Grid
                    position={[0, -0.01, 0]} // Position grid slightly below origin if needed
                    args={[10.5, 10.5]} // Grid size (optional, works well with infiniteGrid)
                    infiniteGrid // Makes the grid extend infinitely
                    followCamera // Keeps the grid centered relative to the camera (XZ plane)
                    cellSize={0.42} // Geeky: Smallest grid cells size as 42
                    sectionSize={2.42} // Geeky: Larger grid sections size as 42
                    cellThickness={0.42} // Geeky: Thickness of the smaller grid lines as 42
                    sectionThickness={1.42} // Geeky: Thickness of the larger grid lines as 42
                    cellColor={new THREE.Color('#222222')} // Geeky: Dark gray, like a terminal background
                    sectionColor={new THREE.Color('#42aaff')} // Geeky: Blue with a nod to 42
                    fadeDistance={42} // Geeky: Distance at which the grid starts fading
                    fadeStrength={1.42} // Geeky: How quickly the grid fades
                />

                {/* Add OrbitControls back temporarily if you want to adjust the camera view easily */}
                {/* Then remove or disable them */}
                {/* <OrbitControls enableZoom={true} enablePan={true} /> */}
            </Suspense>
        </Canvas>
    );
}
