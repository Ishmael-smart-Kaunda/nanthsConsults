

export default function InquiryForm(){
                      return(
                              
                                  <form className="w-full flex flex-col gap-6 py-5 rounded-r-sm font-semibold text-[18px]">
                                            <fieldset className="flex flex-col gap-1">
                                                <label className="text-gray-950">Your name</label>
                                                <input 
                                                type="text"
                                                name="user_name" 
                                                placeholder="Full name" 
                                               className="w-full p-3 text-gray-400 bg-gray-800 shadow-sm border-2 border-gray-900 rounded-xl  focus:outline-none "
                                                required
                                                />
                                            </fieldset>

                                            <fieldset className="flex flex-col gap-1">
                                                <label className="text-gray-950">Email</label>
                                                <input 
                                                type="email"
                                                name="email" 
                                                placeholder="Email address" 
                                                className="w-full p-3 text-gray-400 bg-gray-800 shadow-sm border-2 border-gray-900 rounded-xl  focus:outline-none "
                                                />
                                            </fieldset>

                                            <fieldset className="flex flex-col gap-1">
                                                <label className="text-gray-950">Subject</label>
                                                <input 
                                                type="text"
                                                name="subject" 
                                                placeholder="What is this about?" 
                                                className="w-full p-3 text-gray-400 bg-gray-800 shadow-sm border-2 border-gray-900 rounded-xl  focus:outline-none "
                                                />
                                            </fieldset>

                                            <fieldset className="flex flex-col gap-1">
                                                <label className="text-gray-950">Message</label>
                                                <textarea 
                                                name="message" 
                                                placeholder="Your message..." 
                                                className="w-full p-3 text-gray-400 bg-gray-800 shadow-sm border-2 border-gray-900 rounded-xl  focus:outline-none "
                                                >
                                                </textarea>
                                            </fieldset>
                                        
                                                <button 
                                                className="cursor-pointer w-full md:w-1/2 px-4 py-3 bg-gray-800 font-bold rounded-md hover:opacity-80">Send Your message</button>
                                        
                                </form>
                            
                      )
}