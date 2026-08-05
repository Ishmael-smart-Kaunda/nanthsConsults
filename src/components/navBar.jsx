
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

import { supabase } from "../utils/supabaseClient"


const API_URL = import.meta.env.VITE_BACKEND_URL?.replace(/\/$/, "") ??
  "http://localhost:3000";

export default function NavBar(){

          {/*menu show/hide*/}
          const [open, setOpen]=useState(false)
          const openMenu = ()=>{
                setOpen(true)    
          }
          const closeMenu = ()=>{
                setOpen(false)    
          }

          {/*Sign Up form toggle show*/}
          const [show, setShow]=useState(false)
          const toggleSignUp = ()=>{
                setShow(!show)    
          }
         
          {/*isClose for toggling overlay */}
          let isClose = (open || show)? true : null
          
          const [formData, setFormData ] = useState({
            email: ""
          })

          const [submitted, setSubmitted] = useState(false)
          const [loading, setLoading] = useState(false)
          const [error, setError] = useState('')

          const handleInputChange = (e) => {
            const {name, value } = e.target

            setFormData(prev => ({
                ...prev,
                [name]: value
            }))
          }

          console.log(formData)

const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)
    setError("")
    setSubmitted(false)

    

    try {
        // const response = await fetch(
        //     `${API_URL}/api/create-newsletter-subscription`,
        //     {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify(payload)
        //     }
        // )

        // const data = await response.json()

        // if (!response.ok || !data.success) {
        //     throw new Error(
        //         data.message || "Newsletter subscription failed"
        //     )
        // }

              const payload = {
                email: formData.email
              }
        
                    const { data, error } = await supabase
          .from("newsletter_subscribers")
          .insert([
            {
              email: formData.email,
            },
          ])
          .select();
        
        console.log("Inserted:", data);
        
        if (error) {
          console.error(error);
          throw new Error(error.message);
        }
        

        setSubmitted(true)

        setFormData({
            email: ""
        })

    } catch (error) {

        setError(
            error instanceof Error
                ? error.message
                : "Something went wrong. Please try again."
        )

    } finally {
        setLoading(false)
    }
}
          const resetAndClose = () => {
    setError("")
    setSubmitted(false)
    setLoading(false)

    setFormData({
        email: ""
    })

    setShow(false)
}

          return(
                 <header className=" w-full">
                    <div className="fixed top-0 z-100 bg-white w-full  flex flex-row justify-between px-5 md:px-25">
                             <NavLink to='/'>
                                <div className="inline-flex">
                                    <img src={logo} alt="" className="size-12 " />
                                    <div className="hidden pt-2">
                                        <h2 className="text-ascent font-bold text-sm">Nanth Consults</h2>
                                        <p className="w-45 text-[12px] font-light">A step closer to reliable HR & Adminstration solutions</p>
                                    </div>
                                </div>
                            </NavLink>
                            <div className="inline-flex items-center font-semibold gap-8">
                                <span onClick={toggleSignUp} 
                                      className="hidden  cursor-pointer md:inline-flex gap-1 text-black/80 hover:text-amber-800"
                                      >
                                        <FiUser className="size-5 translate-y-0.2"/> Sign Up
                                </span>

                                <a href="mailto:info@nanthsconsults.com" className="hidden cursor-pointer md:inline-flex gap-1 font-norm text-black/80 hover:text-amber-800">
                                      <FiMail className="size-4 translate-y-1"/> 
                                      Email
                                </a>
                                <Link to='/blog' className="group">
                                   <span className="cursor-pointer inline-flex gap-1 font-semld text-black/80 hover:text-amber-800"><FiFileText className="text-gray-700 group-hover:text-amber-800 size-4 translate-y-1"/> Blog</span>
                                </Link>
                            </div>
                        {/*overlay */}
{isClose && (
    <div
        onClick={() => {
            setOpen(false)
            setShow(false)
        }}
        className="
            cursor-pointer
            fixed
            inset-0
            bg-black/70
            z-50
        "
    />
)}                    </div>
                    
                    <div  className="mt-16 w-full px-5 md:px-25 py-3 flex flex-row justify-between items-center bg-black">
                            <div className="flex flex-row justify-between text-[#fff]">    
                                <span className="inline-flex gap-2 font-semibold cursor-pointer" 
                                      onClick={openMenu}>
                                    <AiOutlineMenu className="size-6.5"/> 
                                    Menu
                                </span>
                            </div> 
                            <NavLink to='/contact' 
                                     className="cursor-pointer p-3 md:px-6 md:py-3 rounded-sm font-semibold text-[18px] text-white /80 bg-ascent">
                                        Get Started
                            </NavLink>       
                    </div>
                    {/*Nav menu */}
       
                    <div className={
                         `
                         fixed
                         top-0 w-full 
                         md:w-[350px] 
                         min-h-[100vh] 
                         ${open ? 
                            'left-0 opacity-100' 
                            : 
                            'left-[-550px] opacity-0'
                          } 
                         z-1000 transition-all 
                         duration-500  
                         bg-white 
                         font-semibold 
                         p-3`}>
                        
                        <div className="w-full px-5 flex flex-col items-end">
                                <MdOutlineClose 
                                  className="size-6 rounded-full bg-black/20 text-white hover:scale-105 cursor-pointer"
                                  onClick={closeMenu}
                                />
                        </div>
                        <div className=" mt-4 flex flex-col gap-8 font-normal px-5 py-8 text-[22px]">
                            <NavLink to='/'  onClick={closeMenu } className="ursor-pointer inline-flex justify-between  items-center gap-3 borblack/15 p-2 rounded-md hover:bg-black/3 hover:text-amber-800 transition-all duration-300">Home <HiChevronRight className="size-5"/></NavLink>
                            <NavLink to='/services'  onClick={closeMenu } className=" cursor-pointer  inline-flex justify-between  items-center gap-3  p-2 rounded-md hover:bg-black/3 hover:text-amber-800 transition-all duration-300">Our services <HiChevronRight className="size-5"/></NavLink> 
                            <NavLink to='/about'    onClick={closeMenu } className=" cursor-pointer  inline-flex justify-between  items-center gap-3  p-2 rounded-md hover:bg-black/3 hover:text-amber-800 transition-all duration-300">About Us <HiChevronRight className="size-5"/></NavLink>
                            <NavLink to='/contact'  onClick={closeMenu }className=" cursor-pointer  inline-flex justify-between  items-center gap-3 p-2 rounded-md hover:bg-black/3 hover:text-amber-800 transition-all duration-300">Contact Us <HiChevronRight className="size-5"/></NavLink>
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
                    
                    <div className={`fixed ${show ? 'opacity-100 left-[50%] translate-x-[-50%]' :'opacity-0 left-[200%] translate-x-[-50%]'} top-[53%] rounded-sm -translate-y-[50%] bg-white transition-all duration-500 z-100 w-9/10 md:w-[400px] e px-5 py-10 h-fit flex flex-col `}>
                        <button onClick={()=>{resetAndClose()}} className="cursor-pointer w-fit bg-gray-300 rounded-full p-1  self-end">
                            <AiOutlineClose className="size-5  text-gray-600 hover:scale-115 transition-all duration-500"/>
                        </button>
                        <div className="mx-auto w-fit p-2 rounded-full bg-gradient-to-b from-amber-950 to-white">
                            <FaUser className="size-15 text-white/50 w-ful rounderder"/>
                        </div>
                         <h1 className=" text-center mt-5 text-black text-[20px] font-semibold my-4">Sign Up for Newsletter</h1>
                         <p className="text-center text-[18px] font-light">Get HR & Admin insights for your business growth</p>
                         {submitted && (
    <div
        className="
            mt-4
            bg-green-50
            border
            border-green-200
            text-green-700
            px-4
            py-3
            rounded-lg
            text-sm
            text-center
        "
    >
        ✓ Successfully subscribed to the newsletter.
    </div>
)}

{error && (
    <div
        className="
            mt-4
            bg-red-50
            border
            border-red-200
            text-red-700
            px-4
            py-3
            rounded-lg
            text-sm
            text-center
        "
    >
        {error}
    </div>
)}
                         <form onSubmit={handleSubmit} className="w-full my-10 flex flex-col gap-5">
                               
                               
                               <input 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    className="border border-black/10 p-2 w-full focus:outline-amber-800 shadow-sm rounded-sm bg-white "
                                    name="email"
                                    onChange={handleInputChange}
                                    value={formData.email}
                                />
                               <fieldset className="inline-flex gap-2 w-full">
<button
    type="submit"
    disabled={loading}
    className="
        cursor-pointer
        p-3
        w-full
        rounded-sm
        bg-ascent
        text-white
        font-semibold
        transition-all
        duration-300
        disabled:opacity-60
        disabled:cursor-not-allowed
    "
>
    {loading ? (
        <div className="flex items-center justify-center gap-2">
            <div
                className="
                    w-4
                    h-4
                    border-2
                    border-white/30
                    border-t-white
                    rounded-full
                    animate-spin
                "
            />
            <span>Subscribing...</span>
        </div>
    ) : (
        "Sign Up"
    )}
</button>                               </fieldset>    
                        </form>
                     
                    </div>
                         
                </header>

                
          )
}