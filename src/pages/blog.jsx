import { HiArrowDownLeft } from "react-icons/hi2"
import { RiFileSearchLine } from "react-icons/ri"
import { NavLink } from "react-router-dom"
import image from "../assets/images/contact/blog1.jpeg"
import image2 from "../assets/images/contact/blog2.jpeg"
import image3 from "../assets/images/contact/blog3.jpeg"

export default function Blog(){
                        return(
                               <>
                                   <div  className=" w-full px-5 md:px-25 py-1 flex flex-row justify-between align-center shadow-md bg-white">
                                                <div className=" h-full flex flex-row justify-between text-zinc-50 py-1">
                                                <NavLink to='/'>
                                                        <span className="inline-flex gap-2 font-semibold cursor-pointer text-stone-950" 
                                                        >
                                                                <HiArrowDownLeft className="size-6 text-stone-950 -rotate-315"/> 
                                                                Back to home
                                                        </span>
                                                </NavLink>
                                                

                                                </div> 
                                                <NavLink to='/contact' className=" cursor-pointer p-1 px-5 border border-black/70  rounded-md font-semibold text-black/80 bg-amer-800 hover:bg-ascent/20">Contact</NavLink>       
                                    </div>
                             
                                    <section className="p-5 md:px-25 w-full h-[100vh]">
                                        <h1 className="text-center text-4xl font-bold text-black/80 my-5">Latest updates</h1>
                                        <div className=" grid grid-cols-1 p-5 gap-6">
                                              <article className=" p-2 flex flex-col md:flex-row gap-2 min-h-60 shadow-znc/100 shdow-sm bg-zinc-100 rounded-md hover:shadow-zinc-400 transition-all duration-500">
                                                                 <img src={image} className="md:h-40 w-full h-auto md:h-full md:w-80 roundel"/>
                                                                 <div className="flex flex-col justify-between">
                                                                
                                                                    <div className="space-y-3 ">
                                                                        <h4 className="text-[24px] md:text-md font-bold text-black/70">HR Compliance in Malawi: What Every Business Must Get Right </h4>
                                                                        <p className="text-black/70 text-[20px]">
                                                                            A concise guide to navigatig labour laws, avoiding costly compliance mistakes, and ensuring your HR
                                                                            policies align with current regulations.
                                                                        </p>      
                                                                    </div>
                                                                    <div className="grid grid-cols-2 md:inline-flex gap-8 w-full text-black/70 border-t pt-1 border-gray-50 items-end">
                                                                        <span className="font-semibold">By <p className="text-[12px] font-semibold">Tendai Muheya</p></span>
                                                                        <span className="font-semibold">Category <p className="text-[12px] font-semibold" >Compliance and policy</p></span>
                                                                        <span className="font-semibold">Read Time <p className="text-[12px] font-semibold"> 5 min read</p></span>
                                                                        <span className="font-semibold">Date <p className="text-[12px] font-semibold">09, March 2026</p></span>
                                                                    </div> 
                                                                </div>
                                                </article> 

                                                <article className=" p-2 flex flex-col md:flex-row gap-2 min-h-60 shadow-znc/100 shdow-sm bg-zinc-100 rounded-md hover:shadow-zinc-400 transition-all duration-500">
                                                                 <img src={image2} className="md:h-40 w-full h-auto md:h-full md:w-80 rounded-xl"/>
                                                                 <div className="flex flex-col justify-between">
                                                                
                                                                    <div className="space-y-3 ">
                                                                        <h4 className="text-[24px] md:text-md font-bold text-black/70">Building High Performing Teams in Malawi's Evolving Workplace</h4>
                                                                        <p className="text-black/70 text-[20px]">
                                                                           Explore practical strategies businesses in Malawi can use to attract, retain, and develop talent in a competitive 
                                                                           environment.
                                                                        </p>
                                                                    </div>
                                                                    <div className="grid grid-cols-2 md:inline-flex gap-8 w-full text-black/70 border-t pt-1 border-gray-50">
                                                                        <span className="font-semibold">By <p className="text-[12px] font-semibold">Ben Zayenda</p></span>
                                                                        <span className="font-semibold">Category <p className="text-[12px] font-semibold">Talent Management</p></span>
                                                                        <span className="font-semibold">Read Time <p className="text-[12px] font-semibold"> 4 min read</p></span>
                                                                        <span className="font-semibold">Date <p className="text-[12px] font-semibold">09, April 2026</p></span>
                                                                    </div> 
                                                                </div>
                                                </article>

                                                <article className=" p-2 flex flex-col md:flex-row gap-2 min-h-60 shadow-znc/100 shdow-sm bg-zinc-100 rounded-md hover:shadow-zinc-400 transition-all duration-500">
                                                                 <img src={image3} className="md:h-40 w-full h-auto md:h-full md:w-80 rounded-xl"/>
                                                                 <div className="flex flex-col justify-between">
                                                                
                                                                    <div className="space-y-3 ">
                                                                        <h4 className="text-[24px] md:text-md font-bold text-black/70">From Admin to Strategy: Transforming HR into a Growth Driver</h4>
                                                                        <p className="text-black/70 text-[20px]">
                                                                            Discover how businesses can shift HR from routine adminstration to a function that supports growth and performance.
                                                                        </p>      
                                                                    </div>
                                                                    <div className="grid grid-cols-2 md:inline-flex gap-8 w-full text-black/70 border-t pt-1 border-gray-50">
                                                                        <span className="font-semibold">By <p className="text-[12px] font-semibold">Business development lead</p></span>
                                                                        <span className="font-semibold">Category <p className="text-[12px] font-semibold">HR strategy</p></span>
                                                                        <span className="font-semibold">Read Time <p className="text-[12px] font-semibold"> 5 min read</p></span>
                                                                        <span className="font-semibold">Date <p className="text-[12px] font-semibold">08, April 2026</p></span>
                                                                    </div> 
                                                                </div>
                                                </article>
                                            


                                        </div>
                                    </section>

                                 </>
                        )
}