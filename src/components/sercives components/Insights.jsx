// Insight Section under the Services page
// Routes: services/blog
// Sub-route: services/blog/:blog-id

import InsightPropHandler from "./InsightPropHandler";
import HROSData from "../../data/HROSData";

const Insights = () => {
  return (
    <section className="w-full bg-gray-50 overflow-hidden">

      <div
        className="
          max-w-[1600px]
          mx-auto
          px-6
          py-16
          md:px-12
          lg:px-24
          lg:py-24
        "
      >

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">

          {/* Left */}
          <div className="max-w-3xl">

            {/* Tag */}
            <p
              className="
                uppercase
                tracking-[0.2em]
                text-sm
                font-semibold
                text-amber-700
                mb-5
              "
            >
              NaNth Insights
            </p>

            {/* Heading */}
            <h2
              className="
                text-4xl
                md:text-6xl
                font-bold
                text-[#1f1f1f]
                leading-[110%]
                mb-6
              "
            >
              HR Operations & Support
            </h2>

            {/* Description */}
            <p
              className="
                text-lg
                leading-8
                text-gray-600
                max-w-2xl
              "
            >
              Explore practical insights on workforce systems,
              organizational support, operational efficiency,
              and modern HR strategies designed to help
              organizations grow sustainably.
            </p>

          </div>

          {/* Right */}
          <div>
            <button
              className="
                border
                border-gray-300
                bg-white
                text-[#1f1f1f]
                px-6
                py-4
                rounded-xl
                font-semibold
                hover:bg-gray-100
                transition-all
                duration-300
                cursor-pointer
                shadow-sm
              "
            >
              View All Insights
            </button>
          </div>

        </div>

        {/* Grid */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-6
          "
        >
          {HROSData.map((blog) => (
            <InsightPropHandler
              key={blog.id}
              blog={blog}
            />
          ))}
        </div>

      </div>

    </section>
  );
};

export default Insights;