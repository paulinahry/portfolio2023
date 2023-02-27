import React from 'react'
// icons
import {FaReact} from 'react-icons/fa'
import {RiHtml5Line} from 'react-icons/ri'
import {TbBrandNextjs} from 'react-icons/tb'
import {DiNodejsSmall, DiCss3, DiSass} from 'react-icons/di'
import {SiMongodb, SiJavascript, SiTailwindcss, SiFigma, SiBootstrap, SiGithub} from 'react-icons/si'



function TechStack() {
  return (
    <section id='techstack'>
      <div className=' flex flex-wrap justify-center '>

        <div className='m-4'><RiHtml5Line size={55} />HTML5</div>
        <div className='m-4'><DiCss3 size={55} />CSS3</div>
        <div className='m-4'><DiSass size={55} />SASS</div>
        <div className='m-4'><SiJavascript size={55} />JavaScript</div>
        <div className='m-4'><FaReact size={55} />React</div>
        <div className='m-4'><DiNodejsSmall size={55} />NodeJS</div>
        <div className='m-4'><SiMongodb size={55} />MongoDB</div>
        <div className='m-4'><SiFigma size={55} />Figma</div>
        <div className='m-4'><SiTailwindcss size={55} />Tailwind</div>
        <div className='m-4'><SiBootstrap size={55} />Bootstrap</div>
        <div className='m-4'><SiGithub size={55} />Github</div>
      </div>

      <div className=' py-12'>
        <h2 className='text-center'>I'm not a pro, yet.</h2>
      </div>
    </section>
  )
}

export default TechStack