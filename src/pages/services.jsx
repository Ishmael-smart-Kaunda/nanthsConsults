import React from 'react'
import ServiceHero from '../components/sercives components/ServiceHero'
import Footer from '../components/footer'
import ServiceDescription from '../components/sercives components/ServiceDescription'
import Approach from '../components/sercives components/Approach'
import BuildnOutsource from '../components/sercives components/BuildnOutsource'
import Insights from '../components/sercives components/Insights'
import SalaryStructureEvaluation from '../components/sercives components/SalaryStructureEvaluation'

const services = () => {
  return (
    <div>
      <ServiceHero />
      <ServiceDescription />
      <Approach />
      <BuildnOutsource />
      <Insights />
      <SalaryStructureEvaluation />
    </div>
  )
}

export default services