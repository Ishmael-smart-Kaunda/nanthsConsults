// Workforce Development & HR Systems under the services page
// Route: services/workforce-development-hr-systems

import { Link } from "react-router-dom";

const BuildnOutsource = () => {
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
            Workforce Development & HR Systems
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
            Your organization is full of potential.
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
            We’re here to help it grow with purpose.
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
              As organizations evolve, the need for structured systems,
              effective workforce support, and operational efficiency
              becomes increasingly important.
            </p>

            <p>
              From customized HR systems and outsourced HR support
              to workforce development and administrative solutions,
              we help businesses create stronger internal foundations
              that support productivity, scalability, and long-term success.
            </p>

            <p>
              Our approach is built around partnership — working closely
              with organizations to simplify operations, strengthen
              workplace systems, and support sustainable growth through
              practical, people-focused solutions.
            </p>

          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-12">

            <Link to="/services/training-development" className="
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
              Develop Your HR Systems
            </Link>

            <Link to="/services/hr-outsourcing" className="
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
              Partner With Our HR Team
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
};

export default BuildnOutsource;