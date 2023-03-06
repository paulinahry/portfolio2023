import React from 'react'
import {AiFillLinkedin, AiOutlineMail, AiFillGithub} from 'react-icons/ai'



function Socials() {
    const mailMe = () => {
        window.location.href = `mailto:${'paulinahryszko.de@gmail.com'}`
      }
  return (
  
    <div className=' flex item-center justify-center sm:w-[80%] cursor-pointer '>
        <a href='https://www.linkedin.com/in/paulina-hryszko/'>
            <AiFillLinkedin className='mr-2'size={30}/>
        </a>

        <a href='https://github.com/paulinahry'>
            <AiFillGithub className='mr-2' size={30} />
        </a>

        <a onClick={mailMe}>
             <AiOutlineMail className='mr-2' size={30} />
        </a>
    </div>


  )
}

export default Socials