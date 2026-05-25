import { HiMail } from "react-icons/hi";
import { PiMailboxLight, PiMapPin, PiPhoneCallLight, PiWhatsappLogoLight } from "react-icons/pi";


export default function CTA(){
                   return(
                         <section className="w-full">
                             <div className="p-5 md:p-10 w-full text-white text-center space-y-8 bg-[#101617] md:px-25 md:py-15">
                                  <h4 className="md:text-[50px] font-bold">Still Have Questions?</h4>
                                  <p className="text-[25px] font-light">Our team is ready to help you find the right HR and administrative 
                                                  solutions for your organization. Reach out to us for professional 
                                                  guidance and support.
                                  </p>
                                  
                                  <a href="/contact" className="block text-[20px] font-bold">Lets Talk</a>
                                  <div className="w-8/10 mx-auto hidden md:inline-flex justify-between text-amber-800 border-t border-white/20 py-5 ">
                                      <a href="" className="inline-flex gap-1 items-center text-[18px]"><PiPhoneCallLight className="size-6"/> +265 88 8703 316</a>
                                      <a href="" className="inline-flex gap-1 items-center text-[18px]"><PiWhatsappLogoLight className="size-6"/> +265 98 0048 010</a>
                                      <a href="" className="inline-flex gap-1 items-center text-[18px]"><HiMail className="size-6"/>nanthconsults@gmail.com</a>
                                      <a href="" className="inline-flex gap-1 items-center text-[18px]"><PiMapPin className="size-6"/>Lilongwe, Malawi</a>
                                  </div>
                             </div>

                         </section>
                   )
}