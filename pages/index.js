import { Main } from 'next/document'
import Head from 'next/head'
import Image from 'next/image'
//components
import Navigation from '../src/components/Navigation'
import About from '../src/components/About'
import Hero from '../src/components/Hero'
import Projects from '../src/components/Projects'
import TechStack from '../src/components/TechStack'
import Footer from '../src/components/Footer'
import Layout from '../src/components/Layout'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Paulina Hryszko | Full Stack Developer</title>
        <meta name="description" content="MERN Fullstack Web Developer " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
{/* 
      <Layout > */}
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <TechStack />    
        <Footer />
      {/* </Layout> */}

    </div>
  )
}
