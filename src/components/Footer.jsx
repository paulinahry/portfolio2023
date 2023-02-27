import React from 'react'

function Footer() {
  const handleClick = () => {
    window.open('https://icons8.com/illustrations/style--3d-casual-life', "_blank")
  }

  return (
    <footer className='flex justify-center py-6' >
        <span > &copy; Copyrights 2023 by Paulina Hryszko | </span>
          <span className='pl-1'>Image credits to: </span>
          <span className=" text-gray-800 rounded-full bg-red-50 p-1 text-xs cursor-pointer" onClick={handleClick}>O!</span>
    </footer>
  )
}

export default Footer