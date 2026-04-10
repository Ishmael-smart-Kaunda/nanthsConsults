import NavBar from "../components/navBar"
import CTA from "../components/home components/CTA"
import Footer from "../components/footer"
import { NavLink } from "react-router-dom"
import { BsCheckCircleFill, BsArrowBarDown, BsArrowDown } from "react-icons/bs"
import { HiArrowDown } from "react-icons/hi"
import { MdArrowDropDown } from "react-icons/md"

import image from "../assets/images/contact/shero.jpeg"
export default function Services(){
          return(
                  <>
                     <NavBar/>
                    <header id="top" className="relative w-full h-[30vh] bg-gradient-to-tr from-black via-black/70 to-gray-200 mb-8">
                       <img src={image} alt="explore our services" className="absolute inset-0 object-cover w-full h-full mix-blend-overlay"/>
                    </header>

                     <section  className="w-full p-5 md:px-25"> 
                        <h1  className="font-bold text-[20px] text-amber-950 mb-8">Reliable HR Solutions for your business</h1>
                        <p></p>
                        <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-4 md:rid-rows-2  w-full gap-3">
                            <div className=" flex flex-col gap-8 col-span-1 md:col-start-1 md:row-start-1 md:col-span-3 w-full h-full">
                                <h2 className="md:idden text-[20px] font-semibold text-black/70 mt-3">Explore our services</h2>
                                <article id="recruitment" className=" w-full rounded-md h-85 border overflow-hidden space-y-3 flex flex-col   border border-gray-300/30 p-2 bg-gray-50 transition-all duration-300">
                                    <h3 className="font-bold text-[17px] text-ascent/90">Talent Acquistion & Management </h3>
                                    <h4 className="font-semibold text-[15px] text-ascent/70">Attract, hire, and retain the right people for your business.</h4>
                                    
                                    <hr  className="text-amber-700/20"/>
                                    <p className="text-[15px] text-ascent/60 font-semibold">Our solutions include:</p>
                                    <ul id="hrSystems" className="w-full space-y-2 text-stone-500">
                                        <li className="inline-flex"><BsCheckCircleFill className="translate-y-1 mr-1"/> Defining job role and requirement analysis</li>
                                        <br/>
                                        <li className="inline-flex"><BsCheckCircleFill className="translate-y-1 mr-1"/>Candidate sourcing and screening</li>
                                        <br/>
                                        <li className="inline-flex"><BsCheckCircleFill className="translate-y-1 mr-1"/>Interview coordination and evaluation</li>
                                        <br/>
                                        <li className="inline-flex"><BsCheckCircleFill className="translate-y-1 mr-1"/>Onboarding process support</li>
                                        <br/>
                                        <li className="inline-flex"><BsCheckCircleFill className="translate-y-1 mr-1"/>Employee retention and performance strategies</li>
                                    </ul>
                                   <button className="w-fit self-end"><MdArrowDropDown className="size-7"/></button>
                                </article>

                                <article  className=" w-full h-70 border overflow-hidden space-y-3 flex flex-col   border border-gray-300/30 p-2 bg-gray-50 transition-all duration-300">
                                    <h3 className="font-bold text-[17px] text-ascent/90">HR Systems Creation </h3>
                                    <h4 className="text-stone-500">Build a structured and efficient HR foundation for your business.</h4>
                                    <hr className="text-amber-700/20"/>
                                    <p className="text-[15px] text-ascent/60 font-semibold">We support organisations in developing and improving their HR function through:</p>
                                    <ul id="evaluation" className=" w-full text-stone-500">
                                        <li className="inline-flex"><BsCheckCircleFill className="translate-y-1 mr-1"/>Development of HR policies and procedures</li>
                                        <br/>
                                        <li className="inline-flex"><BsCheckCircleFill className="translate-y-1 mr-1"/>HR process design and implementation</li>
                                        <br/>
                                        <li className="inline-flex"><BsCheckCircleFill className="translate-y-1 mr-1"/>Employee records and data management Systems</li>
                                        <br/>
                                        <li className="inline-flex"><BsCheckCircleFill className="translate-y-1 mr-1"/>HR audits and systems review</li>
                                        <br/>
                                    </ul>
                                   <button className="w-fit self-end"><MdArrowDropDown className="size-7"/></button>
                                </article>

                                <article  className=" w-full h border overflow-hidden space-y-3 flex flex-col   border border-gray-300/30 p-2 bg-gray-50  transition-all duration-300">
                                    <h3 className="font-bold text-[17px] text-ascent/90">Job Evaluation & Salary Survey </h3>
                                    <h4 className="text-stone-500">Ensure fair, competitive, and structured compensation systems.</h4>
                                     <hr className="text-amber-700/20"/>
                                    <p className="text-[15px] text-ascent/60 font-semibold">We you build transparent and competitive pay system that attracts talent and promotes fairness through:</p>
                                    <ul id="performance" className="text-stone-500">
                                        <li className="inline-flex"><BsCheckCircleFill className="translate-y-1 mr-1"/>Job analysis and role evaluation</li>
                                        <br/>
                                        <li className="inline-flex"><BsCheckCircleFill className="translate-y-1 mr-1"/>Salary benchmarking and market surveys</li>
                                        <br/>
                                        <li className="inline-flex"><BsCheckCircleFill className="translate-y-1 mr-1"/>Pay structure design</li>
                                        <br/>
                                        <li className="inline-flex"><BsCheckCircleFill className="translate-y-1 mr-1"/>Compensation policy development</li>
                                        <br/>
                                    </ul>
                                   <button className="w-fit self-end"><MdArrowDropDown className="size-7"/></button>
                                </article>

                                 <article  className=" w-full h-70 border overflow-hidden space-y-3 flex flex-col   border border-gray-300/30 p-2 bg-gray-50  transition-all duration-300">
                                    <h3 className="font-bold text-[17px] text-ascent/90">Performance Management</h3>
                                    <h4 className="text-stone-500">Drive productivity through structured performance systems</h4>
                                     <hr className="text-amber-700/20"/>
                                    <p className="text-[15px] text-ascent/60 font-semibold">You get a results-driven culture where performance is meaured, managed and improved through our:</p>
                                    <ul id="org" className="text-stone-500">
                                        <li className="inline-flex"><BsCheckCircleFill className="translate-y-1 mr-1"/>Performance appraisal system design</li>
                                        <br/>
                                        <li className="inline-flex"><BsCheckCircleFill className="translate-y-1 mr-1"/>KPI development and alignment</li>
                                        <br/>
                                        <li className="inline-flex"><BsCheckCircleFill className="translate-y-1 mr-1"/>Employee evaluation frameworks</li>
                                        <br/>
                                        <li className="inline-flex"><BsCheckCircleFill className="translate-y-1 mr-1"/>Performance improvement planning</li>
                                        <br/>
                                    </ul>
                                   <button className="w-fit self-end"><MdArrowDropDown className="size-7"/></button>
                                </article>

                                 <article  className=" w-full h- border overflow-hidden space-y-3 flex flex-col   border border-gray-300/30 p-2 bg-gray-50  transition-all duration-300">
                                    <h3 className="font-bold text-[17px] text-ascent/90">Organisational Design & Business Development</h3>
                                    <h4 className="text-stone-500">Ensure fair, competitive, and structured compensation systems.</h4>
                                     <hr className="text-amber-700/20"/>
                                    <p className="text-[15px] text-ascent/60 font-semibold">Our support to a well-structured organization that supports scalability and better decision include:</p>
                                    <ul id="training" className="text-stone-500">
                                        <li className="inline-flex"><BsCheckCircleFill className="translate-y-1 mr-1"/>Organisation structure design and restructuring</li>
                                        <br/>
                                        <li className="inline-flex"><BsCheckCircleFill className="translate-y-1 mr-1"/>Role clarity and reporting lines</li>
                                        <br/>
                                        <li className="inline-flex"><BsCheckCircleFill className="translate-y-1 mr-1"/>Business process improvement</li>
                                        <br/>
                                        <li className="inline-flex"><BsCheckCircleFill className="translate-y-1 mr-1"/>Operation efficiency strategies</li>
                                        <br/>
                                        <li className="inline-flex"><BsCheckCircleFill className="translate-y-1 mr-1"/>Growth planning and support</li>
                                        
                                    </ul>
                                   <button className="w-fit self-end"><MdArrowDropDown className="size-7"/></button>
                                </article>

                                 
                               

                                 <article  className=" w-full h- border overflow-hidden space-y-3 flex flex-col   border border-gray-300/30 p-2 bg-gray-50 transition-all duration-300">
                                    <h3 className="font-bold text-[17px] text-ascent/90">Training and Development </h3>
                                    <h4 className="text-stone-500">Ensure accuracy, consistency, and efficiency in your operations.</h4>
                                     <hr className="text-amber-700/20"/>
                                    <p className="text-[15px] text-ascent/60 font-semibold">We manage essential adminis  functions such as:</p>
                                    <ul id="policies" className="text-stone-500">
                                        <li className="inline-flex"><BsCheckCircleFill className="translate-y-1 mr-1"/> Payroll processing and salary administration</li>
                                        <br/>
                                        <li className="inline-flex"><BsCheckCircleFill className="translate-y-1 mr-1"/>Employee record management</li>
                                        <br/>
                                        <li className="inline-flex"><BsCheckCircleFill className="translate-y-1 mr-1"/>Leave and attendance tracking systems</li>
                                        <br/>
                                        <li className="inline-flex"><BsCheckCircleFill className="translate-y-1 mr-1"/>General administrative support</li>
                                        
                                        
                                    </ul>
                                   <button className="w-fit self-end"><MdArrowDropDown className="size-7"/></button>
                                </article>

                                <article  className=" w-full h- border overflow-hidden space-y-3 flex flex-col   border border-gray-300/30 p-2 bg-gray-50 transition-all duration-300">
                                    <h3 className="font-bold text-[17px] text-ascent/90">Policies and Contract Formulation </h3>
                                    <h4 className="text-stone-500">Ensure fair, competitive, and structured compensation systems.</h4>
                                     <hr className="text-amber-700/20"/>
                                    <p className="text-[15px] text-ascent/60 font-semibold">Our support to a well-structured organization that supports scalability and better decision include:</p>
                                    <ul id="hrSourcing" className="text-stone-500">
                                        <li className="inline-flex"><BsCheckCircleFill className="translate-y-1 mr-1"/>Organisation structure design and restructuring</li>
                                        <br/>
                                        <li className="inline-flex"><BsCheckCircleFill className="translate-y-1 mr-1"/>Role clarity and reporting lines</li>
                                        <br/>
                                        <li className="inline-flex"><BsCheckCircleFill className="translate-y-1 mr-1"/>Business process improvement</li>
                                        <br/>
                                        <li className="inline-flex"><BsCheckCircleFill className="translate-y-1 mr-1"/>Operation efficiency strategies</li>
                                        <br/>
                                        <li className="inline-flex"><BsCheckCircleFill className="translate-y-1 mr-1"/>Growth planning and support</li>
                                        
                                    </ul>
                                   <button className="w-fit self-end"><MdArrowDropDown className="size-7"/></button>
                                </article>

                                 <article  className=" w-full h- border overflow-hidden space-y-3 flex flex-col   border border-gray-300/30 p-2 bg-gray-50 transition-all duration-300">
                                    <h3 className="font-bold text-[17px] text-ascent/90">HR Outsourcing Services </h3>
                                    <h4 className="text-stone-500">Stay compliant and protect your business from legal risks.</h4>
                                     <hr className="text-amber-700/20"/>
                                    <p className="text-[15px] text-ascent/60 font-semibold">Our team provide expert support on:</p>
                                    <ul id="managementSystems" className="text-stone-500">
                                        <li className="inline-flex"><BsCheckCircleFill className="translate-y-1 mr-1"/> Labour law guidance and interpretation</li>
                                        <br/>
                                        <li className="inline-flex"><BsCheckCircleFill className="translate-y-1 mr-1"/> Employment contract development and review</li>
                                        <br/>
                                        <li className="inline-flex"><BsCheckCircleFill className="translate-y-1 mr-1"/>Workplace policy compliance</li>
                                        <br/>
                                        <li className="inline-flex"><BsCheckCircleFill className="translate-y-1 mr-1"/>Disciplinary procedures and dispute handling</li>
                                        <br/>
                                        <li className="inline-flex"><BsCheckCircleFill className="translate-y-1 mr-1"/>Regulatory compliance audits</li>
                                    </ul>
                                   <button className="w-fit self-end"><MdArrowDropDown className="size-7"/></button>
                                </article>

                                 <article  className=" w-full h-70 border overflow-hidden space-y-3 flex flex-col   border border-gray-300/30 p-2 bg-gray-50 transition-all duration-300">
                                    <h3 className="font-bold text-[17px] text-ascent/90">Integrated Management Systems  </h3>
                                     <hr className="text-amber-700/20"/>
                                    <h4 className="text-[15px] text-ascent/60 font-semibold">Build a structured and efficient HR foundation for your business.</h4>
                                    <p className="text-[15px] text-ascent/60 font-semibold">We support organisations in developing and improving their HR function through:</p>
                                    <ul className="text-stone-500">
                                        <li className="inline-flex"><BsCheckCircleFill className="translate-y-1 mr-1"/> Development of HR policies and procedures</li>
                                        <br/>
                                        <li className="inline-flex"><BsCheckCircleFill className="translate-y-1 mr-1"/>Performance management system design</li>
                                        <br/>
                                        <li className="inline-flex"><BsCheckCircleFill className="translate-y-1 mr-1"/>Employee relations and workplace structuring</li>
                                        <br/>
                                        <li className="inline-flex"><BsCheckCircleFill className="translate-y-1 mr-1"/>HR audits and process evaluation</li>
                                        <br/>
                                        <li className="inline-flex"><BsCheckCircleFill className="translate-y-1 mr-1"/>Organisational structure and role clarity</li>
                                    </ul>
                                   <button className="w-fit self-end"><MdArrowDropDown className="size-7"/></button>
                                </article>

                            </div>

                            <div className="md:sticky top-50 md:-translate-y-22 row-start-1 col-start-1 md:col-start-4 w-full h-fit">
                                <h2 className="font-semibold text-ascent/80 mb-3">Services Overview</h2>
                                <ul className="text-stone-500">
                                        <NavLink to="#top"
                                              onClick={(e) => {
                                                e.preventDefault();
                                                document.getElementById("top")
                                                  ?.scrollIntoView({ behavior: "smooth" });
                                              }}> 
                                           <li className="cursor-pointer border-t border-t-gray-300/50  border-b border-b-gray-300 p-2 bg-gray-100 hover:bg-stone-200 transition-all duration-300">Recruitment & talent acquisiton</li>
                                        </NavLink>

                                        <NavLink to="#hrSystems"
                                              onClick={(e) => {
                                                e.preventDefault();
                                                document.getElementById("hrSystems")
                                                  ?.scrollIntoView({ behavior: "smooth" });
                                              }}>
                                           <li  className="cursor-pointer border-b border-b-gray-300/50  p-2 bg-gray-100 hover:bg-stone-200 transition-all duration-300">HR Systems Creation</li>
                                        </NavLink>
                                        <NavLink to="#evaluation"
                                              onClick={(e) => {
                                                e.preventDefault();
                                                document.getElementById("evaluation")
                                                  ?.scrollIntoView({ behavior: "smooth" });
                                              }}>
                                            <li  className="cursor-pointer border-b border-b-gray-300/50 p-2 bg-gray-100 hover:bg-stone-200 transition-all duration-300">Job Evaluation and Salary Survey</li>
                                        </NavLink>
                                        <NavLink to="performance"
                                              onClick={(e) => {
                                                e.preventDefault();
                                                document.getElementById("performance")
                                                  ?.scrollIntoView({ behavior: "smooth" });
                                              }}>
                                            <li   className="cursor-pointer border-b border-b-gray-300/50  p-2 bg-gray-100 hover:bg-stone-200 transition-all duration-300">Perfomance management </li>
                                        </NavLink>
                                        <NavLink to="#org"
                                              onClick={(e) => {
                                                e.preventDefault();
                                                document.getElementById("org")
                                                  ?.scrollIntoView({ behavior: "smooth" });
                                              }}>
                                            <li  className="cursor-pointer border-b border-b-gray-300/50  p-2 bg-gray-100 hover:bg-stone-200 transition-all duration-300">Organizational Design and Business Development </li>
                                        </NavLink>
                                        <NavLink to="#training"
                                              onClick={(e) => {
                                                e.preventDefault();
                                                document.getElementById("training")
                                                  ?.scrollIntoView({ behavior: "smooth" });
                                              }}>
                                             <li  className="cursor-pointer border-b border-b-gray-300/50 p-2 bg-gray-100 hover:bg-stone-200 transition-all duration-300">Training and Development</li>
                                        </NavLink>
                                        <NavLink to="#policies"
                                              onClick={(e) => {
                                                e.preventDefault();
                                                document.getElementById("policies")
                                                  ?.scrollIntoView({ behavior: "smooth" });
                                              }}>
                                             <li  className="cursor-pointer border-b border-b-gray-300/50  p-2 bg-gray-100 hover:bg-stone-200 transition-all duration-300">Policies and Contract Formulation</li>
                                        </NavLink>
                                        <NavLink to="#hrSourcing"
                                              onClick={(e) => {
                                                e.preventDefault();
                                                document.getElementById("hrSourcing")
                                                  ?.scrollIntoView({ behavior: "smooth" });
                                              }}>
                                             <li  className="cursor-pointer border-b border-b-gray-300/50  p-2 bg-gray-100 hover:bg-stone-200 transition-all duration-300">HR Outsourcing Services</li>
                                        </NavLink>
                                        <NavLink to="#managementSystems"
                                              onClick={(e) => {
                                                e.preventDefault();
                                                document.getElementById("managementSystems")
                                                  ?.scrollIntoView({ behavior: "smooth" });
                                              }}>
                                             <li  className="cursor-pointer border-b border-b-gray-300/50  p-2 bg-gray-100 hover:bg-stone-200 transition-all duration-300">Integrated Management Systems</li>
                                        </NavLink>
                                        
                                </ul>
                          </div>

                        </div>
                        
                     </section>
                     <CTA/>
                     <Footer/>
                  </>
          )
}