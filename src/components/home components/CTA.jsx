import Image from "../../assets/images/contact/call.jpeg"
import { Link } from "react-router-dom"
export default function CTA(){
                              return(
                                     <section className="group relative w-full  py-10 px-5 md:px-25  overflow-hidden bg-gradient-to-tr from-gray-950/90 to-black/60 text-white">
                                            <img src={Image} alt="" className="absolute inset-0 object-cover w-full h-full mix-blend-overlay group-hover:scale-120 transition-all duration-300" />
                                            <div className="relative w-6/10 mx-auto flex flex-col items-center gap-8 text-center">
                                                 <p className="w-fit p-2 mx-auto font-semibold text-[16px] rounded-[20px] bg-gray-700/50">Trusted since 2014</p>
                                                 <p className="text-[45px] font-bold ">Ready to build a stronger workforce?</p>
                                                 <p className="w-6/10 text-center">Partner with our HR specialists to streamline hiring, compliance, and people management.</p>
                                                 <div className="inline-flex gap-5 w-fit">
                                                       <Link to='/contact' className="p-3 px-5 rounded-sm bg-amber-900">Book Consultation</Link>
                                                       <Link to='/services' className="p-3 px-5 border rounded-sm">Learn more</Link>
                                                 </div>
                                           
                                            </div>
                                            
                                     </section>
                              )
}