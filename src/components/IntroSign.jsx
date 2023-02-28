import { useEffect, useRef } from 'react';
import anime from 'animejs';

function IntroSign() {
    const shineRef = useRef(null);

useEffect(() => {
  const timeline = anime.timeline({
    targets: shineRef.current,
    loop: true,
    direction: 'alternate',
    easing: 'linear',
  })

  timeline

    .add({
      opacity: [0, 1],
      duration: 5000,
    })
   
}, [])
  

  return (
    <section 
    aria-labe='intro-sign'
    className='
    flex justify-center'>

    <div 
    className="shine w-[250px] h-[250px]  top-28 
    relative stroke-current flex justify-center flex-wrap  animate-sign rounded-full shadow-expand">
        <div className='uppercase retro-sign absolute top-4  '>
            <span>Front</span>
            <br />
            <span>End</span>
            <br />
        </div>

       <div className='rotate-[-19deg] relative'>
        <span 
        ref={shineRef}
        className='retro-sign absolute left-[-8px] top-44 italic '>
            developer</span>
       </div>
    </div>
    </section>

  );
}

export default IntroSign
