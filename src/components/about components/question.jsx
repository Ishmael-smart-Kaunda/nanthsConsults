import { FaChevronCircleDown } from "react-icons/fa";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { HiChevronDown, HiPlus } from "react-icons/hi2";
import { HiMinus } from "react-icons/hi";

                
      {/* A question component that structure the layout of question and answer. it accepts props for question and answer display
           and a function and a value/ state of expansion for each question */} 
      {/* the function and question expansion state value help in toggling expansion*/}         

export default function Question({id, Q, A, handleExpansion, isExpanded}){
                        return(
                                <div onClick={()=>handleExpansion(id)} className="cursor-pointer w-full flex flex-col md:flex-row justify-between gap-4 items-center  border border-black/20 rounded-[3px] p-5 ">
                                    <div className={`${id===isExpanded ? 'h-65 md:h-25' : 'h-6'} transition-all duration-500 overflow-hidden space-y-4`}>
                                            <h3 className="font-sembold">{Q}</h3>
                                            <p className={`${id===isExpanded ? 'opacity-100' : 'opacity-0'} transition-all duration-500 font-light opacity -0`}>{A}</p>
                                    </div>
                                       <button className="bordr p-1 rounded-full">
                                        {/*Conditional rendering to display either minus or plus sign depending on 
                                           whether the question box is expanded or not.
                                        */}
                                        {
                                           id===isExpanded 
                                              ? 
                                                <HiMinus className={`size-6 shrink-0 transition-all`}/> 
                                              :  
                                                <HiPlus className={` size-6 shrink-0 transition-all`}/>
                                        }
                                          
                                         
                                       </button>
                                     
                                </div>
                        )
}