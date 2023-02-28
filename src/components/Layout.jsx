import React from 'react';
import Head from 'next/head';
import ShootingStars from './ShootingStars';


const Layout = ({ children }) => {
  return (
    <>
        <div 
          style={{ 
            background:  `
            linear-gradient(0deg, 
            rgba(180,58,75,0.8660057773109244) 0%, 
            rgba(253,29,29,0.8127844887955182) 50%, 
            rgba(252,176,69,0.8463979341736695) 100%)`,
            color: 'white',
            width: '100%',
            height: '100%'
          }}
          >
            <ShootingStars/>
            {children}
        </div>
    </>
  )
}

export default Layout;
