'use client'

import Link from 'next/link'
import React from 'react'
import { useLocalStorage } from 'usehooks-ts';

const LinkToAbandoned = () => {
  const [characters] = useLocalStorage('characters', '');

  return (
    characters.length > 5 ? (
      <Link className="text-sm text-zinc-900 maruburi active:text-zinc-900 underline" href="/abandoned" style={{ opacity: (characters.length - 5) / 30 }}>
        외면 받은 글자모음...({characters.length})
      </Link>
    ) : characters.length < 5 ? (
      <div className="text-sm text-zinc-400 maruburi">
        글자를 누르면 다른 글자가 나와요
      </div>
    ) : null
  )
}

export default LinkToAbandoned