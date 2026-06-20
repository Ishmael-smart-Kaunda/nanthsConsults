import { useNavigate } from "react-router-dom";
import { supabase } from "../../utils/supabaseClient";


const DashboardHeader = () => {
    const navigate = useNavigate()

    const signOut = async () => {
        const {error} = await 
        supabase.auth.signOut();

        if (error) throw error

        navigate('/login')
    }
  return (
    <>
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

    </>
  )
}

export default DashboardHeader
