import { useState } from "react"

import { FaSignInAlt } from "react-icons/fa"
import { FcMenu } from "react-icons/fc"
import { FaArrowDown } from "react-icons/fa"
import { FiArrowRight } from "react-icons/fi"
import { MdArrowDropDown, MdArrowForward} from "react-icons/md"
import { FaUser } from "react-icons/fa"
import { FiMail } from "react-icons/fi"
import { AiOutlineClose } from "react-icons/ai"
import { FiEdit } from "react-icons/fi"
import { NavLink, Link } from "react-router-dom"



export default function NavBar(){

          {/* menu show/hide */}
          const [open, setOpen]=useState(false)
          const openMenu = ()=>{
                setOpen(true)    
          }
          const closeMenu = ()=>{
                setOpen(false)    
          }

          {/*menu services show/hide */}
          const [display, setDisplay] =useState(false)
          const toggleDisplay=()=>{
                setDisplay(!display)    
          }

          return(
                 <header className="sticky top-0 w-full bg-white z-100">
                    <div className=" w-full py-2 flex flex-row justify-between px-5 md:px-25">
                             <NavLink to='/'>
                                <div className="gap-5">
                                    <h2 className="text-ascent font-bold text-sm">Nanths Consults</h2>
                                    <p className="hidden text-[12px] font-semibold">A step closer to reliable HR & Adminstration solutions</p>
                                </div>
                            </NavLink>
                            <div className="inline-flex gap-5">
                                <span className="hidden  cursor-pointer md:inline-flex gap-2 font-semibold text-ascent hover:text-ascent/70"><FaUser className="size-5"/> LogIn</span>
                                <span className="hidden cursor-pointer md:inline-flex gap-2 font-semibold text-ascent hover:text-ascent/70"><FiMail className="size-5.5"/> Email</span>
                                <Link to='/blog'>
                                   <span className="cursor-pointer inline-flex gap-2 font-semibold text-ascent hover:text-ascent/70"><FiEdit className="size-5.5"/> NewsLeter</span>
                                </Link>
                            </div>
                    </div>
                    
                    <div  className=" w-full px-5 md:px-25 py-1 flex flex-row justify-between align-center shadow-md bg-black/90">
                            <div className=" h-full flex flex-row justify-between text-zinc-50 py-1">
                                
                                <span className="inline-flex gap-2 font-semibold cursor-pointer" 
                                      onClick={openMenu}>
                                    <FcMenu className="size-6 text-zinc-900"/> 
                                    Menu
                                </span>
                                

                            </div> 
                            <NavLink to='/contact' className="cursor-pointer p-1 px-5 border border-white/30  rounded-md font-semibold text-white/80 bg-amer-800 hover:bg-ascent/20">Contact</NavLink>       
                    </div>
                    {/*Nav menu */}
                    {/*overlay */}
                        {open&&<div onClick={closeMenu} className="cursor-pointer absolute inset-0  w-full h-[100vh] bg-black/90 transition-all duration-500"></div>}
                    <div className={`${open ? 'left-0 opacity-100' : 'left-[-550px] opacity-0'} z-1000 transition-all duration-500 absolute top-0 w-full md:w-[350px] min-h-[100vh] border bg-white font-semibold p-3 box-border text-gray-500`}>
                        
                        <div className="w-full flex flex-col items-end">
                                <AiOutlineClose 
                                  className="size-7 rounded-full text-red-800 hover:scale-102 cursor-pointer"
                                onClick={closeMenu}
                                />
                        </div>
                        <ul className="space-y-2 mt-4">
                            <NavLink to='/'  onClick={closeMenu }
                                 className="hover:text-ascent mt-2 cursor-pointer"
                            >
                                Home
                            </NavLink>

                            <div className="my-2">
                                <span className="inline-flex gap-3 hover:text-ascent cursor-pointer" 
                                      onClick={toggleDisplay}> 
                                      Services <MdArrowDropDown className="size-6"/>
                                </span>
                                <ul className={`${display? 'h-fit opacity-100': ''}h-fit opacity-100  font-light py-2 transition-all duration-500 overflow-hidden px-2 text-[16px] `}>
                                   <NavLink to='/services'
                                   
                                   onClick={closeMenu }
                                   > 
                                        <li className="cursor-pointer border-t border-t-gray-300  border-b border-b-gray-300 p-2 bg-gray-100 hover:bg-gray-300 transition-all duration-300">Talent Acquisition & Rentention</li>
                                  </NavLink>

                                   <NavLink to="/services"    
                                              onClick={
                                               closeMenu
                                            }
                                              
                                    
                                    >
                                           
                                         <li  className="cursor-pointer border-b border-b-gray-300  p-2 bg-gray-100 hover:bg-gray-300 transition-all duration-300">Creation of HR System</li>
                                    </NavLink>

                                    <NavLink to='/services'
                                           onClick={closeMenu }
                                           >
                                         <li  className="cursor-pointer border-b border-b-gray-300 p-2 bg-gray-100 hover:bg-gray-300 transition-all duration-300">Job Evaluation & Salary Survey</li>
                                    </NavLink>
                                     <Link to='/services#performance'  onClick={closeMenu }>
                                         <li   className="cursor-pointer border-b border-b-gray-300  p-2 bg-gray-100 hover:bg-gray-300 transition-all duration-300">Perfomance management </li>
                                    </Link>
                                     <NavLink to='/services'  onClick={closeMenu }>
                                         <li  className="cursor-pointer border-b border-b-gray-300  p-2 bg-gray-100 hover:bg-gray-300 transition-all duration-300">Organizational Design and Business Development</li>
                                    </NavLink> 
                                     <NavLink to='/services'  onClick={closeMenu }>
                                         <li  className="cursor-pointer border-b border-b-gray-300  p-2 bg-gray-100 hover:bg-gray-300 transition-all duration-300">Policies and Contract Formulation </li>
                                    </NavLink>
                                     <NavLink to='/services'  onClick={closeMenu }>
                                         <li  className="cursor-pointer border-b border-b-gray-300 p-2 bg-gray-100 hover:bg-gray-300 transition-all duration-300">Training and Development</li>
                                    </NavLink>
                                     <NavLink to='/services'  onClick={closeMenu }>
                                         <li  className="cursor-pointer border-b border-b-gray-300  p-2 bg-gray-100 hover:bg-gray-300 transition-all duration-300">HR Outsourcing Services</li>
                                    </NavLink>
                                     <NavLink to='/services'  onClick={closeMenu }>
                                         <li  className="cursor-pointer border-b border-b-gray-300  p-2 bg-gray-100 hover:bg-gray-300 transition-all duration-300">Integrated Management Systems</li>
                                    </NavLink>
                                </ul>
                                
                            </div>
                             
                            <NavLink to='/about'  onClick={closeMenu }><li className="hover:text-ascent cursor-pointer">About</li></NavLink>
                            <NavLink to='/contact'  onClick={closeMenu }><li className="hover:text-ascent cursor-pointer">Contact</li></NavLink>
                        </ul>
                        
                        <button  onClick={closeMenu } className="cursor-pointer mx-auto flex flex-row justify-center text-white bg-amber-800 gap-5 rounded-sm border w-full md:w-[90%] p-2">
                               <FaUser className="size-6"/> LogIn
                        </button>


                    </div>
                    
                </header> 
          )
}