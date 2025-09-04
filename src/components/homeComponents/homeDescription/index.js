'use client'
import React from 'react'
import Image from 'next/image'
import { leftDottedLines, rightDottedLines } from '@/assest'

// ---------------------------------------------------------------

const HomeDescription = () => {
    return (
        <section className='w-full relative -top-14 z-10 ' >
            <Image src={leftDottedLines} height={'auto'} width={'auto'} alt='' className=' h-[400px] w-[100px] sm:w-auto sm:h-auto absolute top-0 sm:top-[-160px] xl:top-0 2xl:top-[-160px] left-0 z-10' />
            <Image src={rightDottedLines} height={'auto'} width={'auto'} alt='' className=' h-[400px] w-[100px] sm:w-auto sm:h-auto absolute bottom-0 sm:bottom-[-280px] xl:bottom-0 2xl:bottom-[-280px] right-0 z-10' />
            <div
                style={{ clipPath: 'polygon(48% 0%, 100% 100%, 100% 105%, 0 105%, 0 100%)' }}
                className="w-full text-black h-12 before:content-[''] before:border before:border-primary-blue-color before:absolute before:top-0 before:w-full before:h-12 before:bg-primary-blue-color before:z-[10]"
            />
            <div className='[ flex justify-center ] [ p-8 lg:p-12 ] bg-primary-blue-color border border-primary-blue-color' >
                <div className='w-full max-w-[900px] 2xl:max-w-[1100px] text-white text-justify flex flex-col items-center' >
                    <p className='uppercase text-center text-3xl mb-8 font-semibold' >PROTINGENT INDIA : STAFFING EXCELLENCE, GLOBALLY UNITED</p>
                    <span
                        style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 27% 100%, 0px 100%)' }}
                        className='block h-[4px] w-60 sm:w-72 bg-primary-green-color mb-8' />
                    <div className='flex flex-col gap-4 tracking-wider' >
                        <p>
                            Protingent India excels in delivering exceptional staffing and value-added services, such as pre-screening, client submissions, client interviews, contract placement, and more. With a dedicated team of professionals, Protingent India ensures that clients receive top-quality candidates who possess the necessary skills and qualifications.
                        </p>
                        <p>
                            Through a thorough pre-screening process, Protingent India guarantees that only the most qualified individuals are presented to clients for consideration. The company&apos;s expertise extends beyond the initial candidate selection, as they also assist with client submissions and conduct client interviews to ensure the perfect match is made.
                        </p>
                        <p>
                            In addition, Protingent India handles all aspects of contract placement to streamline the process for clients. With a commitment to excellence, Protingent India goes above and beyond to provide outstanding staffing solutions and exceptional service.
                        </p>
                    </div>
                </div>
            </div>
            <div
                style={{ clipPath: 'polygon(48% 0%, 100% 100%, 100% 105%, 0 105%, 0 100%)' }}
                className="w-full text-black h-12 rotate-180 [ after:content-[''] after:border after:border-primary-blue-color after:absolute after:bottom-0 after:w-full after:h-12 after:bg-primary-blue-color after:z-[10] ]"
            />
        </section>
    )
}

export default HomeDescription;
