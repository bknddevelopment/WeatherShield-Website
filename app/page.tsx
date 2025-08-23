'use client'

import Header from './components/Header'
import HeroSection from './components/HeroSection'
import TrustIndicators from './components/TrustIndicators'
import ServiceShowcase from './components/ServiceShowcase'
import AboutSection from './components/AboutSection'
import TestimonialsSection from './components/TestimonialsSection'
import ServiceAreas from './components/ServiceAreas'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import FloatingContact from './components/FloatingContact'
import { OrganizationJsonLd } from './components/JsonLd'

export default function HomePage() {
  return (
    <>
      <OrganizationJsonLd />
      <Header />
      <main>
        <HeroSection />
        <TrustIndicators />
        <ServiceShowcase />
        <AboutSection />
        <CTASection 
          variant="primary"
          title="Ready to Protect Your Home?"
          description="Get your free roof inspection today and discover why homeowners trust Weather Shield."
        />
        <TestimonialsSection />
        <ServiceAreas />
        <CTASection 
          variant="emergency"
          title="Storm Damage? We're Here 24/7"
          description="Emergency roof repairs when you need them most. Call now for immediate assistance."
        />
      </main>
      <Footer />
      <FloatingContact />
    </>
  )
}