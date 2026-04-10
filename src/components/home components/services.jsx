import image from "../../assets/images/hero/hero.jpeg"
import { FaShieldAlt } from "react-icons/fa"
import { RiFileSearchLine, RiSettings3Line } from "react-icons/ri"
import { RiSettings3Fill, RiBarChartBoxLine, RiLineChartLine, RiBuilding4Line, RiFileTextLine, RiPresentationLine, RiServerLine, RiShieldCheckLine,  } from "react-icons/ri"
import { MdVerified } from "react-icons/md"
import { useState } from "react"



export default function Services(){

    const [more, setMore]=useState(false)
    const toggleMore =()=>{
          setMore(!more)
    }
       return(
               <section id="services" className="w-full max-w-[1440px] px-5 md:px-25 mx-auto  border border-black/0 ">
                 <h1 className="font-bold text-amber-950 text-[25px] ">Our Services</h1>
                  <div className="w-15 h-1.5 rounded-xl bg-amber-800 mb-10"/>
                  
                  <div className={`${more?'h-fit':'h-300 md:h-130'} transition-all duration-500 w-full grid grid-cols-1 md:grid-cols- lg:grid-cols-2 gap-6 mb-10  overflow-hidden`}>
                
              

                <article className="cursor-pointer p-2 flex flex-col min-h-60 shadow-zinc/200 shadow-sm bg-ascent/2 rounded-md hover:shadow-zinc-400 transition-all duration-500">
                    
                    <div className="p-1 bg-stone-100 back-drop-blur w-fit rounded-md">
                        <RiSettings3Line className="size-10 text-black/50"/>
                    </div>
                    <div className="py-2 flex flex-col md:justify-between gap-3 h-1/2">
                        
                        <h4 className="text-[16px] md:text-md font-bold text-stone-600  uppercase">Creation of HR Systems</h4>
                        <p className="text-stone-500  text-[16px] leading-relaxed">
                            Transform your HR process with customized systems built for efficiency, accuracy, and sustainable growth.
                        </p> 
                      <a  href="#" className="font-semibold text-slate-900 hover:text-red-950 w-fit">View more</a>
                        
                    </div> 
                </article> 

                <article className="cursor-pointer p-2 flex flex-col min-h-60 shadow-zinc/200 shadow-sm bg-ascent/2 rounded-md hover:shadow-zinc-400 transition-all duration-500">
                    
                    <div className="p-1 bg-stone-100 back-drop-blur w-fit rounded-md">
                        <RiBarChartBoxLine className="size-10 text-black/50"/>
                    </div>
                    <div className="py-2 flex flex-col md:justify-between gap-3 h-1/2">
                        
                        <h4 className="text-[16px] md:text-md font-bold text-stone-600 uppercase">Job Evaluation and Salary Survey </h4>
                        <p className="text-gray-500 text-[16px] leading-relaxed">
                            Align roles, rewards, and performance with precission using our comprehensive job analysis and salary insights.
                        </p> 
                      <a  href="#" className="font-semibold text-slate-900 hover:text-red-950 w-fit">View more</a>
                        
                    </div> 
                </article> 


                <article className="hidden cursor-pointer p-2 flex flex-col md:flex-row gap-2 min-h-60 shadow-zinc/100 shaow-sm bg-ascent/2 rounded-md hover:shadow-zinc-400 transition-all duration-500">
                     <img src={image} className="h-50 w-full md:h-full md:w-60"/>
                     <div className="flex flex-col">
                    <div className="hidden p-1 bg-stone-100 back-drop-blur  w-fit rounded-md">
                        <RiFileSearchLine className="size-10 text-black/50"/>
                    </div>
                    <div className=" flex flex-col md:justify-between gap-2 ">
                        
                        <h4 className="text-[15px] md:text-md font-bold text-stone-500 uppercase">Recruitment, Selection and Employee Retention </h4>
                        <p className="text-stone-500 text-[16px] leading-relaxed">
                            From sourcing to employee retention, we deliver a seamless 
                            hiring experience taht secures long-term value for your
                            organisation.
                        </p> 
                      <a  href="#" className="font-semibold text-slate-900 hover:text-red-950 w-fit">View more</a>
                        
                    </div> 
                    </div>
                </article> 

                <article className="hidden cursor-pointer p-2 flex flex-col min-h-60 shadow-zinc/200 shadow-sm bg-ascent/2 rounded-md hover:shadow-zinc-400 transition-all duration-500">
                    
                    <div className="p-1 bg-stone-100 back-drop-blur w-fit rounded-md">
                        <RiLineChartLine className="size-10 text-black/50"/>
                    </div>
                    <div className="py-2 flex flex-col md:justify-between gap-3 h-1/2">
                        
                        <h4 className="text-[16px] md:text-md font-bold text-stone-600 uppercase">Performance Management</h4>
                        <p className="text-gray-500 text-[16px] leading-relaxed">
                            We implement performance systems that turn goals into measurable results, and employees into high performance. 
                        </p> 
                      <a  href="#" className="font-semibold text-slate-900 hover:text-red-950 w-fit">View more</a>
                        
                    </div> 
                </article> 

                <article className="cursor-pointer p-2 flex flex-col min-h-60 shadow-zinc/200 shadow-sm bg-ascent/2 rounded-md hover:shadow-zinc-400 transition-all duration-500">
                    
                    <div className="p-1 bg-stone-100 back-drop-blur w-fit rounded-md">
                        <RiBuilding4Line className="size-10 text-black/50"/>
                    </div>
                    <div className="py-2 flex flex-col md:justify-between gap-3 h-1/2">
                        
                        <h4 className="text-[16px] md:text-md font-bold text-stone-600 uppercase">Organizational Design and Business Development </h4>
                        <p className="text-gray-500 text-[16px] leading-relaxed">
                            Whether startup or established, we redesign your organisation for clarity, efficiency. and strategic impact.
                        </p> 
                      <a  href="#" className="font-semibold text-slate-900 hover:text-red-950 w-fit">View more</a>
                        
                    </div> 
                </article>

                <article className="cursor-pointer p-2 flex flex-col min-h-60 shadow-zinc/200 shadow-sm bg-ascent/2 rounded-md hover:shadow-zinc-400 transition-all duration-500">
                    
                    <div className="p-1 bg-stone-100 back-drop-blur w-fit rounded-md">
                        <RiFileTextLine className="size-10 text-black/50"/>
                    </div>
                    <div className="py-2 flex flex-col md:justify-between gap-3 h-1/2">
                        
                        <h4 className="text-[16px] md:text-md font-bold text-stone-600 uppercase">Policies and Contract Formulation</h4>
                        <p className="text-gray-500 text-[16px] leading-relaxed">
                            We craft clear, compliant, and professional policies that 
                            protect your organisation and streghthen workplace interity.
                        </p> 
                      <a  href="#" className="font-semibold text-slate-900 hover:text-red-950 w-fit">View more</a>
                        
                    </div> 
                </article>

                <article className="cursor-pointer p-2 flex flex-col min-h-60 shadow-zinc/200 shadow-sm bg-ascent/2 rounded-md hover:shadow-zinc-400 transition-all duration-500">
                    
                    <div className="p-1 bg-stone-100 back-drop-blur w-fit rounded-md">
                        <RiPresentationLine className="size-10 text-black/50"/>
                    </div>
                    <div className="py-2 flex flex-col md:justify-between gap-3 h-1/2">
                        
                        <h4 className="text-[16px] md:text-md font-bold text-stone-600 uppercase">Training and Development </h4>
                        <p className="text-gray-500 text-[16px] leading-relaxed">
                            Ulock employee potential through targeted training programs designed for real business impact.
                        </p> 
                      <a  href="#" className="font-semibold text-slate-900 hover:text-red-950 w-fit">View more</a>
                        
                    </div> 
                </article>

                <article className="cursor-pointer p-2 flex flex-col min-h-60 shadow-zinc/200 shadow-sm bg-ascent/2 rounded-md hover:shadow-zinc-400 transition-all duration-500">
                    
                    <div className="p-1 bg-stone-100 back-drop-blur w-fit rounded-md">
                        <RiShieldCheckLine className="size-10 text-black/50"/>
                    </div>
                    <div className="py-2 flex flex-col md:justify-between gap-3 h-1/2">
                        
                        <h4 className="text-[16px] md:text-md font-bold text-stone-600 uppercase">Integrated Management Systems</h4>
                        <p className="text-gray-500 text-[16px] leading-relaxed">
                            From implementation to audit, we deliver IMS solutions that position your business for global standards.
                        </p> 
                      <a  href="#" className="font-semibold text-slate-900 hover:text-red-950 w-fit">View more</a>
                        
                    </div> 
                </article>

                <article className="cursor-pointer p-2 flex flex-col min-h-60 shadow-zinc/200 shadow-sm bg-ascent/2 rounded-md hover:shadow-zinc-400 transition-all duration-500">
                    
                    <div className="p-1 bg-stone-100 back-drop-blur w-fit rounded-md">
                        <RiServerLine className="size-10 text-black/50"/>
                    </div>
                    <div className="py-2 flex flex-col md:justify-between gap-3 h-1/2">
                        
                        <h4 className="text-[16px] md:text-md font-bold text-stone-600 uppercase">HR Outsourced Service </h4>
                        <p className="text-gray-500 text-[16px] leading-relaxed">
                           We provide reliable, end-to-end HR support that ensures efficiency, compliance, and peace of mind.
                        </p> 
                      <a  href="#" className="font-semibold text-slate-900 hover:text-red-950 w-fit">View more</a>
                        
                    </div> 
                </article>
        

                 </div>

                <p onClick={toggleMore} className="cursor-pointer text-end font-semibold underline text-amber-950 text-[18px]">
                    {more? <>see less services</>:<>see more services</>}
                </p>

               </section>
       )
}