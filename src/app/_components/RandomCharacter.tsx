'use client';

import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
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

/**
 * 랜덤 한글 문자를 반환하는 컴포넌트
 * @returns 
 */
const RandomCharacter = ({
  only상용한글 = false
}: {
  only상용한글: boolean
}) => {
  const [character, setCharacter] = useState<string>('');

  useEffect(() => {
    const randomCharacter = getRandomCharacter(only상용한글);
    setCharacter(randomCharacter);
  }, []);

  const handleClick = () => {
    setCharacter(getRandomCharacter(only상용한글));
  }

  return (
    <div className="flex items-center justify-center select-none">
      <h1 className="text-[200px] font-bold text-center leading-tight" onClick={handleClick}>{`${character}`}</h1>
    </div>
  )
}

export default RandomCharacter