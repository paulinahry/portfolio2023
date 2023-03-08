import React, { useState, useEffect } from 'react'
import { ContactForm } from './ContactForm'
import Socials from './Socials'

function ContactMe() {
  const [iconsSize, setIconsSize] = useState(90)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width <= 640) {
        setIconsSize(50)
      } else {
        setIconsSize(90)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (

    <section id='contactMe'>
      <div className=' flex justify-center'>

        <p className='uppercase text-details text-[4rem] sm:text-[6rem] font-bold tracking-wide '>
            contact 
            {' '}
            <span className='block uppercase text-white'>me</span>
        </p>

        <div className='pt-6 ml-4 md:pl-20 md:pt-3'> 
            <Socials size={iconsSize} direction='flex-col' />
        </div>
        
      </div>

        <ContactForm />

    </section>
  )
}

export default ContactMe