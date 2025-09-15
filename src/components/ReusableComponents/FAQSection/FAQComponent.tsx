"use client"
import { useState } from 'react'
import { Icon } from '@/components';

// ------------------------------------------------------------------

const FAQComponent = ({
    question,
    answer
}: {
    question: string,
    answer: string
}) => {
    const [open, setOpen] = useState(false);

    return (
        <div
            id='FAQComponent'
            onClick={() => setOpen(!open)}
            className='h-fit w-full flex flex-col bg-bg-powder-blue px-4 py-8 rounded-[10px] cursor-pointer text-primary font-semibold '
        >
            <div className='flex justify-between' >
                <p className='text-xl' >
                    {question}
                </p>
                <Icon
                    icon={'fe:arrow-down'}
                    className={`${open ? 'rotate-180' : 'rotate-0'} transition-all duration-700 ease-in-out `}
                />
            </div>
            <div className={`pl-4 transition-all duration-500 ease-in-out overflow-hidden 
                ${open ? "max-h-[1000px]" : "max-h-0"}
            `}>
                <p className='font-light text-justify mt-4'>
                    {answer}
                </p>
            </div>
        </div>
    )
}

export default FAQComponent;