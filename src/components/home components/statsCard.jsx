import { FaPlus } from "react-icons/fa";
import { FaPercent } from "react-icons/fa6";
import { useCountUp } from "../count up";
import { useInView } from "react-intersection-observer";



export default function StatsCard({item}){
         const {id, value, Icon, headline, descript} =item; 
         const count = useCountUp( value, 7000);
         
         
      
      return(
               <div  
                    className=" w-full min-h-60  p-8 flex flex-col align-center gap-1 text-white bg-black border border-amber-900/20 rounded-md">
                    {id===1 || id===4 ? 
                         <span className="hidden inline-flex font-bold"> <FaPlus className="size-4 font-bold translate-y-4"/> <p className="text-[40px]">{count}</p> </span> 
                         : id===2 ?
                         <span className="hidden inline-flex font-bold"> <p className="text-[40px]">{count}</p> <FaPlus className="size-4 font-bold translate-y-4"/> </span> 
                         : 
                         <span className="hidden inline-flex font-bold"> <p className="text-[40px]">{count}</p> <FaPercent className="size-4 font-bold translate-y-4"/> </span> 
                        } 
                    <p className="font-semibold"> {headline} </p>
                    <p className="text-gray-500">{descript} </p>
                    
                </div>
      )
}