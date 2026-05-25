// Hero section of the Service details page
// Child component is receiving data from a parent component
// Use of props, to dynamically render data.

import { Link } from "react-router-dom";


const ServiceDetailsHero = ({service}) => {
    

  return (
    <section className="relative w-full h-[550px] overflow-hidden">

      {/* Background Image */}
      <img
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          scale-105
        "
        src={service.hero.backgroundImage}
        alt="Professional HR consultation"
      />

      {/* Main Gradient Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-black/90
          via-black/70
          to-black/40
          z-10
        "
      />

      {/* Soft Layer */}
      <div className="absolute inset-0 bg-black/20 z-10" />

      {/* Ambient Glow */}
      <div
        className="
          absolute
          top-0
          left-0
          w-full
          h-full
          bg-gradient-to-t
          from-black/40
          via-transparent
          to-transparent
          z-10
        "
      />

      {/* Content Container */}
      <div
        className="
          relative
          z-20
          w-full
          h-full
          flex
          items-center
          justify-center
          px-6
          md:px-12
          lg:px-24
        "
      >

        {/* Text Content */}
        <div
          className="
            max-w-4xl
            text-center
          "
        >

          {/* Small Tag */}
          <p
            className="
              uppercase
              tracking-[0.25em]
              text-sm
              md:text-base
              font-semibold
              text-amber-400
              mb-6
            "
          >
            {service.hero.tag}
          </p>

          {/* Main Heading */}
          <h1
            className="
              text-4xl
              md:text-6xl
              lg:text-7xl
              font-bold
              text-white
              leading-[105%]
              tracking-tight
              mb-8
            "
          >
            {service.hero.heading}
            {/* High Performance <br className="hidden md:block" />
            Starts With Clear Direction. */}
          </h1>

          {/* Supporting Text */}
          <p
            className="
              text-gray-200
              text-lg
              md:text-xl
              leading-8
              max-w-2xl
              mx-auto
              mb-10
            "
          >
            {service.hero.subheading}
          </p>

          {/* CTA */}
          <div className="flex justify-center">

            <Link to={service.hero.cta.link}
                className="
                  bg-white
                  text-black
                  px-8
                  py-4
                  rounded-xl
                  text-base
                  md:text-lg
                  font-semibold
                  cursor-pointer
                  hover:bg-gray-200
                  hover:scale-[1.02]
                  transition-all
                  duration-300
                  shadow-2xl
                "
              >
                {service.hero.cta.text}
              

            </Link>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ServiceDetailsHero;