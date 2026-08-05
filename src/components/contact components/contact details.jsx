import { PiMapPin, PiPhoneCallBold, PiWhatsappLogoBold } from "react-icons/pi"
import aboutImg from "../../assets/images/contact/call.png"
import logo from "../../assets/images/logo/nanth-logo.jpeg"
import { HiMail } from "react-icons/hi"

export default function ContactDetails(){
                    return(
                            <section className="w-full max-w-[1440px] bg-gray-400 px-5 md:px-25 py-20 md:py-10">
                                 
                                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
                                    <figure className="">
                                        <img src={aboutImg} alt="talk to us" className="mdanslate-x-30 w-full h-auto object-cover rounded-[35px]" />   
                                    </figure>
                                    <div className="w-full h-full flex flex-col gap-6 items-end h-80">
                                        <figure className="hidden md:block">
                                            <img src={logo} alt="" className="translate-x-7 rounded-[15px] scale-60" />
                                        </figure>
                                        

                                        <div className="w-full flex flex-col gap-5 w-full font-bold rounded-xl">
                                            <a href="tel:+265888703316" className="inline-flex gap-1 items-center text-[18px] text-amber-800  bg-white p-4 rounded-xl"><PiPhoneCallBold className="size-6"/>+265 88 8703 316 </a>
                                            <a href="https://wa.me/265980048010?text=Hi+Nanth+Consults,+I+want+to+know+more+about+your+services." className="inline-flex gap-1 items-center text-[18px] text-amber-800  bg-white p-4 rounded-xl"><PiWhatsappLogoBold className="size-6"/> +265 98 0048 010</a>
                                            <a href="mailto:info@nanthsconsults.com" className="inline-flex gap-1 items-center text-[18px] text-amber-800  bg-white p-4 rounded-xl">
                                                <HiMail className="size-6"/>
                                                 info@nanthsconsults.com
                                            </a>
                                            <a href="https://www.google.com/maps/place/11%C2%B024'59.9%22S+34%C2%B000'30.1%22E/@-11.4166389,34.0083611,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-11.4166389!4d34.0083611?hl=en&entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D"  
                                                target="_blank"
                                                rel="noopener noreferrer" 
                                                className="inline-flex gap-1 items-center text-[18px] text-amber-800  bg-white p-4 rounded-xl">
                                                <PiMapPin className="size-6"/>Area 4, Mzuzu
                                            </a>
                                        </div>
                                        

                                    </div>
                                    
                                </div>
                            </section>
                    )
}