
import { Link } from "react-router-dom"
export default function CTA(){
                              return(
                                     <section className="w-full  py-7 px-5 md:px-25 flex flex-col items-center gap-6 md:flex-row items-center justify-between bg-gray-950 text-white">
                                            <div className="text-center md:text-left">
                                                 <p className="font-bold text-[20px]">Payroll Systems Made Simple</p>
                                                 <p className="text-gray-600 italic">Accurate, compliant, and stress-free payroll management!!</p>
                                            </div>
                                            <Link to='/contact'>
                                                 <button className="rounded-md p-3 px-5 bg-amber-800 font-bold">Get a Support</button>
                                             </Link>
                                     </section>
                              )
}