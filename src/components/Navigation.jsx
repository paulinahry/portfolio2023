import { Link as LinkScroll, scroller } from 'react-scroll'
import React, { useState, useEffect } from 'react'
// COMPONENTS
import Socials from './Socials'
import ResumeBtn from './ResumeBtn'
//ICONS
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
// img
import PersonalProfileImg from '../assets/images/mypic-bg.png'
import Image from 'next/image'


function Navigation() {
  const [navigation, setNavigation] = useState(false);
  const [activePage, setActivePage] = useState("hero");

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll)
    // Remove scroll event listener on cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll)
    };
  }, [])

  // Scroll to section and update active page
  const handleScroll = () => {
    const sections = ['hero', 'about', 'projects', 'tech-stack', 'contactMe']
    const sectionOffsets = sections.map(sectionID => {
      const el = document.getElementById(sectionID)
      return el.offsetTop - 100; // Adjust for fixed navigation bar height
    });
    const scrollPosition = window.scrollY
    const activeIndex = sectionOffsets.findIndex(offset => scrollPosition < offset)
    const newActivePage = activeIndex === -1 ? sections[sections.length - 1] : sections[activeIndex]
    setActivePage(newActivePage)
  }

  // Scroll to section and update active page
  const handleSectionClick = (sectionID) => {
    let offset = 0;
    switch (sectionID) {
      case 'hero':
        offset = -550
        break;
      case 'about':
        offset = -100
        break;
      case 'projects':
        offset = -50
        break;
      case 'tech-stack':
        offset = -150
        break;
      default:
        offset = 0
    }
  
    scroller.scrollTo(sectionID, {
      duration: 500,
      smooth: true,
      offset,
      spy: true,
      onAfter: () => {
        setActivePage(sectionID)
      },
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
        onClick={() => handleSectionClick('hero')}>
           <h2 className='uppercase'>Paulina Hryszko</h2> 
        </a>
      </div>

        <ul className='hidden md:flex md:justify-end items-center '>
          <li className={`
          ${activePage === 'hero' ? 'text-details' : 'text-white'}
          uppercase ml-10 text-sm hover:border-b `}>
             <LinkScroll 
              onClick={() => handleSectionClick('hero')}>
              Home
             </LinkScroll>
          </li>

     
          <li className={`
          ${activePage === 'about' ? 'text-details' : 'text-white'}
          uppercase ml-10 text-sm hover:border-b `}>
            <LinkScroll 
             onClick={() => handleSectionClick('about')}>
              About
            </LinkScroll>
          </li>

          <li className={`
          ${activePage === 'projects' ? 'text-details' : 'text-white'}
          uppercase ml-10 text-sm hover:border-b`}>
             <LinkScroll 
             onClick={() => handleSectionClick('projects')}>
                Projects
            </LinkScroll>
          </li>

          <li className={`
          ${activePage === 'tech-stack' ? 'text-details' : 'text-white'}
          uppercase ml-10 text-sm hover:border-b w-20`}>
            <LinkScroll 
              onClick={() => handleSectionClick('tech-stack')}>
              Tech-stack
            </LinkScroll>
          </li>

          <li className={`
          ${activePage === 'contactMe' ? 'text-details' : 'text-white'}
          uppercase ml-10 text-sm hover:border-b`}>
              <LinkScroll 
               onClick={() => handleSectionClick('contactMe')}>
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
                handleSectionClick('hero')
              }}>
                  <li className='px-6 my-4 text-sm' >Home</li>
                </LinkScroll>

                <LinkScroll onClick={()=> {
                  handleNavigation()
                  handleSectionClick('about')
                  }} >
                  
                    <li className='px-6 my-4 text-sm' >About</li>
                </LinkScroll>

                <LinkScroll onClick={()=> {
                  handleNavigation()
                  handleSectionClick('tech-stack')
                  }}>
                   <li className=' px-6 my-4 text-sm' >tech-stack</li>
                </LinkScroll>

                <LinkScroll onClick={()=> {
                  handleNavigation()
                  handleSectionClick('projects')
                  }}>
                    <li className='px-6 my-4 text-sm' >Projects</li>
                </LinkScroll>

                <LinkScroll onClick={()=>{
                  handleNavigation()
                  handleSectionClick('contactMe')
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
