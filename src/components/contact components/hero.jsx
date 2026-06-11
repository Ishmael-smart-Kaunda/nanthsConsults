

export default function Hero(){
               return(
                       <header className="relative w-full h-[60vh} md:[80vh] max-w-[1440px] bg-black/70 px-5 md:px-25 py-10 mt-15">
                            <img src="https://i.pinimg.com/1200x/3b/83/8e/3b838e8cfa9a10073c9b9efa3dce1268.jpg" 
                                 alt="lets talk" 
                                 className="absolute inset-0 w-full h-full object-cover mix-blend-overlay" 
                            />
                           <div className="relative w-full md:w-3/4 text-white space-y-10">
                              <p className="inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-2 text-sm md:text-base font-medium text-blue-100 mb-6">lets talk</p>
                              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">We'd love to hear from you.</h1>
                              <p className="w-full md:w-8/10 text-xl md:text-[24px] font-light">From a free initial consultation to a long-term HR partnership, 
                                every engagement starts with a conversation. Reach out and let's explore how we 
                                can help your organisation.  
                             </p>  
                           </div>
                              
                       </header>
               )
}