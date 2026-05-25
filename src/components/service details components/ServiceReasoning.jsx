// Service reasoning
// basically highlights the significance of the service in play

const ServiceReasoning = ({service}) => {
  return (
    <section className="w-full bg-[#f5f5f5] overflow-hidden">

      <div
        className="
          max-w-[1600px]
          mx-auto
          px-6
          py-20
          md:px-12
          lg:px-24
          lg:py-28
        "
      >

        {/* Top Label */}
        <div className="text-center mb-8">

          <p
            className="
              uppercase
              tracking-[0.25em]
              text-sm
              md:text-base
              font-semibold
              text-amber-700
              mb-6
            "
          >
            {service.reasoning.tag}
          </p>

          {/* Main Heading */}
          <h2
            className="
              text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold
              leading-[110%]
              tracking-tight
              text-[#1f1f1f]
              max-w-5xl
              mx-auto
            "
          >
            {service.reasoning.heading}
            {/* Performance That Aligns <br className="hidden md:block" />
            People, Purpose & Organizational Growth */}
          </h2>

        </div>

        {/* Divider */}
        <div
          className="
            w-24
            h-[3px]
            bg-amber-700
            mx-auto
            mb-14
            rounded-full
          "
        />

        {/* Content */}
        <div
          className="
            max-w-4xl
            mx-auto
            flex
            flex-col
            gap-10
          "
        >

          {/* Paragraph 1 */}
          <p
            className="
              text-lg
              md:text-xl
              leading-9
              text-gray-600
              text-center
            "
          >
            {service.reasoning.paragraphs[0]}
          </p>

          {/* Paragraph 2 */}
          <p
            className="
              text-lg
              md:text-xl
              leading-9
              text-gray-600
              text-center
            "
          >
            {service.reasoning.paragraphs[1]}
          </p>

          {/* Paragraph 3 */}
          <p
            className="
              text-lg
              md:text-xl
              leading-9
              text-gray-600
              text-center
            "
          >
            {service.reasoning.paragraphs[2]}
          </p>

        </div>

      </div>

    </section>
  );
};

export default ServiceReasoning;