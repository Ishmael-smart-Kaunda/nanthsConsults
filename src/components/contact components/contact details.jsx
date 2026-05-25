import { PiMapPin, PiPhoneCallBold, PiWhatsappLogoBold } from "react-icons/pi"
import aboutImg from "../../assets/images/contact/call.png"
import logo from "../../assets/images/logo/nanth-logo.jpeg"
import { HiMail } from "react-icons/hi"

export default function ContactDetails(){
                    return(
                            <section className="w-full max-w-[1440px] bg-gray-400 px-5 md:px-25 py-5 md:py-10">
                                 
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                                    <figure>
                                        <img src={aboutImg} alt="" className="w-full h-auto object-cover rounded-[35px]" />
                                    </figure>
                                    <div className="w-full h-full flex flex-col gap-4 items-end h-80">
                                        <figure className="">
                                            <img src={logo} alt="" className=" rounded-[15px] scale-60" />
                                        </figure>
                                        <div className="flex flex-col gap-5 w-full font-bold rounded-xl p-5 ">
                                            <h1 className="text-[35px] font-bold">Speak to Us</h1>
                                             <a href="" className="inline-flex gap-1 items-center text-[18px] text-amber-800  bg-white p-4 rounded-xl"><PiPhoneCallBold className="size-6"/> +265 88 8703 316</a>
                                             <a href="" className="inline-flex gap-1 items-center text-[18px] text-amber-800 bg-white p-4 rounded-xl"><PiWhatsappLogoBold className="size-6"/> +265 98 0048 010</a>
                                             <a href="" className="inline-flex gap-1 items-center text-[18px] text-amber-800 bg-white p-4 rounded-xl"><HiMail className="size-6"/>nanthconsults@gmail.com</a>
                                             <a href="" className="inline-flex gap-1 items-center text-[18px] text-amber-800 bg-white p-4 rounded-xl"><PiMapPin className="size-6"/>Lilongwe, Malawi</a>
                                        </div>
                                        

                                    </div>
                                    
                                </div>
                            </section>
                    )
}