

export default function Hero(){
               return(
                       <header className="relative w-full h-[100vh] max-w-[1440px] bg-black/70 px-5 md:px-25 py-10 mt-15">
                            <img src="https://i.pinimg.com/1200x/3b/83/8e/3b838e8cfa9a10073c9b9efa3dce1268.jpg" 
                                 alt="lets talk" 
                                 className="absolute inset-0 w-full h-full object-cover mix-blend-overlay" 
                            />
                           <div className="relative w-full md:w-3/4 text-white space-y-10">
                              <p className="w-fit text-amber-500 uppercase bg-amber-500/20 border-2 border-amber-500/70 px-4 py-1 rounded-full">lets talk</p>
                              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">We'd love to hear from you.</h1>
                              <p className="w-full md:w-8/10 text-xl md:text-[24px] font-light">From a free initial consultation to a long-term HR partnership, 
                                every engagement starts with a conversation. Reach out and let's explore how we 
                                can help your organisation.  
                             </p>  
                           </div>
                              
                       </header>
               )
}