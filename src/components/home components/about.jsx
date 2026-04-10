

export default function About(){
         return(
                 <section  className="relative w-full max-w-[1440px] grid grid-cols-1 md:grid-cols-2 gap-2 py-8 md:py-25 px-5 md:px-25 max-w-[1440px]">
                   {/* <img src={image} alt=" timely HR solutions" className="hidden absolute inset-0 w-full h-full object-cover mb-5 mix-blend-overlay"/>*/}
                    <div className="w-full h-full box-border">
                         <h1 className="text-4xl md:text-5xl font-bold my-15 text-gray-950">Welcome to <b className="text-amber-950/70">Nanths Consults</b></h1>

                    </div>
                    <div className="w-full px-2 relaxed">
                        <h1 className="font-bold text-[25px] text-amber-950">Our Company</h1>
                        <div className="w-15 h-1.5 rounded-xl bg-amber-800 mb-10"/>

                        <p id="services" className="text-justify text-[18px] text-gray-800">
                            We are a duly registered Malawian consultancy firm that provides 
                            a full range of management consultancy services specifically in the areas of human resources 
                            management, trainings, performance management, integrated management systems, 
                            organizational design and development, administration-related programs and business 
                            development services with over 10 years of industry experiences. 
                        </p>

                    </div>
                 </section>
         )
}