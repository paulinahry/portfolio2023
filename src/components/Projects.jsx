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
      title: 'Tip Calculator ',
      stack: 'Javascript, React, Tailwind' ,
      imgSrc: tipClculator,
      vercel: 'https://tip-calculator-pauhry.vercel.app/',
      github: 'https://github.com/paulinahry/tip_calculator_pauhry'
    },
    {
      title: 'Login Template',
      stack: 'JavaScript, React, Firebase' ,
      imgSrc: reactLoginOut,
      vercel: 'https://react-login-create-account.vercel.app/',
      github: 'https://github.com/paulinahry/react-login_createAccount'
    },
    {
      title: 'Memory Game',
      stack: 'Vanilla JavaScript' ,
      imgSrc: memorygame,
      vercel: 'https://programming-basisc-memory-game.vercel.app/',
      github: 'https://github.com/paulinahry/ProgrammingBasicFinalProjekt'
    },
    {
      title: 'Food Blog',
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
              className='mx-2 border rounded mt-4 w-[100%] max-w-[400px] p-2'
            >
              <img 
              src={card.imgSrc} alt='project image' />
              <div>

                <div>
                  <span className='underline'>Project Name:</span>
                  {' '}
                  <span>{card.title}</span>
                </div>

                <div>
                  <span className='underline '>Tech Stack:</span>
                  {' '}
                  <span>{card.stack}</span>
                </div>


              <div className=' flex justify-around'>

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
