


export default function ConsultForm(){
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
                                                name="organisation" 
                                                placeholder="Your Organisation" 
                                                className="w-full p-4 text-gray-400 bg-gray-800 shadow-sm border-2 border-gray-900 rounded-xl  focus:outline-none "
                                                />
                                                <select name="servicet type" value="Recruitment, Selection and Employee Retention" id="" 
                                                   className="w-full p-4 text-gray-400 bg-gray-800 shadow-sm border-2 border-gray-900 rounded-xl  focus:outline-none ">
                                                    <option value="" className="">Recruitment, Selection and Employee Retention</option>
                                                    <option value="" className="">Creation of HR Systems </option>
                                                    <option value="" className="">Job Evaluation and Salary Survey</option>
                                                    <option value="" className="">Performance Management </option>
                                                    <option value="" className="">Organizational Design and Business Development</option>
                                                    <option value="" className="">Policies and Contract Formulation</option>
                                                    <option value="" className="">Training and Development</option>
                                                    <option value="" className="">HR Outsourcing Service</option>
                                                    <option value="" className="">Integrated Management Systems (IMS) </option>
                                                    
                                                      
                                                </select>
                                             
                                                <textarea 
                                                name="message" 
                                                placeholder="Message" 
                                                className="w-full p-4 text-gray-400 bg-gray-800 shadow-sm border-2 border-gray-900 rounded-xl  focus:outline-none "
                                                >
                                                </textarea>
                                        
                                                <button 
                                                className="cursor-pointer w-full md:w-1/2 px-4 py-3 bg-gray-700  border-2 border-gray-800 text-white font-semibold rounded-md hover:opacity-80">Book Consultation</button>
                                        
                                </form>
                       )
}