import React from 'react'
import LogoSection from './components/LogoSection'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import ShowcaseSections from './sections/ShowcaseSections'
const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <ShowcaseSections />
    <LogoSection />
    </>
  )
}

export default App