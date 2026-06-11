// Admin Dashboard
// Route: /admin/dashboard

import { supabase } from "../../utils/supabaseClient";
import { useState, useEffect } from "react";

const DashboardSetUp = () => {

    const [fetchError, setFetchError] = useState(null)
    const [newsletters, setNewsLetters] = useState([])
    const [consultations, setConsultations] = useState([])
    const [inquiries, setInquiries] = useState([])
    let newsletterData = ''
    let consultationData = ''
    let inquiriesData = ''

    useEffect(() => {
        const fetchNewsLetters = async () => {
            const {data, error} = await supabase
            .from('newsletter_subscribers')
            .select()

            newsletterData = data
            console.log(newsletterData)

            if (error) {
                setFetchError('Could not fetch newletter subscriber data')
                setNewsLetters(null)
                console.log(error)
            }

            if (newsletterData) {
                console.log(newsletterData)
                setNewsLetters(newsletterData)
                setFetchError(null)
            }
        }

        fetchNewsLetters()

        const fetchConsultations = async () => {
            const {data, error} = await supabase
            .from('bookings')
            .select()

            consultationData = data
            console.log(consultationData)

            if (error) {
                console.log("Error fetching consultation data")
                setFetchError(error)
                setConsultations(null)
            }

            if (consultationData) {
                console.log(consultationData)
                setConsultations(consultationData)
                setFetchError(null)
            }
        }

        fetchConsultations()

        const fetchInqueries = async () => {
            const {data, error} = await supabase
            .from('inquiries')
            .select()

            inquiriesData = data
            console.log(inquiriesData)

            if (error) {
                console.log("Error fetching inquiries data")
                setFetchError(error)
                setInquiries(null)
            }

            if (inquiriesData) {
                console.log(inquiriesData)
                setInquiries(inquiriesData)
                setFetchError(null)
            }
        }

        fetchInqueries()
    }, [])

    console.log(newsletterData.length)
    console.log(consultationData.length)
    console.log(inquiriesData.length)
    
    // Stats
    // const stats = [
    //     {
    //         title: 'newsletter',
    //         stats: newsletterData.length
    //     },
    //     {
    //         title: 'consultations',
    //         stats: consultationData.length
    //     },
    //     {
    //         title: 'inquiries',
    //         stats: inquiries.length
    //     }
    // ]
        
    
    
    return (
        <section className="
            min-h-screen
            bg-[#f7f7f7]
        ">


            {/* Content */}
            <div className="
                max-w-[1600px]
                mx-auto
                px-6
                py-10
                md:px-12
                lg:px-20
            ">

                {/* Welcome */}
                <div className="mb-10">

                    <h2 className="
                        text-4xl
                        font-bold
                        text-[#1f1f1f]
                        mb-3
                    ">
                        Welcome Back
                    </h2>

                    <p className="
                        text-gray-600
                        text-lg
                    ">
                        Here's an overview of recent activity across the platform.
                    </p>

                </div>

                {/* Stats */}
                <div className="
                    grid
                    grid-cols-1
                    md:grid-cols-3
                    gap-6
                    mb-16
                ">

                    <div className="
                        bg-white
                        p-8
                        rounded-[24px]
                        shadow-sm
                        border
                        border-gray-200
                    ">

                        <p className="
                            text-gray-500
                            mb-3
                        ">
                            Newsletter Subscribers
                        </p>

                        <h3
                            className="
                                text-5xl
                                font-bold
                                text-[#1f1f1f]
                            "
                        >
                            {newsletters.length}
                        </h3>

                    </div>

                    <div className="
                        bg-white
                        p-8
                        rounded-[24px]
                        shadow-sm
                        border
                        border-gray-200
                    ">

                        <p className="
                            text-gray-500
                            mb-3
                        ">
                            Consultation Requests
                        </p>

                        <h3 className="
                            text-5xl
                            font-bold
                            text-[#1f1f1f]
                        ">
                             {consultations.length}
                        </h3>

                    </div>

                    <div className="
                        bg-white
                        p-8
                        rounded-[24px]
                        shadow-sm
                        border
                        border-gray-200
                    ">

                        <p className="
                            text-gray-500
                            mb-3
                        ">
                            Inquiries
                        </p>

                        <h3 className="
                            text-5xl
                            font-bold
                            text-[#1f1f1f]
                        ">
                            {inquiries.length}
                        </h3>

                    </div>

                </div>

                {/* Newsletter Subscribers */}
                <div
                    className="
                        bg-white
                        rounded-[24px]
                        border
                        border-gray-200
                        p-8
                        mb-8
                    "
                >

                    <h3
                        className="
                            text-2xl
                            font-bold
                            text-[#1f1f1f]
                            mb-6
                        "
                    >
                        Recent Newsletter Subscribers
                    </h3>

                    <div className="overflow-x-auto">

                        <table className="w-full">

                            <thead>

                                <tr
                                    className="
                                        border-b
                                        border-gray-200
                                    "
                                >
                                    <th className="text-left py-4">
                                        Email Address
                                    </th>

                                    <th className="text-left py-4">
                                        Subscription Date
                                    </th>
                                </tr>

                            </thead>

                            <tbody>

                                {newsletters.length > 0 ? (

                                    newsletters.map((subscriber) => (

                                        <tr
                                            key={subscriber.id}
                                            className="
                                                border-b
                                                border-gray-100
                                                hover:bg-gray-50
                                                transition-colors
                                            "
                                        >

                                            <td className="py-4 font-medium">
                                                {subscriber.email}
                                            </td>

                                            <td className="py-4 text-gray-500">
                                                {
                                                    new Date(
                                                        subscriber.subscribed_at
                                                    ).toLocaleDateString(
                                                        "en-US",
                                                        {
                                                            year: "numeric",
                                                            month: "long",
                                                            day: "numeric",
                                                        }
                                                    )
                                                }
                                            </td>

                                        </tr>

                                    ))

                                ) : (

                                    <tr>

                                        <td
                                            colSpan="2"
                                            className="
                                                py-6
                                                text-center
                                                text-gray-500
                                            "
                                        >
                                            No newsletter subscribers found.
                                        </td>

                                    </tr>

                                )}

                            </tbody>

                        </table>

                    </div>

                </div>
                {/* Consultation Requests */}
                <div className="
                    bg-white
                    rounded-[24px]
                    border
                    border-gray-200
                    p-8
                    mb-8
                ">

                    <h3 className="
                        text-2xl
                        font-bold
                        text-[#1f1f1f]
                        mb-6
                    ">
                        Recent Consultation Requests
                    </h3>

                    <div className="space-y-6">

                    {inquiries.length > 0 ? (

                        inquiries.map((inquiry) => (

                        <div
                            key={inquiry.id}
                            className="
                            border
                            border-gray-200
                            rounded-2xl
                            p-6
                            hover:shadow-md
                            transition-all
                            "
                        >

                            <div
                            className="
                                flex
                                justify-between
                                items-start
                                gap-4
                                mb-3
                            "
                            >

                            <div>

                                <h4
                                className="
                                    font-bold
                                    text-lg
                                    text-[#1f1f1f]
                                "
                                >
                                {inquiry.name}
                                </h4>

                                <p className="text-gray-500">
                                {inquiry.email}
                                </p>

                            </div>

                            <span
                                className="
                                text-sm
                                text-gray-500
                                "
                            >
                                {
                                new Date(inquiry.created_at)
                                    .toLocaleDateString()
                                }
                            </span>

                            </div>

                            <h5
                            className="
                                font-semibold
                                text-amber-700
                                mb-2
                            "
                            >
                            {inquiry.subject}
                            </h5>

                            <p
                            className="
                                text-gray-600
                                leading-7
                            "
                            >
                            {inquiry.message}
                            </p>

                        </div>

                        ))

                    ) : (

                        <p className="text-gray-500">
                        No inquiries received yet.
                        </p>

                    )}

                    </div>
                </div>

                {/* Inquiries */}
                <div className="
                    bg-white
                    rounded-[24px]
                    border
                    border-gray-200
                    p-8
                ">

                    <h3 className="
                        text-2xl
                        font-bold
                        text-[#1f1f1f]
                        mb-6
                    ">
                        Recent Inquiries
                    </h3>

                    <div className="space-y-6">

                    {inquiries.length > 0 ? (

                        inquiries.map((inquiry) => (

                        <div
                            key={inquiry.id}
                            className="
                            border
                            border-gray-200
                            rounded-2xl
                            p-6
                            hover:shadow-md
                            transition-all
                            "
                        >

                            <div
                            className="
                                flex
                                justify-between
                                items-start
                                gap-4
                                mb-3
                            "
                            >

                            <div>

                                <h4
                                className="
                                    font-bold
                                    text-lg
                                    text-[#1f1f1f]
                                "
                                >
                                {inquiry.name}
                                </h4>

                                <p className="text-gray-500">
                                {inquiry.email}
                                </p>

                            </div>

                            <span
                                className="
                                text-sm
                                text-gray-500
                                "
                            >
                                {
                                new Date(inquiry.created_at)
                                    .toLocaleDateString()
                                }
                            </span>

                            </div>

                            <h5
                            className="
                                font-semibold
                                text-amber-700
                                mb-2
                            "
                            >
                            {inquiry.subject}
                            </h5>

                            <p
                            className="
                                text-gray-600
                                leading-7
                            "
                            >
                            {inquiry.message}
                            </p>

                        </div>

                        ))

                    ) : (

                        <p className="text-gray-500">
                        No inquiries received yet.
                        </p>

                    )}

                    </div>
                </div>

            </div>

        </section>
    );
};

export default DashboardSetUp;