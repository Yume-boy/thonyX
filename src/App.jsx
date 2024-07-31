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

const App = () => {
  return (
    <div>
      <NavBar/>
      <HeroSection />
      <ReasonsforHire />
      <Proof />
      <ProofOfWork />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App
