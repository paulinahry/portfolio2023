import React from 'react'

function Footer() {
  const handleClick = () => {
    window.open('https://icons8.com/illustrations/', "_blank")
  }

  return (
    <footer className='flex justify-center py-6 mx-auto' >
      <div className=' text-center'>
        <span > &copy; Copyrights 2023 by Paulina Hryszko | </span>

          <p className='pl-1'>Image credits to: Icons 8 
          <span className=" text-gray-800 w-5 bg-green-200 rounded-full p-1 text-xs cursor-pointer ml-1" 
          onClick={handleClick}
          >O!</span>

          </p>
      </div>
    </footer>
  )
}


export default Footer