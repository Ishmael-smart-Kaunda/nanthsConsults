import Image from "../../assets/images/contact/call.jpeg"
import { Link } from "react-router-dom"
export default function CTA(){
                              return(
                              <section className="group relative w-full  py-10  px-5 md:py-30 md:px-25  overflow-hidden bg-gradient-to-tr from-gray-950/90 to-black/60 text-white">
                               <img src={Image} alt="cta" className="absolute inset-0 object-cover w-full h-full mix-blend-overlay group-hover:scale-120 transition-all duration-600 delay-500" />
                                <div className="relative w-full w-full md:w-8/10 mx-auto flex flex-col items-center gap-8 text-center">
                                   <p className="w-fit px-4 py-2 mx-auto font-semibold text-[16px] rounded-[20px] border border-white/20 bg-gray-300/10">
                                     Trusted since 2014
                                   </p>
                                   <p className="text-4xl md:text-5xl lg:text-7xl font-bold ">
                                     Ready to build a stronger workforce?
                                   </p>
                                   <p className="w-full md:w-6/10 text-center text-[22px] font-light">
                                     Partner with our HR specialists to streamline hiring, compliance, and people management.
                                   </p>
                                   <div className="flex flex-col md:flex-row gap-5 w-full md:w-fit">
                                     <Link to='/contact' className="px-10 py-5 font-semibold text-[18px] rounded-[12px] bg-ascent whitespace-none hover:opacity-70 transition-all duration-500">
                                       Book Consultation
                                     </Link>
                                     <Link to='/services' className="px-10 py-5 font-semibold text-[18px] border rounded-[12px] whitespace-none hover:bg-white/30 transition-all duration-500">
                                      Learn more
                                     </Link>
                                   </div>
                                </div> 
                              </section>
                              )
}