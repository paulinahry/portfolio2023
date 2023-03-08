import { Link as LinkScroll, scroller} from 'react-scroll'
import React, { useState, useEffect } from 'react'
// COMPONENTS
import Socials from './Socials'
import ResumeBtn from './ResumeBtn'
//ICONS
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
// img
import PersonalProfileImg from '../assets/images/mypic-bg.png'
import Image from 'next/image'


function Navigation() {

  const [navigation, setNavigation] = useState(false)   
  const [activePage, setActivePage] = useState('hero') 


  
// change activePage when scrolling in desktop 
  const handleScrollView = () => {

    const currentPosition = window.scrollY

    const homeSection = document.getElementById('hero')
    const aboutSection = document.getElementById('about')
    const projectsSection = document.getElementById('projects')
    const techStackSection = document.getElementById('tech-stack')
    const contactMeSection = document.getElementById('contactMe')

    if (
      currentPosition <= homeSection.offsetTop
    ) {
      setActivePage('hero')
      
    } else if (
      currentPosition >= aboutSection.offsetTop &&
      currentPosition < projectsSection.offsetTop
    ) {
      setActivePage('about')

    } else if (
      currentPosition >= projectsSection.offsetTop &&
      currentPosition < techStackSection.offsetTop
    ) {
      setActivePage('projects')

    } else if (
      currentPosition >= techStackSection.offsetTop &&
      currentPosition < contactMeSection.offsetTop
    ) {
      setActivePage('tech-stack')

    } else if (currentPosition >= contactMeSection.offsetTop) {
      setActivePage('contactMe')
    }
    
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScrollView)
    return () => window.removeEventListener('scroll', handleScrollView)
  }, [])


  // scrolling effect
  const handleScroll = (sectionID) => {
    scroller.scrollTo(sectionID, {
      duration: 500,
      smooth: true,
      offset: -400,
      spy: true,
      
    })
  }


  // handle mobile navigation
  function handleNavigation() {
    setNavigation(!navigation)
  }


  return (

    // ----------------NAVIGATION DESKTOP  ------------------- //

    <nav id='navigation' className='bg-black  fixed flex justify-between items-center w-full h-20 md:h-[100] z-[100] shadow-xl'>
      
      <div className=' w-full px-2 2xl:px-16 '>

        <a   
        className='cursor-pointer'            
        onClick={()=>handleScroll('hero')} >
           <h2 className='uppercase'>Paulina Hryszko</h2> 
        </a>
      </div>

        <ul className='hidden md:flex md:justify-end items-center '>
          <li className={`
          ${activePage === 'hero' ? 'text-details' : 'text-white'}
          uppercase ml-10 text-sm hover:border-b `}>
             <LinkScroll 
               onClick={() => {
                handleScroll('hero')
                setActivePage('hero')
              }}>
              Home
             </LinkScroll>
          </li>

     
          <li className={`
          ${activePage === 'about' ? 'text-details' : 'text-white'}
          uppercase ml-10 text-sm hover:border-b `}>
            <LinkScroll 
             onClick={() => {
              handleScroll('about');
              setActivePage('about');
            }}>
              About
            </LinkScroll>
          </li>

          <li className={`
          ${activePage === 'projects' ? 'text-details' : 'text-white'}
          uppercase ml-10 text-sm hover:border-b`}>
             <LinkScroll 
              onClick={() => {
                handleScroll('projects');
                setActivePage('projects');
              }}>
                Projects
            </LinkScroll>
          </li>

          <li className={`
          ${activePage === 'tech-stack' ? 'text-details' : 'text-white'}
          uppercase ml-10 text-sm hover:border-b w-20`}>
            <LinkScroll 
              onClick={() => {
                handleScroll('tech-stack');
                setActivePage('tech-stack');
              }}>
              Tech-stack
            </LinkScroll>
          </li>

          <li className={`
          ${activePage === 'contactMe' ? 'text-details' : 'text-white'}
          uppercase ml-10 text-sm hover:border-b`}>
              <LinkScroll 
                onClick={() => {
                  handleScroll('contactMe');
                  setActivePage('contactMe');
                }}>
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
          
          <div 
                  
          className={navigation ? 
            'fixed md:hidden bg-black left-0 top-0 w-[100%] sm:w-[60%] h-screen  ease-in duration-300 ' 
            : 'fixed left-[-150%]  bg-black top-0 ease-in duration-300 ' }>


            {/* SIDE BAR NAVIGATION HEADER  -> FOTO AND SIGN  */}
            <div className='flex items-center justify-between p-5 '>
                <div className=' image  relative w-20 h-20 overflow-hidden bg-gradient-to-b from-details  to-white rounded-full '>
                  <Image src={PersonalProfileImg}  className ='object-cover ' alt='Paulina Hryszko' />
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
            <div
                    onClick={handleNavigation}
                    >
              <ul className='py-4 uppercase flex-col '>

              <LinkScroll onClick={()=> {
                handleNavigation()
                handleScroll('hero')
              }}>
                  <li className='px-6 my-4 text-sm' >Home</li>
                </LinkScroll>

                <LinkScroll onClick={()=> {
                  handleNavigation()
                  handleScroll('about')
                  }} >
                  
                    <li className='px-6 my-4 text-sm' >About</li>
                </LinkScroll>

                <LinkScroll onClick={()=> {
                  handleNavigation()
                  handleScroll('tech-stack')
                  }}>
                   <li className=' px-6 my-4 text-sm' >tech-stack</li>
                </LinkScroll>

                <LinkScroll onClick={()=> {
                  handleNavigation()
                  handleScroll('projects')
                  }}>
                    <li className='px-6 my-4 text-sm' >Projects</li>
                </LinkScroll>

                <LinkScroll onClick={()=>{
                  handleNavigation()
                  handleScroll('contactMe')
                  }}>
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