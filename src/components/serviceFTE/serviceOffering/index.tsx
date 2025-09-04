import {
    CommonHeading,
    ServiceOfferingCard
} from "@/components";
import { ServiceOfferingData } from "@/utils/constants";

// --------------------------------------------------------------


const ServiceOffering = () => {
    return (
        <div className='w-full flex flex-col gap-16' >
            <CommonHeading
                title="Maximize Output with Our High-Impact FTE Service Offerings"
                desc="Empower your business with a full spectrum of tailored FTE services built to reduce costs, increase agility, and ensure top-tier project execution from day one."
            />
            <div className="w-full flex justify-center" >
                <div className="w-3/4 flex justify-center flex-wrap gap-8" >
                    {ServiceOfferingData?.map((item, index) => (
                        <ServiceOfferingCard
                            key={index}
                            title={item?.title}
                            desc={item?.desc}
                            img={item?.img}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ServiceOffering;