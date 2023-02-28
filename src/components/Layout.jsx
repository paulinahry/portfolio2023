import React from 'react';
import Head from 'next/head';
import ShootingStars from './ShootingStars';
import background from '../assets/images/background.png'


const Layout = ({ children }) => {
  return (
    <>
        <div 
          style={{ 
            background:  `
            linear-gradient(19deg, rgba(122,136,164,1) 0%, rgba(56,91,113,1) 50%, rgba(0,0,0,1) 100%)
            `,
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
