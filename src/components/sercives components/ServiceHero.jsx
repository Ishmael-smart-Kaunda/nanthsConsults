// Hero section of services page
// Handles the Performance management
// route: /services/performance-management

import { Link } from "react-router-dom";

const ServiceHero = () => {
  return (
    <section className="relative w-full h-[700px] overflow-hidden">

      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover scale-105"
        src="https://i.pinimg.com/1200x/33/c3/c9/33c3c97876e4d9a124e7631dd0258092.jpg"
        alt="Professional HR consultation"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/35 z-10" />

      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-black/20 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">

        <div className="
          max-w-[1600px]
          mx-auto
          px-6
          md:px-12
          lg:px-24
          w-full
        ">

          <div className="max-w-4xl">

            {/* Badge */}
            <div className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/20
              bg-white/10
              backdrop-blur-md
              px-4
              py-2
              mb-6
              shadow-lg
            ">
              <div className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />

              <p className="
                text-sm
                md:text-base
                font-medium
                tracking-wide
                text-blue-100
              ">
                Performance Management Solutions
              </p>
            </div>

            {/* Heading */}
            <h1 className="
              text-4xl
              md:text-6xl
              lg:text-7xl
              font-bold
              text-white
              leading-[105%]
              mb-6
            ">
              Performance. <br />
              Growth. Excellence.
            </h1>

            {/* Subheading */}
            <h2 className="
              text-xl
              md:text-2xl
              lg:text-3xl
              font-semibold
              text-blue-100
              leading-relaxed
              mb-6
              max-w-3xl
            ">
              Performance Management Solutions for High-Performing Organizations
            </h2>

            {/* Paragraph */}
            <p className="
              text-gray-200
              text-base
              md:text-lg
              leading-8
              max-w-2xl
              mb-10
            ">
              We help organizations implement structured performance
              management systems that improve accountability,
              strengthen employee development, and support
              long-term business success.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">

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
                <Link to="/servicedetails">Explore Performance Solutions</Link>
              </button>

              {/* <button className="
                border
                border-white/25
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
                Build High-Performing Teams
              </button> */}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ServiceHero;