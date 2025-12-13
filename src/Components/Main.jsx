import React, { Suspense } from 'react'
import Header from './Header'
import Home from './Home'
import AboutSection from './About'
const ServicesSection = React.lazy(() => import('./Services'))
const MenuSection = React.lazy(() => import('./Menu'))
const TestimonialsSection = React.lazy(() => import('./Testimonial'));
import ContactSection from './Contact'
import FooterSection from './Footer'
import ScrollToTop from './scrollToTop'

function Main() {
  return (
    <div>
      <Header />
      <Home />
      <AboutSection />
      <Suspense fallback={<div>Loading...</div>}>
        <ServicesSection />
        <MenuSection />
        <TestimonialsSection />
      </Suspense>
      <ContactSection />
      <FooterSection />
      <ScrollToTop />
    </div>
  )
}

export default Main
