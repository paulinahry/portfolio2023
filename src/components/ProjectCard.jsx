import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'

function ProjectCard({img, title, stack, url, deployed}) {
  return (

        <section className='relative h-auto w-full flex items-center justify-center rounded-xl p-4 group hover:400/100 '>

            <Image src={img} className=' rounded-xl group-hover:opacity-50'/>

            <div className=' bg-neutral-50 w-full self-end hidden group-hover:block absolute top-[50%] left-[50%] '>
                <h3 className='text-center'>{title}</h3>
                <p className=''>{stack}</p>

                <Link href={deployed}><span className='underline flex items-center'> <AiOutlineArrowRight/>view page</span> </Link>

                <Link href={url}><span className='underline flex items-center'> <AiOutlineArrowRight/>view src code</span> </Link>
            </div>
      
                
        </section>
  )
}

export default ProjectCard