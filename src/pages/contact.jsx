import image from "../assets/images/contact/call.jpeg"
import { BsMailbox, BsWhatsapp, BsPinMap } from "react-icons/bs"
import { BiPhoneCall } from "react-icons/bi"
import { HiPhone, HiMapPin, HiArrowDownLeft} from "react-icons/hi2"
import { TbBrandWhatsapp, TbMail } from "react-icons/tb"

import { NavLink } from "react-router-dom"


export default function Contact(){
          return(
                  <>
                      <div  className=" w-full px-5 md:px-25 py-1 flex flex-row justify-between align-center shadow-md bg-white">
                                <div className=" h-full flex flex-row justify-between text-zinc-50 py-1">
                                <NavLink to='/'>
                                        <span className="inline-flex gap-2 font-semibold cursor-pointer text-stone-950" 
                                        >
                                                <HiArrowDownLeft className="size-6 text-stone-950 -rotate-315"/> 
                                                Back to home
                                        </span>
                                </NavLink>
                                

                                </div> 
                                <NavLink to='/contact' className="hidden cursor-pointer p-1 px-5 border border-white/30  rounded-md font-semibold text-white/80 bg-amer-800 hover:bg-ascent/20">Contact</NavLink>       
                    </div>
                     <section className="w-full p-5 md:px-25 max-w-[1440px] space-y-4">               
                                <h1 className="hidden text-amber-950 text-[25px] font-bold py-5">Contact Us</h1>
                                <p className="md:w-1/2 font-semibold text-black/70">We would love to hear from you. Whether you have a question, need support or want to 
                                                learn more about our services, our team is here to assist you.
                                </p>
                                 
                     
                        <div className="my-5 w-9/10 md:w-full mx-auto p-10 pt-20 rounded-md bg-zinc-500 ">
                                <address className="flex flex-col md:flex-row justify-between gap-8 items-center">
                                        <div className="flex flex-col items-center gap-2 text-white w-45">
                                                <HiPhone className="size-8 text-amber-950"/>
                                                <p className="font-semibold text-[16px]">Call Us</p>
                                                <a href="/" className="text-[12px] text-semibold">+265 88 8703 316 </a>
                                        </div> 

                                        <div className="flex flex-col items-center gap-2 text-white w-45">
                                                <TbMail className="size-8 text-amber-950"/>
                                                <p className="font-semibold text-[16px]">Send us an Emaill</p>
                                                <a href="mailto:nanthconsults@gmail.com " className="text-[12px] text-semibold">nanthconsults@gmail.com </a>
                                        </div> 

                                        <div className="flex flex-col items-center gap-2 text-white w-45">
                                                <TbBrandWhatsapp className="size-8 text-amber-950"/>
                                                <p className="font-semibold text-[16px]">WhatsApp</p>
                                                <a href="/" className="text-[12px] text-semibold">+265 980 04 80 10</a>
                                        </div> 

                                        <div className="flex flex-col items-center gap-2 text-white w-45">
                                                <HiMapPin className="size-8 text-amber-950"/>
                                                <p className="font-semibold text-[16px]">Visit our Offices</p>
                                                <a href="/" className="text-[12px] text-semibold">Lilongwe</a>
                                        </div> 

                                        
                                </address> 
                        </div>

                        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
                                <figure className="relative w-full h-full md:col-span-1 bg-gradient-to-tr from-stone-900 to-gray-950 rounded-lg">
                                   <img src={image} alt="contact us" className="w-full h-full rounded-md mix-blend-overlay"/>
                                   <figcaption className=" absolute top-[50%] text-white/50 -translate-[50%] left-[50%] text-5xl font-bold">Let us serve you the best</figcaption>
                                </figure>
                                <div className="md:col-span-2  space-y-2">
                                  <h2 className="text-amber-950 font-bold">Lets Connect</h2>
                                  <p className="font-semibold text-black/70">Use the form below to send us a message</p>
                                  <form className="w-full flex flex-col gap-4 py-5 rounded-r-sm">
                                                <input 
                                                type="text"
                                                name="user_name" 
                                                placeholder="Full name" 
                                                className="w-full p-3 text-gray-600/90 bg-zinc-50 shadow-sm border border border-black/10 placeholder: text-placeholder  focus:outline-none "
                                                required
                                                />
                                                <input 
                                                type="email"
                                                name="email" 
                                                placeholder="Email address" 
                                                className="w-full p-3 text-gray-600/90  bg-zinc-50 shadow-sm border  border-black/10 focus:outline-none "
                                                />
                                                <input 
                                                type="tel"
                                                name="phone" 
                                                placeholder="Phone" 
                                                className="w-full p-3 text-gray-600/90 bg-zinc-50 shadow-sm  border border-black/10 focus:outline-none"
                                                />
                                             
                                                <textarea 
                                                name="message" 
                                                placeholder="Message" 
                                                className="w-full p-3 text-gray-600/90  bg-zinc-50 shadow-sm border border-black/10 focus:outline-none"
                                                >
                                                </textarea>
                                        
                                                <button 
                                                className="w-full md:w-1/2 px-4 py-3 bg-amber-800  text-white font-semibold rounded-md hover:opacity-80">Send</button>
                                        
                                </form>
                                </div>

                                 
                                
                        
                        </div>     
                        

                     </section>

                     <div className=" w-full bg-white/40 h-100"> 
                                <iframe 
                                        src="https://www.google.com/maps/embed?pb=!!1m12!1m3!1d2267.4949588833306!2d35.02306444172996!3d-15.799592032770489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18d845006b9f1d99%3A0x3f28457121263266!2sGamers%20Planet!5e0!3m2!1sen!2smw!4v1768762796683!5m2!1sen!2smw" 
                                        className="w-full h-full"
                                        loading="lazy"
                                        allowFullScreen=""  
                                        referrerPolicy="no-referrer-when-downgrade">
                                </iframe> 
                        </div>
                     
                  </>
          )
}