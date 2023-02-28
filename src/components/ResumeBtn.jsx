import React from 'react'
import Resume from '../static/assets/cv/Frontend_Paulina_Hryszko_2023.pdf'

const ResumeBtn = () => {
  const handleClick = () => {
    window.open(Resume)
  }

  return (
    <button 
    className=' border-details text-details  px-5 m-1'
    onClick={handleClick}>
      resume
    </button>
  )
}

export default ResumeBtn

