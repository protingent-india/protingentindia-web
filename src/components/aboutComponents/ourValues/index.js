'use client'
import { OurValuesData } from "@/staticData";
import { OurValueCard } from "@/components";

// --------------------------------------------------------------------

const OurValues = () => {
    return (
        <div id="our-values" className='w-full flex justify-center items-center p-4 pt-24' >
            <div className='[ container max-w-screen-xl ] [ flex flex-col justify-center items-center ] ' >
                <p className='w-fit uppercase text-3xl mb-32' >Our values </p>
                <div className="w-full [ flex flex-wrap justify-center items-center gap-x-4 lg:gap-x-6 gap-y-16 ]" >
                    {OurValuesData?.map((el, i) => (
                        <OurValueCard key={i} title={el?.title} img={el?.img} desc={el?.desc} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OurValues;