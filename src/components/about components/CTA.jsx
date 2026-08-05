import { HiMail } from "react-icons/hi";
import { PiMailboxLight, PiMapPin, PiPhoneCallLight, PiWhatsappLogoLight } from "react-icons/pi";
import { Link } from "react-router-dom";


export default function CTA(){
                   return(
                         <section className="w-full">
                             <div className="p-5 md:p-10 w-full text-white text-center space-y-10 bg-gray-950 [#101617] md:px-25 md:py-15">
                                  <h4 className="md:text-[50px] font-bold">Still Have Questions?</h4>
                                  <p className="text-[25px] font-light">Our team is ready to help you find the right HR and administrative 
                                                  solutions for your organization. Reach out to us for professional 
                                                  guidance and support.
                                  </p>
                                  
                                  <Link to="/contact" className="w-fit mx-auto bg-black block text-[20px] font-bold px-15 py-4 border border-white/20 rounded-[15px] hover:opacity-80">Lets Talk</Link>
                                  <div className="w-8/10 mx-auto hidden md:inline-flex justify-between text-amber-800 border-t border-white/20 py-5 ">
                                      <a href="tel:+265888703316" className="inline-flex gap-1 items-center text-[18px]"><PiPhoneCallLight className="size-6"/>+265 88 8703 316 </a>
                                      <a href="https://wa.me/265980048010?text=Hi+Nanth+Consults,+I+want+to+know+more+about+your+services." className="inline-flex gap-1 items-center text-[18px]"><PiWhatsappLogoLight className="size-6"/> +265 98 0048 010</a>
                                      <a href="mailto:info@nanthsconsults.com" className="inline-flex gap-1 items-center text-[18px]">
                                         <HiMail className="size-6"/>
                                         info@nanthsconsults.com
                                        </a>
                                      <a href="https://www.google.com/maps/place/11%C2%B024'59.9%22S+34%C2%B000'30.1%22E/@-11.4166389,34.0083611,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-11.4166389!4d34.0083611?hl=en&entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D"  
                                         target="_blank"
                                         rel="noopener noreferrer" 
                                         className="inline-flex gap-1 items-center text-[18px]">
                                            <PiMapPin className="size-6"/>Area 4, Mzuzu
                                      </a>
                                  </div>
                             </div>

                         </section>
                   )
}