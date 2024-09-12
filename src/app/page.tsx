'use client'
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin, ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import { UserImage } from '@/components/utils';
import Article from '@/components/Layouts/ArticleLayout';
import Timeline from '@/components/Timeline';
import Slider from '@/components/Slider';
import useData from '@/hooks/useData';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP, ScrollToPlugin);
}

export default function Layers() {
  const container = useRef<HTMLElement | any>();
  const carousel = useRef<any>(null)
  const advanceCarousel = (e: React.MouseEvent<HTMLElement>) =>{
    e.preventDefault()
    let valor = carousel.current.offsetWidth
    carousel.current.scrollLeft += valor
  }
  const rewindCarousel = (e: React.MouseEvent<HTMLElement>) =>{
    e.preventDefault()
    let valor = carousel.current.offsetWidth
    carousel.current.scrollLeft -= valor
  }
  useGSAP(
    () => {;
      gsap.to('.oval-1', { x: 0, rotate: 180, duration: 3 })
      gsap.to('.oval-2', { x: 0,  rotate: 90, duration: 2 })
    },
    { scope: container }
  );

  const data = useData();

  return (
    <DefaultLayout>
      <section id="home" className="section flex flex-row justify-around description panel bg-transparent pt-20" ref={container}>
        <article className='flex flex-col justify-around h-48 w-80'>
          <h1 className='text-6xl mt-2 pb-2'>I am <strong>Gustavo dos santos Quintans </strong></h1>
          <h2 className='text-3xl mt-2 pb-2'> Front-End Software Developer</h2>
          <p className='text-1xl mt-2 pb-2'>I am a lover of tecnologies, passionate software developer</p>
          <a className=" mt-2 pb-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" href='#timeline' type='button'> Portfolio </a>
        </article>
        <article>
            <figure>
              <Image className='absolute z-10 top-44 right-72 rounded-full' src={UserImage} width={200} height={200} alt="Profile image"></Image>
              <div className='oval oval-1 bg-blue dark:bg-darkmode-dark w-10 h-10'></div>
              <div className='oval oval-2 bg-blue dark:bg-darkmode-dark w-10 h-10'></div>
            </figure>
          </article>
      </section>
      <section id="about" className="section flex flex-row justify-around description panel relative bg-blue dark:bg-darkmode-dark">
        <Article title='About me' className='items-center w-2/3'>
          <br/>
          <p> 
            I am a developer passionate about technology and innovation, e-sports and fitness lifestyle to maintain my mindset aligned to my objectives, always willing and with a strong sense of responsibility for my code. 
            Because of this, I maintain a high level of excellence in my deliveries for my own development. 
            I am well accustomed to working in a team with a high volume of demands.
          </p>
          <br/>
          <h3 className='text-2xl text-left'>Why buzzvel?</h3>
          <br/>
          <p>
            I see a oportunity to grow here, because is a unique opportunity to test my english, my skills and my compentences.
          </p>
          <p>
            I believe I can add a lot to the team with my technical knowledge and my social knowledge.
          </p>
          <p>
          I excelled in robotics projects at my college, we were a team and were able to participate in national competitions at the Brazilian Robotics Olympics (OBR)
            the name of our team is Alto Tietê Robotics.
          </p>
          <p>
            I worked with teams of ecommerce and a agribusiness in the Brazil. I speak Spanish(C1) and learning English(B2).
          </p>
          <p>
            I also know that this test is not the most elaborate one I could do, but due to time and some unforeseen circumstances,
            I guarantee that you wont regret talking to me.
          </p>
        </Article>
        <aside className='w-1/2'>
          <Timeline shortVersion={true}></Timeline>
        </aside>
      </section>
      <section id="timeline" className="section flex flex-row justify-around description panel relative bg-orange-500">
        <Article title='Timeline'>
          <p> My carrer experiences</p>
          <br></br>
          <Timeline shortVersion={false}></Timeline>
        </Article>
      </section>
      <section id="slideshow" className="section flex flex-row description panel relative bg-blue dark:bg-darkmode-dark">
         <div className="slides-container relative overflow-hidden flex justify-around w-[100%]">
          <button className='relative z-9999' type='button' title='retroceder' onClick={rewindCarousel}> Rewind </button>
          <div className="relative w-[100%] h-[100%] overflow-hidden flex carousel " ref={carousel}>

            {data[0]?.datas.map((project: any)=>{
              return (
                <Slider 
                  key={project} 
                  src={`/${project.name}.webp`} 
                  alt={`${project.name} Image`} 
                  name={project.name}
                  segment={project.segment}
                  description={project.description}
                />
              )
            })}
          </div>
          <button className='relative z-9999' type='button' title='avancar' onClick={advanceCarousel}> Advance </button>
        </div>
      </section>
    </DefaultLayout>
  );
}
