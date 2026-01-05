import React from 'react'
import LogoSection from './sections/LogoSection'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import ShowcaseSections from './sections/ShowcaseSections'
import FeatureCards from './sections/FeatureCards'
import ExperienceSection from './sections/ExperienceSection'
const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <ShowcaseSections />
    <LogoSection />
    <FeatureCards />
    <ExperienceSection />
    </>
  )
}

export default App