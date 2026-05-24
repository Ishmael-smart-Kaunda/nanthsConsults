import { VscArrowSmallRight } from "react-icons/vsc";


const BuildnOutsource = () => {
  return (
    <section className="w-screen h-full">
        <div className="w-full h-full bg-gradient-to-br from-[#444444] to-white px-6 py-4 md:px-12 md:py-8 lg:px-24 lg:py-12">
            <div className="max-w-[750px]">
                {/* Hook */}
                <p className="text-white font-semibold lg:text-3xl">
                    Your organization is full of potential.
                </p>

                {/* Heading */}
                <h2 className="text-ascent font-bold text-2xl md:text-3xl lg:text-5xl leading-[110%] my-4">
                    We’re here to help it <br /> grow with purpose.
                </h2>

                {/* Details */}
                <p className="relaxed font-light space-y-6 text-[21px]">
                    As organizations evolve, the need for structured systems,
                    effective workforce support, and operational efficiency 
                    becomes more important than ever.
                </p>

                <br />

                <p className="relaxed font-light space-y-6 text-[21px]">
                    From customized HR systems and outsourced HR support 
                    to workforce development and administrative solutions, 
                    we help businesses create stronger internal foundations 
                    that support productivity, scalability, and long-term 
                    success.
                </p>

                <br />

                <p className="relaxed font-light space-y-6 text-[21px]">
                    Our approach is built around partnership — working closely 
                    with organizations to simplify operations, strengthen 
                    workplace systems, and support sustainable growth through 
                    practical, people-focused solutions.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 my-5">
                    <button className="bg-white text-black px-6 py-4 text-base md:text-lg font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 cursor-pointer shadow-lg">
                        Develop Your HR Systems
                    </button>

                    <button className="border border-white/30 text-white px-6 py-4 text-base md:text-lg font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 cursor-pointer">
                        Partner With Our HR Team
                    </button>
                </div>

            </div>
        </div>
    </section>
  )
}

export default BuildnOutsource
