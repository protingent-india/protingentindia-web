"use client"
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from "swiper";
import { Pagination } from 'swiper/modules';
import {
    CommonHeading,
    SliderCard
} from '@/components';
import 'swiper/css';
import 'swiper/css/pagination';
import './index.css';

// --------------------------------------------------------------

const ThreeCardSlider = ({
    cardData,
    title,
    desc
}: {
    cardData: Record<string, any>[],
    title: string,
    desc: string
}) => {
    const [activeCard, setActiveIndex] = useState(1);
    const [visibleCards, setVisibleCards] = useState([1, 2, 3]);

    useEffect(() => {
        setVisibleCards([activeCard - 1, activeCard, activeCard + 1])
    }, [activeCard])

    return (
        <div className='w-full flex flex-col gap-28' >
            <CommonHeading
                title={title}
                desc={desc}
            />
            <div className='w-full flex justify-center' >
                <div className='flex justify-center w-4/5 !overflow-hidden' >
                    {activeCard && <Swiper
                        onSlideChange={(swiper: SwiperType) => setActiveIndex(swiper.activeIndex + 1)}
                        slidesPerView={3}
                        spaceBetween={125}
                        pagination={{
                            clickable: true
                        }}
                        modules={[Pagination]}
                        className="mySwiper "
                    >
                        {cardData?.length > 0 && cardData?.map((item, index) => (
                            <SwiperSlide>
                                <SliderCard
                                    key={index}
                                    title={item.title}
                                    desc={item.desc}
                                    className={activeCard === index ? 'rotate-0' : 'rotate-45'}
                                    active={activeCard === index}
                                    visibleCards={visibleCards.includes(index)}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>}
                </div>
            </div>
        </div >
    )
}

export default ThreeCardSlider;