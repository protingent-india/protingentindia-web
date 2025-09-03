"use client"
import Image from 'next/image';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Icon, EllipsisText } from '@/components';
import { industriesSliderData } from '@/utils/constants';
import 'swiper/css';

// --------------------------------------------------------------------

const IndustriesSlider = () => {
    const swiperRef = useRef<any>(null);
    const [selectedIndustrie, setSelectedIndustrie] = useState<any>({ index: 0, data: industriesSliderData[0] });

    const handleSlidingCards = (btn: string) => {
        if (btn === "prev") {
            swiperRef.current?.slidePrev()
        } else {
            swiperRef.current?.slideNext()
        }
    }

    return (
        <div
            id="industries slider"
            className='flex justify-center items-end w-full'
        >
            <div
                id='slider-pagination'
                className='h-full w-fit flex justify-end gap-2 items-end mb-10'
            >
                <div
                    className='border border-bg-parrot-green w-[63px] h-[63px] flex justify-center items-center rounded-full cursor-pointer'
                    onClick={() => handleSlidingCards('prev')}
                >
                    <Icon
                        icon='material-symbols-light:double-arrow-rounded'
                        height={32}
                        width={32}
                        className='rotate-180'
                    />
                </div>
                <div
                    className='border border-bg-parrot-green w-[63px] h-[63px] flex justify-center items-center rounded-full cursor-pointer'
                    onClick={() => handleSlidingCards('next')}
                >
                    <Icon
                        icon='material-symbols-light:double-arrow-rounded'
                        height={32}
                        width={32}
                    />
                </div>
            </div>
            <div className='w-full max-w-[1584px] flex flex-col items-center gap-8' >
                <div className='w-full flex justify-start' >
                    <p className='border-b-4 border-dotted text-[40px] font-semibold text-primary w-fit' >
                        Industries We Empower
                    </p>
                </div>
                <div className='flex w-full max-w-[1300px]' >
                    <div className='w-full flex flex-col gap-[100px]' >
                        <div className='flex gap-8 items-center justify-between' >
                            <div className='text-primary w-2/4 flex flex-col gap-8' >
                                <p className='text-[80px] font-extrabold' >
                                    {selectedIndustrie?.data?.title || ""}
                                </p>
                                <p className='text-2xl text-justify' >
                                    {selectedIndustrie?.data?.desc || ""}
                                </p>
                                <div>
                                    <div className='px-5 py-2 text-xl  flex gap-2 items-end bg-bg-parrot-green w-fit rounded-full cursor-pointer' >
                                        <p>
                                            Read More
                                        </p>
                                        <Icon
                                            icon='ph:arrow-right-fill'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Image
                                    src={"/img/healthCareInd.png"}
                                    alt=''
                                    height={0}
                                    width={576}
                                    className='!w-full max-w-[576px] rounded-tl-[10px] rounded-br-[10px] rounded-[100px]'
                                />
                            </div>
                        </div>
                        <div className='w-full overflow-hidden' >
                            <div className='w-full overflow-x-scroll no-scrollbar' >
                                <div
                                    id='slider-wrapper'
                                    className='w-full flex duration-1000'
                                >
                                    <Swiper
                                        slidesPerView={4}
                                        spaceBetween={60}
                                        loop={true}
                                        onBeforeInit={(swiper) => {
                                            swiperRef.current = swiper; // store swiper instance
                                        }}
                                        className="mySwiper"
                                    >
                                        {industriesSliderData?.map((el: any, index: number) => (
                                            <SwiperSlide key={index} >
                                                <div
                                                    key={index}
                                                    onClick={() => setSelectedIndustrie({ index, data: el })}
                                                    className={`slide-card flex flex-col items-start gap-2  border-t-2  py-4 min-w-[280px] max-w-[280px] cursor-pointer
                                                ${selectedIndustrie?.index === index ? "border-primary text-primary" : "text-secondry border-secondry "}
                                            `}
                                                >
                                                    <p
                                                        className='text-[30px] font-bold'
                                                    >
                                                        {el?.title || ""}
                                                    </p>
                                                    <EllipsisText
                                                        text={el?.desc || ""}
                                                        className='text-xl'
                                                    />
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default IndustriesSlider;