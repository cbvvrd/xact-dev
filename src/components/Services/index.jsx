import { useEffect, useState } from "react";
import { GrAction, GrBarChart, GrCar, GrCpu, GrLike, GrOptimize, GrServices } from "react-icons/gr";
import IndividualService from "../IndividualService";

function Services() {

    const[serviceList, setServiceList] = useState([]);
    
    useEffect(() => {
        // const fetchServices = async () => {
        //     const response = await fetch("servicesData.json");
        //     const json = await response.json();
        //     setServiceList(json.services);
        // }
        // fetchServices();
        fetch("servicesData.json")
        .then(res => res.json())
        .then(servicesData => {
            setServiceList(servicesData.services)
        });
    }, []);

    console.log(serviceList[0]);

    return (
        <>
            <div className="flex flex-col items-center content-start gap-5 my-10 md:mx-24">
                <h3 className="text-2xl font-semibold">Services</h3>
                <h4>Here are some of the services we offer:</h4>
                
                <div className="grid gap-4 mx-16 mt-5 text-center md:gap-10 md:grid-cols-4 items-stretch">

                    {serviceList.length > 0 ? 
                        <>
                            <IndividualService title={serviceList[0].title} description={serviceList[0].description} icon={serviceList[0].icon}/>
                            <IndividualService title={serviceList[1].title} description={serviceList[1].description}/>
                        </> 
                        : <IndividualService description="Loading..." />
                    }
                    
                    <ul className="list-disc justify-self-center my-2 md:hidden">
                        <GrOptimize className="justify-self-center m-5 text-xl"/>
                        <li>We</li>
                        <li>Can</li>
                        <li>Do</li>
                        <li>Many</li>
                        <li>Things</li>
                        <GrLike className="justify-self-center mt-5 text-xl"/>
                    </ul>

                    {serviceList.length > 0 ? 
                        <>
                            <IndividualService title={serviceList[2].title} description={serviceList[2].description} />
                            <IndividualService title={serviceList[3].title} description={serviceList[3].description}/>
                        </> 
                        : <IndividualService description="Loading..." />
                    }

           
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