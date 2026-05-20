import { FiArrowRight } from "react-icons/fi"
import Image from "../../assets/images/logo/nanth-logo.jpeg"

export default function About(){
         return(
                 <section  className="relative w-full grid grid-cols-2 max-w-[1440px] gap-2 md:py- px-5 md:px-25 max-w-[1440px]">
                   {/* <img src={image} alt=" timely HR solutions" className="hidden absolute inset-0 w-full h-full object-cover mb-5 mix-blend-overlay"/>*/}
                    <div className="w-full h-full grid content-center  box-border ">
                          <span className=""></span>
                          
                          <div className="flex flex-col gap-5 mx-auto">
                            <img src={Image} alt="" className="hidden size-30 mx-auto"/>
                            <span className="flex flex-col items-center text-6xl md:text-6xl font-bold mb-15 md:mb-0 "> <b className="text-">About </b> Us</span>
                         
                          </div>
                         
                         
                    </div>
                    

                    <div className="w-full my-15 px-2 relaxed space-y-6 text-[20px]">
                        
                        

                        <p id="services" className="  ">
                            We are a duly registered Malawian consultancy firm that provides 
                            a full range of management consultancy services specifically in the areas of human resources 
                            management, trainings, performance management, integrated management systems, 
                            organizational design and development, administration-related programs and business 
                            development services with over 10 years of industry experiences. 
                        </p>

                        <p className="">
                          Our work goes beyond policy and paperwork. We partner closely with organisations to 
                          unlock the full potential of their people-building cultures where talent thrives, teams perform, and leadership grows.
                        </p>
                        <a href="" className="inline-flex gap-2 font-semibold text-amber-900 items-center">About Us <FiArrowRight className="size-5"/></a>
                        <div className="w-25 h-[0.5px] bg-black -translate-y-6"></div>
                    </div>
                 </section>
         )
}