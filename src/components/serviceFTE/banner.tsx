"use client"
import Image from 'next/image';
import { ConsultationPopup, Icon } from '@/components';
import { useBreakpoint } from '@/hook';
import Link from 'next/link';
import { useConsultationPopup } from '@/hooks/useConsultationPopup';

// --------------------------------------------------------------

const BannerSection = () => {
    const { isOpen, config, openPopup, closePopup } = useConsultationPopup();
    const { lg } = useBreakpoint();

    return (
        <section className='w-full flex flex-col gap-8 lg:gap-0 pt-9 lg:pt-0 lg:flex-row justify-between items-center bg-bg-powder-blue' >
            <div className='w-full xl:w-2/4 flex justify-end p-4 md:px-8' >
                <div className='w-full lap:!w-[80%] 3xl:!w-[74%] flex flex-col gap-8 lg:gap-4 ' >
                    <p className='text-4xl text-left lg:text-4xl 3xl:!text-[50px] text-primary font-bold 3xl:!leading-[56px]' >
                        Full-Time Equivalent (FTE) Services to Scale <span className='text-secondry' >Without Excess Hiring</span>
                    </p>
                    <p className='text-base md:text-xl lg:text-base xl:text-xl text-justify font-normal text-primary' >
                        Full-Time Equivalent (FTE) Services are designed to help businesses build dedicated teams, reduce overheads, and stay focused on business growth. It enables organizations to gain a consistent, cost-effective, and project-aligned talent pool to meet deadlines.
                    </p>
                    <div onClick={() => openPopup()} className='cursor-pointer w-full sm:w-[424px] lg:!w-[324px] 3xl:!min-w-[424px] bg-bg-parrot-green flex justify-between items-center gap rounded-full pl-6' >
                        <p className='text-lg 3xl:!text-2xl' >
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
                    clipPath: lg ? "polygon(18% 0%, 100% 0%, 100% 100%, 18% 100%, 4% 50%)" : "",
                }} // polygon(80% 0%, 20% 0%, 20% 100%, 80% 100%, 100% 50%) : for right arrow shape
                className='overflow-hidden xl:w-2/4'>
                <Image
                    src={"/img/serviceFTE/banner.png"}
                    width={5000}
                    height={0}
                    alt=''
                    className='w-full'
                />
            </div>
            <ConsultationPopup
                isOpen={isOpen}
                onClose={closePopup}
                title={config.title}
                description={config.description}
            />
        </section >
    )
}

export default BannerSection;