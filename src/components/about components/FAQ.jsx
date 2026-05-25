import { FaChevronCircleDown } from "react-icons/fa";
import { useState } from "react";
import Question from "./question";
import questions from "../../data/questions";



export default function FAQ(){
                  
                {/*stte for mobile nav accordion */}
                const [isExpanded, setIsExpanded]=useState(null)
                const toggleExpansion =(id)=>{
                      
                     setIsExpanded(isExpanded===id ? null : id)
                    console.log(id)
                }

                
                   return(
                         <section className="w-full max-w-[1440px] bg-gray-200 /30 p-5 md:px-25 pt-15">
                            <h2 className="font text-[40px] font-bold">Others Asked</h2>
                             <div className="w-full space-y- py-5 text-[18px]">
                                {
                                    questions.map((item)=>(
                                                <Question 
                                                  key={item.id} 
                                                  {...item}
                                                  handleExpansion={toggleExpansion}
                                                  isExpanded={isExpanded}
                                                />
                                               ))              
                                }

     
                             </div>

                         </section>
                   )
}