import servicesData from "../../data/home services"

import image from "../../assets/images/hero/hero1.jpeg"

import servicesBg from "../../assets/images/home/servicesBg.jpg"
import sysImg from "../../assets/images/home/sys.jpg"
import service2 from "../../assets/images/home/services/policy.png"
import training from "../../assets/images/home/services/s7.png"
import perforance from "../../assets/images/home/services/s2.png"
import evaluation from "../../assets/images/home/services/s6.png"
import recruit from "../../assets/images/home/services/recruit.png"

import { FaQuoteLeft, FaShieldAlt } from "react-icons/fa"
import { RiFileSearchLine, RiSettings3Line } from "react-icons/ri"
import { RiBarChartBoxLine, RiLineChartLine, RiBuilding4Line, RiFileTextLine, RiPresentationLine, RiServerLine, RiShieldCheckLine,  } from "react-icons/ri"
import { MdArrowDropDown, MdVerified } from "react-icons/md"
import { useState } from "react"
import { Link } from "react-router-dom"
import { FaArrowRight, FaChevronDown, FaMapPin, FaQuoteRight } from "react-icons/fa6"
import { FiMail, FiMapPin } from "react-icons/fi"
import { AiOutlineArrowDown } from "react-icons/ai"
import { IoMdArrowDropdown } from "react-icons/io"

import ServicesCard from "./servicesCard"

export default function Services(){
        const filteredServices = servicesData.filter((service)=> service.id<=6);
        console.log(filteredServices)
   
       return(
               <section id="services" className=" relative w-full max-w-[1440px] text-white bg-gradent-to-b from-white 0 to-transparent px-5 md:px-25 mx-auto mt-50 py-15 ">
                  <img src={servicesBg} alt="" className="absolute inset-0 w-full h-full obgject-cover opacity- 0 mix-blend-overlay" />
                 <h1 className="font-bold text-center text-amber-400  text-[40px]">Our Services</h1>
                 <p className="text-center font-light text-[22px] py-12">Comprehensive HR and administration services tailored to support modern organizations.</p>
                     
                     <div className={`relative h-fit transition-all duration-500 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md-10  overflow-hidden`}>
                         {filteredServices.map(({id, ...service})=>
                           <ServicesCard 
                             key={id}
                             {...service}
                           />
                          )
                          }
                     </div>

                {/* CTA */}
                <div className="relative w-full grid grid-cols-1 lg:grid-cols-3 p-5 md:py-20 bg-black/90 rounded-md mt-12">
                  <div className="lg:col-span-2 w-full h-full p-5 md:px-10 flex flex-col justify-between text-white/90">
                     <FaQuoteLeft className="size-3 md:size-5"/>
                      <p className="md:px-4 text-4xl md:text-5xl font-semibold leading-tight">
                        Great organisations are built on great people. 
                        Let us help you find, grow, and keep yours.
                    </p>
                    <address className="inline-flex justify-between items-center gap-1 py-4 text-[14px] whitespace-nowrap"> 
                      <a href="mailto:nanthconsults@gmail.com" className="inline-flex items-center gap-1 text-[10px] md:text-[14px]"><FiMail className=" size-5 text-green-300"/> nanthconsults@gmail.com  </a>
                      <a href="tel:+265888703316" className=" text-white text-[12px]">
                        +265 88 8703 316
                      </a> 
                    </address>       
                    </div>
                    <div className="w-full h-full text-[20px]  flex flex-col justify-between md:border-l md:border-white/10 p-5 md:py-15 space-y-8">          
                     <Link 
                       to='/contact' 
                       className="group cursor-pointer inline-flex justify-center items-center gap-3 p-5 bg-ascent   
                       text-white font-bold rounded-[5px] whitespace-nowrap">
                      Schedule a meeting 
                      <FaArrowRight className="animate-slider group-hover:[animation-play-state:paused]"/> 
                   </Link>
                   <Link to='/services' className="cursor-pointer inline-flex justify-center items-center gap-3 p-5 border border-white/30   text-[18px] text-white font-bold rounded-md">
                      Learn more
                   </Link>  
                      <p className="text-center">
                        No commitment required. 
                        <br/> 
                        Free initial consultation.
                    </p>
                   </div>
                   <span className="hidden absolute bottom-0 w-full flex flex-col items-center text-black text-center">
                     Explore more services 
                     <FaChevronDown className=""/> 
                   </span>
                </div>
               
               {/* THE SERVICES CONTINUE */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                  <article className="relative cursor-pointr p-5 flex flex-col h-fit shadow-zinc/200 shadow-sm bg-white text-black rounded-md hover:shadow-zinc-400 transition-all duration-500">  
                    <div className="p-1 bg-black back-drop-blur w-fit rounded-md">
                        <RiShieldCheckLine className="size-10 text-white"/>
                    </div>
                    <div className="py-2 flex flex-col md:justify-between gap-3 sapce-y-3">  
                        <h4 className="text-[24px] font-bold text-amber-800">Integrated Management Systems</h4>
                        <p className="text-[22px] font-light">
                            From implementation to audit, we deliver IMS solutions that position your business for global standards.
                        </p> 
                      <Link to='/services/integrated-management-systems' className="font-semibold text-slate-900 hover:text-red-950 w-fit">Learn more</Link>
                    </div> 
                  </article>

                  <article className="cursor-ponter p-5 flex flex-col h-fit shadow-zinc/200 shadow-sm bg-white text-black  rounded-md hover:shadow-zinc-400 transition-all duration-500">
                    <div className="p-1 bg-black back-drop-blur w-fit rounded-md">
                        <RiServerLine className="size-10 text-white"/>
                    </div>
                    <div className="py-2 flex flex-col md:justify-between gap-3 spce-y-3 h-1/2">  
                        <h4 className="text-[24px] font-bold text-amber-800">HR Outsourced Service </h4>
                        <p className="text-[22px] font-light">
                           We provide reliable, end-to-end HR support that ensures efficiency, compliance, and peace of mind.
                        </p> 
                      <Link to='/services/hr-outsourcing' className="font-semibold text-slate-900 hover:text-red-950 w-fit">Learn more</Link>  
                    </div> 
                 </article>
                </div>
                
        

              

                

               </section>
       )
}