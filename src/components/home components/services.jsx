import image from "../../assets/images/hero/hero1.jpeg"

import servicesBg from "../../assets/images/home/servicesBg.jpg"
import sysImg from "../../assets/images/home/sys.jpg"
import { FaQuoteLeft, FaShieldAlt } from "react-icons/fa"
import { RiFileSearchLine, RiSettings3Line } from "react-icons/ri"
import { RiBarChartBoxLine, RiLineChartLine, RiBuilding4Line, RiFileTextLine, RiPresentationLine, RiServerLine, RiShieldCheckLine,  } from "react-icons/ri"
import { MdArrowDropDown, MdVerified } from "react-icons/md"
import { useState } from "react"
import { Link } from "react-router-dom"
import { FaArrowRight, FaChevronDown, FaMapPin } from "react-icons/fa6"
import { FiMapPin } from "react-icons/fi"
import { AiOutlineArrowDown } from "react-icons/ai"
import { IoMdArrowDropdown } from "react-icons/io"



export default function Services(){

   
       return(
               <section id="services" className=" relative w-full max-w-[1440px] text-white bg-gradent-to-b from-white 0 to-transparent px-5 md:px-25 mx-auto mt-50 py-15 ">
                  <img src={servicesBg} alt="" className="absolute inset-0 w-full h-full obgject-cover opacity- 0 mix-blend-overlay" />
                 <h1 className="font-bold text-center text-amber-400  text-[40px]">Our Services</h1>
                 <p className="text-center font-light text-[22px] py-5">Comprehensive HR and administration services tailored to support modern organizations.</p>
                  
                  
                     <div className={`relative h-fit transition-all duration-500 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10  overflow-hidden`}>
                        <article className="relative z-10 cursor-poiter p-5 flex flex-col gap-2 h-140  bg-white rounded-md hover:shadow-zinc-400 transition-all duration-500">
                            
                            <div className="absolute left-0 top-5 w-2/10 px-4 py-2 bg-black rounded-r-full">
                                <RiFileSearchLine className=" size-8 text-white"/>
                            </div>
                            <div className=" mt-15 h-100 flex flex-col items-start text-blue-950 gap-3">
                                
                                <h4 className="text-[24px] font-bold">Recruitment <br/> Selection and Employee Retention </h4>
                                <p className=" text-[16px] ">
                                    From sourcing to employee retention, we deliver a seamless 
                                    hiring experience taht secures long-term value for your
                                    organisation.
                                </p>
                                <p className="text-[16px] ">
                                    Better people management starts with clear processes, 
                                    reliable support, and strategic human resource systems.
                                </p> 
                                <figure className="mt-5 w-full overflow-hidden h-60">
                                    <img src={sysImg} alt="" className="w-full h-full" />
                                </figure>  
                            </div> 
                            <Link to='/services' className=" font-light text-slate-900 hover:text-red-950 w-fit">learn more</Link>
                        </article> 


                <article className="relative z-10 cursor-poiter p-5 flex flex-col gap-2 h-140  bg-white rounded-md hover:shadow-zinc-400 transition-all duration-500">
                    
                    <div className="absolute left-0 top-5 w-2/10 px-4 py-2 bg-black rounded-r-full">
                        <RiSettings3Line className="size-8 text-white"/>
                    </div>
                    <div className=" mt-15 h-100 flex flex-col items-start text-blue-950 gap-3">
                        
                        <h4 className="text-[24px] font-bold">Creation <br/> of HR Systems</h4>
                        <p className=" text-[16px] ">
                            Transform your HR process with customized systems 
                            built for efficiency, accuracy, and sustainable growth.
                        </p>
                        <p className="text-[16px] ">
                            Better people management starts with clear processes, 
                            reliable support, and strategic human resource systems.
                        </p> 
                        <figure className="mt-5 w-full overflow-hidden h-60">
                            <img src={sysImg} alt="" className="w-full h-full" />
                        </figure>  
                    </div> 
                    <Link to='/services' className=" font-light text-slate-900 hover:text-red-950 w-fit">learn more</Link>
                </article> 

                
                    <article className="relative z-10 cursor-poiter p-5 flex flex-col gap-2 h-140  bg-white rounded-md hover:shadow-zinc-400 transition-all duration-500">
                            
                            <div className="absolute top-5 left-0 px-4 py-2 w-2/10  back-drop-blur bg-black   rounded-r-full  ">
                                <RiBarChartBoxLine className="size-8 text-white"/>
                            </div>
                            <div className=" mt-15 h-100 flex flex-col items-start text-blue-950 gap-3">
                                
                                <h4 className="text-[24px] font-bold">Job Evaluation <br/> and Salary Survey </h4>
                                <p className=" text-[16px] ">
                                    From sourcing to employee retention, we deliver a seamless 
                                    hiring experience taht secures long-term value for your
                                    organisation.
                                </p>
                                <p className="text-[16px] ">
                                    Better people management starts with clear processes, 
                                    reliable support, and strategic human resource systems.
                                </p> 
                                <figure className="mt-5 w-full overflow-hidden h-60">
                                    <img src={sysImg} alt="" className="w-full h-full" />
                                </figure>  
                            </div> 
                            <Link to='/services' className=" font-light text-slate-900 hover:text-red-950 w-fit">learn more</Link>
                    </article>

                  <article className="relative z-10 cursor-poiter p-5 flex flex-col gap-2 h-140  bg-white rounded-md hover:shadow-zinc-400 transition-all duration-500">
                    
                    <div className="absolute top-5 left-0 px-4 py-2 w-2/10 bg-black rounded-r-full">
                        <RiLineChartLine className="size-8 text-white"/>
                    </div>
                    <div className=" mt-15 h-100 flex flex-col items-start text-blue-950 gap-3">
                        
                        <h4 className="text-[24px] font-bold">Performance  <br/> Management</h4>
                        <p className=" text-[16px] ">
                            We implement performance systems that turn 
                            goals into measurable results, and employees into high performance.
                        </p>
                        <p className="text-[16px] ">
                            Turn workplace goals into measurable outcomes with structured 
                            performance tracking and continuous improvement systems.
                        </p> 
                        <figure className="mt-5 w-full overflow-hidden h-60">
                            <img src={sysImg} alt="" className="w-full h-full" />
                        </figure>  
                    </div> 
                    <Link to='/services' className=" font-light text-slate-900 hover:text-red-950 w-fit">learn more</Link>
                </article> 

                <article className="relative z-10 cursor-poiter p-5 flex flex-col gap-2 h-140  bg-white rounded-md hover:shadow-zinc-400 transition-all duration-500">
                    
                    <div className="absolute left-0 top-5 px-4 py-2 w-2/10 bg-black rounded-r-full">
                        <RiFileTextLine className="size-8 text-white"/>
                    </div>
                    <div className=" mt-15 h-100 flex flex-col items-start text-blue-950 gap-3">
                        
                        <h4 className="text-[24px] font-bold">Policies and <br/> Contract Formulation</h4>
                        <p className=" text-[16px] ">
                            We craft clear, compliant, and professional policies that 
                            protect your organisation and streghthen workplace interity.
                        </p>
                        <p className="text-[16px] ">
                            Turn workplace goals into measurable outcomes with structured 
                            performance tracking and continuous improvement systems.
                        </p> 
                        <figure className="mt-5 w-full overflow-hidden h-60">
                            <img src={sysImg} alt="" className="w-full h-full" />
                        </figure>  
                    </div> 
                    <Link to='/services' className=" font-light text-slate-900 hover:text-red-950 w-fit">learn more</Link>
                </article>
                 <article className="relative z-10 cursor-poiter p-5 flex flex-col gap-2 h-140  bg-white rounded-md hover:shadow-zinc-400  transition-all  duration-500 ">       
                            
                            <div className="absolute left-0 top-5 px-4 py-2 w-2/10 bg-black rounded-r-full">
                                <RiPresentationLine className="size-8 text-white"/>
                            </div>
                            <div className="mt-15 h-100 flex flex-col items-start text-blue-950 gap-3">
                                
                                <h4 className="text-[24px] font-bold">Training <br/> and Development  </h4>
                                <p className=" text-[16px] ">
                                    Ulock employee potential through targeted training programs designed 
                                    for real business impact.
                                </p>
                                <p className="text-[16px] ">
                                    Better people management starts with clear processes, 
                                    reliable support, and strategic human resource systems.
                                </p> 
                                <figure className="mt-5 w-full overflow-hidden h-60">
                                    <img src={sysImg} alt="" className="w-full h-full" />
                                </figure>  
                            </div> 
                            <Link to='/services' className=" font-light text-slate-900 hover:text-red-950 w-fit">learn more</Link>
                    </article> 
                </div>

                {/* CTA*/}
                <div className="relative w-full grid grid-cols-1 md:grid-cols-3 p-5 bg-black/90 rounded-md">
                  <div className="col-span-2  w-full h-full p-10 flex flex-col text-white/60 space-y-4 ">
                      <FaQuoteLeft className=""/>
                      <p className="px-4 text-[35px] font-semibold ">Great organisations are built on great people. Let us help you find, grow, and keep yours.</p>
                    <span className="inline-flex gap-1"> <b className="text-stone-400"> NanthConsults </b> <FiMapPin className="size-3 ml-10 translate-y-1.5"/> Lilongwe</span>  
                         
                  </div>
                  <div className="w-full h-full flex flex-col justify-between md:border-l md:border-white/30 p-8">
                            <button className="group cursor-pointer inline-flex justify-center items-center gap-3 p-5 bg-white   text-[18px] text-ascent font-bold rounded-md">Schedule a call <FaArrowRight 
                            className="animate-slider group-hover:[animation-play-state:paused]"/> </button>
                            <button className="cursor-pointer inline-flex justify-center items-center gap-3 p-5 border border-white/30   text-[18px] text-white font-bold rounded-md">Learn more</button>
                            <p className="text-center">No commitment required. <br/> Free initial consultation.</p>
                    </div>
                    <span className="hidden absolute bottom-0 w-full flex flex-col items-center text-black text-center">Explore more services <FaChevronDown className=""/> </span>

                </div>
               
                <div className="relative grid grid-cols-2 gap-6 mt-10">

                <article className="cursor-pointr p-5 flex flex-col h-80 shadow-zinc/200 shadow-sm bg-white text-black rounded-md hover:shadow-zinc-400 transition-all duration-500">
                    
                    <div className="p-1 bg-black back-drop-blur w-fit rounded-md">
                        <RiShieldCheckLine className="size-10 text-white"/>
                    </div>
                    <div className="py-2 flex flex-col md:justify-between gap-3 sapce-y-3 h-1/2">
                        
                        <h4 className="text-[16px] md:text-md font-bold text-tone-600">Integrated Management Systems</h4>
                        <p className="text-gray-500 text-[16px] leading-relaxed">
                            From implementation to audit, we deliver IMS solutions that position your business for global standards.
                        </p> 
                      <Link to='/services' className="font-semibold text-slate-900 hover:text-red-950 w-fit">View more</Link>
                        
                    </div> 
                </article>

                <article className="cursor-ponter p-5 flex flex-col h-80 shadow-zinc/200 shadow-sm bg-white text-black  rounded-md hover:shadow-zinc-400 transition-all duration-500">
                    
                    <div className="p-1 bg-black back-drop-blur w-fit rounded-md">
                        <RiServerLine className="size-10 text-white"/>
                    </div>
                    <div className="py-2 flex flex-col md:justify-between gap-3 spce-y-3 h-1/2">
                        
                        <h4 className="text-[16px] md:text-md font-bold text-sne-600">HR Outsourced Service </h4>
                        <p className="text-ay-500 text-[16px] leading-relaxed">
                           We provide reliable, end-to-end HR support that ensures efficiency, compliance, and peace of mind.
                        </p> 
                      <Link to='/services' className="font-semibold text-slate-900 hover:text-red-950 w-fit">View more</Link>
                        
                    </div> 
                </article>
                </div>
                
        

              

                

               </section>
       )
}