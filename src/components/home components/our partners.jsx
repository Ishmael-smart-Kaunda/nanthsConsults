import { AiFillBank } from "react-icons/ai";
import client1 from "../../assets/images/clientela/client1.png"
import client2 from "../../assets/images/clientela/client2.png"
import client3 from "../../assets/images/clientela/client3.png"
import client4 from "../../assets/images/clientela/client4.png"
import client5 from "../../assets/images/clientela/client5.png"
import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";

const clients =[
                {
                    id:1,
                    logo:client1,
                },
                {
                    id:2,
                    logo:client2,
                },
                {
                    id:3,
                    logo:client3,
                },
                {
                    id:4,
                    logo:client4,
                },
                {
                    id:5,
                    logo:client5,
                },
            ]
const clonedClients = [...clients, ...clients];



export default function Partners(){
             
                

                        return(
                               <section className="w-full max-w-[1440px] md:py-25 px-5 md:px-25">
                                <span className="w-full inline-flex justify-between text-[30px] md:text-[35px] font-semibold my-20 md:my-10 whitespace-nowrap">Our clientele <p className="hidden md:inline-flex text-end flex-end gap-1 text-[22px] font-semibold">
                                    500 <FaPlus className="size-2 translate-y-2"/> Clients within  Malawi and beyond</p> 
                                </span>
                                
                                <div className="relative overflow-hidden w-full md:mt-20 box-border">
                                    <div className="pointer-events-none absolute z-10 h-full  w-20 md:w-50 bg-gradient-to-r from-white  to-transparent "/>
                                    <div className=" w-max my-auto flex flex-row flex-nowrap items-center animate-(--animate-marquee) hover:[animation-play-state:paused] cursor-pointer">
                                         {clients.map((item, i)=>
                                                 (<figure key={i} 
                                                          className="min-w-60  shrink-0  py-2 px-3   font-semibold"> 
                                                        <img src={item.logo} alt="" className="h-15 " />
                                                   </figure>
                                                 )
                                              )
                                        } 
                                        {clients.map((item, i)=>
                                                 (<figure key={i} 
                                                          className="min-w-60  shrink-0  py-2 px-3   font-semibold"> 
                                                        <img src={item.logo} alt="" className="h-15 " />
                                                   </figure>
                                                 )
                                              )
                                        }   
                                    </div>
                                    <div className="absolute z-10 top-0 right-0 h-full  w-20 md:w-50 bg-gradient-to-l from-white  to-transparent "/>
                                </div>

                               </section>
                        )
}