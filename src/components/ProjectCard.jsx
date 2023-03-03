import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import {SiSpreadshirt} from 'react-icons/si'

function ProjectCard ({ title, stack, imgSrc, vercel, github }) {

    const [showDetails, setShowDetails] = useState(false)

    const handleShowDetails=() => {
        setShowDetails(!showDetails)
    }

    return (
        <div 
        onMouseLeave={() => setShowDetails(false)}
        className='project-card-container relative w-[16rem] h-[16rem] md:w-[21rem] md:h-[21rem] mx-2 border rounded mt-4'
        >
          
        <div className='w-full h-full'>
            <div 
            aria-label='image-wrapper'
            className='relative h-full grayscale hover:grayscale-0'>
                    <Image
                        src={imgSrc} 
                        alt='project image' 
                        className='w-full h-full'
                    />

                {/*SHOW DETAILS  */}
                <div 
                onClick={handleShowDetails}
                className=' absolute bottom-0 right-0 grayscale-0 w-full bg-white  bg-opacity-90'
                >
                    <SiSpreadshirt size={22} className='text-details cursor-pointer z-20 inline m-1'  />
                    <span className='text-gray-600 cursor-pointer'>click to read more... </span>
                
                </div>
                {/*SHOW DETAILS END */}


                {/* DETAILS CONTAINER */}
                <div className=
                {`absolute bottom-12 w-full  bg-white bg-opacity-95  p-4 rounded 
                ${showDetails ? 'opacity-100' : 'opacity-0'} 
                transition-opacity duration-300`}>

                    <p className='text-gray-600 mb-2'>{title}</p>
                    <p className='text-gray-500'>{stack}</p>

                    <div className='mt-4'>
                        <Link href={vercel} target='_blank'>
                            <p className='text-md  text-gray-500 font-medium underline'>
                                Demo
                            </p>
                        </Link>
                        <span className='mx-2 text-details'>|</span>
                        <Link href={github} target='_blank'>
                            <p className='text-md text-gray-500 font-medium underline'>
                                Code
                            </p>
                        </Link>
                    </div>
                </div>
                {/* DETAILS CONTAINER END*/}

                </div>
            </div>
        </div>
    )
}

export default ProjectCard