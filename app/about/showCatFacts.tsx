'use client'
import {useState} from 'react'

export default function ShowCatFacts({children}: { children: React.ReactNode }) {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={ () => {
        setShow(!show);
      }}>{show ? 'Hide' : 'Show'} Cat Quotes!</button>
      {show && children}
    </div>
  )
}
