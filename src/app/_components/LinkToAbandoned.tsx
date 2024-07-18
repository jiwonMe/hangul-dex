'use client'

import Link from 'next/link'
import React from 'react'
import { useLocalStorage } from 'usehooks-ts';

const LinkToAbandoned = () => {
  const [characters] = useLocalStorage('characters', '');

  return (
    characters.length > 20 && (
      <Link className="text-sm text-zinc-400 maruburi active:text-zinc-500 underline" href="/abandoned">
        외면 받은 글자모음...
      </Link>
    )
  )
}

export default LinkToAbandoned