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
                         <section className="w-full max-w-[1440px] bg-sky-100/30 p-5 md:px-25 pt-10">
                            <h2 className="font text-[25px]">Others Asked</h2>
                             <div className="w-full space-y-6 py-5 text-[18px]">
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