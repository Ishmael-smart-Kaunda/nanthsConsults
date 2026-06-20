import ConsultForm from "./consultation form"
import InquiryForm from "./inquiry form"
import Social from "./social"

export default function Forms(){
    return(
             <section className="w-full p-5 py-20 md:px-25 max-w-[1440px] space-y-4 bg-gray-400">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 ">
                    <div className="space-y-6 bordr border-black/40 p-5 md:px-10 rounded-xl bg-gray-600/20">
                            <h1 className="text-[35px] font-bold">Book a consultation</h1>
                            <h2 className="text-[20px] font-semibold">For organisations seeking a dedicated HR engagement or project</h2>
                            <ConsultForm/>
                    </div>
                     <div className=" space-y-6 bg-gray-200 p-5 md:px-10 rounded-xl shadow-md shadow-gray-600 ">
                            <h1 className="text-[35px] font-bold text-black">General enquiry</h1>
                            <h2 className="text-[20px] font-semibold text-black">Questions, partnerships, or anything else. We're happy to hear from you.</h2>
                            <InquiryForm/>
                    </div>
                    
                        
                </div>   
                <Social/>  
             </section>
    )
}