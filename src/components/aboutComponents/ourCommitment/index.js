'use client'
import { ourCommitment } from '@/assest';
import Image from 'next/image';

// ---------------------------------------------------

const OurCommitment = () => {
    return (
        <div id="our-commitment" className='w-full p-4 flex justify-center items-center bg-white' >
            <div className='w-full max-w-[1350px] flex flex-col lg:flex-row justify-center items-center' >
                <div className='w-full lg:w-2/5 flex justify-center' >
                    <Image src={ourCommitment} alt='' height={'auto'} width={'auto'} />
                </div>
                <div className='w-full lg:w-3/5 flex flex-col gap-4 p-0 sm:p-4 lg:p-8 text-justify tracking-wider' >
                    <p className='uppercase text-4xl text-primary-blue-color tracking-normal' >OUR COMMITMENT</p>
                    <p className='text-lg font-normal' >Here are some of Protingent&apos;s accolades and accomplishments.</p>
                    <div>
                        <p className='text-lg text-primary-blue-color font-bold' >Mission:</p>
                        <p className='font-normal' >Protingent India LLP is dedicated to delivering excellence in staffing and employee sourcing services. Our mission is to empower businesses with exceptional talent, fostering success through dynamic collaboration and exceptional people.</p>
                    </div>
                    <div>
                        <p className='text-lg text-primary-blue-color font-bold' >Vision:</p>
                        <p className='font-normal' >Our vision at Protingent India LLP is to become the preferred partner for businesses seeking top-tier staffing solutions. We aim to consistently exceed expectations, drive innovation, and cultivate a culture of shared purpose, positioning ourselves as leaders in the industry.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurCommitment;