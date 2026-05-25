
const BenefitCardHandler = ({benefit}) => {
  return (
    <>
                                {/* Benefit Card */}
                        <div className="
                            bg-white
                            rounded-[24px]
                            p-8
                            shadow-sm
                            hover:shadow-xl
                            transition-all
                            duration-300
                            border
                            border-gray-200
                        ">

                            <h3 className="
                                text-2xl
                                font-bold
                                text-gray-900
                                mb-4
                            ">
                                {benefit.title}
                            </h3>

                            <p className="
                                text-gray-600
                                leading-7
                            ">
                                {benefit.description}
                            </p>

                        </div>

    </>
  )
}

export default BenefitCardHandler
