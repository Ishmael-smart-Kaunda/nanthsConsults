import { RiFacebookBoxLine } from "react-icons/ri"
import { RiFacebookBoxFill, RiLinkedinBoxFill,RiInstagramFill } from "react-icons/ri"
import { Link } from "react-router-dom"

export default function Footer(){
                                return(
                                       <footer className="w-full px-5 py- md:px-25 bg-black">
                                            <div className="flex flex-col md:flex-row justify-between pt-20 text-stone-400">
                                                <div className="w-full   space-y-3">

                                                    <h1 className=" text-xl font-bold">Naths Consults</h1>
                                                    <p className="opacity-60 font-semibold text-[12px]">A step closer reliable HR, <br/> administration. and 
                                                    business development solutions</p>

                                                </div>
                                                <form className="space-y-2 mt-6 md:mt-0">
                                                    <p className="font-semibold">Subsribe to our Newletter</p>
                                                    <p className="text-[12px] text-sm italic">Get HR insights and updates directly to your inbox</p>
                                                    <fieldset className="flex flex-row mt-3 rounded-lg">
                                                        <input type="email" placeholder="Your Email" className="rounded-l-lg p-2 bg-white focus:outline-none"/>
                                                        <button className=" w-30 bg-[#854836] font-bold text-white  rounded-r-lg">Subscribe</button>
                                                    </fieldset>
                                                    

                                                </form>
                                            </div>
                                            <div className="h-40 text-stone-500 py-5 font-semibold list-none text-[13px] space-y-3 ">
                                                <Link to='/'> <li className="cursor-pointer underline w-fit hover:text-white transition-all ">Home</li></Link>
                                                <Link to='/services'> <li className="cursor-pointer underline w-fit hover:text-white duration-300">Services</li></Link>
                                                <Link to='/about'> <li className="cursor-pointer underline w-fit hover:text-white duration-300">About Us</li></Link>
                                                <Link to='/contact'> <li className="cursor-pointer underline w-fit hover:text-white duration-300">Contact</li></Link>

                                            </div>
                                            
                                            <br/>

                                            <hr className="text-white/10"/>
                                            
                                            <div className="py-3 text-stone-600 flex flex-row justify-between w-full md:w-6/10 mx-auto">
                                                <p>©<span>2026</span> Nanths Consults. All rights reserved.</p>
                                                <div className="inline-flex gap-2">
                                                    <a href="#" className=""><RiFacebookBoxFill className="size-6"/></a>
                                                    <a href="#" className=""><RiLinkedinBoxFill className="size-6"/></a>
                                                    <a href="#" className=""><RiInstagramFill className="size-6"/></a>
                                                </div>
                                            </div>
                                            
                                           
                                           
                                       </footer>
                                )
}