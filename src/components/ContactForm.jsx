import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import {SiSpreadshirt} from 'react-icons/si'

const { REACT_APP_EMAILJS_USER_ID, REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_TEMPLATE_ID } = process.env

export const ContactForm = () => {
  const form = useRef()
  const [isMessaageSent, setIsMessaageSent] = useState(false)



  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm(
      REACT_APP_EMAILJS_SERVICE_ID,
      REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      REACT_APP_EMAILJS_USER_ID
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
      md:w-[50%] lg:w-[40%] justify-center'
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
        rows={6}
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
