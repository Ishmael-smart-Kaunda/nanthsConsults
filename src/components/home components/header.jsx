import { BsFileBarGraph } from "react-icons/bs"
import { AiOutlineUser } from "react-icons/ai"
import { FiArrowUp, FiBriefcase, FiCheckCircle} from "react-icons/fi"
import { BsArrowBarLeft } from "react-icons/bs"
import { HiArrowDown } from "react-icons/hi"
import { FaArrowDown } from "react-icons/fa"
import { HiOutlineUserGroup } from "react-icons/hi2"
import { MdBarChart, MdArrowBack } from "react-icons/md"
import image1 from "../../assets/images/hero/hero1.jpeg"
import image from "../../assets/images/hero/hero.jpeg"

import { NavLink } from "react-router-dom"

export default function Header(){
             return(
                     <div className="w-full md:max-w-[1440px] h-[100vh] md:h-[93vh]">
                           <section className="relative w-full h-6/10 md:h-8/10 bg-gradient-to-tr from-black via-black/80 to-slate-900/70 ">
                              <img src={image1} alt=" Timely HR solutions" className="hidden absolute inset-0 w-full h-full object-cover mix-blend-overlay"/>
                              <div className="absolute my-6 md:top-2/10 left-1/2 -translate-x-1/2 w-full md:w-9/10 px-5 mx-auto flex flex-col md:flex-row ">
                                       <div className="text-gray-400  my-auto h-fit px-3 gap-8 space-y-3 md:space-y-6">
                                            <h1 className=" text-3xl md:text-4xl w-full md:w-8/10 text-center md:text-left font-bold leading-tight uppercase">Strategic HR Solutions that Drive Business Growth</h1>
                                            
                                            <p className="w-full md:w-6/10 text-[17px] text-center md:text-left"> Build stronger HR systems, reliable compliance, 
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
                                                        className=" px-2 py-1.5 font-semibold my-3 text-white/80 rounded-[20px] border border-amber-600/70 inline-flex gap-2 hover:opacity-70">
                                                        View our Services
                                                </NavLink>
                                            </div>
                                        </div>
                                
                                <figure className="relative hidden md:block w-100 m-auto h-65 bg-gradient-to-tr from-amber-900 to-gray-600 rounded-lg">
                                    <img src={image} alt="contact us" className="w-full h-full rounded-md mix-blend-overlay"/>
                                    <figcaption className=" absolute top-[50%] text-white/80 -translate-[50%] left-[50%] text-center text-3xl font-bold">Policies and Contract Formulation </figcaption>
                                    <span className="px-2 inline-flex items-center justify-between w-full h-10 absolute top-[50%] text-white -translate-[50%] left-[50%]">
                                        <MdArrowBack className="size-6 rounded-full border hover:scale-110 transition-all duration-300"/>
                                        <MdArrowBack className="size-6 rotate-180 rounded-full border hover:scale-110 transition-all duration-300"/>
                                    </span>
                                </figure>

                              </div>
                           
                           </section>
   
                            <section className="w-full max-w-[1440px] h-fit px-5 md:px-20 py-3  text-white bg-black/90 rl">
                                <div className="gap-5 flex flex-col md:flex-row items-center justify-between">
                                    <div className=" w-fit h- text-white px-2 py-1 inline-flex align-center gap-2">
                                        <div className=" bg-gradientto-tr from-ascent to-zinc-700 rounded-md"> <MdBarChart className="size-14"/></div>
                                        <span className="-space-y-1"> 
                                            <p className="font-semibold"><strong className="text-[20px] font-bold">10+</strong> Years Experience</p>
                                            <p>Trusted HR & Admin advisory</p>
                                        </span>
                                    </div>
                                    <div className=" w-fit h-full px-2 py-1 inline-flex align-center gap-2">
                                        <AiOutlineUser className="size-12 my-auto"/>
                                        <span className="-space-y-1"> 
                                            <p className="font-semibold"><strong className="text-[25px] font-bold">20+</strong> Clients Served</p>
                                            <p>Across multiple sectors</p>
                                        </span>

                                    </div>
                                    <div className=" w-fit h-full px-2 py-1 inline-flex items-center gap-2">
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