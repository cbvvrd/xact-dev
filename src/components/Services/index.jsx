import { useEffect, useState } from "react";
import { GrAction, GrBarChart, GrCpu, GrServices } from "react-icons/gr";
import IndividualService from "../IndividualService";
import ServiceBulletPoints from "../ServiceBulletPoints";

function Services() {

    const[serviceList, setServiceList] = useState([]);
    
    useEffect(() => {
        fetch("servicesData.json")
        .then(res => res.json())
        .then(servicesData => {
            setServiceList(servicesData.services);
        });
    }, []);

    return (
        <>
            <div className="flex flex-col items-center content-start gap-5 my-10 md:mx-24">
                <h3 className="text-2xl font-semibold">Services</h3>
                <h4>Here are some of the services we offer:</h4>

                <div className="grid gap-4 mx-16 mt-5 text-center md:gap-10 md:grid-cols-4 items-stretch">
                    {serviceList.length > 0 ? 
                        <>
                            <IndividualService title={serviceList[0].title} description={serviceList[0].description} icon={<GrCpu />} />
                            <IndividualService title={serviceList[1].title} description={serviceList[1].description} icon={<GrAction />} />
                        </> 
                        : <IndividualService description="Loading..." />
                    }
                    
                    <div className="md:hidden">
                        <ServiceBulletPoints />
                    </div>

                    {serviceList.length > 0 ? 
                        <>
                            <IndividualService title={serviceList[2].title} description={serviceList[2].description} icon={<GrBarChart />} />
                            <IndividualService title={serviceList[3].title} description={serviceList[3].description} icon={<GrServices />} />
                        </> 
                        : <IndividualService description="Loading..." />
                    }
                 </div>

                <div className="items-center gap-8 hidden md:flex">
                    <ServiceBulletPoints />
                </div>

            </div>
        </>
    );
}

export default Services;