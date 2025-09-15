import React from 'react'
import {
    CommonHeading,
    FAQComponent
} from '@/components';

// ------------------------------------------------------------------------

const FAQSection = ({
    title,
    desc,
    FAQList
}: {
    title: string,
    desc: string,
    FAQList: Record<string, any>[]
}) => {
    return (
        <div id='FAQSection' className='w-full flex flex-col items-center pb-16' >
            <CommonHeading
                title={title || ""}
                desc={desc || ""}
                className='[&>span]:max-w-[1144px]'
            />
            <div
                style={{
                    background: "url(/img/FAQBG.png)"
                }}
                className='w-4/5 pt-32 p-4 bg-no-repeat bg-cover min-h-[824px] max-w-[1440px]'
            >
                <div className='grid grid-cols-2 gap-x-4 gap-y-8 w-full' >
                    {FAQList && FAQList?.length > 0 && FAQList?.map((el: any, index: any) => (
                        <FAQComponent
                            key={index}
                            question={el?.q}
                            answer={el?.a}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FAQSection;