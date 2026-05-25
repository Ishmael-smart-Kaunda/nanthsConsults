import { FiMail } from "react-icons/fi";
import { PiArrowArcLeftBold, PiArrowLeft, PiPhoneCallBold, PiWhatsappLogoBold } from "react-icons/pi";
import { Link } from "react-router-dom";


export default function NavBar(){
                        return(
                                <div className="bg-white w-full flex flex-row justify-between px-5 md:px-25 py-5 shadow-s ">
                                    <div className="inline-flex items-center gap-10 font-bold">
                                    <Link to='/' className="inline-flex items-center gap-1 text-[22px] text-ascent font-bold">
                                         Home
                                    </Link>
                                    <Link to='/' className="inline-flex items-center gap-1 text-[22px] text-ascent font-bold">
                                         Services
                                    </Link>
                                    </div>
                                    <div className="inline-flex items-center gap-8 text-ascent">
                                        <a href="" className=""><PiPhoneCallBold className="size-6"/></a>
                                        <a href="" className=""> <PiWhatsappLogoBold className="size-6"/></a>
                                        <a href="" className=""><FiMail className="size-6"/></a> 
                                    </div>
                                </div>               
                        )
}