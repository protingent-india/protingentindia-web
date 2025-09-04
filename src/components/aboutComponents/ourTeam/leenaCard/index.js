'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
// component
import { Icon } from '@/components';
// assest
import { leenaImg } from '@/assest';

// ---------------------------------------------------------------------------

const LeenaCard = ({ data }) => {
    const [open, setOpen] = useState(false);
    const [text, setText] = useState(data);

    useEffect(() => {
        if (!open && data) {
            const temp = data?.slice(0, 450);
            setText(`${temp}...`);
        }
        // eslint-disable-next-line
    }, [data])

    const handleTruncate = () => {
        if (!open) {
            setText(data);
        } else {
            const temp = (data)?.slice(0, 450);
            setText(`${temp}...`);
        }
        setOpen(!open)
    }

    return (
        <div id='our-team-card' className={'w-full max-w-[700px] lg:max-w-[1300px] flex flex-col-reverse lg:flex-row-reverse justify-between items-start duration-1000 p-4 lg:p-12 !pt-16 rounded-2xl bg-primary-bg-color'} >
            <div className='w-full lg:w-2/4' >
                <p className='text-4xl uppercase text-primary-green-color tracking-wide font-semibold' >LEENA SINGH</p>
                <p className='text-lg text-primary-green-color uppercase my-1' >FINANCE MANAGER</p>
                <div className='w-full max-w-[350px] flex items-center justify-center gap-2 mb-4' >
                    <span className='w-[85%] h-[4px] bg-white' />
                    <span className='w-[10%] h-[4px] bg-primary-green-color' />
                    <span className='w-[5%] h-[4px] bg-primary-blue-color' />
                </div>
                <div className='h-auto duration-1000 overflow-hidden' >
                    <p className='text-lg font-extralight text-primary-blue-color text-justify my-2' ></p>
                    <div dangerouslySetInnerHTML={{ __html: `<p>${text}</p>` }} className='text-white text-justify font-normal [&>p]:text-lg tracking-wide' />
                </div>
                <div className='w-full flex justify-end items-center ' >
                    <div onClick={handleTruncate} className='w-fit flex gap-1' >
                        <p className='cursor-pointer' >Read More</p>
                        <Icon icon={'ep:arrow-down-bold'} height={24} width={24} rotate={open ? 2 : 0} iconClass={'text-primary-blue-color '} className='cursor-pointer' />
                    </div>
                </div>
            </div>
            <div className='w-full lg:w-2/4 top-0 h-full flex justify-center lg:justify-start relative' >
                <div className='lg:absolute' >
                    <Image src={leenaImg} height={500} width={500} alt='' className='max-w-full h-auto' />
                </div>
            </div>
        </div>
    )
}

export default LeenaCard;