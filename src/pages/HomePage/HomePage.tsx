import React from 'react'
import AboutMeBlock from '../../blocks/AboutMeBlock/AboutMeBlock'
import FAQ from '../../blocks/FAQ/FAQ'
import Reviews from '../../blocks/Reviews/Reviews'
import ContactBlock from '../../blocks/ContactBlock/ContactBlock'

export default function HomePage() {
  return (
    <div>
        <section id="about">
        <AboutMeBlock />
      </section>
      <section id="portfolio">
        <Reviews />
      </section>

      <section id="faq">
        <FAQ />
      </section>

    
      <section id="contact">
        <ContactBlock/>
      </section>
    </div>
  
  )
}
