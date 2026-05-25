

export default function InquiryForm(){
                      return(
                              
                                  <form className="w-full flex flex-col gap-4 py-5 rounded-r-sm font-semibold text-[18px]">
                                                <input 
                                                type="text"
                                                name="user_name" 
                                                placeholder="Full name" 
                                               className="w-full p-4 text-gray-400 bg-gray-800 shadow-sm border-2 border-gray-900 rounded-xl  focus:outline-none "
                                                required
                                                />
                                                <input 
                                                type="email"
                                                name="email" 
                                                placeholder="Email address" 
                                                className="w-full p-4 text-gray-400 bg-gray-800 shadow-sm border-2 border-gray-900 rounded-xl  focus:outline-none "
                                                />
                                                <input 
                                                type="text"
                                                name="subject" 
                                                placeholder="Subject" 
                                                className="w-full p-4 text-gray-400 bg-gray-800 shadow-sm border-2 border-gray-900 rounded-xl  focus:outline-none "
                                                />

                                             
                                                <textarea 
                                                name="message" 
                                                placeholder="Your message" 
                                                className="w-full p-4 text-gray-400 bg-gray-800 shadow-sm border-2 border-gray-900 rounded-xl  focus:outline-none "
                                                >
                                                </textarea>
                                        
                                                <button 
                                                className="cursor-pointer w-full md:w-1/2 px-4 py-3 bg-gray-700  border-2 border-gray-800 text-white font-semibold rounded-md hover:opacity-80">Send Your message</button>
                                        
                                </form>
                            
                      )
}