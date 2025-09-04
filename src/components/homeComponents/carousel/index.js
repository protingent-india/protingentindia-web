'use client'
import Image from 'next/image';
// components
import { carouselImages } from '@/staticData';
// assets
import { leftDottedLines, rightDottedLines } from '@/assest';
// @mui
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import './style.css';

// ---------------------------------------------------------------------------------------

const Carousel = () => {
    return (
        <div id='carousel' className='bg-white w-full h-auto flex flex-col place-items-center relative p-0' >
            <div id='carousel-main' className='z-10 p-0 flex items-center justify-center overflow-hidden relative h-auto w-full' >
                <div className='w-full h-auto flex items-center m-auto overflow-hidden'>
                    {carouselImages?.length > 0 && <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className='mySwiper z-0 '
                    >
                        {carouselImages.map((img, index) => (
                            <SwiperSlide className='h-[70%] w-fit sm:h-full' key={index} >
                                <Image width={2000} height={600} className='h-auto w-auto' src={img || ''} alt='' />
                            </SwiperSlide>
                        ))}
                    </Swiper>}
                </div>
            </div>
        </div>
    )
}

export default Carousel;