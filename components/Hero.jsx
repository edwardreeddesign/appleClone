'use client';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState('');

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== 'undefined') {
      // Set initial video source based on window width
      setVideoSrc(
        window.innerWidth < 760 ? '/videos/smallHero.mp4' : '/videos/hero.mp4'
      );
    }
  }, []); // Run this effect only once after the initial render

  const handleVideoSrcSet = () => {
    setVideoSrc(
      window.innerWidth < 760 ? '/videos/smallHero.mp4' : '/videos/hero.mp4'
    );
  };

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);

    return () => {
      window.removeEventListener('resize', handleVideoSrcSet);
    };
  }, []);

  //   // Use dynamic import for GSAP to ensure it's only executed on the client-side
  //   const useGSAP = dynamic(() => import('@gsap/react'), { ssr: false });

  useGSAP(() => {
    gsap.to('.hero-title', {
      opacity: 1,
      delay: 2.5,
      ease: 'power4.in',
    });
    gsap.to('#cta', { opacity: 1, y: -50, delay: 2.5, ease: 'power1.inOut' });
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p className="hero-title">IPhone 15 Pro</p>
        <div className="w-9/12 sm:w-10/12">
          <video
            src={videoSrc}
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
            className="pointer-events-none"
          />
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlights" className="btn">
          Buy
        </a>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  );
};
export default Hero;
