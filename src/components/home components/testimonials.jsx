import { FaStar } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa6";
import { FiStar } from "react-icons/fi";
import { motion, translateAxis } from "framer-motion";



export default function Testimonial(){
                     return(
                             <section className="w-full max-w-[1440px] px-5 py-10 md:px-25">
                                  <h1 className="font-semibold text-[35px] my-10 ">What others had to say</h1>
                                  <div className="relative overflow-hidden my-20">
                                        <div className="pointer-events-none absolute z-10 h-full  w-5 bg-gradient-to-r from-white  to-transparent "/>
                                        <div className="pointer-events-none absolute right-0 z-10 h-full  w-5 bg-gradient-to-l from-white  to-transparent "/>
                                        <div  
                                            className="cursor-pointer w-max inline-flex gap-6 flex-nowrap animate-slidePause hover:[animation-play-state:paused]">
                                            <article className="w-70 h-80 flex p-4  flex-col justify-between bg-white border border-black/20 rounded-xl md">
                                                <div className="inline-flex gap-2 items-center">
                                                       <FaStar className="text-orange-500"/> <FaStar className="text-orange-500"/> 
                                                       <FaStar className="text-orange-500"/> <FaStar className="text-orange-500"/>
                                                       <FiStar className="text-orange-500"/>
                                                </div>
                                                <blockquote className="italic"> <FaQuoteLeft/>
                                                    NanthConsults transformed how we manage our people. 
                                                    Their guidance on compliance and payroll alone 
                                                    saved us months of headaches.
                                                </blockquote>
                                                <div className="inline-flex items-center gap-2">
                                                    <figure className="size-10 p-2 font-bold rounded-full bg-green-600">
                                                        AS 
                                                    </figure>
                                                    <div className="text-[12px]">
                                                        <h5 className="text-[12px] font-semibold">Amara Sibande</h5>
                                                        <p className="">CEO, HealthPlus clinic</p>
                                                    </div>

                                                </div>

                                            </article>

                                              <article className="w-70 h-80 flex p-4 flex-col justify-between bg-white border border-black/20 rounded-xl md">
                                                <div className="inline-flex gap-2 items-center">
                                                       <FaStar className="text-orange-500"/> <FaStar className="text-orange-500"/> 
                                                       <FaStar className="text-orange-500"/><FiStar className="text-orange-500"/>
                                                       <FiStar className="text-orange-500"/>
                                                </div>
                                                <blockquote className="italic"> <FaQuoteLeft/>
                                                    Professional, reliable, and deeply knowledgeable. 
                                                    The team feels like a true extension of our own 
                                                    HR department.
                                                </blockquote>
                                                <div className="inline-flex items-center gap-2">
                                                    <figure className="size-10 p-2 font-bold rounded-full bg-green-600">
                                                        MM 
                                                    </figure>
                                                    <div className="text-[12px]">
                                                        <h5 className="text-[12px] font-semibold">Memory Mphande</h5>
                                                        <p className="">Director, Appex logistics</p>
                                                    </div>

                                                </div>

                                            </article>

                                              <article className="w-70 h-80 flex p-4 flex-col justify-between  bg-white border border-black/20 rounded-xl md">
                                                <div className="inline-flex gap-2 items-center">
                                                       <FaStar className="text-orange-500"/> <FaStar className="text-orange-500"/> 
                                                       <FaStar className="text-orange-500"/> <FaStar className="text-orange-500"/>
                                                       <FiStar className="text-orange-500"/>
                                                </div>
                                                <blockquote className="italic"> <FaQuoteLeft/>
                                                    From recruitment to performance management, 
                                                    NanthConsults delivers with precision and 
                                                    genuine care for our staff.
                                                </blockquote>
                                                <div className="inline-flex items-center gap-2">
                                                    <figure className="size-10 p-2 font-bold rounded-full bg-green-600">
                                                        HZ 
                                                    </figure>
                                                    <div className="text-[12px]">
                                                        <h5 className="text-[12px] font-semibold">Henry Zimba</h5>
                                                        <p className="">MD, CitiBank</p>
                                                    </div>

                                                </div>

                                            </article>

                                            <article className="w-70 h-80 flex p-4 flex-col justify-between  bg-white border border-black/20 rounded-xl md">
                                                <div className="inline-flex gap-2 items-center">
                                                       <FaStar className="text-orange-500"/> <FaStar className="text-orange-500"/> 
                                                       <FaStar className="text-orange-500"/> <FaStar className="text-orange-500"/>
                                                       <FaStar className="text-orange-500"/>
                                                </div>
                                                <blockquote className="italic"> <FaQuoteLeft/>
                                                    Their support in building our HR framework improved 
                                                    compliance and employee management 
                                                    across the organization. Everything now 
                                                    runs with greater efficiency 
                                                    and consistency.
                                                </blockquote>
                                                <div className="inline-flex items-center gap-2">
                                                    <figure className="size-10 p-2 font-bold rounded-full bg-green-600">
                                                        CA 
                                                    </figure>
                                                    <div className="text-[12px]">
                                                        <h5 className="text-[12px] font-semibold">Dr Chawinga</h5>
                                                        <p className="">Head lead, Green</p>
                                                    </div>

                                                </div>

                                            </article>

                                            <article className="w-70 h-80 flex p-4  flex-col justify-between bg-white border border-black/20 rounded-xl md">
                                                <div className="inline-flex gap-2 items-center">
                                                       <FaStar className="text-orange-500"/> <FaStar className="text-orange-500"/> 
                                                       <FaStar className="text-orange-500"/> <FaStar className="text-orange-500"/>
                                                       <FiStar className="text-orange-500"/>
                                                </div>
                                                <blockquote className="italic"> <FaQuoteLeft/>
                                                    NanthConsults transformed how we manage our people. 
                                                    Their guidance on compliance and payroll alone 
                                                    saved us months of headaches.
                                                </blockquote>
                                                <div className="inline-flex items-center gap-2">
                                                    <figure className="size-10 p-2 font-bold rounded-full bg-green-600">
                                                        AS 
                                                    </figure>
                                                    <div className="text-[12px]">
                                                        <h5 className="text-[12px] font-semibold">Amara Sibande</h5>
                                                        <p className="">CEO, HealthPlus clinic</p>
                                                    </div>

                                                </div>

                                            </article>

                                              <article className="w-70 h-80 flex p-4 flex-col justify-between bg-white border border-black/20 rounded-xl md">
                                                <div className="inline-flex gap-2 items-center">
                                                       <FaStar className="text-orange-500"/> <FaStar className="text-orange-500"/> 
                                                       <FaStar className="text-orange-500"/><FiStar className="text-orange-500"/>
                                                       <FiStar className="text-orange-500"/>
                                                </div>
                                                <blockquote className="italic"> <FaQuoteLeft/>
                                                    Professional, reliable, and deeply knowledgeable. 
                                                    The team feels like a true extension of our own 
                                                    HR department.
                                                </blockquote>
                                                <div className="inline-flex items-center gap-2">
                                                    <figure className="size-10 p-2 font-bold rounded-full bg-green-600">
                                                        MM 
                                                    </figure>
                                                    <div className="text-[12px]">
                                                        <h5 className="text-[12px] font-semibold">Memory Mphande</h5>
                                                        <p className="">Director, Appex logistics</p>
                                                    </div>

                                                </div>

                                            </article>

                                              <article className="w-70 h-80 flex p-4 flex-col justify-between  bg-white border border-black/20 rounded-xl md">
                                                <div className="inline-flex gap-2 items-center">
                                                       <FaStar className="text-orange-500"/> <FaStar className="text-orange-500"/> 
                                                       <FaStar className="text-orange-500"/> <FaStar className="text-orange-500"/>
                                                       <FiStar className="text-orange-500"/>
                                                </div>
                                                <blockquote className="italic"> <FaQuoteLeft/>
                                                    From recruitment to performance management, 
                                                    NanthConsults delivers with precision and 
                                                    genuine care for our staff.
                                                </blockquote>
                                                <div className="inline-flex items-center gap-2">
                                                    <figure className="size-10 p-2 font-bold rounded-full bg-green-600">
                                                        HZ 
                                                    </figure>
                                                    <div className="text-[12px]">
                                                        <h5 className="text-[12px] font-semibold">Henry Zimba</h5>
                                                        <p className="">MD, CitiBank</p>
                                                    </div>

                                                </div>

                                            </article>

                                            <article className="w-70 h-80 flex p-4 flex-col justify-between  bg-white border border-black/20 rounded-xl md">
                                                <div className="inline-flex gap-2 items-center">
                                                       <FaStar className="text-orange-500"/> <FaStar className="text-orange-500"/> 
                                                       <FaStar className="text-orange-500"/> <FaStar className="text-orange-500"/>
                                                       <FaStar className="text-orange-500"/>
                                                </div>
                                                <blockquote className="italic"> <FaQuoteLeft/>
                                                    Their support in building our HR framework improved 
                                                    compliance and employee management 
                                                    across the organization. Everything now 
                                                    runs with greater efficiency 
                                                    and consistency.
                                                </blockquote>
                                                <div className="inline-flex items-center gap-2">
                                                    <figure className="size-10 p-2 font-bold rounded-full bg-green-600">
                                                        CA 
                                                    </figure>
                                                    <div className="text-[12px]">
                                                        <h5 className="text-[12px] font-semibold">Dr Chawinga</h5>
                                                        <p className="">Head lead, Green</p>
                                                    </div>

                                                </div>

                                            </article>
                                        </div>

                                        
                                  </div>


                             </section>
                     )
}