import { FaPercent } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import StatsCard from "./statsCard";
import statsData from "../../data/stats data";



export default function STAT(){
               
               return(
                        <section className="w-full max-w-[1440px] h-fit px-5 md:px-25 py-3 my-10  roundedxl">
                                 <h1 className="text-[30px] md:text-[35px] font-semibold my-20 md:my-10">About The Numbers</h1>
                                <div className="gap-5 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 md:flex-row items-center justify-between">
                                    
                                    {statsData.map((item)=>{
                                        return(<StatsCard 
                                            key={item.id} 
                                            item={item}
                                            />
                                        )
                                    })}
                                </div>
                           </section>
               )
}