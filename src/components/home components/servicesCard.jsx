import { RiFileGifLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function ServicesCard({icon, title, descript, img, imgAlt, link}){
                    const Icon = icon;
                    return(
                              <article className="relative z-10 cursor-poiter p-5 flex flex-col justify-between
                                            overflow-hidden   bg-white rounded-md 
                                            hover:shadow-zinc-400 
                                            transition-all duration-500"
                                            >   
                                <div className="absolute left-0 top-5 w- px-5 py-2 bg-black rounded-r-full">
                                   <Icon className=" size-8 text-white"/>
                                </div>
                                <div className=" mt-15 h-100 flex flex-col items-start text-black gap-2">
                                    <h4 className="text-[24px] font-bold text-amber-800">
                                        {title}
                                    </h4>
                                    <p className=" text-[22px] font-light ">
                                        {descript}
                                    </p>
                                    <img src={img} alt={imgAlt} className="w-full h-45" />
                                </div> 
                                <Link to={link} className="absolte bottom-3 w-fit bg-ascent/10 text-amber-800 black hover:text-ascent -200 font-bold rounded-full py-1 px-3">learn more</Link>
                            </article> 
                    )
}