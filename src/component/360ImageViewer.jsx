import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { VRButton,XR,Controllers,Hands } from '@react-three/xr'

const ImageViewer = () => {
  const texture = new THREE.TextureLoader().load('https://i.postimg.cc/QC5r27Xg/2022-04-13-Pano360-Recinto-Building-F-Metal-W-CC.jpg');

  return (
    <> <VRButton/>
    <Canvas>
        <XR>
        <Controllers />
          <Hands /><mesh>
      <sphereGeometry args={[500, 60, 40]} />
      <meshBasicMaterial attach="material" map={texture} side={THREE.BackSide} />
    </mesh>
    <OrbitControls autoRotate autoRotateSpeed={0.5} /></XR>
    
  </Canvas></>
   
  );
};

export default ImageViewer;