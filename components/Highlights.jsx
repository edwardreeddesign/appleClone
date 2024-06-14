'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import VideoCarousel from './VideoCarousel';

const Highlights = () => {
  useGSAP(() => {
    gsap.to('#title', { opacity: 1, y: 0 });
    gsap.to('.link', { opacity: 1, y: 0, duration: 1, stagger: '.25' });
  });
  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading">
            Get the Highlights
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the Film
              <Image
                src="/images/watch.svg"
                alt="watch"
                height={25}
                width={25}
                className="ml-2"
              />
            </p>
            <p className="link">
              Watch the event.
              <Image
                src="/images/right.svg"
                alt="right"
                height={10}
                width={10}
                className="ml-2 "
              />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};
export default Highlights;
