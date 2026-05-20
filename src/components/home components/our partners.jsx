import { AiFillBank } from "react-icons/ai";
import client1 from "../../assets/images/clientela/client1.png"
import client2 from "../../assets/images/clientela/client2.png"
import client3 from "../../assets/images/clientela/client3.png"
import client4 from "../../assets/images/clientela/client4.png"
import client5 from "../../assets/images/clientela/client5.png"
import { FaPlus } from "react-icons/fa";



export default function Partners(){
                        return(
                               <section className="w-full max-w-[1440px] md:py-25 px-5 md:px-25">
                                <span className="w-full inline-flex justify-between text-[22px] font-semibold">Our clientela <p className="inline-flex gap-1 text-[18px] font-normal">500 <FaPlus className="size-2 translate-y-2"/> Clients within Malawi and beyond</p> </span>
                                <div className=" mx-auto mt-20 inline-flex w items-center overflow-auto flex-nowrap gap-10">
                                    <figure className="w-fit  py-2 px-3 rounded-[22px]  font-semibold"> 
                                        
                                        <img src={client1} alt="" className=" h-20" />
                                        <figcaption className="text-center -translate-y-5">Capita Bank</figcaption> 
                                    </figure>
                                    <figure className="w-fit  py-2 px-3 rounded-[22px]  font-semibold"> 
                                        
                                        <img src={client2} alt="" className=" h-20" />
                                        <figcaption className="text-center -translate-y-5">HealthPlus Clinic</figcaption> 
                                    </figure>
                                    <figure className="w-fit  py-2 px-3 rounded-[22px]  font-semibold"> 
                                        
                                        <img src={client3} alt="" className=" h-20" />
                                        <figcaption className="text-center -translate-y-5">GreenGrow.com</figcaption> 
                                    </figure>
                                    <figure className="w-fit  py-2 px-3 rounded-[22px]  font-semibold"> 
                                        
                                        <img src={client4} alt="" className=" h-20" />
                                        <figcaption className="text-center -translate-y-5">Apx Logistics</figcaption> 
                                    </figure>
                                    <figure className="w-fit  py-2 px-3 rounded-[22px]  font-semibold"> 
                                        
                                        <img src={client5} alt="" className=" h-20" />
                                        <figcaption className="text-center -translate-y-4">SaGas Realtors</figcaption> 
                                    </figure>
                                    
                                </div>

                               </section>
                        )
}