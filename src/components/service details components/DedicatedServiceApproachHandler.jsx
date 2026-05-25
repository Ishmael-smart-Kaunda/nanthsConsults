// Handles prop management & rendering of service approach & framework

const DedicatedServiceApproachHandler = ({approach}) => {
  return (
        <>
        {/* Workflow Steps */}
        <div className="mb-8 ">
            <hr 
                className="outline-gray-400 mb-6"
            />

            <div className="grid grid-cols-[100px_1fr] gap-4">
                <p className="italic font-light text-3xl"> {approach.id} </p>
                <div className="">
                    <h3 className="font-semibold text-3xl mb-4"> {approach.title} </h3>
                    <p className="relaxed font-light space-y-6 text-[21px]">
                        {approach.description}
                    </p>
                    {/* <br />
                    <p className="relaxed font-light space-y-6 text-[21px]">
                        {framework.description2}
                    </p> */}
                </div>
                {/* <div className="bg-amber-300"></div> */}
            </div>
        </div>

    </>

  )
}

export default DedicatedServiceApproachHandler
