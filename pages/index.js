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
import ContactMe from '../src/components/ContactMe'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Paulina Hryszko | Frontend Developer</title>
        <meta name="description" content="Frontend Web Developer based in Germany" />
        <link rel="icon" href="/favicon/favicon.ico" type="image/svg+xml"/>

      </Head>

      <Layout>
        <Navigation />
        <IntroSign />
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <ContactMe />
        <Footer />
      </Layout>
    </div>
  )
}
