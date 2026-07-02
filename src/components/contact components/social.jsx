import { Link } from "react-router-dom"
import { RiFacebookBoxFill, RiInstagramFill, RiLinkedinBoxFill } from "react-icons/ri"

export default function Social(){
            return(
                      <div className="my-10 md:my-20 bg-black/60 p-5 md:px-10 w-full rounded-xl space-y-8">
                           <h1 className="text-[15px] text-white font-semibold uppercase">Follow Us</h1>
                           <div className="flex justify-between items-center">
                             <Link  to="https://web.facebook.com/profile.php?id=61552117840314" 
                                className="size-12 rounded-full bg-amber-700/20 border  
                                            border-amber-700/50 flex items-center justify-center
                                                      hover:bg-amber-700/30 transition-all duration-300"
                              >
                                 <RiFacebookBoxFill  className="size-6 text-white" />
                              </Link>

                              <Link  to="https://www.linkedin.com/in/nanth-consults-58723741b/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BkcFjsVwdRAmBmgU8CFirEQ%3D%3D" 
                                   className="
                                      size-12 
                                      rounded-full 
                                      bg-amber-700/20 
                                      border  
                                      border-amber-700/50 
                                      flex items-center 
                                      justify-center
                                      hover:bg-amber-700/30 
                                      transition-all
                                      duration-300"
                              >
                                 <RiLinkedinBoxFill className="size-6 text-white" />
                              </Link>

                              <Link  to="#" className="size-12 rounded-full bg-amber-700/20 border  border-amber-700/50 flex items-center justify-center
                                                      hover:bg-amber-700/30 transition-all duration-300"
                              >
                                 <RiInstagramFill className="size-6 text-white" />
                              </Link>
                           </div>
                      </div>
            )
}