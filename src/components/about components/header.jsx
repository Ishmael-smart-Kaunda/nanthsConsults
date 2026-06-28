import { FaArrowDown, FaChevronRight } from "react-icons/fa6"
import heroImage from "../../assets/images/hero/hero.png"
import { BiArrowToBottom } from "react-icons/bi"
import { HiArrowDown } from "react-icons/hi2"

export default function Header(){
                        return(
                               <header className="w-full h -[70vh] md:min-h-">
                                   <div className="relative flex items-center w-full h-full bg-gradient-to-b from-black/80 to-black/75  
                                        overflow-hidden py-10 text-white">
                                       <img src='https://i.pinimg.com/1200x/57/ac/33/57ac33c1dddc22e363f8c7f588135c6f.jpg' 
                                            alt="Our team." 
                                            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay" />
                                       <div className="
                                               relative
                                               w-full 
                                               md:w-8/10 
                                               lg:w-6/10 
                                               md:mx-25 
                                               px-5
                                               md:px-0
                                               h-full 
                                               flex 
                                               flex-col 
                                               items-start 
                                               gap-8 
                                               leading-relaxed
                                               ">
                                            {/* Badge */}
                                          <p className="inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-2 text-sm md:text-base font-medium text-blue-100 mb-">
                                                Your Partner in Workforce Excellence
                                          </p>
                                          <h2 className="text-4xl md:text-x lg:text-5xl xl:text-7xl font-bold text-white ">
                                             People. Strategy. Workforce
                                          </h2>
                                          <p className="text-[28px] font-semibold text-gray-300">
                                            Building stronger organizations by aligning people, performance, and business goals.  
                                          </p>
                                          <p className="md:w text-[22px]">
                                            Our team works closely with businesses to develop effective people strategies that 
                                            drive performance and growth. From talent acquisition and workforce planning to 
                                            employee development and compliance, we provide practical HR solutions designed 
                                            to strengthen organizations and unlock the full potential of their people.
                                          </p>
                                       </div>

                                   </div>
                               </header>
                        )
}