import React from 'react';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <style>{`
          body {
            color: #121212
          }
        `}</style>
      </Head>
      <div >
        {children}
        <div className=' w-100 h-100 bg-black '></div>
      </div>
    </>
  );
};

export default Layout;
