// Workflow Section
// demonstrates the ideal approach used by Nanths Professionals when dealing with clients
// Clients are not looking for the respective service
// They are looking for someone who understands their painpoints and has a trusted 
// Process they can follow along

import { useEffect, useRef, useState } from "react"
import approachFrameworkData from "../../data/approachFrameworkData"
import ApproachPropHandler from "./ApproachPropHandler"

const Approach = () => {

    const sectionRef = useRef(null)
    const scrollRef = useRef(null)

    const [isLocked, setIsLocked] = useState(false)

useEffect(() => {

    const section = sectionRef.current
    const scrollContainer = scrollRef.current

    if (!section || !scrollContainer) return

    const handleWheel = (e) => {

        // ONLY LARGE SCREENS
        if (window.innerWidth < 1024) return

        const rect = section.getBoundingClientRect()

        // SECTION ACTIVE ZONE
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

        // INTERCEPT SCROLL
        if (
            (isScrollingDown && !isAtBottom) ||
            (isScrollingUp && !isAtTop)
        ) {

            e.preventDefault()

            scrollContainer.scrollTop += e.deltaY

            // LOCK PAGE SCROLL
            document.body.style.overflow = "hidden"

        } else {

            // RELEASE PAGE SCROLL
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


    const ApproachDataMapper = approachFrameworkData.map((framework) => {
        return (
            <ApproachPropHandler
                key={framework.id}
                framework={framework}
            />
        )
    })

    return (
        <section
            ref={sectionRef}
            className="w-screen h-screen relative overflow-hidden"
        >

            <div className="
                px-6 py-10
                md:px-12 md:py-8
                lg:px-24 lg:py-12
                bg-gray-300
                grid
                lg:grid-cols-2
                gap-12
                w-screen
                h-screen
            ">

                {/* LEFT SIDE */}
                <div
                    ref={scrollRef}
                    className="
                        overflow-y-auto
                        no-scrollbar
                        h-full
                        pr-4
                    "
                >

                    {/* Heading */}
                    <h2 className="
                        font-bold
                        text-xl
                        md:text-2xl
                        lg:text-3xl
                        leading-[125%]
                        mb-10
                    ">
                        OUR SERVICE DELIVERY <br />
                        APPROACH
                    </h2>

                    {/* Steps */}
                    {ApproachDataMapper}

                </div>

                {/* RIGHT SIDE */}
                <div className="hidden lg:block relative">

                    <div className="
                        sticky
                        top-0
                        h-screen
                        flex
                        items-center
                    ">

                        <div className="
                            w-full
                            max-h-[480px]
                            overflow-hidden
                            rounded-3xl
                        ">

                            <img
                                className="
                                    w-full
                                    h-full
                                    object-cover
                                "
                                src="https://i.pinimg.com/1200x/c9/7c/19/c97c195a409434e41a7af4e868f3848b.jpg"
                                alt="Nanths team member"
                            />

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Approach