"use client"
import { Divider, IndustryCard } from '@/components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './index.css';

// ---------------------------------------------------------

const IndustriesSection = ({
    cardData,
    title,
    desc
}: {
    cardData?: Record<string, any>[],
    title: string,
    desc: string
}) => {
    return (
        <div className='w-full flex flex-col items-center justify-center pb-32 p-4' >
            <div className='w-full lap:!w-4/5 flex flex-col lg:flex-row items-center justify-center ' >
                <div className='w-full lg:w-2/4 flex flex-col gap-8 py-8' >
                    <p
                        className='text-2xl 3xl:!text-4xl leading-[50px] text-primary font-bold text-center'
                    >
                        {title}
                    </p>
                    <p
                        className='text-base 3xl:text-[22px] text-justify'
                    >
                        {desc}
                    </p>
                </div>
                <Divider className='bg-gradient-to-r from-secondry to-primary rotate-90 w-[320px] hidden lg:block' />
                <div className='w-full md:w-2/4 lg:w-[90%] lap:!w-3/5 3xl:!w-2/5 flex justify-center px-8 !overflow-hidden' >
                    <Swiper
                        pagination={{
                            clickable: true
                        }}
                        modules={[Pagination]}
                        className="mySwiper px-8 "
                        breakpoints={{
                            375: {
                                spaceBetween: 50,
                                slidesPerView: 1,
                            },
                            768: {
                                spaceBetween: 50,
                                slidesPerView: 2,
                            }
                        }}
                    >
                        {cardData && cardData?.length > 0 && cardData?.map((item, index) => (
                            <SwiperSlide>
                                <IndustryCard
                                    title={item?.title}
                                    img={item?.img}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div >
    )
}

export default IndustriesSection
