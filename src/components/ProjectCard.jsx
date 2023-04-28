import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import { SiSpreadshirt } from 'react-icons/si'

function ProjectCard({ title, stack, imgSrc, vercel, github, figma}) {
  const [showDetails, setShowDetails] = useState(false)

  const handleShowDetails = () => {
    setShowDetails(!showDetails)
  }

  return (
    <div
      onMouseLeave={() => setShowDetails(false)}
      className='project-card-container 
      relative mx-2 border rounded mt-4 
      w-[16rem] h-[16rem] md:w-[19rem] md:h-[19rem] 
      opacity-70 hover:opacity-100 bg-opacity-50 hover:bg-opacity-50'
    >
      <div className='w-full h-full'>
        <div aria-label='image-wrapper' className='relative h-full'>
          <Image src={imgSrc} alt='project image' className='w-full h-full' />

          {/*SHOW DETAILS  */}
          <div
            onClick={handleShowDetails}
            className='absolute w-full bottom-0 right-0 bg-white bg-opacity-90'
          >
            <SiSpreadshirt size={22} className='text-details cursor-pointer z-20 inline m-1' />
            <span className='text-gray-600 cursor-pointer'>click to read more... </span>
          </div>
          {/*SHOW DETAILS END */}

          {/* DETAILS CONTAINER */}
          <div
            className={`absolute bottom-8 w-full bg-white bg-opacity-95 p-4 ${
              showDetails ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-300`}
          >
            <p className='text-gray-600 mb-2'>{title}</p>
            <p className='text-gray-500'>{stack}</p>

            <div className='mt-4'>
              <Link href={vercel} target='_blank'>
                <p className='text-md text-gray-500 font-medium underline'>Demo</p>
              </Link>

              <span className='mx-2 text-details'>|</span>
              <Link href={github} target='_blank'>
                <p className='text-md text-gray-500 font-medium underline'>Code</p>
              </Link>
              
              {figma && (
                <>
                  <span className='mx-2 text-details'>|</span>
                  <Link href={figma} target='_blank'>
                    <p className='text-md text-gray-500 font-medium underline'>Figma</p>
                  </Link>
                </>
              )}
              
            </div>
          </div>
          {/* DETAILS CONTAINER END*/}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;