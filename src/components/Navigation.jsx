import { Link as LinkScroll, animateScroll as scroll } from 'react-scroll'
import React, { useState, useEffect } from 'react'
// COMPONENTS
import Socials from './Socials'
//ICONS
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
// img
import PersonalProfileImg from '../assets/images/mypic-bg.png'
import Image from 'next/image'
import Link from 'next/link'
import ResumeBtn from './ResumeBtn'
// import Resume from '..assets/cv/Frontend_Paulina_Hryszko_2023.pdf'




function Navigation() {

  // HANDLE SIDE MOBILE MENU 
  const [navigation, setNavigation] = useState(false)   
  const [activePage, setActivePage] = useState('home') 
  const [scrolled, setScrolled] = useState(false)

  useEffect( () => {
    const onScroll = () => {
      if(window.scrollY > 50) {
        setScrolled(true)
      }else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', onScroll)
    return ()=> window.removeEventListener('scroll', onScroll)
  }, [])

  function handleNavigation() {
    setNavigation(!navigation)
  }

  function onClickActivePage (value) {
    setActivePage(value)
  }

  // HANDLE PDF
  const [pageNumber, setPageNumber] = useState(1);

  function goToPrevPage() {
    setPageNumber(pageNumber - 1);
  }

  function goToNextPage() {
    setPageNumber(pageNumber + 1);
  }


  // const showCV = () => {
  //   const fileURL = "/assets/cv/Frontend_Paulina_Hryszko_2023.pdf"
  //   const pdfWindow = window.open()
  //   pdfWindow.location.href = fileURL
  // }
  

  return (

    // ----------------NAVIGATION DESKTOP  ------------------- //

    <nav id='navigation' className={scrolled ?  'scrolled p-0  bg-[#121212] fixed flex justify-between items-center w-full h-20 md:h-[100] z-[100] shadow-xl ' : 'bg-[#121212]  fixed flex justify-between items-center w-full h-20 md:h-[100] z-[100] shadow-xl p-2'}>
      
      <div className=' w-full px-2 2xl:px-16 '>

        <LinkScroll to='hero' spy={true}  offset={50} duration={500} className='cursor-pointer'>
           <h2 className='uppercase'>Paulina Hryszko</h2> 
        </LinkScroll>
        
      </div>

        <ul className='hidden md:flex md:justify-end item-cente'>
          <li className='uppercase ml-10 text-sm hover:border-b '>
             <LinkScroll 
              onClick={ () => onClickActivePage('home')}
              className={activePage === 'home' ? ' text-basicRed' : 'text-white'}
              to='hero' spy={true}  offset={50} duration={500}>Home
             </LinkScroll>
          </li>

     
          <li className='uppercase ml-10  text-sm hover:border-b'>
            <LinkScroll
              onClick={ () => onClickActivePage('about')}
                className={activePage === 'about' ? ' text-basicRed' : 'text-white'}
                to='about' spy={true} offset={-100} duration={500}> 
              About
            </LinkScroll>
          </li>

          <li className='uppercase ml-10 text-sm hover:border-b w-20'>
            <LinkScroll 
              onClick={ () => onClickActivePage('tech-stack')}
              className={activePage === 'tech-stack' ? ' text-basicRed' : 'text-white'}
              to='techstack' spy={true}  offset={-100} duration={500}> 
                Tech-Stack
            </LinkScroll>
          </li>

          <li className='uppercase ml-10 text-sm hover:border-b'>
            <LinkScroll 
              onClick={ () => onClickActivePage('projects')}
              className={activePage === 'projects' ? ' text-basicRed' : 'text-white'}
              to='projects' spy={true} offset={-100} duration={500}> 
                Projects
            </LinkScroll>
          </li>

          <li className='uppercase ml-10 text-sm hover:border-b'>
            <LinkScroll 
              onClick={ () => onClickActivePage('contact')}
              className={activePage === 'contact' ? ' text-basicRed underline decoration-basicRed ' : 'text-white'}
              to='/' spy={true} offset={-150} duration={500}> 
                Contact
            </LinkScroll>
          </li>

        </ul>
        <div className='pr-4 pl-4'>
            <ResumeBtn />
        </div>
        {/* ----------------NAVIGATION DESKTOPN FINISH ------------------- */}




        {/* ----------------NAVIGATION MOBILE ------------------- */}

        {/* HANDLE BURGER MENU */}
        <div className=' md:hidden flex items-center cursor-pointer'
              onClick={handleNavigation}>
          <AiOutlineMenu size={30} />
        </div>


        {/* HANDLE SIDE MOBILE MENU -> OPEN & CLOSE */}
        <section className={navigation ? 'md:hidden fixed left-0 top-0 w-full h-scren ' : ''}>
          

          {/* handle Side Bar Navigation  */}
          <div className={navigation ? 
            'fixed md:hidden bg-[#121212] left-0 top-0 w-[75%] sm:w-[60%] ms:w-[45%] h-screen  ease-in duration-300 ' 
            : 'fixed left-[-150%] bg-[#121212]top-0 ease-in duration-300 ' }>


            {/* SIDE BAR NAVIGATION HEADER  -> FOTO AND SIGN  */}
            <div className='flex items-center justify-between p-5 '>
                <div className=' image  relative w-20 h-20 overflow-hidden bg-gradient-to-b from-red-500/100  to-white rounded-full '>
                  <Image src={PersonalProfileImg}  layout='fill' className ='object-cover ' alt='Paulina Hryszko' />
                </div>

                <div>
                  <AiOutlineClose className='cursor-pointer'
                    onClick={handleNavigation}/>
                </div>
            </div>




            {/* MENU LIST - SIDE MOBILE MENU*/}
            <div className='border-b m-6'>
              <p>From Waitress to Web Developer</p>
            </div>
            <div>
              <ul className='py-4 uppercase flex-col '>

                <LinkScroll to='hero' 
                onClick={handleNavigation}
                spy={true} smooth={true} offset={50} duration={500}>
                  <li className='px-6 my-4 text-sm' >Home</li>
                </LinkScroll>

                <LinkScroll to='about'  
                  onClick={handleNavigation} 
                  spy={true} smooth={true} offset={50} duration={500}>
                    <li className='px-6 my-4 text-sm' >About</li>
                </LinkScroll>

                <LinkScroll to='techstack' 
                  onClick={handleNavigation}
                  spy={true} smooth={true} offset={50} duration={500}>
                   <li className='px-6 my-4 text-sm' >tech-stack</li>
                </LinkScroll>

                <LinkScroll to='projects' 
                  onClick={handleNavigation}
                  spy={true} smooth={true} offset={50} duration={500}>
                    <li className='px-6 my-4 text-sm' >Projects</li>
                </LinkScroll>

                <LinkScroll to='contact' 
                  onClick={handleNavigation}
                  spy={true} smooth={true} offset={50} duration={500}>
                    <li className='px-6 my-4 text-sm'>Contact</li>
                </LinkScroll>
              </ul>


              {/* SOCIALS */}
              <Socials />
             
            </div>
          </div>
        {/* ----------------NAVIGATION MOBILE FINISH------------------- */}

        </section>


    </nav>

  )
}

export default Navigation