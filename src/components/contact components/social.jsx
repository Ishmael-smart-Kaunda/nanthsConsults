import { Link } from "react-router-dom"
import { RiFacebookBoxFill, RiInstagramFill, RiLinkedinBoxFill } from "react-icons/ri"

export default function Social(){
            return(
                      <div className="my-10 md:my-20 bg-black/60 p-5 w-full rounded-xl space-y-8">
                           <h1 className="text-[16px] text-white font-bold uppercase">Follow Us</h1>
                           <div className="flex justify-between items-center">
                             <Link  to="https://web.facebook.com/profile.php?id=61552117840314" className="size-12 rounded-full bg-black/10 border  border-black/15 flex items-center justify-center
                                                      hover:bg-white/10 transition-all duration-300"
                              >
                                 <RiFacebookBoxFill  className="size-6 text-white" />
                              </Link>

                              <Link  to="#" className="size-12 rounded-full bg-black/10 border  border-black/15 flex items-center justify-center
                                                      hover:bg-white/10 transition-all duration-300"
                              >
                                 <RiLinkedinBoxFill className="size-6 text-white" />
                              </Link>

                              <Link  to="#" className="size-12 rounded-full bg-black/10 border  border-black/15 flex items-center justify-center
                                                      hover:bg-white/10 transition-all duration-300"
                              >
                                 <RiInstagramFill className="size-6 text-white" />
                              </Link>
                           </div>
                      </div>
            )
}