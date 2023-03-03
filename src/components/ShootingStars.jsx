import React, { useState, useEffect } from 'react';

const ShootingStars = () => {
  const [showStars, setShowStars] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > window.innerHeight*0.5) {
        setShowStars(false);
      } else {
        setShowStars(true);
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  return (
    <div className={`stars 
    ${showStars ? 
    'opacity-100 transition-opacity duration-500 ease-in-out' 
      : 
    'opacity-0 transition-opacity duration-500 ease-in-out'}`}>
    {[...Array(5)].map((_, i) => (
      <div key={i} className="star" />
    ))}
  </div>
  
  )
}

export default ShootingStars;
