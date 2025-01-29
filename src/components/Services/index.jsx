import { GrAction, GrBarChart, GrCar, GrCpu, GrLike, GrOptimize, GrServices } from "react-icons/gr";

function Services() {
    return (
        <>
            <div className="flex flex-col items-center content-start gap-5 my-10 md:mx-24">
                <h3 className="text-2xl font-semibold">Services</h3>
                <h4>Here are some of the services we offer:</h4>
            
                <div className="grid gap-4 mx-16 mt-5 text-center md:gap-10 md:grid-cols-4 items-stretch">
                    <div className="flex flex-col gap-2 border-2 border-black p-5 rounded-lg bg-blue-200">
                        <GrCpu className="self-center text-2xl" />
                        <p className="font-semibold">Service 1</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ratione veniam eius nam ea ab quo assumenda. </p>
                    </div>
                    <div className="flex flex-col gap-2 border-2 border-black p-5 rounded-lg bg-blue-200 ">
                        <GrAction className="self-center text-2xl"/>
                        <p className="font-semibold">Service 2</p>
                        <p>laboriosam dicta in hic unde exercitationem pariatur! Assumenda eum veniam aliquam officia dolorum!</p>
                    </div>
                    <ul className="list-disc justify-self-center my-2 md:hidden">
                        <GrOptimize className="justify-self-center m-5 text-xl"/>
                        <li>We</li>
                        <li>Can</li>
                        <li>Do</li>
                        <li>Many</li>
                        <li>Things</li>
                        <GrLike className="justify-self-center mt-5 text-xl"/>
                    </ul>
                    <div className="flex flex-col gap-2 border-2 border-black p-5 rounded-lg bg-blue-200">
                        <GrBarChart className="self-center text-2xl"/>
                        <p className="font-semibold">Service 3</p>
                        <p>Duis vestibulum libero at ex luctus iaculis. Phasellus nec pharetra odio, at efficitur massa.</p>
                    </div>
                    <div className="flex flex-col gap-2 border-2 border-black p-5 rounded-lg bg-blue-200">
                        <GrServices className="self-center text-2xl"/>
                        <p className="font-semibold">Service 4</p>
                        <p>Suspendisse at magna feugiat, aliquet augue at, congue tellus. Aenean nec tincidunt nisi.</p>
                    </div>
                </div>
                <div className="items-center gap-8 hidden md:flex">
                    <GrOptimize className="justify-self-center m-5 text-xl"/>
                    <ul className="list-disc justify-self-center my-2">
                        <li>We</li>
                        <li>Can</li>
                        <li>Do</li>
                        <li>Many</li>
                        <li>Things</li>
                    </ul>
                    <GrLike className="justify-self-center mt-5 text-xl"/>
                </div>
                </div>
        </>
    );
}

export default Services;