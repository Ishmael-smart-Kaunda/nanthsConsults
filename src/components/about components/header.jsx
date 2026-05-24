import { FaArrowDown, FaChevronRight } from "react-icons/fa6"
import heroImage from "../../assets/images/hero/hero.png"
import { BiArrowToBottom } from "react-icons/bi"
import { HiArrowDown } from "react-icons/hi2"

export default function Header(){
                        return(
                               <header className="w-full h-[80vh] md:h-[90vh] px-5 md:px-25 py-10">
                                   <div className="relative w-full h-full bg-black/80 3 overflow-hidden py-10 text-white rounded-2xl">
                                       <img src={heroImage} alt="" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay" />
                                       <div className="relative w-6/10 h-full flex flex-col gap-4 items-center p-5 m-auto bordr">
                                          <span className="inline-flex items-center gap-2 mb-5 text-white/40 text-[20px] font-light">Home <FaChevronRight className="size-3"/> About</span>
                                          <h1 className="text-amber-800 font-bold">NanthConsults</h1>
                                          <h2 className="hrHook text-5xl text-center text-white/60 font-semibold">Trusted HR & Administration Consultancy In Malawi</h2>
                                          <p className="text-[16px]">Center of Expert level HR and administration solutions.</p>
                                          <span className="flex flex-col gap-3 items-center mt-10">Know Us  
                                                <button className="w-fit p-1 rounded-full bg-white/50 animate-bounce "><FaArrowDown className="size-4 text-black"/></button> 
                                          </span>
                                       </div>

                                   </div>
                               </header>
                        )
}