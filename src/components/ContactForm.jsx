import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import {SiSpreadshirt} from 'react-icons/si'
import Spinner from './Spinner'



export const ContactForm = () => {
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  const form = useRef()
  const [isMessaageSent, setIsMessaageSent] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setIsLoading(true)
    emailjs.sendForm(
      serviceId,
      templateId,
      form.current,
      publicKey
    )
      .then((result) => {
          console.log('msg sent: ',result.text)
          setIsMessaageSent(true)
          setIsLoading(false)
          e.target.reset()
      }, (error) => {
          console.log('error',error.text)
          setIsLoading(false)
      })
  }

  return (
    <section className='flex justify-center'>
      <form ref={form} 
        onSubmit={sendEmail}
        className='m-4 flex flex-col w-[80%]
        md:w-[50%] lg:w-[40%] justify-center'>
        <label>Name</label>
        <input 
          className='text-black rounded-sm' 
          type="text" 
          required
          name="user_name" />

        <label>Email</label>
        <input 
          className='text-black rounded-sm' 
          required 
          type="email" 
          name="user_email" />

        <label>Message</label>
        <textarea 
          rows={6}
          className='text-black rounded-sm' 
          required 
          name="message" />

        <div className='flex flex-col items-end'>
          <input 
            className='border px-2 rounded cursor-pointer w-[180px] mt-2'
            type="submit" 
            value="Send" />
        </div>


         {/* Show spinner if loading */}
        {isLoading && <Spinner />}

        {
          isMessaageSent && (
            <div className='text-details text-sm flex'>
              <SiSpreadshirt 
                className='pr-1'
                size={19}/> 
              <p>Thank you, message delivered.</p> 
            </div> 
          )} 
      </form>
    </section>
  )
}
