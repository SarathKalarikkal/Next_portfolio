import React from 'react'
import rentAcarLanding from '@/assets/images/rent-a-car-landing.png'
import movieFinder from '@/assets/images/movie-finder.png'
import estoreLanding from '@/assets/images/e-store-landing.png'
import CheckIcon from "@/assets/icons/check-circle.svg"
import ArrowRightUpIcon from "@/assets/icons/arrow-up-right.svg"
import grainImage from "@/assets/images/grain.jpg"
import Image from 'next/image';
import SectionHeader from '@/components/SectionHeader'
import Card from '@/components/Card'


const portfolioProjects = [
  {
    company: "Booking Site",
    year: "2024",
    title: "Rent A car",
    results: [
      { title: "Car booking service" },
      { title: "Give own car for rent" },
      { title: "Filtered results" },
    ],
    link: "https://rent-acar.vercel.app/",
    image: rentAcarLanding,
  },
  {
    company: "Blog",
    year: "2024",
    title: "Movie finder",
    results: [
      { title: "Movie Discovery" },
      { title: "Save Favorites" },
      { title: "Stunning ui experience" },
    ],
    link: "https://movie-app-finder.vercel.app/",
    image: movieFinder,
  },
  {
    company: "E-com store",
    year: "2024",
    title: "Redux E-com Store",
    results: [
      { title: "Browse Products" },
      { title: "Live Bookmarking" },
      { title: "Real-Time Updates" },
    ],
    link: "https://redux-ecom-store.vercel.app/",
    image: estoreLanding,
  },
];

const Projects = () => {
  return (
    <section id='projects' className='pb-16 lg:py-24'>
       <div className='container'>
      <SectionHeader eyebrow='Real-World-Results' title='Featured Projects' description='See how I transformed concepts into engaging digital experience.'/>
        <div className='flex flex-col mt-10 gap-20 md:mt-20'>
          {
            portfolioProjects.map((project,projectIndex)=>(
              <Card key={project.title} className='px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky' style={{
                top : `calc(64px + ${projectIndex} * 40px)`
              }}>
                  <div className='lg:grid lg:grid-cols-2 lg:gap-16'>
                    <div className='lg:pb-16'>
                    <div className='bg-gradient-to-r gap-2 from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text'>
                       <span>{project.company}</span>
                       <span>&bull;</span>
                       <span>{project.year}</span>
                    </div>
                  
                  <h3 className='font-serif text-2xl mt-2 md:text-4xl md:text-3 md:mt-5'>{project.title}</h3>
                  <hr className='border-t-2 border-white/5 mt-4 md:mt-5' />
                  <ul className='flex flex-col gap-4 mt-4 md:mt-5'>
                    {
                      project.results.map((result)=>(
                        <li className='flex gap-2 text-sm text-white/50 md:text-base '>
                          <CheckIcon className="size-5 md:size-6" />
                         <span>{result.title}</span>
                        </li>
                      ))
                    }
                  </ul>
                  <a href={project.link}>
                    <button className='bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex justify-center items-center gap-2 mt-8 '>
                      <span>View live</span>
                      <ArrowRightUpIcon className="size-4" />
                    </button>
                  </a>
                  </div>
                  <div className='relative'>
                 <Image src={project.image} alt={project.title} className='mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none' />
                 </div>
              </div>
              </Card>
            ))
          }
        </div>
    </div>
    </section>
  )
}

export default Projects