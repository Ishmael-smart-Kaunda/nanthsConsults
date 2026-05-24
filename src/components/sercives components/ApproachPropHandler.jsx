// Approach Prop Handler Component
// Handles the dynamic rendering of the framework steps


const ApproachPropHandler = ({framework}) => {
  return (
    <>
        {/* Workflow Steps */}
        <div className="mb-8 ">
            <hr 
                className="outline-gray-400 mb-6"
            />

            <div className="grid grid-cols-[100px_1fr] gap-4">
                <p className="italic font-light text-3xl"> {framework.step} </p>
                <div className="">
                    <h3 className="font-semibold text-3xl mb-4"> {framework.title} </h3>
                    <p className="relaxed font-light space-y-6 text-[21px]">
                        {framework.description1}
                    </p>
                    <br />
                    <p className="relaxed font-light space-y-6 text-[21px]">
                        {framework.description2}
                    </p>
                </div>
                {/* <div className="bg-amber-300"></div> */}
            </div>
        </div>

    </>
  )
}

export default ApproachPropHandler
