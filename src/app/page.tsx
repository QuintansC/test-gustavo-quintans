'use client'
import DefaultLayout from '@/components/Layouts/DefaultLayout';

import { useEffect, useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

import Image from 'next/image';
import { UserImage } from '@/components/utils';


if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}
export default function Layers() {
  const container = useRef<HTMLElement | any>();

  useGSAP(
    () => {
      gsap.to('.oval-1', { x: 0, rotate: 180, duration: 3 });
      gsap.to('.oval-2', { x: 0,  rotate: 90, duration: 2 });
    },
    { scope: container }
  );

  return (
    <DefaultLayout>
      <section id="home" className="flex flex-row justify-around description panel bg-blue-500 pt-20" ref={container}>
        <div className='flex flex-col justify-around h-48 w-80'>
          <h1 className='text-6xl'>I am <strong>Gustavo dos santos Quintans </strong></h1>
          <h2 className='text-3xl'> Front-End Software Developer</h2>
          <p className='text-1xl'>I am a lover of tecnologies, passionate software developer</p>
          <a className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" href='#timeline' type='button'> Portfolio </a>
        </div>
        <div>
            <Image className='absolute z-10 top-44 right-72 rounded-full' src={UserImage} width={200} height={200} alt="Profile image"></Image>
            <div className='oval oval-1 bg-black w-10 h-10'></div>
            <div className='oval oval-2 bg-black w-10 h-10'></div>
          </div>
      </section>
      <section id="about" className="flex flex-row justify-around description panel relative bg-red-500">
        <div className='flex flex-col justify-around h-48 w-80'>
          <h1 className='text-6xl'>I am <strong>Gustavo dos santos Quintans </strong></h1>
          <h2 className='text-3xl'> Front-End Software Developer</h2>
          <p className='text-1xl'>I am a lover of tecnologies, passionate software developer</p>
          <a className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" href='#timeline' type='button'> Portfolio </a>
        </div>
        <div>
            <Image className='absolute z-10 top-44 right-72 rounded-full' src={UserImage} width={200} height={200} alt="Profile image"></Image>
            <div className='oval oval-1 bg-black w-10 h-10'></div>
            <div className='oval oval-2 bg-black w-10 h-10'></div>
          </div>
      </section>
      <section id="timeline" className="flex flex-row justify-around description panel relative bg-orange-500">
        <div className='flex flex-col justify-around h-48 w-80'>
          <h1 className='text-6xl'>I am <strong>Gustavo dos santos Quintans </strong></h1>
          <h2 className='text-3xl'> Front-End Software Developer</h2>
          <p className='text-1xl'>I am a lover of tecnologies, passionate software developer</p>
          <a className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" href='#timeline' type='button'> Portfolio </a>
        </div>
        <div>
            <Image className='absolute z-10 top-44 right-72 rounded-full' src={UserImage} width={200} height={200} alt="Profile image"></Image>
            <div className='oval oval-1 bg-black w-10 h-10'></div>
            <div className='oval oval-2 bg-black w-10 h-10'></div>
          </div>
      </section>
      <section id="slideshow" className="flex flex-row justify-around description panel relative bg-purple-500">
        <div className='flex flex-col justify-around h-48 w-80'>
          <h1 className='text-6xl'>I am <strong>Gustavo dos santos Quintans </strong></h1>
          <h2 className='text-3xl'> Front-End Software Developer</h2>
          <p className='text-1xl'>I am a lover of tecnologies, passionate software developer</p>
          <a className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" href='#timeline' type='button'> Portfolio </a>
        </div>
        <div>
            <Image className='absolute z-10 top-44 right-72 rounded-full' src={UserImage} width={200} height={200} alt="Profile image"></Image>
            <div className='oval oval-1 bg-black w-10 h-10'></div>
            <div className='oval oval-2 bg-black w-10 h-10'></div>
          </div>
      </section>
         
    </DefaultLayout>
  );
}
