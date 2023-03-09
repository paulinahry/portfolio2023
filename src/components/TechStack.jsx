import React from 'react';
import { FaReact } from 'react-icons/fa';
import { RiHtml5Line } from 'react-icons/ri';
import { DiCss3, DiJavascript, DiNodejsSmall, DiSass } from 'react-icons/di';
import { SiTailwindcss, SiFigma, SiGithub } from 'react-icons/si';
import { BsHeart } from 'react-icons/bs';
import AnimatedCircularProgressbar from './ProgressBar';


function TechStack() {


  // icons styling
  const iconsStyle =({
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '8px'

  })
  return (


    <section id='tech-stack' className='p-6 lg:w-[80%] lg:mx-auto mb-20'>

      <h2 className='text-m tracking-widest  uppercase py-2 border-b text-details border-details'>Tech Stack</h2>
      <div className='flex flex-wrap justify-center  mx-auto mt-7 lg:w-[80%]'>

        <div className='m-4'>
          <div style={iconsStyle}>
            <RiHtml5Line size={45} /> 
            <span>HTML5</span> 
          </div>
            <AnimatedCircularProgressbar percentage={90} />
        </div>

        <div className='m-4'>
          <div style={iconsStyle}>
            <DiCss3 size={45} /> 
            <span>CSS3</span> 
          </div>
            <AnimatedCircularProgressbar percentage={90} />
        </div>

        <div className='m-4'>
          <div style={iconsStyle}>
            <SiTailwindcss size={45} /> Tailwind
          </div>
            <AnimatedCircularProgressbar percentage={90} />
        </div>

        <div className='m-4'>
          <div style={iconsStyle}>
            <DiSass size={45} /> SASS
          </div>
            <AnimatedCircularProgressbar percentage={85} />
        </div>

        <div className='m-4'>
          <div style={iconsStyle}>
            <DiJavascript size={45} /> JavaScript
          </div>
            <AnimatedCircularProgressbar percentage={65} />
        </div>

        <div className='m-4'>
          <div style={iconsStyle}>
            <FaReact size={45} /> React
          </div>
            <AnimatedCircularProgressbar percentage={65} />
        </div>

        <div className='m-4'>
          <div style={iconsStyle}>
            <DiNodejsSmall size={45} /> Nodejs
          </div>
            <AnimatedCircularProgressbar percentage={50} />
        </div>

        <div className='m-4'>
          <div style={iconsStyle}>
            <SiFigma size={45} /> Figma
          </div>
            <AnimatedCircularProgressbar percentage={70} />
        </div>

        <div className='m-4'>
          <div style={iconsStyle}>
            <SiGithub size={45} /> GitHub
          </div>
            <AnimatedCircularProgressbar percentage={80} />
        </div>

        <div className='m-4'>
          <div style={iconsStyle}>
            <BsHeart size={45} /> Heart
          </div>
            <AnimatedCircularProgressbar percentage={100} />
        </div>

      </div>
    </section>
  )
}

export default TechStack
