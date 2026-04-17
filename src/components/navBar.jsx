import { useState } from "react"

import { FaSignInAlt } from "react-icons/fa"
import { FcMenu } from "react-icons/fc"
import { FaArrowDown } from "react-icons/fa"
import { FiArrowRight } from "react-icons/fi"
import { MdArrowDropDown, MdArrowForward} from "react-icons/md"
import { FaUser } from "react-icons/fa"
import { FiMail, FiUser } from "react-icons/fi"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
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
          {/* Sign Up form toggle show */}
          const [show, setShow]=useState(false)
          const toggleSignUp = ()=>{
                setShow(!show)    
          }
         
          {/*toggle overlay */}
          let isOpen=null;
          const toggleOverlay=()=>{
             if(open | show){
                isOpen=true;
             }
             else{
                isOpen=false;
             }
             return isOpen;
          }
          toggleOverlay()

          return(
                 <header className="sticky top-0 w-full bg-white z-100">
                    <div className=" w-full py-2 flex flex-row justify-between px-5 md:px-25">
                             <NavLink to='/'>
                                <div className="gap-5">
                                    <h2 className="text-ascent font-bold text-sm">Nanth Consults</h2>
                                    <p className="hidden text-[12px] font-semibold">A step closer to reliable HR & Adminstration solutions</p>
                                </div>
                            </NavLink>
                            <div className="inline-flex gap-5">
                                <span onClick={toggleSignUp} 
                                      className="hidden  cursor-pointer md:inline-flex gap-2 font-sebold text-black/80 hover:text-amber-800"
                                      >
                                        <FaUser className="size-5 translate-y-0.5"/> Sign Up
                                </span>

                                <span  className="hidden cursor-pointer md:inline-flex gap-2 font-norm text-black/80 hover:text-amber-800"><FiMail className="size-5 translate-y-0.5"/> Email</span>
                                <Link to='/blog'>
                                   <span className="cursor-pointer inline-flex gap-1 font-semld text-black/80 hover:text-amber-800"><FiEdit className="size-5 translate-y-0.5"/> NewsLeter</span>
                                </Link>
                            </div>
                    </div>
                    
                    <div  className=" w-full px-5 md:px-25 py-2 flex flex-row justify-between align-center shadow-md bg-[#000]">
                            <div className=" h-full flex flex-row justify-between text-[#fff] py-1">
                                
                                <span className="inline-flex gap-2 font-semibold cursor-pointer" 
                                      onClick={openMenu}>
                                    <AiOutlineMenu className="size-6.5"/> 
                                    Menu
                                </span>
                                

                            </div> 
                            <NavLink to='/contact' className="cursor-pointer p-1 px-5 border border-white/10  rounded-sm font-semibold text-white/80 bg-[#854836]">Contact</NavLink>       
                    </div>
                    {/*Nav menu */}
                    {/*overlay */}
                        {isOpen &&<div onClick={closeMenu} className="cursor-pointer absolute inset-0  w-full h-[100vh] bg-black/92 transition-all duration-500"></div>}
                    <div className={`${open ? 'left-0 opacity-100' : 'left-[-550px] opacity-0'} z-1000 transition-all duration-500 absolute top-0 w-full md:w-[350px] min-h-[100vh] bg-white font-semibold p-3 text-gray-500`}>
                        
                        <div className="w-full flex flex-col items-end">
                                <AiOutlineClose 
                                  className="size-7 rounded-full text-red-800 hover:scale-102 cursor-pointer"
                                onClick={closeMenu}
                                />
                        </div>
                        <div className="space-y-5 mt-4 flex flex-col">
                            <NavLink to='/'  onClick={closeMenu }
                                 className="hover:text-ascent cursor-pointer"
                            >
                              Home
                            </NavLink>
                                <span className="inline-flex gap-3 hover:text-ascent cursor-pointer h-2" 
                                        onClick={toggleDisplay}> 
                                        Services <MdArrowDropDown className="size-6"/>
                                </span>
                                <ul className={`${display? 'h-fit opacity-100 py-2': 'h-1 opacity-0'}  font-light transition-all duration-500 overflow-hidden px-2 text-[16px] `}>
                                   <NavLink to='/services' onClick={closeMenu }> 
                                        <li className="cursor-pointer border-t border-t-gray-300  border-b border-b-gray-300 p-2 bg-gray-100 hover:bg-gray-300 transition-all duration-300">Talent Acquisition & Rentention</li>
                                  </NavLink>

                                    <NavLink to="/services"onClick={closeMenu}>    
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
                             
                            <NavLink to='/about'    onClick={closeMenu }><li className="hover:text-ascent cursor-pointer">About</li></NavLink>
                            <NavLink to='/contact'  onClick={closeMenu }><li className="hover:text-ascent cursor-pointer">Contact</li></NavLink>
                        </div>
                        
                        <button  onClick={()=>{toggleSignUp(); closeMenu()}} className="sticky top-[90%] cursor-pointer mx-auto flex flex-row justify-center text-white bg-amber-800 gap-5 rounded-sm border w-full md:w-[90%] p-2">
                               <FaUser className="size-6"/> Sign Up
                        </button>


                    </div>
                    {/*sign up form*/}
                    <div className={`fixed ${show ? 'opacity-100 left-[50%] translate-x-[-50%]' :'opacity-0 left-[200%] translate-x-[-50%]'} top-[53%] rounded-sm -translate-y-[50%] bg-white transition-all duration-500 z-100 w-9/10 md:w-[400px] e px-5 py-10 h-fit`}>
                        <button onClick={toggleSignUp} className="cursor-pointer relative w-full hover:scale-110 transition-transiform duration-500">
                            <AiOutlineClose className="size-7 text-red-600 translate absolute left-[95%] -top-10"/></button>
                        <div className="mx-auto w-fit p-2 rounded-full bg-gradient-to-b from-amber-950 to-white">
                            <FaUser className="size-15 text-white/50 w-ful rounderder"/>
                        </div>
                         <h1 className=" text-center mt-5 text-black/90 text-[17px] font-semibold">Sign Up for Newsletter</h1>
                          <p className="text-center text-gray-500 text-[15px]">Get HR & Admin insights for your business growth</p>
                          <form className="w-full my-10 flex flex-col gap-5">
                               <fieldset className="inline-flex gap-3 w-full">
                                     <input type="text" placeholder="Name" className="border border border-black/10 p-2 w-full focus:outline-amber-800 shadow-sm rounded-sm bg-white "/>
                                    <input type="text" placeholder="Phone" className="border border-black/10 p-2 w-full focus:outline-amber-800 shadow-sm rounded-sm bg-white "/> 
                               </fieldset>
                               
                               <input type="text" placeholder="Email" className="border border-black/10 p-2 w-full focus:outline-amber-800 shadow-sm rounded-sm bg-white "/>
                               <fieldset className="inline-flex gap-2 w-full">
                                    
                                    <button className="cursor-pointer p-2 w-full rounded-sm bg-amber-700 text-white font-semibold">Sign Up</button>
                               </fieldset>
                               
                          </form>
                     
                    </div>
                         
                    
                </header> 
          )
}