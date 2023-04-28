import React from 'react';
// images
import memorygame from '../assets/projects/memory.png'
import reactLoginOut from '../assets/projects/start_page.png'
import uibstart from '../assets/projects/uibstart.png'
import tipClculator from '../assets/projects/tipCalc.png'
import jobsy from '../assets/projects/jobsy.png'
import portfolio from '../assets/projects/portfolio.png'
import ProjectCard from './ProjectCard'

function Projects() {

  const cards = [
    {
      title: 'My Personal Portfolio',
      stack: 'JavaScript, React, Tailwind, Nextjs' ,
      imgSrc: portfolio,
      vercel: 'https://portfolio2023-eta.vercel.app/',
      github: 'https://github.com/paulinahry/portfolio2023'
    },
    {
      title: 'Jobsy.',
      stack: 'Typescript, React, MongoDB, Nodejs, Tailwind, Figma' ,
      figma: 'https://www.figma.com/file/cmWtNE21nByCtTRUkoR2uS/Wireframing-DT?node-id=112-2815&t=dzIx6HSI6pDJx1oz-0',
      imgSrc: jobsy,
      vercel: 'https://jobsy-jobportal.netlify.app/',
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
      title: 'Login Template - basic React knowladge',
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
    <section id='projects' className='flex items-center py-10 lg:w-[80%] lg:mx-auto '>

      <div className=' w-full p-6'>
        <h3 className='text-m tracking-widest uppercase  border-b text-details border-details'>
          My projects</h3>
        <div className='flex flex-wrap justify-center md:flex mx-auto pt-5 '>
          
            {
            cards.map((card, index) => (
              <ProjectCard key={index} {...card} />
            ))
            }
          
        </div>
      </div>
    </section>
  )
}

export default Projects
