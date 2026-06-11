// Admin Login Component
// Route: /admin/login

import { useState } from "react";
import { supabase } from "../../utils/supabaseClient";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {

    const navigate = useNavigate()

    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });

    const [message, setMessage] = useState('')

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('')

        console.log(credentials);

        // Supabase login goes here

        const {data, error} = await 
        supabase.auth.signInWithPassword({
            email: credentials.email,
            password: credentials.password,
        })

        if (error) {
            setMessage(error.message)
            setCredentials('')
            return;
        }

        if (data) {
            navigate('/dashboard')
            return null;
        }

        
    };

    return (
        <section className="
            min-h-screen
            bg-[#f7f7f7]
            flex
            items-center
            justify-center
            px-6
            py-12
        ">

            <div className="
                w-full
                max-w-[1100px]
                grid
                lg:grid-cols-2
                overflow-hidden
                rounded-[32px]
                bg-white
                shadow-2xl
            ">

                {/* Left Side */}
                <div className="
                    hidden
                    lg:flex
                    relative
                    items-end
                    p-12
                    min-h-[700px]
                ">

                    <img
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
                        alt="Professional workspace"
                        className="
                            absolute
                            inset-0
                            w-full
                            h-full
                            object-cover
                        "
                    />

                    <div className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/90
                        via-black/60
                        to-black/20
                    " />

                    <div className="
                        relative
                        z-20
                        text-white
                        max-w-md
                    ">

                        <p className="
                            uppercase
                            tracking-[0.2em]
                            text-sm
                            font-semibold
                            text-amber-300
                            mb-4
                        ">
                            NaNth Consults
                        </p>

                        <h2 className="
                            text-5xl
                            font-bold
                            leading-[110%]
                            mb-6
                        ">
                            Welcome Back.
                        </h2>

                        <p className="
                            text-lg
                            leading-8
                            text-gray-200
                        ">
                            Access your dashboard to manage inquiries,
                            consultation requests,and newsletter subscribers.
                            
                        </p>

                    </div>

                </div>

                {/* Right Side */}
                <div className="
                    flex
                    items-center
                    justify-center
                    px-8
                    py-16
                    md:px-14
                ">

                    <div className="w-full max-w-md">

                        <div className="mb-10">

                            <p className="
                                uppercase
                                tracking-[0.2em]
                                text-sm
                                font-semibold
                                text-amber-700
                                mb-4
                            ">
                                Admin Portal
                            </p>

                            <h1 className="
                                text-4xl
                                font-bold
                                text-[#1f1f1f]
                                leading-[110%]
                                mb-4
                            ">
                                Sign In
                            </h1>

                            <p className="
                                text-gray-600
                                leading-7
                            ">
                                Please sign in to access your dashboard.
                            </p>

                            {message && <span> {message} </span>}

                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >

                            {/* Email */}
                            <div>

                                <label
                                    className="
                                        block
                                        mb-3
                                        text-sm
                                        font-semibold
                                        text-gray-700
                                    "
                                >
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    value={credentials.email}
                                    onChange={handleChange}
                                    placeholder="admin@nanthsconsults.com"
                                    className="
                                        w-full
                                        px-5
                                        py-4
                                        rounded-xl
                                        border
                                        border-gray-300
                                        focus:outline-none
                                        focus:ring-2
                                        focus:ring-amber-500
                                    "
                                />

                            </div>

                            {/* Password */}
                            <div>

                                <label
                                    className="
                                        block
                                        mb-3
                                        text-sm
                                        font-semibold
                                        text-gray-700
                                    "
                                >
                                    Password
                                </label>

                                <input
                                    type="password"
                                    name="password"
                                    value={credentials.password}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className="
                                        w-full
                                        px-5
                                        py-4
                                        rounded-xl
                                        border
                                        border-gray-300
                                        focus:outline-none
                                        focus:ring-2
                                        focus:ring-amber-500
                                    "
                                />

                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="
                                    w-full
                                    bg-[#1f1f1f]
                                    text-white
                                    py-4
                                    rounded-xl
                                    font-semibold
                                    text-lg
                                    hover:bg-black
                                    transition-all
                                    duration-300
                                    cursor-pointer
                                "
                            >
                                Access Dashboard
                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default AdminLogin;