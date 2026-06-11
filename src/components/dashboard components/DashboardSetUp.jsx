// Admin Dashboard
// Route: /admin/dashboard

import { useNavigate } from "react-router-dom";
import { supabase } from "../../utils/supabaseClient";

const DashboardSetUp = () => {

    // Placeholder stats
    const stats = {
        newsletter: 23,
        consultations: 7,
        inquiries: 12
    };

    const navigate = useNavigate()

    const signOut = async () => {
        const {error} = await 
        supabase.auth.signOut();

        if (error) throw error

        navigate('/login')
    }

    return (
        <section className="
            min-h-screen
            bg-[#f7f7f7]
        ">

            {/* Header */}
            <header className="
                bg-white
                border-b
                border-gray-200
                sticky
                top-0
                z-50
            ">

                <div className="
                    max-w-[1600px]
                    mx-auto
                    px-6
                    md:px-12
                    lg:px-20
                    py-5
                    flex
                    items-center
                    justify-between
                ">

                    <div>

                        <p className="
                            uppercase
                            tracking-[0.2em]
                            text-xs
                            font-semibold
                            text-amber-700
                            mb-2
                        ">
                            NaNth Consults
                        </p>

                        <h1 className="
                            text-2xl
                            font-bold
                            text-[#1f1f1f]
                        ">
                            Dashboard
                        </h1>

                    </div>

                        {/* Profile & Actions */}
                        <div
                            className="
                                flex
                                items-center
                                gap-4
                            "
                        >

                            {/* Profile Circle */}
                            <div
                                className="
                                    w-12
                                    h-12
                                    rounded-full
                                    bg-[#1f1f1f]
                                    flex
                                    items-center
                                    justify-center
                                    text-white
                                    font-bold
                                    text-sm
                                "
                            >
                                NC
                            </div>

                            {/* Sign Out Button */}
                            <button
                                onClick={signOut}
                                className="
                                    px-5
                                    py-3
                                    rounded-xl
                                    border
                                    border-gray-200
                                    bg-white
                                    text-gray-700
                                    font-medium
                                    hover:bg-red-50
                                    hover:text-red-600
                                    hover:border-red-200
                                    transition-all
                                    duration-300
                                    cursor-pointer
                                "
                            >
                                Sign Out
                            </button>

                        </div>
                    

                </div>

            </header>

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

                        <h3 className="
                            text-5xl
                            font-bold
                            text-[#1f1f1f]
                        ">
                            {stats.newsletter}
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
                            {stats.consultations}
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
                            {stats.inquiries}
                        </h3>

                    </div>

                </div>

                {/* Newsletter Table */}
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
                        Recent Newsletter Subscribers
                    </h3>

                    <div className="space-y-4">

                        <div className="flex justify-between border-b pb-4">
                            <span>john@email.com</span>
                            <span className="text-gray-500">Today</span>
                        </div>

                        <div className="flex justify-between border-b pb-4">
                            <span>sarah@email.com</span>
                            <span className="text-gray-500">Yesterday</span>
                        </div>

                        <div className="flex justify-between">
                            <span>mike@email.com</span>
                            <span className="text-gray-500">2 days ago</span>
                        </div>

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

                    <div className="space-y-4">

                        <div className="flex justify-between border-b pb-4">
                            <span>Acme Corporation</span>
                            <span>Performance Management</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Tech Solutions</span>
                            <span>HR Outsourcing</span>
                        </div>

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

                    <div className="space-y-4">

                        <div className="border-b pb-4">

                            <p className="font-semibold">
                                Jane Doe
                            </p>

                            <p className="text-gray-600">
                                Interested in learning more about
                                organizational design services.
                            </p>

                        </div>

                        <div>

                            <p className="font-semibold">
                                Michael Banda
                            </p>

                            <p className="text-gray-600">
                                Requesting consultation regarding
                                workforce performance systems.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default DashboardSetUp;