import React from 'react'
import ShootingStars from './ShootingStars'


const Layout = ({ children }) => {
  return (
    <>
        <div 
          style={{ 
            background:  `
            linear-gradient(18deg, 
              rgba(0,0,0,1) 0%, 
              rgba(56,91,113,1) 50%, 
              rgba(0,0,0,1) 80%)
            `,
            color: 'white',
            width: '100%',
            height: '100%'
          }}
          >
            <ShootingStars />
            {children}
        </div>
    </>
  )
}

export default Layout;
