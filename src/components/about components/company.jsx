import { BsFilePdf, BsFilePdfFill } from "react-icons/bs";
import { FaCheckDouble, FaFilePdf } from "react-icons/fa6";
import { FiPercent, FiPlus } from "react-icons/fi";
import { PiAtomLight, PiClock, PiFilePdfLight, PiMedalLight, PiSealCheck, PiTimerLight } from "react-icons/pi";
import AboutImg from "../../assets/images/contact/instagram.jpeg"


export default function Company(){

    return(
           <section className="w-full max-w-[1440px] bg-gray-200 p-5 md:px-25">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-15">          
                        <div className="md:b md:space-y-20">
                            <h1 className="w-full py-2 border-b text-[30px] md:text-[40px] font-bold "> Our Company</h1>
                            <h3 className="text-4xl font-light my-10">Guided By <br/> Purpose. Driven <br/>  By People</h3>
                        </div>
                            <div className="w-full px-2 relaxed">
                                <p className="text-[23px] md:text-[25px] font-light leading-relaxed py-5">
                                        We are a duly registered Malawian consultancy firm that provides 
                                        a full range of management consultancy services specifically in the areas of human resources 
                                        management, trainings, performance management, integrated management systems, 
                                        organizational design and development, administration-related programs and business 
                                        development services with over 10 years of industry experiences. 
                                </p>
                        </div>
                </div>
                 {/* CORE VALUES */}
                 <h2 className="text-[30px] md:text-[40px] font-bold my-10">Our Core Values</h2>
                <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-6">
                    <article className="h-full border border-gray-600 bg-black text-white space-y-3 p-5">
                            <div className="w-fit rounded-full border p-2 "> 
                                <PiMedalLight className="size-6 ext-black"/>
                                
                           </div>
                            <h3 className="font-semibold text-[20px]">Quality </h3>
                            <p>Our excellence in service delivery leads to distinct output.</p>
                    </article>
                    <article className="h-full bg-black text-white space-y-3 p-5">
                            <div className="size-fit rounded-full border p-2 "> <PiSealCheck className="size-6 ext-black"/></div>
                            <h3 className="font-semibold text-[20px]">Integrity and Professionalism</h3>
                            <p className="">We are firm believers of core values and our service delivery is based on honesty, sincerity, 
                            professionalism and truthfulness.
                            </p>
                    </article>
                    <article className="h-full  bg-black text-white  space-y-3 p-5">
                            <div className="size-fit rounded-full border p-2 "> <PiAtomLight className="size-6 ext-black"/></div>
                            <h3 className="font-semibold text-[20px]">Innovation </h3>
                            <p> We value business improvement of our clients through our service delivery 
                            that is modern and easy to use. 
                            </p>
                    </article>
                    <article className="h-full text-white  bg-black  space-y-3 p-5">
                            <div className="size-fit rounded-full border p-2 "> <PiClock className="size-6 ext-black"/></div>
                            <h3 className="font-semibold text-[20px]">Timeliness</h3>
                            <p className="text-">We believe in timely service delivery to our clients.
                            </p>
                    </article>


                </div>
                {/*MISSION AND VISION */}
                 <div className="grid grid-cols-1 gap-6 md:grid-cols-2 my-20">
                     <div className="space-y-6">
                        <div className="p-5 bg-white md:rounded-xl shadow-md space-y-3 ">
                                <h3 className="font-semibold text-[20px]">Our Mission</h3>
                                <p className="">To offer business development and management solutions that are tailor-made 
                                        to suit the needs of our clients and beyond their expectations.</p>
                        </div>
                        <div className="p-5 bg-white md:rounded-xl shadow-md space-y-3  ">
                                <h3 className="font-semibold text-[20px]">Our Vision</h3>
                                <p className="">To be a reliable and number one choice consulting firm in Malawi and beyond.</p>
                        </div>
                        
                    </div>
                    
                        <div className="cursor-pointer w-full h-25 text-center  borderamber-700/50  boder-2 bg-gray-300 rounded-xl p-5 text-[20px] font-bold">
                                <PiFilePdfLight className="size-8 shrink-0 text-red-900 mx-auto"/>
                                <p className="">Download Our Profile</p>
                        </div>

                    


                </div> 

                 {/* VALUE PROPOSITION*/}
                 <h2 className="font text-[40px] font-bold mt-10">Why Choose Us?</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-10">
                        <div className="w-full flex flex-col gap-2 px-2 font-light ">
                                <h1 className="text-[22px] text-amber-800 font-semibold uppercase">Explore factors defining  our difference.</h1>
                                {/*<hr/>
                                <p className="text-center">Below are the reasons why we are a step closer to your HR and Administration solutions</p>*/}
                                <article className="space-y-2 my-4 text-[20px]">
                                        <span className="inline-flex items-center gap-2 font-semibold"><FaCheckDouble className="size-4 text-ascent shrink-0 grow-0"/>Custom-made Solutions </span>
                                        <p className="">Our solutions to your HR and administration problems 
                                                        are designed to meet your core requirements, and are always 
                                                        delivered on time.
                                        </p>
                                </article>

                                <article className="space-y-2 my-4 text-[20px]">
                                        <span className="inline-flex items-center gap-2 font-semibold"><FaCheckDouble className="size-4 shrink-0 grow-0 text-ascent"/> Client first</span>
                                        <p className="">We value our clients very much so that we make sure our services 
                                                        add value to your business core values. We also make sure that we create a bond 
                                                        by addressing your specific problems to your satisfaction. 
                                        </p>
                                </article>
                                <article className="space-y-2 my-4 text-[20px]">
                                        <span className="inline-flex items-center gap-2 font-semibold"><FaCheckDouble className="size-4 shrink-0 grow-0 text-ascent"/>Value for Money</span>
                                        <p className="">We are not in for a business transaction but for a business relationship. 
                                                        Our services are there to create a client-consultant rapport and we make sure that the 
                                                        needs of our clients come first.
                                        </p>
                                </article>
                        </div>
                        <div className="m bord grid grid-cols-1 space-y-5">
                                <img src={AboutImg} alt="Nanth Consult's value proposition" className="w-full h-auto object-cover rounded-[35px]" />
                                
                        </div>

                        
                        {/*
                        
                            <h1 className="text-[19px] font-light mb-5">By The Numbers</h1>
                                <article className="inline-flex gap-3 items-start font-light">
                                        <div className="inline-col content-center px-5  size-21 shrink-0 bg-blue-600/30 rounded-full"> 
                                                <span className="inline-flex text-[35px] px-1">10 <FiPlus className="size-4 translate-y-5"/></span> 
                                                <p className="text-[14px] -translate-y-3 translate-x-2">years</p> 
                                        </div>
                                        <div className="borde py- space-y-1">
                                            <h5 className="font-semibold">A decade of proven expertise</h5>
                                            <p className="">Over 10 years delivering HR and 
                                                            administration  solutions across 
                                                            Malawi and the wider region.
                                           </p>
                                        </div>
                                </article>
                                 <article className="inline-flex gap-3 items-start font-light">
                                        <div className="inline-col content-center px-2  size-21 shrink-0 rounded-full bg-emerald-600">
                                            <span className="inline-flex text-[35px] "> 500 <FiPlus className="size-4 translate-y-5"/></span>
                                            <p className="text-[14px] -translate-y-2 translate-x-1 px-2">clients</p> 
                                        </div>
                                        <div className="borde space-y-1">
                                            <h5 className="font-semibold">Trusted by hundreds of organisations</h5>
                                            <p className="">From small businesses to large institutions,
                                                            we have served over 500 clients across 10 sectors.
                                           </p>
                                        </div>
                                </article>

                                 <article className="inline-flex gap-3 items-start font-light">
                                        <div className="inline-col content-center px-5  size-21 shrink-0  rounded-full bg-indigo-600">
                                           <span className="inline-flex text-[35px] px-1"> 10 <FiPlus className="size-4 translate-y-5"/></span>
                                           <p className="text-[14px] -translate-y-2 translate-x-1">sectors</p> 
                                        </div>
                                        <div className="b space-y-1">
                                            <h5 className="font-semibold">Broad sectoral experience</h5>
                                            <p className="">From finance and healthcare to education 
                                                            and government, our expertise spans 10 
                                                            distinct sectors.
                                           </p>
                                        </div>
                                </article>

                                 <article className="inline-flex gap-3 items-start font-light">
                                        <div className="inline-col content-center px-4 size-21 shrink-0  rounded-full bg-amber-600">
                                          <span className="inline-flex text-[35px] px-1"> 98 <FiPercent className="size-4 translate-y-5"/></span>
                                          <p className="text-[14px] -translate-y-2 translate-x-1">retention</p> 
                                        </div>
                                        <div className="px- space-y-1">
                                            <h5 className="font-semibold">Long-term client partnerships</h5>
                                            <p className="">Our 98% client retention rate reflects the 
                                                        trust, quality, and consistency we bring to every 
                                                        engagement.
                                           </p>
                                        </div>
                                </article>
                        
                        
                        
                        */}
                </div>
           </section>
    )
}