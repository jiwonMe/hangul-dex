'use client';

import React, { useEffect, useState, useRef } from 'react';
import * as THREE from 'three';
import { 상용한글string } from './상용한글string';

const getRandomCharacter = (only상용한글?: boolean) => {
  if (only상용한글) {
    return 상용한글string.charAt(Math.floor(Math.random() * 상용한글string.length));
  }
  // Generate a random Korean character between '가' and '힣'
  const start = '가'.charCodeAt(0);
  const end = '힣'.charCodeAt(0);
  const randomCharCode = start + Math.floor(Math.random() * (end - start + 1));
  return String.fromCharCode(randomCharCode);
}

const RandomCharacter = ({
  only상용한글 = false
}: {
  only상용한글: boolean
}) => {
  const [character, setCharacter] = useState<string>('');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const planeRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    const randomCharacter = getRandomCharacter(only상용한글);
    setCharacter(randomCharacter);

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
    setCharacter(newCharacter);
    
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