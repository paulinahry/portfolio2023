import Head from 'next/head'
//components
import Navigation from '../src/components/Navigation'
import About from '../src/components/About'
import Hero from '../src/components/Hero'
import Projects from '../src/components/Projects'
import TechStack from '../src/components/TechStack'
import Footer from '../src/components/Footer'
import Layout from '../src/components/Layout'
import IntroSign from '../src/components/IntroSign'
import { ContactForm } from '../src/components/ContactForm'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Paulina Hryszko | Full Stack Developer</title>
        <meta name="description" content="MERN Fullstack Web Developer " />
        <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout > 
        <Navigation />
        <IntroSign />
        <Hero />
        <About />
        <Projects />
        <TechStack />   
        <ContactForm />
        <Footer />
      </Layout>

    </div>
  )
}
