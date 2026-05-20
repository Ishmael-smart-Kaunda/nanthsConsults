// import Header from "../components/home components/header"
import About from "../components/home components/about"
import Services from "../components/home components/services"
import CTA from "../components/home components/CTA"
import Footer from "../components/footer"
import Hero from "../components/home components/Hero"


export default function Home(){
          return(
                  <>
                     {/* <Header/> */}
                     <Hero />
                     <About/>
                     <Services/>
                     <CTA/>
                     <Footer/>
                  </>
          )
}