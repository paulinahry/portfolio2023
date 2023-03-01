import { useEffect, useRef, useState } from 'react';
import anime from 'animejs';
import Image from 'next/image'
import cosmoDog from '../assets/images/cosmo-dog.png'



function CosmoDog() {
  const levitationRef = useRef(null);

  useEffect(() => {
    const timeline = anime.timeline({
      targets: levitationRef.current,
      loop: true,
      direction: 'alternate',
      easing: 'linear',
    })

    const levitationTimeline = anime.timeline({
      targets: levitationRef.current,
      duration: 500,
      easing: 'easeOutQuad',
      autoplay: true,
    })

    timeline
      .add({
        duration: 3000,
        translateY: -50
      })
      
      .add({
        targets: levitationRef.current,
        translateY: 0,
        duration: 2000,
        easing: 'easeOutQuad',
      })
       
  }, [])

  return (
    <div ref={levitationRef}>
        <Image src={cosmoDog} width='250px' height='250px'  />

    </div>
  )
}

export default CosmoDog
