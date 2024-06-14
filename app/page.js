import Hero from '@/components/Hero';
import Highlights from '@/components/Highlights';
import Navbar from '@/components/Navbar';

import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-black">
      {/* Nav */}
      <Navbar />
      {/* Hero */}
      <Hero />
      {/* Highlights */}
      <Highlights />
      {/* Model */}
    </main>
  );
}
