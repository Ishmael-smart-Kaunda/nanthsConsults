// import Header from "../components/home components/header"
import About from "../components/home components/about"
import Partners from "../components/home components/our partners"
import STAT from "../components/home components/STAT"
import Services from "../components/home components/services"
import Testimonial from "../components/home components/testimonials"
import CTA from "../components/home components/CTA"
import Hero from "../components/home components/Hero"


export default function Home(){
          return(
                  <>
                     {/* <Header/> */}
                     <Hero />
                     <About/>
                     <Partners/>
                     <STAT/>
                     
                     <Services/>
                     <Testimonial/>
                     <CTA/>
                  </>
          )
}