import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// images
import memorygame from '../assets/projects/memory.png'
import reactLoginOut from '../assets/projects/start_page.png'
import uibstart from '../assets/projects/uibstart.png'
import tipClculator from '../assets/projects/tipCalc.png'
import jobsy from '../assets/projects/jobsy.png'
import portfolio from '../assets/projects/portfolio.png'
// icons
import AiOutlineArrowRight from 'react-icons/ai'
import ProjectCard from './ProjectCard';

function Projects() {

  const cards = [
    {
      title: 'My Personal Portfolio',
      stack: 'JavaScript, React, Tailwind, Nextjs' ,
      imgSrc: portfolio,
      vercel: '',
      github: ''
    },
    {
      title: 'Jobsy.',
      stack: 'Typescript, React, MongoDB, Nodejs, Tailwind, Figma' ,
      imgSrc: jobsy,
      vercel: 'https://jobsy-jobportal.netlify.app/adslist',
      github: 'https://github.com/paulinahry/jobportal'
    },
    {
      title: 'Tip Calculator ',
      stack: 'Javascript, React, Tailwind' ,
      imgSrc: tipClculator,
      vercel: 'https://tip-calculator-pauhry.vercel.app/',
      github: 'https://github.com/paulinahry/tip_calculator_pauhry'
    },
    {
      title: 'Login Template',
      stack: 'JavaScript, React, Firebase, SASS' ,
      imgSrc: reactLoginOut,
      vercel: 'https://react-login-create-account.vercel.app/',
      github: 'https://github.com/paulinahry/react-login_createAccount'
    },
    {
      title: 'Memory Game - basic JS knowladge' ,
      stack: 'Vanilla JavaScript, CSS' ,
      imgSrc: memorygame,
      vercel: 'https://programming-basisc-memory-game.vercel.app/',
      github: 'https://github.com/paulinahry/ProgrammingBasicFinalProjekt'
    },
    {
      title: 'Food Blog - basic HTML and CSS knowladge',
      stack: 'CSS(SASS), HTML5' ,
      imgSrc: uibstart,
      vercel: 'not deployed',
      github: 'https://github.com/paulinahry/ProgrammingBasicFinalProjekt'
    },

  ]
  

  return (
    <section id='projects' className='w-full p-3 flex items-center py-16'>

      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <h3 className='text-m tracking-widest uppercase py-2 border-b text-details border-details'>
          My projects</h3>
        <div className='flex flex-wrap justify-center md:flex '>
          
            {
            cards.map((card, index) => (
              <ProjectCard key={index} {...card} />
            ))
            }
          
        </div>
      </div>
      <img src="" alt="" />
    </section>
  )
}

export default Projects
