import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import {SiSpreadshirt} from 'react-icons/si'


export const ContactForm = () => {
  const form = useRef()
  const [isMessaageSent, setIsMessaageSent] = useState(false)


  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm(
      'service_75hqleq',
      'template_1lcb1gr',
      form.current,
      'mw0dY8GAvkKHN5IjE'
    )
      .then((result) => {
          console.log('msg sent: ',result.text)
          setIsMessaageSent(true)
          e.target.reset()
      }, (error) => {
          console.log('error',error.text)
      })
  }

  return (
    <section className='flex justify-center'>

      <form ref={form} 
      onSubmit={sendEmail}
      className='m-4 flex flex-col w-[80%]
      md:w-[55%] justify-center'
      >

        <label>Name</label>
        <input 
        className='text-black rounded-sm' type="text" required
        name="user_name" />


        <label>Email</label>
        <input 
        className='text-black  rounded-sm' required type="email" 
        name="user_email" />


        <label>Message</label>
        <textarea 
        className='text-black  rounded-sm' required name="message" />


        <div className='flex flex-col items-end'>

        <input 
        className='border px-2 rounded cursor-pointer w-[180px] mt-2'
        type="submit" 
        value="Send" />

        </div>
        {
        isMessaageSent && (
        <div className='text-details text-sm flex'>

          <SiSpreadshirt 
          className='pr-1'
          size={19}/> <p  >Thank you, message delivered.</p> 
        </div> 
        )} 
      </form>
    </section>
  )
}
