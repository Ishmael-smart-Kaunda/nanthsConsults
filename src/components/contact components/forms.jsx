import ConsultForm from "./consultation form"
import InquiryForm from "./inquiry form"
import Social from "./social"

export default function Forms(){
    return(
             <section className="w-full p-5 md:px-25 max-w-[1440px] space-y-4 bg-gray-400">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 ">
                    <div className="space-y-6">
                            <h1 className="text-[35px] font-bold">Book a consultation</h1>
                            <h2 className="text-[22px] font-semibold">For organisations seeking a dedicated HR engagement or project</h2>
                            <ConsultForm/>
                    </div>
                     <div className=" space-y-3 h-fit bg-gray-300 p-5 rounded-xl shadow-md shadow-gray-600">
                            <h1 className="text-[35px] font-bold text-gray-500">General enquiry</h1>
                            <h2 className="text-[22px] font-semibold text-gray-500">Questions, partnerships, or anything else. We're happy to hear from you.</h2>
                            <InquiryForm/>
                    </div>
                    <Social/>
                        
                </div>     
             </section>
    )
}