import NavBar from "../components/navBar"
import CTA from "../components/home components/CTA"
import Footer from "../components/footer"
import { NavLink } from "react-router-dom"
import { BsCheckCircleFill, BsArrowBarDown, BsArrowDown } from "react-icons/bs"
import { HiArrowDown } from "react-icons/hi"
import { MdArrowDropDown } from "react-icons/md"
import data from "../data/services"
import Service from "../components/sercives components/service"

import image from "../assets/images/contact/shero.jpeg"
import { useState } from "react"



export default function Services(){
         
          const [expandedId, setExpandedId]= useState(null)
          const toggleExpansion =(id)=>{
            setExpandedId(expandedId===id ? null: id)
            
          }

          return(
                  <>
                     <NavBar/>
                    <header id="top" className="relative w-full h-[30vh] bg-gradient-to-tr from-black via-black/80 to-gray-200 mb-8">
                       <img src={image} alt="explore our services" className="absolute inset-0 object-cover w-full h-full mix-blend-overlay"/>
                    </header>

                     <section  className="w-full p-5 md:px-25"> 
                        <h1  className="font-bold text-[20px] text-black/90 mb-8">Reliable HR Solutions for your business</h1>
                        <p></p>
                        <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-4 md:rid-rows-2  w-full gap-3">
                           
                            <div className=" flex flex-col gap-8 col-span-1 md:col-start-1 md:row-start-1 md:col-span-3 w-full h-full">
                                <h2 className="md:idden text-[20px] font-semibold text-gray-800 mt-3">Explore our services</h2>
                                
                                 {data.map((item)=>(
                                      <Service key={item.id}
                                      {...item}
                                      isExpanded={expandedId===item.id}
                                      onToggle={()=>toggleExpansion(item.id)}
                                      />

                                 ))}
                            </div>

                            <div className="md:sticky top-50 md:-translate-y-22 row-start-1 col-start-1 md:col-start-4 w-full h-fit">
                                <h2 className="font-semibold text-black/80 mb-3">Services Overview</h2>
                                <ul className="text-black/70">
                                        <NavLink to="#top"
                                              onClick={(e) => {
                                                e.preventDefault();
                                                document.getElementById("top")
                                                  ?.scrollIntoView({ behavior: "smooth" });
                                              }}> 
                                           <li className="cursor-pointer border-t border-t-gray-300/50  border-b border-b-gray-300 p-2 bg-gray-100 hover:bg-stone-200 transition-all duration-300">Recruitment & talent acquisiton</li>
                                        </NavLink>

                                        <NavLink to="#hrSystems"
                                              onClick={(e) => {
                                                e.preventDefault();
                                                document.getElementById("hrSystems")
                                                  ?.scrollIntoView({ behavior: "smooth" });
                                              }}>
                                           <li  className="cursor-pointer border-b border-b-gray-300/50  p-2 bg-gray-100 hover:bg-stone-200 transition-all duration-300">HR Systems Creation</li>
                                        </NavLink>
                                        <NavLink to="#evaluation"
                                              onClick={(e) => {
                                                e.preventDefault();
                                                document.getElementById("evaluation")
                                                  ?.scrollIntoView({ behavior: "smooth" });
                                              }}>
                                            <li  className="cursor-pointer border-b border-b-gray-300/50 p-2 bg-gray-100 hover:bg-stone-200 transition-all duration-300">Job Evaluation and Salary Survey</li>
                                        </NavLink>
                                        <NavLink to="performance"
                                              onClick={(e) => {
                                                e.preventDefault();
                                                document.getElementById("performance")
                                                  ?.scrollIntoView({ behavior: "smooth" });
                                              }}>
                                            <li   className="cursor-pointer border-b border-b-gray-300/50  p-2 bg-gray-100 hover:bg-stone-200 transition-all duration-300">Perfomance management </li>
                                        </NavLink>
                                        <NavLink to="#org"
                                              onClick={(e) => {
                                                e.preventDefault();
                                                document.getElementById("org")
                                                  ?.scrollIntoView({ behavior: "smooth" });
                                              }}>
                                            <li  className="cursor-pointer border-b border-b-gray-300/50  p-2 bg-gray-100 hover:bg-stone-200 transition-all duration-300">Organizational Design and Business Development </li>
                                        </NavLink>
                                        <NavLink to="#training"
                                              onClick={(e) => {
                                                e.preventDefault();
                                                document.getElementById("training")
                                                  ?.scrollIntoView({ behavior: "smooth" });
                                              }}>
                                             <li  className="cursor-pointer border-b border-b-gray-300/50 p-2 bg-gray-100 hover:bg-stone-200 transition-all duration-300">Training and Development</li>
                                        </NavLink>
                                        <NavLink to="#policies"
                                              onClick={(e) => {
                                                e.preventDefault();
                                                document.getElementById("policies")
                                                  ?.scrollIntoView({ behavior: "smooth" });
                                              }}>
                                             <li  className="cursor-pointer border-b border-b-gray-300/50  p-2 bg-gray-100 hover:bg-stone-200 transition-all duration-300">Policies and Contract Formulation</li>
                                        </NavLink>
                                        <NavLink to="#hrSourcing"
                                              onClick={(e) => {
                                                e.preventDefault();
                                                document.getElementById("hrSourcing")
                                                  ?.scrollIntoView({ behavior: "smooth" });
                                              }}>
                                             <li  className="cursor-pointer border-b border-b-gray-300/50  p-2 bg-gray-100 hover:bg-stone-200 transition-all duration-300">HR Outsourcing Services</li>
                                        </NavLink>
                                        <NavLink to="#managementSystems"
                                              onClick={(e) => {
                                                e.preventDefault();
                                                document.getElementById("managementSystems")
                                                  ?.scrollIntoView({ behavior: "smooth" });
                                              }}>
                                             <li  className="cursor-pointer border-b border-b-gray-300/50  p-2 bg-gray-100 hover:bg-stone-200 transition-all duration-300">Integrated Management Systems</li>
                                        </NavLink>
                                        
                                </ul>
                          </div>

                        </div>
                        
                     </section>
                     <CTA/>
                     <Footer/>
                  </>
          )
}