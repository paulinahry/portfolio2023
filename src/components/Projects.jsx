import React from 'react'
import ProjectCard from './ProjectCard'
import cards from './cardData'
import Link from 'next/link'


function Projects() {
  return (
    <section id='projects' className=' w-full  p-3 flex items-center py-16'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <h3 className='text-m tracking-widest uppercase py-2 border-b text-red-700/100 border-red-700/100'>My  projects</h3>


            {/* <div >
                {
                   cards. map ( (card) => {
                    return (
                        <div>
                            <img src={card.img}  alt='project image'/>
                            <div >
                                <span>{card.title}</span>
                                <span>{card.stack}</span>
                                <Link href={card.github}>source code </Link>
                                <Link href={card.vercel}>deployed </Link>
                            </div>
                        </div>
                    )
                   })

                        
                }
            </div> */}


            {/* CARDS
            <ProjectCard 
            className='w-20'
            title='Portfolio'
            stack='ReactJS, NextJS' 
            img={memorygame} 
            deployed=''
            url='' />

            <ProjectCard 
            title='React Login_Out'
            stack='ReactJS, Firebase' 
            img={reactLoginOut} 
            deployed='https://react-login-create-account.vercel.app'
            url='https://github.com/paulinahry/react-login_createAccount' />

            <ProjectCard 
            titile='Tip Calculator'
            stack='ReactJS, Firebase' 
            deployed=''
            img={reactLoginOut} 
            url='' />

            <ProjectCard 
            titile='Memory Game' 
            stack='Vanilla JavaScript' 
            deployed='https://programming-basisc-memory-game.vercel.app/'
            img={memorygame} 
            url='https://github.com/paulinahry/ProgrammingBasicFinalProjekt' />

            <ProjectCard 
            titile='HTML & CSS Basics' 
            stack='ReactJS, Firebase' 
            deployed=''
            img={uibstart} 
            url='https://github.com/paulinahry/my-final-projekt-UIB1' />


            <ProjectCard 
            titile='Marketing Campaign + HTML/CSS Basics'
            stack='ReactJS, Firebase' 
            deployed='https://react-login-create-account.vercel.app'
            img={reactLoginOut} 
            url='https://github.com/paulinahry/tip_calculator_pauhry' /> */}

        </div>
    </section>
)
}

export default Projects
