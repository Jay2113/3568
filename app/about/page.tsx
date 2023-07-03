import 'server-only'
import ShowCatFacts from './showCatFacts'
import React from "react";
import GetCatFacts from "./getCatFacts";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <ShowCatFacts>
        <GetCatFacts/>
      </ShowCatFacts>
      <Link href={'/'}>Home</Link>
    </div>
  )
}
