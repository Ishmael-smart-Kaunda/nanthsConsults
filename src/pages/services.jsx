import React from 'react'
import ServiceHero from '../components/sercives components/ServiceHero'
import Footer from '../components/footer'
import ServiceDescription from '../components/sercives components/ServiceDescription'
import Approach from '../components/sercives components/Approach'
import BuildnOutsource from '../components/sercives components/BuildnOutsource'

const services = () => {
  return (
    <div>
      <ServiceHero />
      <ServiceDescription />
      <Approach />
      <BuildnOutsource />
      <Footer />
    </div>
  )
}

export default services