'use client';

import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const getRandomCharacter = () => {
  // Generate a random Korean character between '가' and '힣'
  const start = '가'.charCodeAt(0);
  const end = '힣'.charCodeAt(0);
  const randomCharCode = start + Math.floor(Math.random() * (end - start + 1));
  return String.fromCharCode(randomCharCode);
}

/**
 * 랜덤 한글 문자를 반환하는 컴포넌트
 * @returns 
 */
const RandomCharacter = () => {
  const [character, setCharacter] = useState<string>('');

  useEffect(() => {
    const randomCharacter = getRandomCharacter();
    setCharacter(randomCharacter);
  }, []);

  return (
    <div className="flex items-center justify-center">
      <h1 className="text-[200px] font-bold text-center leading-tight">{`"${character}"`}</h1>
    </div>
  )
}

export default RandomCharacter