"use client"
import { CommonHeading, ServicePartnersCard } from '@/components';

// ------------------------------------------------------------

const ServicePartners = ({
    title,
    desc,
    cardList
}: {
    title?: string,
    desc?: string,
    cardList: Record<string, any>[]
}) => {
    return (
        <div className='w-full flex flex-col gap-28 pb-16 p-4' >
            <CommonHeading
                title={title || ''}
                desc={desc || ""}
            />
            <div className='w-full flex justify-center items-center' >
                <div className='w-full sm:w-4/5 lg:w-full flex justify-center flex-wrap gap-x-32 gap-y-48' >
                    {cardList?.map((el, index) => (
                        <ServicePartnersCard
                            key={index}
                            title={el?.title || ""}
                            desc={el?.desc || ''}
                            img={el?.img || ""}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ServicePartners;