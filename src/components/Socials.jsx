import React from 'react'
import {AiFillLinkedin, AiOutlineMail, AiFillGithub} from 'react-icons/ai'



function Socials(props) {
    
    const mailMe = () => {
        const emailTo = "paulinahryszko.de@gmail.com"
        const emailSub = "Contact through Portfolio"
        const emailBody = `Hi Paulina,\n\n\nI would like to discuss.... \n\nBest regards,\n[Your Name]`
        const mailtoLink = `mailto:${emailTo}&subject=${emailSub}&body=${emailBody}`
      
        try {
          const emailWindow = window.open(mailtoLink, "_blank")
      
          if (!emailWindow) {
            throw new Error('Email client window not opened')
          }
        } catch (error) {
          console.error(error);
          alert('Oops, something went wrong. Please try again later or use a form below.')
        }
      }

      const iconSize = props.size || 30
      const direction = props.direction || 'flex-row'

  return (
  
    <div className={`flex justify-center  sm:pt-6 ${direction}
     cursor-pointer   `}>
        <a href='https://www.linkedin.com/in/paulina-hryszko/'>
            <AiFillLinkedin className='mr-2'size={iconSize}/>
        </a>

        <a href='https://github.com/paulinahry'>
            <AiFillGithub className='mr-2' size={iconSize} />
        </a>

        <a onClick={mailMe}>
             <AiOutlineMail className='mr-2' size={iconSize} />
        </a>
    </div>


  )
}

export default Socials