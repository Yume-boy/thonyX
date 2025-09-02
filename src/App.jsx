import React from 'react'
import HeroSection from './components/HeroSection'
import ContactForm from './components/ContactForm'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import ProofOfWork from './components/ProofOfWork'
import ReasonsforHire from './components/ReasonsforHire'
import Testimonials from './components/Testimonials'
import NavBar from './components/NavBar'
import Proof from './components/Proof'
import Skills from './components/Skills'
import Experience from './components/Experience'
import About from './components/About'

const App = () => {
  return (
    <div>
      <NavBar/>
      <HeroSection />
      <About/>
      <Skills/>
      <Experience/>
      <ReasonsforHire />
      <ProofOfWork />
      <Testimonials />
      <Proof />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App
