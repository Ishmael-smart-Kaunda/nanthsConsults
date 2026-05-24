import { VscArrowSmallRight } from "react-icons/vsc";


const ServiceDescription = () => {
  return (
    <section className='w-screen overflow-hidden bg-gray-200'>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 py-4 md:px-12 md:py-8 lg:px-24 lg:py-12">

            {/* Text Block */}
            <div className="">
                {/* Section Hook Main heading*/}
                <p className="text-amber-800 font-semibold lg:text-xl">
                    ORGANIZATIONAL SUPPORT SOLUTIONS
                </p>

                {/* Sub-heading & follow-up */}
                <h2 className=" font-bold text-2xl md:text-3xl lg:text-4xl leading-10 mt-4 mb-2">
                    A Partnership Built Around <br /> Your Growth
                </h2>

                <div className="bg-gray-400 h-[3px] outline-0 border-0 w-[35%] mb-4"></div>

                {/* Description */}
                <p className="relaxed font-light space-y-6 text-[21px]">
                    Modern organizations face constant operational and workforce challenges that require 
                    structure, adaptability, and professional support.
                    <br />
                    <br />
                    Our team helps businesses strengthen workplace systems, improve organizational processes, 
                    and create environments where people and businesses thrive together.
                </p>

            </div>

            {/* Services Block */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {/* First Service Row */}

                <div className="bg-transparent p-2 text-center flex flex-col gap-2.5 items-center">
                    <h3 className="text-xl font-medium">
                        Organizational Design and Business Development
                    </h3>
                    <button className="flex items-center cursor-pointer p-1 outline-0 border-2 border-amber-800 bg-transparent text-amber-800 hover:bg-gray-300 hover:border-0 duration-100">
                        Learn More
                        <VscArrowSmallRight size={20}/>
                    </button>
                </div>

                <div className="bg-transparent p-2 text-center flex flex-col gap-2.5 items-center">
                    <h3 className="text-xl font-medium">
                        Policies and Contract Formulation
                    </h3>
                    <button className="flex items-center cursor-pointer p-1 outline-0 border-2 border-amber-800 bg-transparent text-amber-800 hover:bg-gray-300 hover:border-0 duration-100">
                        Learn More
                        <VscArrowSmallRight size={20}/>
                    </button>
                </div>

                {/* Second Service Row */}

                <div className="bg-transparent p-2 text-center flex flex-col gap-2.5 items-center">
                    <h3 className="text-xl font-medium">
                        Recruitment, Selection and Employee Retention
                    </h3>
                    <button className="flex items-center cursor-pointer p-1 outline-0 border-2 border-amber-800 bg-transparent text-amber-800 hover:bg-gray-300 hover:border-0 duration-100">
                        Learn More
                        <VscArrowSmallRight size={20}/>
                    </button>
                </div>

                <div className="bg-transparent p-2 text-center flex flex-col gap-2.5 items-center">
                    <h3 className="text-xl font-medium">
                        Creation of HR Systems 
                    </h3>
                    <button className="flex items-center cursor-pointer p-1 outline-0 border-2 border-amber-800 bg-transparent text-amber-800 hover:bg-gray-300 hover:border-0 duration-100">
                        Learn More
                        <VscArrowSmallRight size={20}/>
                    </button>
                </div>


                {/* Third Service Row

                <div className="bg-transparent p-2 text-center flex flex-col gap-2.5 items-center">
                    <h3 className="text-xl font-medium">
                        Organizational Design and Business Development
                    </h3>
                    <button className="flex items-center cursor-pointer p-1 outline-0 border-2 border-amber-800 bg-transparent text-amber-800 hover:bg-gray-300 hover:border-0 duration-100">
                        Learn More
                        <VscArrowSmallRight size={20}/>
                    </button>
                </div>

                <div className="bg-transparent p-2 text-center flex flex-col gap-2.5 items-center">
                    <h3 className="text-xl font-medium">
                        Policies and Contract Formulation
                    </h3>
                    <button className="flex items-center cursor-pointer p-1 outline-0 border-2 border-amber-800 bg-transparent text-amber-800 hover:bg-gray-300 hover:border-0 duration-100">
                        Learn More
                        <VscArrowSmallRight size={20}/>
                    </button>
                </div> */}



                

            </div>

        </div>
    </section>

  )
}

export default ServiceDescription
