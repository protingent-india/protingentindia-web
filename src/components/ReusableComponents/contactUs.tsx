"use client"
import Image from 'next/image';
import { Icon } from '@/components';

// --------------------------------------------------------

const ContactUsComponent = () => {
    return (
        <div className='w-full flex' >
            <div className='w-2/4 bg-bg-powder-blue flex justify-center items-center text-primary'>
                <div className='w-[59%] flex flex-col justify-center items-center gap-8' >
                    <p className='text-6xl font-light leading-[70px]' >
                        Grow Smarter. Hire Faster. Deliver Better.
                    </p>
                    <p className='text-[28px] text-justify font-light' >
                        Power your projects with Protingent's agile FTE talent solutions—designed to meet deadlines, cut costs, and fuel business momentum.
                    </p>

                    <div className='w-full flex flex-col gap-4' >
                        <div className='w-full grid grid-cols-2 gap-2' >
                            <input
                                type="text"
                                name='Name'
                                placeholder='Your Name'
                                className='px-4 py-2 border border-secondry rounded-[5px] placeholder:text-secondry placeholder:font-light outline-0 text-secondry'
                            />
                            <input
                                type="text"
                                name='Email'
                                placeholder='Your Email'
                                className='px-4 py-2 border border-secondry rounded-[5px] placeholder:text-secondry placeholder:font-light outline-0 text-secondry'
                            />
                            <input
                                type="text"
                                name='Title'
                                placeholder='Your Title'
                                className='px-4 py-2 border border-secondry rounded-[5px] placeholder:text-secondry placeholder:font-light outline-0 text-secondry'
                            />
                            <input
                                type="text"
                                name='Company'
                                placeholder='Your Company'
                                className='px-4 py-2 border border-secondry rounded-[5px] placeholder:text-secondry placeholder:font-light outline-0 text-secondry'
                            />
                        </div>
                        <div className='flex justify-end w-full' >
                            <div className='flex items-center justify-center gap-2 bg-bg-parrot-green w-[130px] rounded-full py-1 text-primary cursor-pointer' >
                                <p className='text-xl capitalize' >
                                    connect
                                </p>
                                <Icon
                                    icon='solar:arrow-right-bold-duotone'
                                    height={20}
                                    width={20}
                                    className=''
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-2/4'>
                <Image
                    src={"/img/contactUsBg.png"}
                    width={1000}
                    height={0}
                    alt=''
                />
            </div>
        </div>
    )
}

export default ContactUsComponent;