import React from 'react';

const ShootingStars = () => {
  return (
    <div className="stars">
      {[...Array(5)].map((_, i) => (
          <div key={i} className="star" />
      ))}
    </div>
  )
}

export default ShootingStars