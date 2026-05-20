import { useState } from "react"
import logo from "../assets/images/logo/nanth-logo.jpeg"

import { FaPenAlt, FaPenNib, FaSignInAlt } from "react-icons/fa"
import { FcMenu } from "react-icons/fc"
import { FaArrowDown } from "react-icons/fa"
import { FiArrowRight, FiFileText, FiHome, FiPenTool } from "react-icons/fi"
import { MdArrowDropDown, MdArrowForward, MdMail, MdOutlineArticle, MdOutlineClose, MdPinEnd} from "react-icons/md"
import { FaUser } from "react-icons/fa"
import { FiMail, FiUser } from "react-icons/fi"
import { AiFillCloseCircle, AiFillMail, AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import { FiEdit } from "react-icons/fi"
import { NavLink, Link } from "react-router-dom"
import { FaMicroblog, FaPenClip } from "react-icons/fa6"
import { HiArrowDown, HiChevronRight } from "react-icons/hi2"
import { HiMail } from "react-icons/hi"
import { CgMail } from "react-icons/cg"
import { BiMailSend } from "react-icons/bi"
import { BsMailbox2 } from "react-icons/bs"




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
                 <header className=" w-full  ">
                    <div className="fixed top-0 z-100 bg-white w-full flex flex-row justify-between px-5 md:px-25 shadow-s">
                             <NavLink to='/'>
                                <div className="inline-flex">
                                    <img src={logo} alt="" className="size-12 " />
                                    <div className="hidden pt-2">
                                        <h2 className="text-ascent font-bold text-sm">Nanth Consults</h2>
                                        <p className="w-45 text-[12px] font-light">A step closer to reliable HR & Adminstration solutions</p>
                                    </div>
                                </div>
                            </NavLink>
                            <div className="inline-flex items-center gap-8">
                                <span onClick={toggleSignUp} 
                                      className="hidden  cursor-pointer md:inline-flex gap-1 font-sebold text-black/80 hover:text-amber-800"
                                      >
                                        <FiUser className="size-5 translate-y-0.2"/> Sign Up
                                </span>

                                <span  className="hidden cursor-pointer md:inline-flex gap-1 font-norm text-black/80 hover:text-amber-800"><FiMail className="size-4 translate-y-1"/> Email</span>
                                <Link to='/blog'>
                                   <span className="cursor-pointer inline-flex gap-1 font-semld text-black/80 hover:text-amber-800"><FiFileText className="text-gray-700 size-4 translate-y-1"/> Blog</span>
                                </Link>
                            </div>
                    </div>
                    
                    <div  className="mt-16 w-full px-5 md:px-25 py-3 flex flex-row justify-between items-center bg-black">
                            <div className="flex flex-row justify-between text-[#fff]">
                                
                                <span className="inline-flex gap-2 font-semibold cursor-pointer" 
                                      onClick={openMenu}>
                                    <AiOutlineMenu className="size-6.5"/> 
                                    Menu
                                </span>
                                

                            </div> 
                            <NavLink to='/contact' className="cursor-pointer p-2 px-5 border border-white/10  rounded-sm font-semibold text-white/80 bg-[#854836]">Get Started</NavLink>       
                    </div>
                    {/*Nav menu */}
                    {/*overlay */}
                        {isOpen &&<div onClick={closeMenu} className="cursor-pointer absolute inset-0  w-full h-[100vh] bg-black/92 transition-all duration-500"></div>}
                    <div className={`${open ? 'left-0 opacity-100' : 'left-[-550px] opacity-0'} z-1000 transition-all duration-500 absolute top-0 w-full md:w-[350px] min-h-[100vh] bg-white font-semibold p-3`}>
                        
                        <div className="w-full px-5 flex flex-col items-end">
                                <MdOutlineClose 
                                  className="size-6 rounded-full bg-black/20 text-white hover:scale-105 cursor-pointer"
                                  onClick={closeMenu}
                                />
                        </div>
                        <div className=" mt-4 flex flex-col gap-8 font-normal px-5 py-8">
                            <NavLink to='/'  onClick={closeMenu } className="ursor-pointer inline-flex justify-between  items-center gap-3 borblack/15 p-2 rounded-md hover:bg-black/3 hover:text-blue-400 transition-all duration-300">Home <HiChevronRight className="size-3"/></NavLink>
                            <NavLink to='/services'  onClick={closeMenu } className=" cursor-pointer  inline-flex justify-between  items-center gap-3  p-2 rounded-md hover:bg-black/3 hover:text-blue-400 transition-all duration-300">Our services <HiChevronRight className="size-3"/></NavLink> 
                            <NavLink to='/about'    onClick={closeMenu } className=" cursor-pointer  inline-flex justify-between  items-center gap-3  p-2 rounded-md hover:bg-black/3 hover:text-blue-400 transition-all duration-300">About Us <HiChevronRight className="size-3"/></NavLink>
                            <NavLink to='/contact'  onClick={closeMenu }className=" cursor-pointer  inline-flex justify-between  items-center gap-3 p-2 rounded-md hover:bg-black/3 hover:text-blue-400 transition-all duration-300">Contact Us <HiChevronRight className="size-3"/></NavLink>
                        </div>
                        
                        <hr className="w-9/10 mx-auto opacity-10"/>

                        <figure className="w-7/10 mx-auto py-2 font-normal -space-y-6">
                            <img src={logo} alt="" className="mx-auto scale-50" />
                            <figcaption className="text-center text-[13px]">A step closer to your HR, admin business solutions</figcaption>

                        </figure>
                        
                        < button  onClick={()=>{toggleSignUp(); closeMenu()}} className="font-normal text-[15px] text-ascent underline cursor-pointer my-10 mx-auto flex flex-row justify-center  items-start border-none gap-2 w-full ">
                               <FaUser className="hidden size-5"/> Sign up for newsletter
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