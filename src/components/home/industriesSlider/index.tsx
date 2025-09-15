"use client"
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
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
    const [isPaused, setIsPaused] = useState(false);

    // Auto-rotation every 3 seconds
    useEffect(() => {
        if (!isPaused && industriesSliderData.length > 0) {
            const interval = setInterval(() => {
                setSelectedIndustrie((prev: any) => {
                    const nextIndex = (prev.index + 1) % industriesSliderData.length;
                    return { index: nextIndex, data: industriesSliderData[nextIndex] };
                });
            }, 3000);

            return () => clearInterval(interval);
        }
    }, [isPaused]);

    const handleSlidingCards = (btn: string) => {
        setIsPaused(true);
        if (btn === "prev") {
            const prevIndex = selectedIndustrie.index === 0 ? industriesSliderData.length - 1 : selectedIndustrie.index - 1;
            setSelectedIndustrie({ index: prevIndex, data: industriesSliderData[prevIndex] });
            swiperRef.current?.slidePrev();
        } else {
            const nextIndex = (selectedIndustrie.index + 1) % industriesSliderData.length;
            setSelectedIndustrie({ index: nextIndex, data: industriesSliderData[nextIndex] });
            swiperRef.current?.slideNext();
        }
        // Resume auto-rotation after 5 seconds
        setTimeout(() => setIsPaused(false), 5000);
    }

    const handleIndustryClick = (index: number, data: any) => {
        setSelectedIndustrie({ index, data });
        setIsPaused(true);
        // Resume auto-rotation after 5 seconds
        setTimeout(() => setIsPaused(false), 5000);
    };

    return (
        <div
            id="industries-slider"
            className='flex flex-col xl:flex-row justify-center items-center xl:items-end gap-6 w-full p-4 bg-gradient-to-br from-gray-50 via-white to-blue-50'
        >
            {/* Desktop Navigation */}
            <div
                id='slider-pagination'
                className='h-full w-fit hidden xl:flex justify-end gap-2 items-end mb-6'
            >
                <div
                    className='border-2 border-lime-400 hover:border-teal-500 w-[50px] h-[50px] flex justify-center items-center rounded-full cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg bg-white hover:bg-lime-50'
                    onClick={() => handleSlidingCards('prev')}
                >
                    <Icon
                        icon='material-symbols-light:double-arrow-rounded'
                        height={24}
                        width={24}
                        className='rotate-180 text-navy-600'
                    />
                </div>
                <div
                    className='border-2 border-lime-400 hover:border-teal-500 w-[50px] h-[50px] flex justify-center items-center rounded-full cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg bg-white hover:bg-lime-50'
                    onClick={() => handleSlidingCards('next')}
                >
                    <Icon
                        icon='material-symbols-light:double-arrow-rounded'
                        height={24}
                        width={24}
                        className='text-navy-600'
                    />
                </div>
            </div>

            <div className='w-full md:w-[85%] lg:w-[90%] 3xl:w-full max-w-[1200px] flex flex-col items-center lap:items-start 3xl:items-center gap-8 lg:gap-6' >
                {/* Enhanced Header Section - Reduced */}
                <div className='w-full flex flex-col gap-3' data-aos="fade-up">
                    <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold font-lato text-navy-600 w-fit border-b-4 border-dotted border-lime-400' >
                        Industries We Transform with Innovation
                    </h2>
                    <p className='text-base lg:text-lg font-raleway text-gray-700 max-w-3xl leading-relaxed' data-aos="fade-up" data-aos-delay="200">
                        We empower diverse industries with tech-enabled staffing, consulting, and digital solutions that reshape operations, improve efficiency, and unlock sustainable growth in an evolving tech-savvy world.
                    </p>
                </div>

                <div className='flex w-full xl:max-w-[1000px] max-w-[1100px] 3xl:!max-w-[1100px]' >
                    <div className='w-full flex flex-col gap-8 lg:gap-12' >
                        {/* Main Content Display - Reduced Size */}
                        <div className='flex flex-col-reverse lg:flex-row gap-6 items-center justify-between' data-aos="zoom-in">
                            <div className='text-navy-600 w-full lg:w-2/4 flex flex-col gap-6 slide-content' 
                                 key={selectedIndustrie.index} // Force re-render for animation
                            >
                                <h3 className='text-3xl lg:text-4xl lap:!text-5xl font-extrabold font-lato' >
                                    {selectedIndustrie?.data?.title || ""}
                                </h3>
                                <p className='text-lg lg:text-xl font-raleway leading-relaxed text-justify text-gray-700' >
                                    {selectedIndustrie?.data?.desc || ""}
                                </p>
                                {/* Progress indicator for auto-rotation */}
                                {!isPaused && (
                                    <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                                        <div 
                                            className="h-full bg-[#34969E] rounded-full auto-progress-bar"
                                            style={{
                                                animation: 'progress 3s linear infinite'
                                            }}
                                        />
                                    </div>
                                )}
                            </div>
                            <div className='w-full lg:w-2/4 flex justify-center lg:justify-end'>
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-transparent to-navy-600/20 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                                    <Image
                                        src={selectedIndustrie?.data?.img || "/img/healthCareInd.png"}
                                        alt={selectedIndustrie?.data?.title || "Industry"}
                                        height={400}
                                        width={480}
                                        className='relative z-10 w-full max-w-[480px] h-[280px] sm:h-[320px] lg:h-[360px] rounded-2xl shadow-lg object-cover group-hover:shadow-xl transition-shadow duration-300 slide-image'
                                        priority
                                        key={selectedIndustrie.index} // Force re-render for animation
                                    />
                                    {/* Gradient overlay for better text readability */}
                                    <div className="absolute inset-0 z-20 bg-gradient-to-t from-navy-600/30 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </div>
                        </div>

                        {/* Industry Cards Slider - Reduced Size */}
                        <div className='w-full overflow-hidden' data-aos="fade-up" data-aos-delay="400">
                            <div className='w-full overflow-x-scroll no-scrollbar' >
                                <div
                                    id='slider-wrapper'
                                    className='w-full flex duration-1000'
                                >
                                    <Swiper
                                        slidesPerView={lap ? 4 : lg ? 3 : 2}
                                        spaceBetween={desk ? 40 : lap ? 30 : lg ? 25 : xs ? 15 : 40}
                                        loop={true}
                                        onBeforeInit={(swiper) => {
                                            swiperRef.current = swiper;
                                        }}
                                        className="mySwiper"
                                    >
                                        {industriesSliderData?.map((el: any, index: number) => (
                                            <SwiperSlide key={index} >
                                                <div
                                                    key={index}
                                                    onClick={() => handleIndustryClick(index, el)}
                                                    className={`slide-card flex flex-col items-start gap-2 border-t-4 py-4 lap:min-w-[200px] 3xl:min-w-[240px] max-w-[240px] cursor-pointer transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg rounded-lg p-3
                                                ${selectedIndustrie?.index === index 
                                                    ? "border-lime-400 text-navy-600 bg-gradient-to-br from-lime-50 to-teal-50 shadow-md" 
                                                    : "text-teal-600 border-teal-500 hover:border-lime-400 hover:text-navy-600 bg-white hover:bg-gradient-to-br hover:from-lime-50 hover:to-teal-50"
                                                }
                                            `}
                                                >
                                                    <h4 className='text-lg lg:text-xl font-bold font-lato'>
                                                        {el?.title || ""}
                                                    </h4>
                                                    <EllipsisText
                                                        text={el?.desc || ""}
                                                        className='text-sm font-raleway leading-relaxed'
                                                    />
                                                    
                                                    {/* Active indicator */}
                                                    {selectedIndustrie?.index === index && (
                                                        <div className="mt-1 flex items-center gap-2">
                                                            <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse"></div>
                                                            <span className="text-xs font-medium text-navy-600">Active</span>
                                                        </div>
                                                    )}
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

            {/* Mobile Navigation */}
            <div
                id='slider-pagination'
                className='h-full w-fit flex xl:!hidden justify-end gap-2 items-end mb-6'
            >
                <div
                    className='border-2 border-lime-400 hover:border-teal-500 w-[50px] h-[50px] flex justify-center items-center rounded-full cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg bg-white hover:bg-lime-50'
                    onClick={() => handleSlidingCards('prev')}
                >
                    <Icon
                        icon='material-symbols-light:double-arrow-rounded'
                        height={24}
                        width={24}
                        className='rotate-180 text-navy-600'
                    />
                </div>
                <div
                    className='border-2 border-lime-400 hover:border-teal-500 w-[50px] h-[50px] flex justify-center items-center rounded-full cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg bg-white hover:bg-lime-50'
                    onClick={() => handleSlidingCards('next')}
                >
                    <Icon
                        icon='material-symbols-light:double-arrow-rounded'
                        height={24}
                        width={24}
                        className='text-navy-600'
                    />
                </div>
            </div>

            {/* Custom CSS for animations */}
            <style jsx>{`
                .slide-content {
                    animation: fadeInUp 0.5s ease-out;
                }
                
                .slide-image {
                    animation: fadeIn 0.5s ease-out;
                }
                
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @keyframes progress {
                    from { width: 0%; }
                    to { width: 100%; }
                }
                
                .auto-progress-bar {
                    width: 0%;
                }
            `}</style>
        </div >
    )
}

export default IndustriesSlider;