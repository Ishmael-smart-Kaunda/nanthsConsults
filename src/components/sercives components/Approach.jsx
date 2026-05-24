// the approach section under the services section
// Under this section i focused on mainly 2 things
// 1. Showcase the framework and workflow i.e how Nanths Consults handles clients
// This is to show that work isnt done randomly, but there's a system to it
// From understanding clients needs to service delivery & follow ups
// This increases the chance and possibility of connecting with the clients
// As it shows how the internal system is set, building confidence in having their own system set as well
// 2. Capitalizing on the Systems approach above, a follow-up CTA on Intergrated Management Systems was set
// Route: /services/ims


// Design approach
// I was aiming for the left text side to auto scroll on reaching that section and then
// hand-over scroll to other sections on complete
// still a bit off, need a click to activate unlike the targeted auto.

import { useEffect, useRef } from "react"
import approachFrameworkData from "../../data/approachFrameworkData"
import ApproachPropHandler from "./ApproachPropHandler"

const Approach = () => {

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
                bg-gray-100
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
                <div className="max-w-3xl mb-16">

                    <p className="
                        uppercase
                        tracking-[0.2em]
                        text-sm
                        font-semibold
                        text-gray-500
                        mb-4
                    ">
                        Our Process
                    </p>

                    <h2 className="
                        text-3xl
                        md:text-5xl
                        font-bold
                        leading-[110%]
                        text-gray-900
                        mb-6
                    ">
                        A Structured Approach Built Around Organizational Growth
                    </h2>

                    <p className="
                        text-lg
                        leading-8
                        text-gray-600
                    ">
                        Every organization faces unique workforce and operational challenges.
                        Our 5-step framework is designed to help businesses build stronger systems,
                        improve efficiency, and support long-term sustainable growth.
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
                            {approachFrameworkData.map((framework) => (
                                <ApproachPropHandler
                                    key={framework.id}
                                    framework={framework}
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
                            ">

                                <img
                                    className="
                                        w-full
                                        h-[780px]
                                        object-cover
                                    "
                                    src="https://i.pinimg.com/1200x/c9/7c/19/c97c195a409434e41a7af4e868f3848b.jpg"
                                    alt="Professional HR consultation"
                                />

                            </div>

                        </div>

                    </div>

                </div>

                {/* IMS CTA */}
                <div className="
                    mt-24
                    rounded-[32px]
                    bg-gradient-to-br
                    from-[#3d3d3d]
                    to-[#1f1f1f]
                    overflow-hidden
                    relative
                ">

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
                            Integrated Management Systems
                        </p>

                        <h2 className="
                            text-3xl
                            md:text-5xl
                            font-bold
                            leading-[115%]
                            text-white
                            mb-8
                        ">
                            Structured Systems. Sustainable Performance.
                        </h2>

                        <p className="
                            text-lg
                            leading-8
                            text-gray-300
                            max-w-3xl
                            mb-10
                        ">
                            The right systems create the foundation for operational
                            excellence. Through our Integrated Management Systems (IMS)
                            solutions, we help organizations streamline processes,
                            strengthen compliance standards, and build more efficient,
                            performance-driven workplaces using a structured and
                            collaborative approach.
                        </p>

                        <button className="
                            bg-white
                            text-black
                            px-8
                            py-4
                            rounded-xl
                            font-semibold
                            text-lg
                            hover:bg-gray-200
                            transition-all
                            duration-300
                            cursor-pointer
                            shadow-xl
                        ">
                            Explore IMS Solutions
                        </button>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Approach