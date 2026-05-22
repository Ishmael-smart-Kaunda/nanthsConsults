import Image from "../../assets/images/contact/call.jpeg"
import { Link } from "react-router-dom"
export default function CTA(){
                              return(
                                     <section className="group relative w-full  py-10 px-5 md:px-25  overflow-hidden bg-gradient-to-tr from-gray-950/90 to-black/60 text-white">
                                            <img src={Image} alt="" className="absolute inset-0 object-cover w-full h-full mix-blend-overlay group-hover:scale-120 transition-all duration-300" />
                                            <div className="relative w-full md:w-6/10 mx-auto flex flex-col items-center gap-8 text-center">
                                                 <p className="w-fit px-4 py-2 mx-auto font-semibold text-[16px] rounded-[20px] border border-white/20 bg-gray-300/10">Trusted since 2014</p>
                                                 <p className="text-[45px] font-bold ">Ready to build a stronger workforce?</p>
                                                 <p className="w-6/10 text-center">Partner with our HR specialists to streamline hiring, compliance, and people management.</p>
                                                 <div className="flex flex-col md:flex-row gap-5 w-fit">
                                                       <Link to='/contact' className="p-3 px-6 font-semibold rounded-[2px] bg-ascent mber-900 whitespace-none">Book Consultation</Link>
                                                       <Link to='/services' className="p-3 px-5 border rounded-sm whitespace-none">Learn more</Link>
                                                 </div>
                                           
                                            </div>
                                            
                                     </section>
                              )
}