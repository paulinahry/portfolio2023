import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// images
import memorygame from '../assets/projects/memory.png'
import reactLoginOut from '../assets/projects/start_page.png'
import uibstart from '../assets/projects/uibstart.png'
import tipClculator from '../assets/projects/tipCalc.png'
// icons
import AiOutlineArrowRight from 'react-icons/ai'

function Projects() {

  const cards = [
    {
      title: 'My Personal Portfolio',
      stack: 'JavaScript, React, Tailwind, Nextjs' ,
      imgSrc: '',
      vercel: '',
      github: ''
    },
    {
      title: 'Jobsy.',
      stack: 'Typescript, React, Tailwind, MongoDB, Nodejs, Figma' ,
      imgSrc: tipClculator,
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
        <h3 className='text-m tracking-widest uppercase py-2 border-b text-details border-details'>My projects</h3>
        <div className='flex flex-wrap justify-center md:flex '>
          {
          cards.map((card) => (
            <div key={card.title} 
              className='mx-2 border rounded mt-4  p-2 
              w-[15rem] max-w-[20rem] '
            >
             
             <div className='h-[15rem] max-h-[20rem]  flex flex-col
             bg-[${card.imgSrc}] object-contain
             '>
                <div className='mb-16'>
                  <div className='mb-3'>
                    <span className='underline block'>Project Name:</span>
                    {' '}
                    <span>{card.title}</span>
                  </div>

                  <div>
                    <span className='underline block'>Tech Stack:</span>
                    {' '}
                    <span>{card.stack}</span>
                  </div>
                </div>


              <div className=' flex  justify-around flex-col items-end '>

                <Link 
                  className='underline'
                  href={card.github}>
                    source code
                </Link>

                <Link
                  className=' underline'
                  href={card.vercel}>
                    web site
                </Link>
              </div>

              </div>
            </div>
          ))
          }
        </div>
      </div>
    </section>
  )
}

export default Projects;
