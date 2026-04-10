import image from "../../assets/images/hero/hero.jpeg"
import { FaShieldAlt } from "react-icons/fa"
import { RiFileSearchLine, RiSettings3Line } from "react-icons/ri"
import { RiBarChartBoxLine, RiLineChartLine, RiBuilding4Line, RiFileTextLine, RiPresentationLine, RiServerLine, RiShieldCheckLine,  } from "react-icons/ri"
import { MdVerified } from "react-icons/md"
import { useState } from "react"
import { Link } from "react-router-dom"



export default function Services(){

    const [more, setMore]=useState(false)
    const toggleMore =()=>{
          setMore(!more)
    }
       return(
               <section id="services" className="w-full max-w-[1440px] px-5 md:px-25 mx-auto  border border-black/0 ">
                 <h1 className="font-bold text-amber-950 text-[25px] ">Our Services</h1>
                  <div className="w-15 h-1.5 rounded-xl bg-amber-800 mb-10"/>
                  
                  <div className={`${more?'h-fit':'h-390 md:h-130'} transition-all duration-500 w-full grid grid-cols-1 md:grid-cols- lg:grid-cols-2 gap-6 mb-10  overflow-hidden`}>
                
               <article className="cursor-poiter p-2 flex flex-col min-h-60 shadow-zinc/200 shadow-sm bg-[#f7f7f7] rounded-md hover:shadow-zinc-400 transition-all duration-500">
                    
                    <div className="p-1 bg-stone-100 back-drop-blur w-fit rounded-md">
                        <RiFileSearchLine className="size-10 text-black/90"/>
                    </div>
                    <div className="py-2 flex flex-col md:justify-between text-black/80 gap-3 space-y-3 h-1/2">
                        
                        <h4 className="text-[16px] md:text-md font-bold   uppercase">Recruitment, Selection and Employee Retention </h4>
                        <p className="text-stone-500  text-[16px] leading-relaxed">
                            From sourcing to employee retention, we deliver a seamless 
                            hiring experience taht secures long-term value for your
                            organisation.
                        </p> 
                      <Link to='/services' className="font-semibold text-slate-900 hover:text-red-950 w-fit">View more</Link>
                        
                    </div> 
                </article>  



                <article className="cursor-poiter p-2 flex flex-col min-h-60 shadow-zinc/200 shadow-sm bg-[#f7f7f7] rounded-md hover:shadow-zinc-400 transition-all duration-500">
                    
                    <div className="p-1 bg-stone-100 back-drop-blur w-fit rounded-md">
                        <RiSettings3Line className="size-10 text-black/90"/>
                    </div>
                    <div className="py-2 flex flex-col md:justify-between text-black/80 gap-3 space-y-3 h-1/2">
                        
                        <h4 className="text-[16px] md:text-md font-bold   uppercase">Creation of HR Systems</h4>
                        <p className="text-stone-500  text-[16px] leading-relaxed">
                            Transform your HR process with customized systems built for efficiency, accuracy, and sustainable growth.
                        </p> 
                      <Link to='/services' className="font-semibold text-slate-900 hover:text-red-950 w-fit">View more</Link>
                        
                    </div> 
                </article> 

                <article className="cursor-ointer p-2 flex flex-col min-h-60 shadow-zinc/200 shadow-sm bg-[#f7f7f7] text-black/80 rounded-md hover:shadow-zinc-400 transition-all duration-500">
                    
                    <div className="p-1 bg-stone-100 back-drop-blur w-fit rounded-md">
                        <RiBarChartBoxLine className="size-10 text-blck/50"/>
                    </div>
                    <div className="py-2 flex flex-col md:justify-between gap-3 space-y-3 h-1/2">
                        
                        <h4 className="text-[16px] md:text-md font-bold text-stne-600 uppercase">Job Evaluation and Salary Survey </h4>
                        <p className="text-gray-00 text-[16px] leading-relaxed">
                            Align roles, rewards, and performance with precission using our comprehensive job analysis and salary insights.
                        </p> 
                      <Link to='/services' className="font-semibold text-slate-900 hover:text-red-950 w-fit">View more</Link>
                        
                    </div> 
                </article> 


               

                <article className="hr-pinter p-2 flex flex-col min-h-60 shadow-zinc/200 shadow-sm bg-[#f7f7f7] text-black/80 text-black/80 rounded-md hover:shadow-zinc-400 transition-all duration-500">
                    
                    <div className="p-1 bg-stone-100 back-drop-blur w-fit rounded-md">
                        <RiLineChartLine className="size-10 textblak/50"/>
                    </div>
                    <div className="py-2 flex flex-col md:justify-between gap-3 h-1/2 space-y-3">
                        
                        <h4 className="text-[16px] md:text-md font-bold text-sne-600 uppercase">Performance Management</h4>
                        <p className="text-gry-50]0 text-[16px] leading-relaxed">
                            We implement performance systems that turn goals into measurable results, and employees into high performance. 
                        </p> 
                      <Link to='/services' className="font-semibold text-slate-900 hover:text-red-950 w-fit">View more</Link>
                        
                    </div> 
                </article> 

                <article className="cursor-poiner p-2 flex flex-col min-h-60 shadow-zinc/200 shadow-sm bg-[#f7f7f7] text-black/80  rounded-md hover:shadow-zinc-400 transition-all duration-500">
                    
                    <div className="p-1 bg-stone-100 back-drop-blur w-fit rounded-md">
                        <RiBuilding4Line className="size-10 text-blak/50"/>
                    </div>
                    <div className="py-2 flex flex-col md:justify-between gap-3 space-y-3 h-1/2">
                        
                        <h4 className="text-[16px] md:text-md font-bold text-tone-600 uppercase">Organizational Design and Business Development </h4>
                        <p className="text-gr0 text-[16px] leading-relaxed">
                            Whether startup or established, we redesign your organisation for clarity, efficiency. and strategic impact.
                        </p> 
                      <Link to='/services' className="font-semibold text-slate-900 hover:text-red-950 w-fit">View more</Link>
                        
                    </div> 
                </article>

                <article className="cursor-poiter p-2 flex flex-col min-h-60 shadow-zinc/200 shadow-sm bg-[#f7f7f7] text-black/80  rounded-md hover:shadow-zinc-400 transition-all duration-500">
                    
                    <div className="p-1 bg-stone-00 back-drop-blur w-fit rounded-md">
                        <RiFileTextLine className="size-10 tex-black/50"/>
                    </div>
                    <div className="py-2 flex flex-col md:justify-between gap-3 space-y-3 h-1/2">
                        
                        <h4 className="text-[16px] md:text-md font-bold text-sone-600 uppercase">Policies and Contract Formulation</h4>
                        <p className="tey-500 text-[16px] leading-relaxed">
                            We craft clear, compliant, and professional policies that 
                            protect your organisation and streghthen workplace interity.
                        </p> 
                      <Link to='/services' className="font-semibold text-slate-900 hover:text-red-950 w-fit">View more</Link>
                        
                    </div> 
                </article>

                <article className="cursor-ponter p-2 flex flex-col min-h-60 shadow-zinc/200 shadow-sm bg-[#f7f7f7] text-black/80 rounded-md hover:shadow-zinc-400 transition-all duration-500">
                    
                    <div className="p-1 bg-stoe-100 back-drop-blur w-fit rounded-md">
                        <RiPresentationLine className="size-10 tet-black/50"/>
                    </div>
                    <div className="py-2 flex flex-col md:justify-between gap-3 space-y-3 h-1/2">
                        
                        <h4 className="text-[16px] md:text-md font-bold text-stne-600 uppercase">Training and Development </h4>
                        <p className="text-gray-00 text-[16px] leading-relaxed">
                            Ulock employee potential through targeted training programs designed for real business impact.
                        </p> 
                      <Link to='/services' className="font-semibold text-slate-900 hover:text-red-950 w-fit">View more</Link>
                        
                    </div> 
                </article>

                <article className="cursor-pointr p-2 flex flex-col min-h-60 shadow-zinc/200 shadow-sm bg-[#f7f7f7] text-black/80 rounded-md hover:shadow-zinc-400 transition-all duration-500">
                    
                    <div className="p-1 bg-stoe-100 back-drop-blur w-fit rounded-md">
                        <RiShieldCheckLine className="size-10 text-blck/50"/>
                    </div>
                    <div className="py-2 flex flex-col md:justify-between gap-3 sapce-y-3 h-1/2">
                        
                        <h4 className="text-[16px] md:text-md font-bold text-tone-600 uppercase">Integrated Management Systems</h4>
                        <p className="text-gray-500 text-[16px] leading-relaxed">
                            From implementation to audit, we deliver IMS solutions that position your business for global standards.
                        </p> 
                      <Link to='/services' className="font-semibold text-slate-900 hover:text-red-950 w-fit">View more</Link>
                        
                    </div> 
                </article>

                <article className="cursor-ponter p-2 flex flex-col min-h-60 shadow-zinc/200 shadow-sm bg-[#f7f7f7] text-black/80  rounded-md hover:shadow-zinc-400 transition-all duration-500">
                    
                    <div className="p-1 bg-stone-10 back-drop-blur w-fit rounded-md">
                        <RiServerLine className="size-10 text-lack/50"/>
                    </div>
                    <div className="py-2 flex flex-col md:justify-between gap-3 spce-y-3 h-1/2">
                        
                        <h4 className="text-[16px] md:text-md font-bold text-sne-600 uppercase">HR Outsourced Service </h4>
                        <p className="text-ay-500 text-[16px] leading-relaxed">
                           We provide reliable, end-to-end HR support that ensures efficiency, compliance, and peace of mind.
                        </p> 
                      <Link to='/services' className="font-semibold text-slate-900 hover:text-red-950 w-fit">View more</Link>
                        
                    </div> 
                </article>
        

                 </div>

                <p onClick={toggleMore} className="cursor-pointer text-end font-semibold underline text-amber-950 text-[18px]">
                    {more? <>see less services</>:<>see more services</>}
                </p>

               </section>
       )
}