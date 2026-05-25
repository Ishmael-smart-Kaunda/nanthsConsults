import { useParams } from "react-router-dom"
import { services } from "../data/IndividualServicesData"

import ServiceApproach from "../components/service details components/ServiceApproach"
import ServiceDetailsHero from "../components/service details components/ServiceDetailsHero"
import ServiceReasoning from "../components/service details components/ServiceReasoning"



const ServiceDetails = () => {

    const {serviceId} = useParams()

    const service = services.find(
        (serviceData) => serviceData.slug === serviceId
    )

    if (!service) return <p>Service Not Found!</p>

  return (
    <div>
      <ServiceDetailsHero 
        service={service}
      />
      <ServiceReasoning 
        service={service}
      />
      <ServiceApproach 
        service={service}
      />
    </div>
  )
}

export default ServiceDetails
