'use client';

import { getRandomCharacter } from '@/utils/getRandomCharacter';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const RandomCharacter = ({
  only상용한글 = false
}: {
  only상용한글: boolean
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const planeRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    const randomCharacter = getRandomCharacter(only상용한글);
    
    if (canvasRef.current) {
      const scene = new THREE.Scene();
      sceneRef.current = scene;
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
      const renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        alpha: true,
        context: canvasRef.current.getContext('webgl2') as WebGLRenderingContext
      });
      renderer.setSize(400, 400);

      // Create text texture
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = 400;
      canvas.height = 400;
      if (context) {
        context.font = 'bold 300px Arial';
        context.fillStyle = 'black';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(randomCharacter, 200, 200);
      }
      const texture = new THREE.CanvasTexture(canvas);

      // Create material with text texture
      const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true });

      const plane = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
      planeRef.current = plane;
      scene.add(plane);

      camera.position.z = 1;

      const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };

      animate();
    }
  }, [only상용한글]);

  const handleClick = () => {
    const newCharacter = getRandomCharacter(only상용한글);
    
    // Update texture with new character
    if (canvasRef.current && planeRef.current) {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = 400;
      canvas.height = 400;
      if (context) {
        context.font = 'bold 300px Arial';
        context.fillStyle = 'black';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(newCharacter, 200, 200);
      }
      const texture = new THREE.CanvasTexture(canvas);
      if (planeRef.current.material instanceof THREE.MeshBasicMaterial) {
        planeRef.current.material.map = texture;
        planeRef.current.material.needsUpdate = true;
      }
    }
  };

  return (
    <div className="flex items-center justify-center select-none" onClick={handleClick}>
      <canvas ref={canvasRef} style={{ width: '400px', height: '400px' }} />
    </div>
  );
};

export default RandomCharacter;