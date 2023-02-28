import React from 'react';
import ProjectCard from './ProjectCard';
import cards from './cardData';
import Link from 'next/link';

function Projects() {
  return (
    <section id='projects' className='w-full p-3 flex items-center py-16'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <h3 className='text-m tracking-widest uppercase py-2 border-b text-red-700/100 border-red-700/100'>My projects</h3>
        <div>
          {
          cards?.map((card) => (
            <div key={card.title}>
              <img src={card.img} alt='project image' />
              <div>
                <span>{card.title}</span>
                <span>{card.stack}</span>
                <Link href={card.github}>source code</Link>
                <Link href={card.vercel}>web site</Link>
              </div>
            </div>
          ))
          }
        </div>

        {/* CARDS */}
        {cards?.map((card) => (
          <ProjectCard
            key={card.title}
            title={card.title}
            stack={card.stack}
            img={card.img}
            deployed={card.deployed}
            url={card.url}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
