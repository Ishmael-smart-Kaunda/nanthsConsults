// Service description section
// This section contains expected links () to appropriate pages depending on the ID
// 1. Organizational Design and Business Development
// 2. Policies and Contract Formulation
// 3. Recruitment, Selection and Employee Retention
// 4. Creation of HR Systems
// that is how the page is being set up strategically
// links across the services page all lead to a predefined page (Route)


import { VscArrowSmallRight } from "react-icons/vsc";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Organizational Design and Business Development",
    slug: "organizational-design"
  },
  {
    id: 2,
    title: "Policies and Contract Formulation",
    slug: "policies-contracts"
  },
  {
    id: 3,
    title: "Recruitment, Selection and Employee Retention",
    slug: "recruitment-retention"

  },
  {
    id: 4,
    title: "Creation of HR Systems",
    slug: "hr-systems"

  },
];

const ServiceDescription = () => {
  return (
    <section className="w-full bg-gray-100 overflow-hidden">

      <div className="
        max-w-[1600px]
        mx-auto
        px-6
        py-16
        md:px-12
        lg:px-24
        lg:py-24
      ">

        <div className="
          grid
          grid-cols-1
          lg:grid-cols-[1fr_1fr]
          gap-16
          items-start
        ">

          {/* LEFT SIDE */}
          <div>

            {/* Tag */}
            <p className="
              uppercase
              tracking-[0.2em]
              text-sm
              font-semibold
              text-amber-700
              mb-5
            ">
              Organizational Support Solutions
            </p>

            {/* Heading */}
            <h2 className="
              text-3xl
              md:text-5xl
              font-bold
              leading-[115%]
              text-gray-900
              mb-6
            ">
              A Partnership Built Around Your Growth
            </h2>

            {/* Divider */}
            <div className="
              w-24
              h-[3px]
              bg-amber-700
              rounded-full
              mb-8
            " />

            {/* Paragraph */}
            <p className="
              text-lg
              leading-8
              text-gray-600
              max-w-2xl
            ">
              Modern organizations face evolving workforce and operational
              challenges that require structure, adaptability, and strategic
              support.
              <br />
              <br />
              Our team helps businesses strengthen workplace systems,
              improve organizational processes, and create environments
              where people and businesses thrive together.
            </p>

          </div>

          {/* RIGHT SIDE */}
          <div className="
            grid
            grid-cols-1
            sm:grid-cols-2
            gap-5
          ">

            {services.map((service) => (
              <div
                key={service.id}
                className="
                  bg-white
                  border
                  border-gray-200
                  rounded-2xl
                  p-8
                  flex
                  flex-col
                  justify-between
                  min-h-[220px]
                  shadow-sm
                  hover:shadow-xl
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >

                <h3 className="
                  text-xl
                  font-semibold
                  leading-[140%]
                  text-gray-900
                ">
                  {service.title}
                </h3>

                <button className="
                  flex
                  items-center
                  gap-2
                  w-fit
                  mt-8
                  text-amber-700
                  font-semibold
                  group
                  cursor-pointer
                ">
                  <Link to={`/services/${service.slug}`} >
                    Learn More

                  <VscArrowSmallRight
                    size={22}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                  </Link>
                </button>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default ServiceDescription;