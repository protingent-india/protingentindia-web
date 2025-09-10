"use client"
import Image from 'next/image';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Icon, EllipsisText } from '@/components';
import { industriesSliderData } from '@/utils/constants';
import { useBreakpoint } from '@/hook';
import 'swiper/css';

// --------------------------------------------------------------------

const IndustriesSlider = () => {
    const swiperRef = useRef<any>(null);
    const { xs, lg, lap, desk } = useBreakpoint();
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
            className='flex flex-col xl:flex-row justify-center items-center xl:items-end gap-8 w-full p-4'
        >
            <div
                id='slider-pagination'
                className='h-full w-fit hidden xl:flex justify-end gap-2 items-end mb-10'
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
            <div className='w-full md:w-[80%] lg:w-[90%] 3xl:w-full max-w-[1500px] flex flex-col items-center lap:items-start 3xl:items-center gap-10 lg:gap-8' >
                <div className='w-full flex justify-start' >
                    <p className='border-b-4 border-dotted text-3xl 3xl:text-[40px] font-semibold text-primary w-fit' >
                        Industries We Empower
                    </p>
                </div>
                <div className='flex w-full xl:max-w-[1150px] max-w-[1300px] 3xl:!max-w-[1300px]' >
                    <div className='w-full flex flex-col gap-[40px] lg:gap-[100px]' >
                        <Swiper
                            slidesPerView={lap ? 4 : lg ? 3 : 2}
                            spaceBetween={desk ? 60 : lap ? 40 : lg ? 35 : xs ? 20 : 60}
                            loop={true}
                            onBeforeInit={(swiper) => {
                                swiperRef.current = swiper; // store swiper instance
                            }}
                            className="mySwiper !h-auto"
                        >
                            <div className='flex flex-col-reverse lg:flex-row gap-8 items-center justify-between' >
                                <div className='text-primary w-full lg:w-2/4 flex flex-col gap-8' >
                                    <p className='text-4xl lg:text-5xl lap:!text-6xl 3xl:text-[80px] font-extrabold' >
                                        {selectedIndustrie?.data?.title || ""}
                                    </p>
                                    <p className='text-xl 3xl:text-2xl text-justify' >
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
                        </Swiper>
                        <div className='w-full overflow-hidden' >
                            <div className='w-full overflow-x-scroll no-scrollbar' >
                                <div
                                    id='slider-wrapper'
                                    className='w-full flex duration-1000'
                                >
                                    <Swiper
                                        slidesPerView={lap ? 4 : lg ? 3 : 2}
                                        spaceBetween={desk ? 60 : lap ? 40 : lg ? 35 : xs ? 20 : 60}
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
                                                    className={`slide-card flex flex-col items-start gap-2 border-t-2 py-4 lap:min-w-[230px] 3xl:min-w-[280px] max-w-[280px] cursor-pointer
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
            <div
                id='slider-pagination'
                className='h-full w-fit flex xl:!hidden justify-end gap-2 items-end mb-10'
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
        </div >
    )
}

export default IndustriesSlider;