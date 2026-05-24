import { RiFacebookBoxLine } from "react-icons/ri"
import { RiFacebookBoxFill, RiLinkedinBoxFill,RiInstagramFill } from "react-icons/ri"
import { Link, NavLink } from "react-router-dom"
import { VscArrowSmallRight } from "react-icons/vsc";

import logo from "../assets/images/logo/nanth-logo.jpeg"


export default function Footer(){
    return(
        <footer className="w-full px-5 md:pt-15 md:pb-5 bg-black min-h-[100px]">

            {/* Set up of a 3 col grid if large screen size, 1 col in mobile, and 2 on a tablet */}
            <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                
                {/* Logo + Hook */}
                <div className="flex flex-col justify-between gap-6">
                    <img className="size-30" src={logo} alt="Company Logo"/>
                    <h2 className="font-semibold text-lg md:text-2xl lg:text-3xl text-white/80">
                        Strategic Support for Growing Organizations.
                    </h2>
                </div>

                {/* Site Links + Booking CTA */}
                <div className="flex flex-col gap-6 p-5">

                    {/* Links */}
                    <div className="flex flex-col gap-0.5 w-[30%]">
                        <NavLink to="services">
                            <p className="bg-white/80 py-2 text-center cursor-pointer  px-4">
                                Services
                            </p>
                        </NavLink>
                        <NavLink to="contact">
                            <p className="bg-white/80 py-2 text-center cursor-pointer px-4">
                                Contact
                            </p>
                        </NavLink>
                        <NavLink to="about">
                            <p className="bg-white/80 py-2 text-center cursor-pointer  px-4">
                                About
                            </p>
                        </NavLink>
                        <NavLink to="blog">
                            <p className="bg-white/80 py-2 text-center cursor-pointer  px-4">
                                Blog
                            </p>
                        </NavLink>
                    </div>

                    {/* CTA */}
                    <div className="flex justify-between items-center">
                        <p className="bg-white/80 py-2 px-3 flex-[80%]">
                            Book a Consultation
                        </p>
                        <NavLink to="contact">
                            <div className="bg-ascent flex-1 py-2 px-3 cursor-pointer">
                                <VscArrowSmallRight 
                                    size={24}
                                />
                            </div>
                        </NavLink>
                    </div>
                </div>

                {/* Newsletter Hook + CTA */}
                <div className="p-5 flex flex-col gap-8 bg-[#444444]">

                    {/* newsletter input and submission */}
                    <div className=" w-full ">
                        <div className="flex items-center mb-1">
                            <input 
                                type="text"
                                placeholder="Email"
                                className="bg-white/80 py-2 px-3 outline-0 border-0" 
                            />
                            <button className="bg-ascent py-2 px-3 cursor-pointer">
                                <VscArrowSmallRight size={24} />
                            </button>
                        </div>
                        <small className="text-white/80">
                            By providing this information you agree to be informed about
                            Nanths Consults services.
                        </small>
                    </div>

                    

                    <div className="">
                        <h3 className="font-semibold text-lg md:text-xl text-blue-100">
                            Receive the latest updates on workforce management, 
                            organizational growth, and HR best practices.
                        </h3>
                    </div>
                </div>
            </div>   

            <div className="flex items-center justify-between p-5">

                {/* Social Links */}
                <div className="flex gap-0.5">
                    <Link to="#">
                        <RiFacebookBoxFill color="white" size={35} className="cursor-pointer"/>
                    </Link>
                    <Link to="#">
                        <RiLinkedinBoxFill color="white" size={35} className="cursor-pointer"/>
                    </Link>
                    <Link to="#">
                        <RiInstagramFill color="white" size={35} className="cursor-pointer"/>
                    </Link>
                </div>

                {/* Footnote */}
                <small className="text-gray-100">
                    @2026. All Rights Reserved. Made By CoreStack.
                </small>
            </div>                    
        </footer>
    )
}