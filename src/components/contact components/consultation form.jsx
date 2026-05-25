


export default function ConsultForm(){
                       return(
                                 <form className="w-full flex flex-col gap-6 py-5 rounded-r-sm font-semibold text-[18px]">
                                               <fieldset className="flex flex-col gap-1">
                                                  <label htmlFor="" className="text-gray-950">Your name</label>
                                                  <input 
                                                    type="text"
                                                    name="user_name" 
                                                    placeholder="Full name" 
                                                    className="w-full p-3 text-gray-400 bg-gray-800 shadow-sm border-2 border-gray-900 rounded-xl  focus:outline-none "
                                                    required
                                                />
                                               </fieldset>

                                                <fieldset className="flex flex-col gap-1">
                                                  <label htmlFor="" className="text-gray-950">Email</label>
                                                <input 
                                                type="email"
                                                name="email" 
                                                placeholder="eg. nanthConsults@gmail.com" 
                                                className="w-full p-3 text-gray-400 bg-gray-800 shadow-sm border-2 border-gray-900 rounded-xl  focus:outline-none "
                                                />
                                                 </fieldset>

                                                <fieldset className="flex flex-col gap-1">
                                                    <label htmlFor="" className="text-gray-950">Your Organisation</label>
                                                    <input 
                                                    type="text"
                                                    name="organisation" 
                                                    placeholder="Company name" 
                                                    className="w-full p-3 text-gray-400 bg-gray-800 shadow-sm border-2 border-gray-900 rounded-xl  focus:outline-none "
                                                    />
                                                  </fieldset>
                                                <fieldset className="flex flex-col gap-1">
                                                    <label className="text-gray-950">Service needed</label>
                                                    <select name="servicet type" value="Recruitment, Selection and Employee Retention" id="" 
                                                       className="w-full p-3 text-gray-500 bg-gray-800 shadow-sm border-2 border-gray-900 rounded-xl  focus:outline-none ">
                                                       <option value="" className="text-red-500">Recruitment, Selection and Employee Retention</option>
                                                       <option value="" className="">Creation of HR Systems </option>
                                                       <option value="" className="">Job Evaluation and Salary Survey</option>
                                                       <option value="" className="">Performance Management </option>
                                                       <option value="" className="">Organizational Design and Business Development</option>
                                                       <option value="" className="">Policies and Contract Formulation</option>
                                                       <option value="" className="">Training and Development</option>
                                                       <option value="" className="">HR Outsourcing Service</option>
                                                      <option value="" className="">Integrated Management Systems (IMS) </option>    
                                                    </select>
                                                </fieldset>
                                                <fieldset className="flex flex-col gap-1">
                                                    <label className="text-gray-950">Brief</label>
                                                    <textarea 
                                                    name="message" 
                                                    placeholder="Describe your needs..." 
                                                    className="w-full p-4 text-gray-400 bg-gray-800 shadow-sm border-2 border-gray-900 rounded-xl  focus:outline-none "
                                                    >
                                                    </textarea>
                                                </fieldset>
                                        
                                                <button 
                                                className="cursor-pointer w-full md:w-1/2 px-4 py-3 bg-gray-800  gray-800 text- amber-700 950 white font-bold rounded-md hover:opacity-80">Book Consultation</button>
                                        
                                </form>
                       )
}