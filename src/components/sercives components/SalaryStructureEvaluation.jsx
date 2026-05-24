// Salary Structure section under the Services page
// Route: services/salary-structure

const SalaryStructureEvaluation = () => {
  return (
        <section className="w-full overflow-hidden bg-[#1f1f1f] relative">

            {/* Glow Accent */}
            <div className="
                absolute
                inset-0
                bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_35%)]
            " />

            <div className="
                relative
                z-10
                max-w-[1600px]
                mx-auto
                px-6
                py-16
                md:px-12
                lg:px-24
                lg:py-24
            ">

                <div className="max-w-4xl">

                {/* Tag */}
                <p className="
                    uppercase
                    tracking-[0.2em]
                    text-sm
                    font-semibold
                    text-gray-300
                    mb-5
                ">
                    Compensation & Workforce Structuring
                </p>

                {/* Hook */}
                <h2 className="
                    text-4xl
                    md:text-6xl
                    font-bold
                    text-white
                    leading-[110%]
                    mb-8
                ">
                    Job Evaluation & Salary Structuring
                </h2>

                {/* Subheading */}
                <h3 className="
                    text-2xl
                    md:text-3xl
                    font-semibold
                    text-blue-100
                    leading-relaxed
                    mb-8
                ">
                    Fair Compensation. Stronger Organizations.
                </h3>

                {/* Paragraphs */}
                <div className="
                    space-y-6
                    text-lg
                    leading-8
                    text-gray-300
                    max-w-3xl
                ">

                    <p>
                        As organizations grow, maintaining fair, competitive, 
                        and well-structured compensation systems becomes essential 
                        for employee satisfaction, retention, and long-term 
                        organizational stability.
                    </p>

                    <p>
                        Without clear role structures and salary frameworks, 
                        businesses often face challenges related to workforce 
                        dissatisfaction, inconsistent compensation, and limited 
                        performance alignment.
                    </p>

                    <p>
                        Our Job Evaluation and Salary Survey solutions help 
                        organizations create balanced compensation structures 
                        that reflect role value, market standards, organizational 
                        goals, and workforce expectations.
                    </p>

                    <p>
                        Through strategic job evaluation, salary benchmarking, and 
                        compensation structuring, we help businesses build transparent 
                        systems that support workforce motivation, operational fairness, 
                        and sustainable organizational growth.
                    </p>

                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 mt-12">

                    <button className="
                    bg-white
                    text-black
                    px-7
                    py-4
                    text-base
                    md:text-lg
                    font-semibold
                    rounded-xl
                    hover:bg-gray-200
                    transition-all
                    duration-300
                    cursor-pointer
                    shadow-2xl
                    hover:scale-[1.02]
                    ">
                        Build Fair Compensation Structures
                    </button>

                    <button className="
                    border
                    border-white/20
                    bg-white/5
                    backdrop-blur-sm
                    text-white
                    px-7
                    py-4
                    text-base
                    md:text-lg
                    font-semibold
                    rounded-xl
                    hover:bg-white/10
                    transition-all
                    duration-300
                    cursor-pointer
                    ">
                        Explore Salary Evaluation Solutions
                    </button>

                </div>

                </div>

            </div>

            </section>

  )
}

export default SalaryStructureEvaluation
