import React from 'react'

const ServiceOfferingCard = () => {
    return (
        <div
            style={{
                background: "url(/img/serviceFTE/serviceOffering1.png)",
            }}
            className='w-[90%] max-w-[568px] min-h-[568px] bg-center bg-no-repeat rounded-[5px]'
        >
            <div
                style={{
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 85%, 50% 100%, 0% 80%)"
                }}
                className='w-full bg-primary/90 flex flex-col items-center text-center gap-3 px-18 py-8 pb-14'
            >
                <p className='text-2xl text-white font-bold' >
                    Hybrid Resource Flexibility
                </p>
                <p className='text-white' >
                    Blend in-house direction with outsourced expertise through custom-built resource models that scale seamlessly with your project demands.
                </p>
            </div>
            This is a card
        </div>
    )
}

export default ServiceOfferingCard;