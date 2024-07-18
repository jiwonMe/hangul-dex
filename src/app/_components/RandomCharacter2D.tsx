'use client';

import { getRandomCharacter } from '@/utils/getRandomCharacter';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';

export const RandomCharacter2D = ({
  only상용한글 = false
}: {
  only상용한글: boolean
}) => {
  const [character, setCharacter] = useState<string>('');
  const [characters, setCharacters] = useLocalStorage('characters', '');
  const [fontLoaded, setFontLoaded] = useState<boolean>(false);

  useEffect(() => {
    // Check if the font is loaded
    document.fonts.ready.then(() => {
      setFontLoaded(true);
      setCharacter(getRandomCharacter(only상용한글)); // Set character after font is loaded
    });
  }, [only상용한글, setCharacter]);

  const onClick = () => {
    // save to local storage
    setCharacters(characters + character);
    setCharacter(getRandomCharacter(only상용한글));
  }

  return (
    <div className='text-[200px] font-bold maruburi select-none chosun-gs active:text-zinc-700 h-[200px]' onClick={onClick}>
      {fontLoaded && character} {/* Display character only if font is loaded */}
    </div>
  )
}