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
        <div className='w-full flex flex-col items-center justify-center pb-32' >
            <div className='w-4/5 flex items-center justify-center ' >
                <div className='w-2/5 flex flex-col gap-8 py-8' >
                    <p
                        className='text-4xl leading-[50px] text-primary font-bold text-center'
                    >
                        {title}
                    </p>
                    <p
                        className='text-[22px] text-justify'
                    >
                        {desc}
                    </p>
                </div>
                <Divider className='bg-gradient-to-r from-secondry to-primary rotate-90 w-[320px]' />
                <div className='w-[37%] flex justify-center px-8 !overflow-hidden' >
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={50}
                        pagination={{
                            clickable: true
                        }}
                        modules={[Pagination]}
                        className="mySwiper px-8 "
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
        </div>
    )
}

export default IndustriesSection
