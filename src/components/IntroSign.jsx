import { useEffect, useRef } from 'react';
import anime from 'animejs';
import ShootingStars from './ShootingStars';


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
      duration: 4000,
    })
   
}, [])
  

  return (
    <>
    <section 
    aria-label='intro-sign'
    className='
    h-screen max-w-[100%]
    flex justify-center items-center mb-4'>

    <div 
    className="w-[250px] h-[250px] 
    relative stroke-current flex justify-center flex-wrap  animate-sign rounded-full shadow-expand">
        <div className='uppercase retro-sign absolute top-4'>
            <span >JavaScript</span>
            <br />
            <span>ninja</span>
        </div>

       <div className='sm:rotate-[-19deg] relative'>
        <span 
        ref={shineRef}
        className='retro-sign absolute italic w-[max-content]
          top-52 left-[-130px]
          sm:left-[-24px] sm:top-48 '
          >
            in training</span>
       </div>
    </div>
    </section>
    </>

  )
}

export default IntroSign
