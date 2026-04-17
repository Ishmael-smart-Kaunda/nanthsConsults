
import { BsCheckCircleFill } from "react-icons/bs"
import { MdArrowDropDown } from "react-icons/md"
export default function Service({title, headline, list, isExpanded, onToggle}){
             return(
                    <article id="recruitment"  onClick={onToggle} className={`${ isExpanded ? 'h-fit bg-gray-100':' max-h-25 relative'} cursor-pointer w-full border  overflow-hidden space-y-3 flex flex-col text-gray-800  border border-gray-300/50 p-2  transition-all duration-300`}>
                            <h3 className="font-bold text-[17px] text-asent/90">{title} </h3>
                            <h4 className="font-semibold text-[15px] text-acent/70">{headline}</h4>
                            
                            <hr  className={`${isExpanded ? 'opacity-100': 'opacity-0'} text-amber-900/40`}/>
                            <p className="text-[15px] text-black/70 font-semibold">Our solutions include:</p>
                            <ul id="hrSystems" className="flex flex-col gap-1 w-full space-y-2 text-black/70">
                                {list.map((item)=>(
                                     <li key={item.id} className="inline-flex"><BsCheckCircleFill className="translate-y-1 mr-1"/>{item.methodology}</li>
                                ))}   
                            </ul>
                           
                           <MdArrowDropDown className={` ${isExpanded ? 'rotate-180 mt-10' : 'absolute top-15 mt-1'}  transition-all duration-500 self-end text-red-900 size-7`}/>
                    </article>
             )
}