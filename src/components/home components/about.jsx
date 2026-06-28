import { FiArrowRight } from "react-icons/fi"
import Image from "../../assets/images/logo/nanth-logo.jpeg"
import { Link } from "react-router-dom"

export default function About(){
         return(
                 <section  className="relative w-full grid grid-cols-1 md:grid-cols-2 max-w-[1440px] gap-2 md:py- px-5 md:px-25">
                   {/* <img src={image} alt=" timely HR solutions" className="hidden absolute inset-0 w-full h-full object-cover mb-5 mix-blend-overlay"/>*/}
                    <div className="w-full h-full grid content-center box-border py-10">
                         
                          
                          <div className=" flex flex-col h-fit gap-5">
                           
                            <span className="flex md:flex-col gap-2 items-center text-3xl md:text-8xl font-bold md:mb-15 ">Who Are  <p className=""> We?</p></span>
                         
                          </div>
                    </div>
                    

                    <div className="w-full md:my-15 px-2 relaxed font-light space-y-8 text-[22px]">
                        

                        <p id="services" className="first-letter:float-left first-letter:mr-1 first-letter:text-6xl first-letter:font-bold first-letter: ext-amber-800">
                            We are a duly registered Malawian consultancy firm that provides 
                            a full range of management consultancy services specifically in the areas of human resources 
                            management, trainings, performance management, integrated management systems, 
                            organizational design and development, administration-related programs and business 
                            development services with over 10 years of industry experiences. 
                        </p>

                        <p className="">
                          Our work goes beyond policy and paperwork. We partner closely with organisations to 
                          unlock the full potential of their people-building cultures where talent thrives, 
                          teams perform, and leadership grows.
                        </p>
                        <Link to="/about" className="group inline-flex items-center gap-1 font-semibold text-[20px] my-5 px-6 py-4 rounded-xl text-white bg-amber-800 items-center">
                          Get To Know Us 
                          <FiArrowRight className="size-5 mt-1 animate- slider group-hover:[animation-play-state:paused] group-hover:translate-x-4 transition-all duration-500"/>
                        </Link>
                      
                    </div>
                 </section>
         )
}