import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig();



export const ContactForm = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm(
      'service_75hqleq',
      'template_1lcb1gr',
      form.current,
      'mw0dY8GAvkKHN5IjE'
    )
      .then((result) => {
          console.log('msg ')
          console.log(result.text)
          e.target.reset()
      }, (error) => {
          console.log(error.text)
          console.log('error')
      })
  }

  return (
    <form ref={form} 
    onSubmit={sendEmail}
    className='m-4 flex flex-col 
    md:w-[40%] justify-center'
    >
      <label>Name</label>
      <input 
      className='text-black'
      type="text" name="user_name" />

      <label>Email</label>
      <input 
      className='text-black'
      type="email" name="user_email" />

      <label>Message</label>
      <textarea 
      className='text-black'
      name="message" />

      <input 
      className='border px-2 rounded cursor-pointer w-[180px] mt-2'
      type="submit" 
      value="Send" />
    </form>
  );
};
