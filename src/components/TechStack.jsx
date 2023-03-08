import React, { useState } from 'react';
import { FaReact } from 'react-icons/fa';
import { RiHtml5Line } from 'react-icons/ri';
import { DiCss3, DiJavascript, DiNodejsSmall, DiSass } from 'react-icons/di';
import { SiTailwindcss, SiFigma, SiGithub } from 'react-icons/si';
import { BsFillSuitHeartFill, BsHeart } from 'react-icons/bs';
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import VisibilitySensor from 'react-visibility-sensor';



function TechStack() {

  function AnimatedCircularProgressbar({ percentage }) {
    const [animationStart, setAnimationStart] = useState(false);
  
    const handleVisibilityChange = (isVisible) => {
      isVisible && setAnimationStart(true)
      
    }

  
    const commonStyles = buildStyles({
      pathColor: '#4ff7b2',
      textColor: '#4ff7b2',
      trailColor: '#0B4147',
    })
  
    return (
      <VisibilitySensor onChange={handleVisibilityChange} partialVisibility={true}>
        <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[150px] md:h-[150px]">
          <CircularProgressbar
            value={animationStart ? percentage : 0}
            text={`${animationStart ? percentage : 0}%`}
            styles={commonStyles}
          />
        </div>
    </VisibilitySensor>
    )
  }


  // icons styling
  const iconsStyle =({
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '8px'

  })

  return (


    <section id='tech-stack' className='p-6'>

      <h2 className='text-m tracking-widest  uppercase py-2 border-b text-details border-details'>Tech Stack</h2>
      <div className='flex flex-wrap justify-center mt-7'>

        <div className='m-4'>
          <div style={iconsStyle}>
            <RiHtml5Line size={55} /> 
            <span>HTML5</span> 
          </div>
            <AnimatedCircularProgressbar percentage={90} />
        </div>

        <div className='m-4'>
          <div style={iconsStyle}>
            <DiCss3 size={55} /> 
            <span>CSS3</span> 
          </div>
            <AnimatedCircularProgressbar percentage={90} />
        </div>

        <div className='m-4'>
          <div style={iconsStyle}>
            <SiTailwindcss size={55} /> Tailwind
          </div>
            <AnimatedCircularProgressbar percentage={90} />
        </div>

        <div className='m-4'>
          <div style={iconsStyle}>
            <DiSass size={55} /> SASS
          </div>
            <AnimatedCircularProgressbar percentage={85} />
        </div>

        <div className='m-4'>
          <div style={iconsStyle}>
            <DiJavascript size={55} /> JavaScript
          </div>
            <AnimatedCircularProgressbar percentage={65} />
        </div>

        <div className='m-4'>
          <div style={iconsStyle}>
            <FaReact size={55} /> React
          </div>
            <AnimatedCircularProgressbar percentage={65} />
        </div>

        <div className='m-4'>
          <div style={iconsStyle}>
            <DiNodejsSmall size={55} /> Nodejs
          </div>
            <AnimatedCircularProgressbar percentage={50} />
        </div>

        <div className='m-4'>
          <div style={iconsStyle}>
            <SiFigma size={55} /> Figma
          </div>
            <AnimatedCircularProgressbar percentage={80} />
        </div>

        <div className='m-4'>
          <div style={iconsStyle}>
            <SiGithub size={55} /> GitHub
          </div>
            <AnimatedCircularProgressbar percentage={80} />
        </div>

        <div className='m-4'>
          <div style={iconsStyle}>
            <BsHeart size={55} /> Heart
          </div>
            <AnimatedCircularProgressbar percentage={100} />
        </div>

      </div>
    </section>
  )
}

export default TechStack
