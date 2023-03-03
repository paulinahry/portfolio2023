import React from 'react'
//imgages
import CosmoDog from './CosmoDog'


function About() {

  return (
  
    <section id='about' className=' flex flex-col md:flex-row items-center justify-center'>

        {/* ABOUT ME TEXT */}
      <div className=' p-6 md:w-[45%] md:h-full xl:text-xl'>

        <h3 className='text-m tracking-widest  uppercase py-2 border-b text-details border-details'>From Waitress to Web Developer</h3>

          <div className='py-2'>
            <p>
                After 14 adventurous years as a waitress, I searched for my true calling. In January 2022, I signed up for a one year <span className=' text-details uppercase'>MERN Full Stack Development Course</span> at 
              {' '}
              <a className='underline' href="https://digitalcareerinstitute.org/courses/web-development/" target="_blank">Digital Career Institute</a>
                {' '}
                in Germany, and it was a game-changer to me. 
            </p> 

            <p>
              Using my strategy talent, focus on user needs and strong teamwork skills, I'm now a web developer ready to create beautiful, user-friendly websites.
            </p>

            <p>
             Graduating in February 2023, I'm always ready to expand my skills and bring humor, passion, and a thirst for learning to every project.
            </p>

            <p className='mt-4'>Let's work together to make the web a more exciting and accessible place! </p> 
           </div>

      </div>

      <div className='hidden md:block w-full md:w-[45%] md:h-full text-center'>
          {/*COSMO LEVITATING  */}
            <CosmoDog/>
      </div>

    </section>
  )
}

export default About