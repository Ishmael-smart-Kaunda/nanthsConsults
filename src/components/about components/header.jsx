import { FaArrowDown, FaChevronRight } from "react-icons/fa6"
import heroImage from "../../assets/images/hero/hero.png"
import { BiArrowToBottom } from "react-icons/bi"
import { HiArrowDown } from "react-icons/hi2"

export default function Header(){
                        return(
                               <header className="w-full h-[80vh] md:h-[85vh]">
                                   <div className="relative w-full h-full bg-gradient-to-b from-black/80 to-black/75  overflow-hidden py-10 text-white">
                                       <img src='https://i.pinimg.com/1200x/57/ac/33/57ac33c1dddc22e363f8c7f588135c6f.jpg' 
                                            alt="our team" 
                                            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay" />
                                       <div className="relative w-8/10 mx-p md:mx-25 h-full flex flex-col items-start gap-4 space-y-4">
                                          <h2 className="text-4xl lg:text-8xl font-bold text-white leading-tight">Trusted HR & Admin <br/> Consultancy In Malawi</h2>
                                          <p className="text-[22px]">Center for Expert level HR and administration solutions.</p>
                                       </div>

                                   </div>
                               </header>
                        )
}