import React from 'react'
import LogoSection from './sections/LogoSection'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import ShowcaseSections from './sections/ShowcaseSections'
import FeatureCards from './sections/FeatureCards'
import ExperienceSection from './sections/ExperienceSection'
import TechStack from './sections/TechStack'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <ShowcaseSections />
    <LogoSection />
    <FeatureCards />
    <ExperienceSection />
    <TechStack />
    <Testimonials />
    <Contact />
    <Footer />
    </>
  )
}

export default App