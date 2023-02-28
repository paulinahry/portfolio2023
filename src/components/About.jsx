import React from 'react'
import Image from 'next/image'
//imgages
import Waitress from '../assets/images/waitress.png'
import WebDeveloper from '../assets/images/laptopgirl.png'


function About() {

  return (
    <>
    
    <section id='about' className=' h-full w-full flex flex-col md:flex-row items-center justify-center'>

        <div className=' bg-red-200 w-full md:w-[45%] md:h-full text-center'>
        
            {/*IMG H2 IMG  */}
            <div  className='max-w-[1240px] w-full p-2 flex justify-evenly items-center text-center'>

                <div className='w-[25%] md:w-[50%] ' >
                    <Image src={Waitress} className='w-full scale-[55%]' alt='waitress'  />
                </div>

                <div className='w-[30%] '>
                    <h2 className=' tracking-wider py-2 md:text-xl text-gray-700'>from waitress <br /> to <br /> web developer</h2>
                </div>
               
                <div className='w-[30%] md:w-[50%]'>
                    <Image src={WebDeveloper} className='w-full' alt="working girl"   />
                </div>
            </div>         
        </div>


      <div className=' p-6 md:w-[45%] md:h-full xl:text-xl'>
        <h3 className='text-m tracking-widest  uppercase py-2 border-b text-red-700/100 border-red-700/100'>From Wait to Web Developer: My Journey to Finding My Passion</h3>

          <p className='py-2 '>
          Ladies and Gentlemen, 
          <br />
          hold onto your keyboards because I'm about to take the web development world by storm! 
        

          <p className='py-2'>You see, I've been in love with DIY since I was a young girl and now, I've found the ultimate form of creativity: web development.</p>
          

          Before this love affair, I had a adventurous journey as a waitress for 14 whole years. But let's just say, I was searching for my true calling, and finally, I found it! In Januar 2022 I enrolled in a {''}
          <span className='font-bold'>MERN Full Stack Development Course </span>  
          at Digital Career Institute in Germany and boy, did I hit the jackpot. </p>

          <p className='py-2 '>I now consider programming as the 21st-century DIY on steroids. I'm not just rearranging my clothes, but I'm rearranging the digital world! With my talent for strategy and strong teamwork skills, I'm like a superhero, ready to save the world from boring and complicated websites.
          </p>

          <p className='py-2'>So, if you're in need of a web developer who's got humor, passion, and a never-ending thirst for learning, then you've come to the right place! I'm confident that together, we'll create websites that are not only beautiful but also provide an amazing user experience. Get ready, world, here I come!</p>
 
          <p className=' xl:pb-10'> I graduated in February 2023, but don't worry, I'm still on my learning journey and always ready to expand my skills. </p>


      </div>

    </section>


    </>
      
  )
}

export default About