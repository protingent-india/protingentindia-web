"use client"
import Image from 'next/image';
import { Icon } from '@/components';

// --------------------------------------------------------------

const BannerSection = () => {
    return (
        <div className='w-full flex justify-between items-center bg-bg-powder-blue' >
            <div className='w-2/4 flex justify-end' >
                <div className='w-[74%] flex flex-col gap-8 ' >
                    <p className='text-[50px] text-primary font-bold leading-[56px]' >
                        Full-Time Equivalent Services for <span className='text-secondry' > Strategic Success</span>
                    </p>
                    <p className='text-2xl font-normal text-primary' >
                        Ensure seamless operations with skilled professionals tailored <br />
                        to your workflows, timelines, and compliance needs.
                    </p>
                    <div className='w-[424px] bg-bg-parrot-green flex justify-between items-center gap rounded-full pl-6' >
                        <p className='text-2xl' >
                            Consult Our Expert Recruiters
                        </p>
                        <div className='rounded-full bg-secondry w-[50px] h-[50px] flex justify-center items-center' >
                            <Icon
                                icon='humbleicons:arrow-right'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div
                style={{
                    clipPath: "polygon(18% 0%, 100% 0%, 100% 100%, 18% 100%, 4% 50%)",
                }} // polygon(80% 0%, 20% 0%, 20% 100%, 80% 100%, 100% 50%) : for right arrow shape
                className='overflow-hidden'>
                <Image
                    src={"/img/serviceFTE/banner.png"}
                    width={950}
                    height={0}
                    alt=''
                />
            </div>
        </div >
    )
}

export default BannerSection;