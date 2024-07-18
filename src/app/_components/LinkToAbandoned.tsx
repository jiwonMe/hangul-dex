'use client'

import Link from 'next/link'
import React from 'react'
import { useLocalStorage } from 'usehooks-ts';

const LinkToAbandoned = () => {
  const [characters] = useLocalStorage('characters', '');

  return (
    characters.length > 20 ? (
      <Link className="text-sm text-zinc-400 maruburi active:text-zinc-900 underline" href="/abandoned">
        외면 받은 글자모음...
      </Link>
    ) : characters.length < 5 ? (
      <div className="text-sm text-zinc-400 maruburi">
        누르면 다른 글자가 나와요
      </div>
    ) : null
  )
}

export default LinkToAbandoned