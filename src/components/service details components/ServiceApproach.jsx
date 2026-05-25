// Service Approach Section
// Updated:
// Added Outcomes & Benefits section between
// framework and CTA section
// 

import { useEffect, useRef } from "react"
import approachFrameworkData from "../../data/approachFrameworkData"
import ApproachPropHandler from "../sercives components/ApproachPropHandler"
import { services } from "../../data/IndividualServicesData"
import { Link } from "react-router-dom"
import BenefitCardHandler from "./BenefitCardHandler"
import DedicatedServiceApproachHandler from "./DedicatedServiceApproachHandler"

const ServiceApproach = ({service}) => {

    const sectionRef = useRef(null)
    const scrollRef = useRef(null)

    useEffect(() => {

        const section = sectionRef.current
        const scrollContainer = scrollRef.current

        if (!section || !scrollContainer) return

        const handleWheel = (e) => {

            // Desktop only
            if (window.innerWidth < 1024) return

            const rect = section.getBoundingClientRect()

            const isSectionActive =
                rect.top <= 0 &&
                rect.bottom > window.innerHeight

            if (!isSectionActive) return

            const {
                scrollTop,
                scrollHeight,
                clientHeight
            } = scrollContainer

            const isScrollingDown = e.deltaY > 0
            const isScrollingUp = e.deltaY < 0

            const isAtBottom =
                scrollTop + clientHeight >= scrollHeight - 5

            const isAtTop =
                scrollTop <= 0

            if (
                (isScrollingDown && !isAtBottom) ||
                (isScrollingUp && !isAtTop)
            ) {

                e.preventDefault()

                scrollContainer.scrollTop += e.deltaY

                document.body.style.overflow = "hidden"

            } else {

                document.body.style.overflow = "auto"
            }
        }

        window.addEventListener("wheel", handleWheel, {
            passive: false
        })

        return () => {

            window.removeEventListener("wheel", handleWheel)

            document.body.style.overflow = "auto"
        }

    }, [])

    return (
        <section
            ref={sectionRef}
            className="
                relative
                w-full
                bg-[#f7f7f7]
                overflow-hidden
            "
        >

            <div className="
                max-w-[1600px]
                mx-auto
                px-6
                py-16
                md:px-12
                lg:px-20
                lg:py-24
            ">

                {/* Top Header */}
                <div className="max-w-4xl mb-16">

                    <p className="
                        uppercase
                        tracking-[0.2em]
                        text-sm
                        font-semibold
                        text-amber-700
                        mb-4
                    ">
                        {service.framework.tag}
                    </p>

                    <h2 className="
                        text-3xl
                        md:text-5xl
                        font-bold
                        leading-[110%]
                        text-gray-900
                        mb-6
                    ">
                        {service.framework.heading}
                    </h2>

                    <p className="
                        text-lg
                        leading-8
                        text-gray-600
                        max-w-3xl
                    ">
                        {service.framework.description}
                    </p>

                </div>

                {/* Main Grid */}
                <div className="
                    grid
                    lg:grid-cols-[1fr_0.9fr]
                    gap-16
                    items-start
                ">

                    {/* LEFT COLUMN */}
                    <div
                        ref={scrollRef}
                        className="
                            lg:max-h-[900px]
                            lg:overflow-y-auto
                            lg:pr-6
                            no-scrollbar
                        "
                    >

                        <div className="space-y-12">

                            {service.framework.steps.map((approach) => (
                                <DedicatedServiceApproachHandler 
                                    key={approach.id}
                                    approach={approach}
                                />
                            ))}

                        </div>

                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="hidden lg:block">

                        <div className="
                            sticky
                            top-10
                        ">

                            <div className="
                                overflow-hidden
                                rounded-[32px]
                                shadow-2xl
                                relative
                            ">

                                {/* Overlay */}
                                <div className="
                                    absolute
                                    inset-0
                                    bg-gradient-to-t
                                    from-black/40
                                    to-transparent
                                    z-10
                                " />

                                <img
                                    className="
                                        w-full
                                        h-[780px]
                                        object-cover
                                    "
                                    src={service.framework.image}
                                    alt="Performance management consultation"
                                />

                            </div>

                        </div>

                    </div>

                </div>

                {/* OUTCOMES SECTION */}
                <div className="mt-28">

                    {/* Heading */}
                    <div className="max-w-3xl mb-14">

                        <p className="
                            uppercase
                            tracking-[0.2em]
                            text-sm
                            font-semibold
                            text-amber-700
                            mb-4
                        ">
                            {service.outcomes.tag}
                        </p>

                        <h2 className="
                            text-3xl
                            md:text-5xl
                            font-bold
                            leading-[110%]
                            text-gray-900
                            mb-6
                        ">
                            {service.outcomes.heading}
                        </h2>

                        <p className="
                            text-lg
                            leading-8
                            text-gray-600
                            max-w-3xl
                        ">
                            {service.outcomes.description}
                        </p>

                    </div>

                    {/* Benefits Grid */}
                    <div className="
                        grid
                        grid-cols-1
                        md:grid-cols-2
                        lg:grid-cols-4
                        gap-6
                    ">
                        {service.outcomes.benefits.map((benefit) => (
                            <BenefitCardHandler 
                                key={benefit.id}
                                benefit={benefit}
                            />
                        ))}

                        

                    </div>

                </div>

                {/* CTA SECTION */}
                <div className="
                    mt-24
                    rounded-[32px]
                    bg-gradient-to-br
                    from-[#2e2e2e]
                    via-[#1f1f1f]
                    to-black
                    overflow-hidden
                    relative
                ">

                    {/* Ambient Glow */}
                    <div className="
                        absolute
                        inset-0
                        bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_35%)]
                    " />

                    <div className="
                        relative
                        z-10
                        px-8
                        py-14
                        md:px-14
                        lg:px-20
                        lg:py-20
                        max-w-5xl
                    ">

                        <p className="
                            uppercase
                            tracking-[0.2em]
                            text-sm
                            font-semibold
                            text-gray-300
                            mb-5
                        ">
                            {service.cta.tag}
                        </p>

                        <h2 className="
                            text-3xl
                            md:text-5xl
                            font-bold
                            leading-[115%]
                            text-white
                            mb-8
                        ">
                            {service.cta.heading}
                        </h2>

                        <p className="
                            text-lg
                            leading-8
                            text-gray-300
                            max-w-3xl
                            mb-10
                        ">
                            {service.cta.description}
                        </p>

                        <Link
                            to={service.cta.buttonLink}
                            className="
                                inline-flex
                                items-center
                                justify-center
                                text-center

                                bg-white
                                text-black

                                px-6
                                sm:px-8

                                py-3
                                sm:py-4

                                rounded-xl
                                font-semibold

                                text-base
                                sm:text-lg

                                hover:bg-gray-200
                                transition-all
                                duration-300

                                shadow-xl

                                w-full
                                sm:w-fit

                                max-w-full

                                break-words
                                whitespace-normal
                            "
                            >
                            {service.cta.buttonText}
                        </Link>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default ServiceApproach