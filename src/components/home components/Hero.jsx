import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="relative w-full h-[650px] overflow-hidden">
      
      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="https://i.pinimg.com/1200x/3b/83/8e/3b838e8cfa9a10073c9b9efa3dce1268.jpg"
        alt="Professional HR team meeting"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center px-6 md:px-12 lg:px-24">
        
        <div className="max-w-3xl">
          
          {/* Badge */}
          <p className="inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-2 text-sm md:text-base font-medium text-blue-100 mb-6">
            Trusted HR & Administrative Solutions
          </p>

          {/* Animated Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            <TypeAnimation
              sequence={[
                "Can Your Workforce Keep Up?",
                4000,
                "Is Your Organization Ready?",
                4000,
                "Building Better Workplaces?",
                4000,
                "Prepared for Growth?",
                4000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          {/* Static Subheading */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-100 leading-relaxed mb-6">
            Creating Workplaces Where Businesses and People Thrive
          </h2>

          {/* Paragraph */}
          <p className="text-gray-200 text-base md:text-lg leading-8 max-w-2xl mb-8">
            We help organizations strengthen workplace systems, improve
            operational efficiency, and support long-term business growth
            through strategic HR and administrative solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link to='/contact'>
                <button className="bg-white text-black px-6 py-4 text-base md:text-lg font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 cursor-pointer shadow-lg">
                  Book A Consultation
                </button>
            </Link>
            <Link to='/services'>
                <button className="border border-white/30 text-white px-6 py-4 text-base md:text-lg font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 cursor-pointer">
                  Learn More
                </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;