import { FaArrowDown, FaChevronRight } from "react-icons/fa6"
import heroImage from "../../assets/images/hero/hero.png"
import { BiArrowToBottom } from "react-icons/bi"
import { HiArrowDown } from "react-icons/hi2"

export default function Header(){
                        return(
                               <header className="w-full h-[80vh] md:h-[85vh]">
                                   <div className="relative w-full h-full bg-gradient-to-b from-black/80 to-black/75  overflow-hidden py-10 text-white">
                                       <img src={heroImage} alt="" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay" />
                                       <div className="relative w-8/10 text-center mx-auto h-full flex flex-col gap-4 space-y-4">
                                          <span className="inline-flex items-center mx-auto gap-2 mb-5 text-white 40 text-[25px] font-semibold"> 
                                             <a href="/" className="hover:text-amber-700 transition-all duration-500">Home</a>  
                                             <FaChevronRight className="size-4 mt-1"/> About
                                          </span>
                                        
                                          <h2 className="md:text-6xl lg:text-[70px] l font-bold text-white leading-tight">Trusted HR & Admin <br/> Consultancy In Malawi</h2>
                                          <p className="text-[20px]">Center of Expert level HR and administration solutions.</p>
                                          <span className="cursor-pointer flex flex-col gap-3 items-center font-semibold text-amber-700 mt-5">Know Us  
                                                <button className="w-fit p-1 rounded-full bg-amber-700 /50 animate-bounce "><FaArrowDown className="size-4 text-black"/></button> 
                                          </span>
                                       </div>

                                   </div>
                               </header>
                        )
}