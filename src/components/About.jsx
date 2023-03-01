import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import anime from 'animejs';

//imgages
import Waitress from '../assets/images/waitress.png'
import WebDeveloper from '../assets/images/laptopgirl.png'
import aboutgirl from '../assets/images/aboutgirl.png'
import CosmoDog from './CosmoDog';


function About() {

  

  return (
    <>
    
    <section id='about' className=' h-full w-full flex flex-col md:flex-row items-center justify-center'>

        <div className='  w-full md:w-[45%] md:h-full text-center'>
        
            {/*COSMO LEVITATING  */}
              <CosmoDog />
          
        </div>

    {/* ABOUT ME TEXT */}
      <div className=' p-6 md:w-[45%] md:h-full xl:text-xl'>

        <h3 className='text-m tracking-widest  uppercase py-2 border-b text-details border-details'>From Waitress to Web Developer</h3>

          <p className='py-2'>
            After 14 adventurous years as a waitress, I was searching for my true calling. In January 2022, I enrolled in a <span className=' text-details uppercase'>MERN Full Stack Development Course</span>  in Germany, and it was a game-changer to me. 
            <br />
            Using my strategy talent, focus on user needs and strong teamwork skills, I'm now a web developer ready to create beautiful and user-friendly websites. 
            <br />
            Graduating in February 2023, I'm always ready to expanding my skills and bringing humor, passion, and a thirst for learning to every project.
            <br />

            <span className='my-4'>Let's work together to make the web a more exciting and accessible place! </span> 
           </p>

          


      </div>

    </section>


    </>
      
  )
}

export default About