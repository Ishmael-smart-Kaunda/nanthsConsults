import NavBar from "../components/navBar"
import Footer from "../components/footer"
import image from "../assets/images/contact/q.jpeg"

export default function About(){
          return(
                  <>
                     <NavBar/>
                     <h1 className="w-full text-center font-bold m-auto"> ABOUT US</h1>
                        <section className="w-full max-w-[1440px] p-5 md:px-25">
                                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
                                         <div className="w-full px-2 relaxed">
                                                <h1 className="font-bold text-[25px] text-amber-950">Who are we</h1>
                                                <div className="w-15 h-1.5 rounded-xl bg-amber-800 mb-5"/>

                                                <p className="text-justify text-[18px] fot-semibold text-gray-800">
                                                        We are a duly registered Malawian consultancy firm that provides 
                                                        a full range of management consultancy services specifically in the areas of human resources 
                                                        management, trainings, performance management, integrated management systems, 
                                                        organizational design and development, administration-related programs and business 
                                                        development services with over 10 years of industry experiences. 
                                                </p>
                                        </div>
                                        <div className="px-2 py-5 md:py-16 text-[17px] text-stone-600">
                                                <h3 className="font-bold ">The Gap we Close</h3>
                                                <p className="">We transform your workforce into a catalyst for achieving your goals.</p>
                                                

                                        </div>
                                        

                                </div>
                                
                                <section className="bg-zinc-100 w-full py-15 my-5 rounded-[16px]">  
                                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 p-5 mb-10">
                                                        <div className="text-justify p-5 border border-gray-300/70 rounded-sm md:w-7/10 space-y-3 mx-auto ">
                                                                <h3 className="font-semibold text-[20px]">Our Vision</h3>
                                                                <p className="">To be a reliable and number one choice consulting firm in Malawi and beyond.</p>
                                                        </div>
                                                        <div className="text-justify p-5 border border-gray-300/40 rounded-sm md:w-7/10 space-y-3 mx-auto ">
                                                                <h3 className="font-semibold text-[20px]">Our Mission</h3>
                                                                <p className="">To offer business development and management solutions that are tailor-made 
                                                                        to suit the needs of our clients and beyond their expectations.</p>
                                                        </div>

                                        </div> 
                                        <h2 className="font-bold text-[20px] text-amber-950 text-center">Our Core Values</h2>
                                        <p className="text-center md:w-1/2 mx-auto my-5 text-[18px]">The beliefs that drive our commitment to excellence, integrity, and impact.</p>
                                        
                                        <div className="w-full  grid grid-cols-1 md:grid-cols-2 gap-6 text-center md:text-justify">
                                                <div className="w-full h-full">
                                                        <article className=" rounded-xl p-5 md:w-6/10 space-y-3 mx-auto my-3 ">
                                                                <h3 className="font-semibold text-[20px]">Quality </h3>
                                                                <p>Our excellence in service delivery leads to distinct output.</p>
                                                        </article>

                                                        <article className="bo rounded-xl p-5 md:w-6/10 space-y-3 mx-auto text-c">
                                                                <h3 className="font-semibold text-[20px]">Integrity and Professionalism</h3>
                                                                <p className="">We are firm believers of core values and our service delivery is based on honesty, sincerity, 
                                                                professionalism and truthfulness.
                                                                </p>
                                                        </article>

                                                </div>
                                                <div className="w-full h-full ">
                                                        <article className="bor rounded-xl p-5 md:w-6/10 space-y-3 mx-auto">
                                                                <h3 className="font-semibold text-[20px]">Innovation </h3>
                                                                <p> We value business improvement of our clients through our service delivery 
                                                                that is modern and easy to use. 
                                                                </p>
                                                        </article>

                                                        <article className=" p-5 md:w-6/10 space-y-3 mx-auto ">
                                                                <h3 className="font-semibold text-[20px]">Timeliness</h3>
                                                                <p className="text-">We believe in timely service delivery to our clients.
                                                                </p>
                                                        </article>
                                                </div>
                                        </div>
                                </section> 

                                <section className="w-full  py-5">
                                        {/*<h2>Our Objective</h2>
                                        <p className=""></p>*/}
                                        
                                
                                </section> 

                                <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <figure className="relative w-full h-full md:col-span-1 bg-gradient-to-tr from-stone-800 to-gray-900 rounded-lg">
                                                <img src={image} alt="contact us" className="w-full h-full rounded-md mix-blend-overlay"/>
                                                <figcaption className=" absolute top-[50%] text-white/50 -translate-[50%] left-[50%] text-center text-5xl font-bold">
                                                 Why Chose Us</figcaption>
                                        </figure>

                                        <div className="w-full px-2 relaxed text-center text-justify">
                                                <h1 className="font-semibold text-[19px] text-amber">Explore defining factors behind our difference.</h1>
                                                {/*<hr/>
                                                <p className="text-center">Below are the reasons why we are a step closer to your HR and Administration solutions</p>*/}
                                                <article className="space-y-2 my-6 p-3 bg-zinc-100">
                                                    <h4 className="font-semibold">Custom-made Solutions </h4>
                                                    <p className="">Our solutions to your HR and administration problems 
                                                                    are designed to meet your core requirements, and are always 
                                                                    delivered on time.
                                                    </p>
                                                </article>

                                                <article className="space-y-2 my-6 p-3 bg-zinc-100">
                                                    <h4 className="font-semibold">You Are Not Just a Mere Client</h4>
                                                    <p className="">We value our clients very much so that we make sure our services 
                                                                    add value to your business core values. We also make sure that we create a bond 
                                                                    by addressing your specific problems to your satisfaction. 
                                                    </p>
                                                </article>
                                                <article className="space-y-2 my-6 p-3 bg-zinc-100">
                                                    <h4 className="font-semibold">Value for Money</h4>
                                                    <p className="">We are not in for a business transaction but for a business relationship. 
                                                                    Our services are there to create a client-consultant rapport and we make sure that the 
                                                                    needs of our clients come first.
                                                    </p>
                                                </article>


                                                
                                        </div>
                                </section>


                        </section>

                     <Footer/>
                  </>
          )
}