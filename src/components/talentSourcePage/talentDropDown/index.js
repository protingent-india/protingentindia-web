'use client'
import { Icon } from '@/components';
import { useState } from 'react';

// -------------------------------------------------------

const TalentDropDown = ({ data }) => {
    const [open, setOpen] = useState(true);

    return (
        <div className='w-full sm:w-[90%] max-w-[900px] border-2 rounded-[30px] duration-1000 ease-in-out p-4 sm:p-8' >
            <div onClick={() => setOpen(!open)} className='cursor-pointer w-full flex justify-between items-center' >
                <p className='text-2xl sm:text-[28px] capitalize w-fit font-bold text-black/70' >{data?.heading || ''}</p>
                <Icon icon={'ep:arrow-down-bold'} rotate={open ? 2 : 0} height={34} width={34} className={'text-primary-green-color'} />
            </div>
            <div style={{ height: open ? 'fit-content' : '0px' }} className={`w-full duration-500 ease-in overflow-hidden text-black/70 ${open ? 'pt-4 sm:p-4 sm:pl-0' : 'p-0'}`} >
                <div className='flex justify-between items-end' >
                    <Icon icon={'mdi:location'} height={40} width={40} className={'text-primary-green-color'} />
                    <span className='h-[2px] w-[90%] bg-primary-green-color' />
                </div>
                <div className='sm:p-4 sm:pl-0 text-xl font-semibold pt-4' >
                    <p className='text-lg my-3' >Job Description</p>
                    <div className='sm:pl-8 flex flex-col gap-1 ' >
                        <p className='flex gap-2 text-lg font-semibold' >Job Title: <span className='font-normal sm:text-lg' >{data?.jobTitle || ''}</span></p>
                        <p className='flex gap-2 text-lg font-semibold' >Location :<span className='font-normal sm:text-lg' >{data?.location || ''}</span></p>
                        <p className='flex gap-2 text-lg font-semibold' >Type of Job: <span className='font-normal sm:text-lg' >{data?.jobType || ''}</span></p>
                    </div>
                </div>
                <div className='mb-4 pt-4' >
                    <p className='text-lg mb-4 font-semibold' >Job Description</p>
                    <div className='flec flex-col pl-8' >
                        <p className='font-semibold mb-2 text-lg' >SUMMARY OF JOB: -</p>
                        <div className='[&>p]:font-normal [&>p]:text-lg text-justify' dangerouslySetInnerHTML={{ __html: data?.summary }} />
                    </div>
                </div>
                <div className='mb-4 flex flex-col gap-4' >
                    {data?.roles?.length > 0 && data?.roles?.map((role, i) => (
                        <div key={i} >
                            <p className='font-semibold text-lg mb-2 mt-' >{role?.title}</p>
                            <ul className='pl-16 list-outside list-disc [&>li]:text-lg [&>li]:font-normal' >
                                {role?.responsibility?.map((el, index) => (
                                    <li key={index} >
                                        {el}
                                    </li>
                                ))}
                            </ul>
                        </div>))}
                </div>
                <div className='mb-6'>
                    <div className='text-lg font-semibold uppercase text-justify' >
                        ABOUT COMPANY:
                        <div className='pl-10 [&>p]:text-lg [&>p]:font-normal [&>p]:normal-case text-justify' dangerouslySetInnerHTML={{ __html: data?.about }} />
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-2' >
                    <p className='text-lg font-semibold' >Apply Now: <span className='sm:text-lg font-normal break-words' > {data?.email}</span></p>
                    <div className='flex flex-col md:flex-row items-center' >
                        <p className='font-semibold mr-1' >Share This Job:</p>
                        <div className='flex' >
                            <Icon iconClass={'text-primary-blue-color'} icon={'fa-brands:facebook-square'} height={30} width={30} />
                            <Icon iconClass={'text-primary-blue-color'} icon={'fa-brands:twitter-square'} height={30} width={30} />
                            <Icon iconClass={'text-primary-blue-color'} icon={'ion:logo-linkedin'} height={30} width={30} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TalentDropDown;