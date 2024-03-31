import Hero from "./components/Homepage/Hero";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Shane Chaffe - Software Engineer',
  description: 'The homepage of my portfolio site, welcome!',
}


export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
