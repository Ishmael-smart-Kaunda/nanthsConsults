import React from 'react'

const ServiceHero = () => {
  return (
    <section className='w-screen relative overflow-hidden h-[650px]'>

    
        {/* Background Image */}
        <img
            className="absolute inset-0 w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1739285452644-3a2c009112fe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Service provision by Nanths team member"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Content */}
        <div className="relative z-20 h-full flex items-center px-6 md:px-12 lg:px-24">
        
        <div className="max-w-3xl">

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Structure. Strategy. Success.
            </h1>

            {/* Static heading */}
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-100 leading-relaxed mb-6">
                Strategic HR & Administrative Solutions for Modern Organizations
            </h2>

            {/* Paragraph */}
            <p className="text-gray-200 text-base md:text-lg leading-8 max-w-2xl mb-8">
                Our tailored HR and administrative solutions help organizations streamline 
                operations, strengthen workplace culture, and support sustainable 
                business success.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
                <button className="bg-white text-black px-6 py-4 text-base md:text-lg font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 cursor-pointer shadow-lg">
                    Build a Stronger Workplace
                </button>

                {/* <button className="border border-white/30 text-white px-6 py-4 text-base md:text-lg font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 cursor-pointer">
                Learn More
                </button> */}
            </div>

        </div>

        </div>
    </section>
  )
}

export default ServiceHero
