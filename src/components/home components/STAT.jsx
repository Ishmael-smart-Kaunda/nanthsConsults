import { FaPercent } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";


export default function STAT(){
               return(
                        <section className="w-full max-w-[1440px] h-fit px-5 md:px-25 py-3 my-10  roundedxl">
                                <div className="gap-5 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 md:flex-row items-center justify-between">
                                    <div className=" w-full min-h-60  p-8 flex flex-col align-center gap-1 text-white bg-black border border-amber-900/20 rounded-md">
                                        <span className="inline-flex font-bold"> <FaPlus className="size-4 font-bold translate-y-4"/> <p className="text-[40px]">10</p></span>
                                        <p className="font-semibold"> Years Experience</p>
                                        <p className="text-gray-500">Trusted HR & Admin advisory</p>
                                        
                                    </div>
                                    <div className=" w-full h-full p-8 flex flex-col align-center gap-1  text-white bg-black border border-amber-900/20 rounded-md">
                                        <span className="inline-flex font-bold"><p className="text-[40px]">500</p> <FaPlus className="size-4 font-bold translate-y-4"/> </span>
                                        <p className="font-semibold"> Clients served</p>
                                        <p className="text-gray-500">Across sectors & industries</p>
 
                                    </div>
                                    <div className=" w-full h-full p-8 flex flex-col align-center gap-1  text-white bg-black border border-amber-900/20 rounded-md">
                                        <span className="inline-flex font-bold"> <p className="text-[40px]">95</p> <FaPercent className="size-4 font-bold translate-y-4"/> </span>
                                        <p className="font-semibold"> Client retention</p>
                                        <p className="text-gray-500">Long-term partnerships</p>
                                    </div>
                                    <div className=" w-full h-full p-8 flex flex-col align-center gap-1  text-white bg-black border border-amber-900/20 rounded-md">
                                        <span className="inline-flex font-bold"> <FaPlus className="size-4 font-bold translate-y-4"/> <p className="text-[40px]">50</p></span>
                                        <p className="font-semibold"> HR specialists</p>
                                        <p className="text-gray-500">Certified & experienced team</p>  


                                        
                                    </div>
                            
                                </div>
                           </section>
               )
}