import NavBar from "../components/navBar"
import Header from "../components/home components/header"
import About from "../components/home components/about"
import Partners from "../components/home components/our partners"
import STAT from "../components/home components/STAT"
import Services from "../components/home components/services"
import CTA from "../components/home components/CTA"
import Footer from "../components/footer"
export default function Home(){
          return(
                  <>
                     <NavBar/>
                     <Header/>
                     <About/>
                     <Partners/>
                     <STAT/>
                     
                     <Services/>
                     <CTA/>
                     <Footer/>
                     
                  </>
          )
}