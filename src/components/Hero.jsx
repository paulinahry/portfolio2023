import Image from 'next/image'
import React from 'react'
import { Link as LinkScroll } from 'react-scroll'
//imgages
import PersonalImg from '../assets/images/mypic-bg.png'
import {AiOutlineCheck} from 'react-icons/ai'

function Hero() {

    //  change it to formular ?

    const HireMe = () => {
        const emailTo = "paulinahryszko.de@gmail.com"
        const emailCC = ""
        const emailSub = "Job offer"
        const emailBody = `Dear Paulina,\n\nI am writing to inquire about potential job opportunities with you. I am..., my company is engaged in... \nI would like to discuss.... \n\nBest regards,\n[Your Name]`;
        const mailtoLink = `mailto:${emailTo}?cc=${emailCC}&subject=${emailSub}&body=${emailBody}`;
      
        try {
          const emailWindow = window.open(mailtoLink, "_blank");
      
          if (!emailWindow) {
            throw new Error("Email client window not opened");
          }
        } catch (error) {
          console.error(error);
          alert("Oops, something went wrong. Please try again later or use a different contact option.");
        }
      };
      
  return (
    <section  id='hero' className=' w-full h-screen p-2 text-center'>

        <div className='max-w-[1240px]  w-full h-full mx-auto p-2 flex justify-center items-center flex-col sm:flex-row'>

            {/* INTRO */}
            <section className='w-full sm:w-[50%] px-2 py-4 ' >
                <h2 className='text-4xl s:text-5xl text-left uppercase'>Hi, I'm Paulina.</h2>
                <h1 className='text-3xl sm:text-4xl text-left uppercase p'>A creative <br /> Frontend Developer,<br /> based in Germany.</h1>


                {/* LIST & CTA BUTTONS*/}
                <div className='flex flex-row'>
                    <div >
                        <ul className=' p-4 flex-col '>

                            <div className='flex'>
                                <AiOutlineCheck color='red' size={20}/>
                                <li className='items-center text-left ml-2'> Web Development</li>
                            </div>

                            <div className='flex'>
                                <AiOutlineCheck color='red' size={20}/>
                                <li className='items-center text-left ml-2' > Design </li>
                            </div>


                            <div className='flex'>
                                <AiOutlineCheck color='red' size={20}/>
                                <li className='items-center text-left ml-2' > Passion </li>
                            </div>

                        </ul>
                    </div>

                    {/*  CTA BUTTONS */}
                    <div className='flex flex-col justify-center'>
                        
                        <button 
                        onClick={HireMe}
                        className='w-28 m-2 bg-red-700/100 text-neutral-50'>Hire me </button>

                        <button className='w-28 ml-2 border-white'>
                            <LinkScroll to='about' spy={true} smooth={true} offset={-100} duration={500}> 
                            About
                            </LinkScroll>
                            </button>
                    </div>


                </div>
            </section>
            
            {/* PROFILE IMAGE */}
            <div className='w-48 sm:w-56 lg:w-72 object-cover bg-white overflow-hidden rounded-full px-4' >
                <Image src={PersonalImg} alt='girl' className='object-fit relative ' />
            </div>
            
        </div>
    </section>
       
    )
}

export default Hero