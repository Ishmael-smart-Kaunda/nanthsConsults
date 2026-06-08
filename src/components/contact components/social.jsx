import { Link } from "react-router-dom"
import { RiFacebookBoxFill, RiInstagramFill, RiLinkedinBoxFill } from "react-icons/ri"

export default function Social(){
            return(
                      <div className="flex items-center gap-3">
                             <Link  to="#" className="size-12 rounded-full bg-black/10 border  border-black/15 flex items-center justify-center
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
            )
}