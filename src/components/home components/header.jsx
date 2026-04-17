import { BsBarChartFill, BsFileBarGraph } from "react-icons/bs"
import { AiOutlineUser } from "react-icons/ai"
import { FiArrowUp, FiBriefcase, FiCheckCircle} from "react-icons/fi"
import { BsArrowBarLeft } from "react-icons/bs"
import { HiArrowDown } from "react-icons/hi"
import { FaArrowDown } from "react-icons/fa"
import { HiOutlineUserGroup } from "react-icons/hi2"
import { MdBarChart, MdArrowBack } from "react-icons/md"
import { BsBarChart } from "react-icons/bs"

import image1 from "../../assets/images/hero/hero1.jpeg"
import policyImg from "../../assets/images/hero/slider/hero.jpeg"
import trainingImg from "../../assets/images/hero/slider/t&d.jpeg"

import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import { motion, AnimatePresence} from "framer-motion"

import { caption, image } from "framer-motion/client"

                                const services=[
                                    {
                                        id:1,
                                        image:image1,
                                        sercive:'Talent Acquisition'
                                    },
                                    {
                                        id:1,
                                        image:policyImg,
                                        sercive:'HR Systems Creation'
                                    },
                                    {
                                        id:1,
                                        image:trainingImg,
                                        sercive:'Job Evaluation and Salary Survey'
                                    },
                                    {
                                        id:1,
                                        image:policyImg,
                                        sercive:'Performance Management'
                                    },
                                    {
                                        id:1,
                                        image:image1,
                                        sercive:'Organizational Design and Business Development'
                                    },
                                    {
                                        id:1,
                                        image:policyImg,
                                        sercive:'Policies and Contract Formulation'
                                    },
                                    {
                                        id:1,
                                        image:trainingImg,
                                        sercive:'Training and Development'
                                    },
                                    {
                                        id:1,
                                        image:image1,
                                        sercive:'HR Outsourcing'
                                    },
                                    {
                                        id:1,
                                        image:trainingImg,
                                        sercive:'Integrated Management Systems'
                                    },
                                ]

                                const variants={
                                    enter:(direction)=>({x:direction>0?300:-300, opacity:0}),
                                    center:{x:0, opacity:1},
                                    exit:(direction)=>({x:direction>0?-300:300, opacity:0})
                                }

export default function Header(){




             const [[index, direction], setIndex]=useState([0, 0]);
             const serviceImage=services[index].image
             const serviceName=services[index].sercive
            
             const paginate =(newDirection)=>{
                  setIndex(([prev])=>{
                    let next=prev+ newDirection;
                    if(next<0){
                        next=services.length-1
                    }
                    if(next>=services.length){
                        next=0
                    }
                    return[next, newDirection]
                })      
             }
             const prevIndex =()=>{
                  setIndex((prev)=>prev===0 ? services.length-1 : prev-1)      
             }

             useEffect(()=>{
                 const interval =setInterval(()=>{
                    paginate(1);
                 }, 10000);
                 return ()=> clearInterval(interval);
             }, [paginate]);
            




             return(
                     <div className="w-full md:max-w-[1440px] h-[100vh] md:min-h-[93vh]">
                           <section className="relative w-full h-6/10 md:h-8/10 bg-[#f7f7f7]/80 gradient-to-r  from-violet-50 via-violet-100 to-slate-900/70 ">
                              <img src={image1}
                                   alt=" Timely HR solutions" className="hiddn absolute inset-0 w-full h-full object-cover blur-sm mix-blend-overlay"/>
                              <div className="absolute top-1/10 md:top-2/10 left-1/2 -translate-x-1/2 w-full md:w-[85%] overflow-hidden mx-auto flex flex-col md:flex-row ">
                                       <div className="text-black/90  my-auto h-fit gap-8 space-y-3 md:space-y-6">
                                            <h1 className=" text-3xl md:text-[35px] w-full md:w-8/10 text-center md:text-left font-bold leading-tight uppercase">Strategic HR Solutions that Drive Business Growth</h1>
                                            
                                            <p className="w-full md:w-6/10 text-[17px] text-center text-wh70 md:text-left"> Build stronger HR systems, reliable compliance, 
                                                    and a high-performing team.
                                            </p>

                                            <div className="space-x-4 flex flex-col items-center md:inline">
                                                
                                                    <NavLink to='contact' className=" px-2 py-1.5 font-semibold bg-amber-800 my-3 rounded-[20px] shadow-sm text-white/80 inline-flex gap-2 hover:opacity-70">
                                                            Book a Consultation <FiArrowUp className=" border rounded-full size-6 rotate-40"/>
                                                    </NavLink>
                                                
                                                <NavLink 
                                                        to="services"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            document.getElementById("services")
                                                            ?.scrollIntoView({ behavior: "smooth" });
                                                        }}
                                                        className=" px-2 py-1.5 font-semibold my-3 text-whte/80 rounded-[20px] border border-amber-600/70 inline-flex gap-2 hover:opacity-70">
                                                        View our Services
                                                </NavLink>
                                            </div>
                                        </div>
                                <aside className="hidde relative w-fit inline-flex gap-5 overflow-hidden rounded-lg">
                                    <figure className="hidden md:block w-[330px] m-auto h-65 bg-gradient-to-tr from-black/70 to-gray-600 rounded-lg">
                                        
                                        <AnimatePresence custom={direction}>
                                          <motion.img
                                              key={index} 
                                              src={serviceImage} alt="contact us" className="w-full h-full rounded-md mix-blend-overlay"
                                              custom={direction}
                                              variants={variants}
                                              initial='enter'
                                              animate='center'
                                              exit='exit'
                                              transition={{duration:0.5}}
                                              style={{
                                                position:"absolute",
                                                width:'100%',
                                                height:'100%'
                                              }}
                                              
                                              />
                                              
                                        
                                        </AnimatePresence>
                                    
                                        <AnimatePresence custom={direction}>

                                            <motion.figcaption className="  text-white/80  left-[50%] text-center text-3xl font-bold"
                                              key={index} 
                                              
                                              
                                              custom={direction}
                                              variants={variants}
                                              initial='enter'
                                              animate='center'
                                              exit='exit'
                                              transition={{duration:0.5}}
                                              style={{
                                                position:"absolute",
                                                top:'30%',
                                                left:'50%',
                                                translate:'-50%',
                                                width:'100%',
                                                height:'100%'
                                              }}
                                            >
                                            {serviceName}
                                            </motion.figcaption>

                                        </AnimatePresence>
                                        
                                    </figure>
                                    <span className="hover:group-translate-y-25 px-2 inline-flex items-center justify-between w-full h-10 absolute top-[50%] text-white/60 -translate-[50%] left-[50%]">
                                        <MdArrowBack onClick={()=>paginate(-1)}  className="cursor-pointer size-6 rounded-full border hover:scale-110 transition-all duration-300"/>
                                        <MdArrowBack onClick={()=>paginate(1)} className="cursor-pointer size-6 rotate-180 rounded-full border hover:scale-110 transition-all duration-300"/>
                                    </span>
                                </aside>

                              </div>
                           
                           </section>
   
                            <section className="w-full max-w-[1440px] h-fit px-5 md:px-25 py-3 md:py-0  text-white/80 bg-[#000]/90 roundedxl">
                                <div className="gap-5 flex flex-col md:flex-row items-center justify-between">
                                    <div className=" w-fit inline-flex align-center gap-2">
                                        <div className=" bg-gradientto-tr from-ascent to-zinc-700 rounded-md"> <BsBarChartFill className="size-12"/></div>
                                        <span className="-space-y-1"> 
                                            <p className="font-semibold"><strong className="text-[20px] font-bold">10+</strong> Years Experience</p>
                                            <p>Trusted HR & Admin advisory</p>
                                        </span>
                                    </div>
                                    <div className=" w-fit h-full inline-flex align-center gap-2">
                                        <AiOutlineUser className="size-12 my-auto"/>
                                        <span className="-space-y-1"> 
                                            <p className="font-semibold"><strong className="text-[25px] font-bold">20+</strong> Clients Served</p>
                                            <p>Across multiple sectors</p>
                                        </span>

                                    </div>
                                    <div className=" w-fit h-full inline-flex items-center gap-2">
                                        <FiCheckCircle className="size-12 my-auto translate-y-2"/>
                                         
                                        <span className="-space-y-1"> 
                                            <p className="font-semibold"><strong className="text-[25px] font-bold"></strong> Compliance and efficiency</p>
                                            <p>Reduce risks, improve operation</p>
                                        </span>
                                        

                                    </div>
                                </div>
                           </section>

                     </div>
             )
}