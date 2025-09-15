"use client"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Modal } from "@mui/material";
import { Icon } from "@/components";
import { comprehensiveData, comprehensiveDataMobile } from "@/utils/constants";
import Link from "next/link";

// -----------------------------------------------------------------------

const ComprehensiveSection = () => {
    const [open, setOpen] = useState(0);
    const [openPopup, setopenPopup] = useState<any>({ status: false, data: {} });
    const [isImageLoaded, setIsImageLoaded] = useState<{[key: number]: boolean}>({});
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollNext = () => {
        if (scrollRef.current && scrollRef.current.firstElementChild?.clientWidth) {
            const childWidth = (scrollRef.current.firstElementChild?.clientWidth) || 350;
            scrollRef.current.scrollBy({ left: childWidth, behavior: "smooth" });
        }
    };

    const scrollPrev = () => {
        if (scrollRef.current && scrollRef.current.firstElementChild?.clientWidth) {
            const childWidth = (scrollRef.current.firstElementChild?.clientWidth) || 350;
            scrollRef.current.scrollBy({ left: -childWidth, behavior: "smooth" });
        }
    };

    const handlePopup = (data: number) => {
        setopenPopup({ status: true, data });
    }

    const handleImageLoad = (index: number) => {
        setIsImageLoaded(prev => ({ ...prev, [index]: true }));
    };

    useEffect(() => {
        if (openPopup.status && openPopup?.data !== undefined) {
            const childWidth = scrollRef?.current?.firstElementChild?.clientWidth || 350;
            requestAnimationFrame(() => {
                scrollRef.current?.scrollTo({
                    left: childWidth * openPopup.data + (32 * (openPopup.data - 1)),
                    behavior: "smooth",
                });
            });
        }
    }, [openPopup, scrollRef]);

    // Auto-rotate functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setOpen(prev => (prev + 1) % comprehensiveData.length);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            id='comprehensive'
            className="w-full flex flex-col items-center overflow-hidden"
        >
            {/* Header Section with Enhanced Background */}
            <div
                style={{ 
                    background: "linear-gradient(135deg, rgba(17,63,100,0.95) 0%, rgba(52,150,158,0.95) 50%, rgba(194,217,44,0.95) 100%), url(/img/comprehensiveBg.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundBlendMode: "overlay"
                }}
                className='!bg-no-repeat !bg-cover !bg-center flex flex-col justify-center items-center w-full p-8 lg:p-12 gap-6 relative'
            >
                {/* Floating geometric elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 left-10 w-16 h-16 border-2 border-lime-400/30 rotate-45 animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-12 h-12 bg-teal-400/20 rotate-12 animate-bounce"></div>
                    <div className="absolute top-40 right-20 w-8 h-8 border border-white/40 rounded-full animate-ping"></div>
                </div>
                
                <div className="text-center max-w-6xl z-10" data-aos="fade-up">
                    <h2 className='text-3xl lg:text-5xl font-bold text-white font-lato mb-4 tracking-tight' >
                        COMPREHENSIVE SOLUTIONS & EXPERTISE
                    </h2>
                    <p className='text-xl lg:text-2xl font-semibold text-lime-400 mb-6' >
                        Delivering End-to-End Solutions for Your Business Success
                    </p>
                    <p className='text-base lg:text-xl text-center max-w-[1090px] text-white/90 font-raleway leading-relaxed' >
                        Empower your business through cutting-edge automation, intelligent analytics, cloud-first architecture, and AI-driven solutions. 
                        Our expertise transforms challenges into opportunities, delivering measurable results through innovative technology and strategic insights.
                    </p>
                </div>
            </div>
            
            {/* Desktop Carousel */}
            <div className="w-full bg-white hidden lap:!flex items-center justify-start max-w-full overflow-hidden shadow-2xl" >
                <div className="flex flex-col lap:!flex-row justify-start items-center w-full gap-2" >
                    {comprehensiveData?.map((el: any, index: number): any => (
                        open === index ?
                            <div
                                className={`w-full lap:w-[750px] 3xl:!w-[896px] lap:!h-[720px] flex transform transition-all duration-700 ease-in-out`}
                                key={index}
                                data-aos="zoom-in"
                            >
                                <div className={`w-full lap:!w-[896px] overflow-hidden flex flex-col lg:flex-row items-center bg-gradient-to-br from-white via-gray-50 to-blue-50`} >
                                    {/* Image Section with Enhanced Styling */}
                                    <div className="md:w-[58%] lg:w-2/4 lap:!h-full relative flex items-center justify-center p-6 lap:!p-8 group" >
                                        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-transparent to-navy-600/20 rounded-2xl"></div>
                                        <div className="relative w-full h-[350px] lg:h-[400px] lap:!h-[450px] rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500">
                                            <Image
                                                src={el.img}
                                                alt={el.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                                onLoad={() => handleImageLoad(index)}
                                                priority={index === 0}
                                            />
                                            {/* Gradient overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-navy-600/70 via-transparent to-transparent opacity-80"></div>
                                            {/* Tech elements overlay */}
                                            <div className="absolute bottom-4 left-4 flex gap-2">
                                                {el.features?.slice(0, 2).map((feature: string, i: number) => (
                                                    <span key={i} className="px-3 py-1 bg-lime-400/90 text-navy-600 text-xs font-semibold rounded-full">
                                                        {feature}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Content Section with Enhanced Typography */}
                                    <div className="w-full lg:w-2/4 h-full flex justify-center items-center p-6" >
                                        <div className="text-navy-600 lap:!h-[70%] flex flex-col gap-6 justify-between" >
                                            <div className="flex flex-col justify-between gap-5" data-aos="fade-left">
                                                <div>
                                                    <h3 className="text-3xl lg:text-4xl font-bold font-lato mb-2 text-navy-600" >
                                                        {el?.title}
                                                    </h3>
                                                    <p className="text-xl lg:text-2xl font-semibold font-raleway text-teal-500 mb-4" >
                                                        {el?.subtitle}
                                                    </p>
                                                </div>
                                                <p className="text-base lg:text-lg font-raleway leading-relaxed text-gray-700" >
                                                    {el?.description}
                                                </p>
                                                
                                                {/* Feature highlights */}
                                                <div className="grid grid-cols-2 gap-2 mt-4">
                                                    {el.features?.map((feature: string, i: number) => (
                                                        <div key={i} className="flex items-center gap-2">
                                                            <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                                                            <span className="text-sm font-medium text-gray-600">{feature}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            
                                            {/* CTA Button with Enhanced Styling */}
                                            <div className="flex justify-start lg:justify-end" data-aos="fade-up" data-aos-delay="200">
                                                <Link href={el.link || '#'}>
                                                    <div className='w-[280px] bg-gradient-to-r from-lime-400 to-teal-500 hover:from-teal-500 hover:to-lime-400 flex justify-between items-center gap rounded-full pl-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg group' >
                                                        <p className='text-xl font-semibold text-navy-600' >
                                                            Explore Solution
                                                        </p>
                                                        <div className='rounded-full bg-navy-600 w-[50px] h-[50px] flex justify-center items-center group-hover:bg-white transition-colors duration-300' >
                                                            <Icon
                                                                icon='humbleicons:arrow-right'
                                                                className="text-white group-hover:text-navy-600 transition-colors duration-300"
                                                            />
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> :
                            <div
                                className="w-full lap:!w-[136px] lap:!h-[720px] cursor-pointer flex items-end justify-center bg-no-repeat bg-cover py-4 lap:!pb-8 relative group hover:lap:!w-[160px] transition-all duration-500 ease-in-out transform hover:scale-[1.02]"
                                key={index}
                                onClick={() => setOpen(index)}
                                style={{ 
                                    backgroundImage: `linear-gradient(to bottom, rgba(17,63,100,0.3), rgba(17,63,100,0.8)), url(${el?.img || ''})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            >
                                <p className="text-2xl lg:text-3xl text-white lap:![writing-mode:vertical-rl] lap:!rotate-180 text-center z-10 font-lato font-bold tracking-wide group-hover:text-lime-400 transition-colors duration-300">
                                    {el?.title}
                                </p>
                                <div className="w-full h-full absolute top-0 left-0 bg-navy-600/40 group-hover:bg-navy-600/20 transition-all duration-300"></div>
                                
                                {/* Hover indicator */}
                                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-lime-400 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                            </div>
                    ))}
                </div>
            </div>
            
            {/* Mobile Grid */}
            <div className="w-full min-h-[650px] flex justify-center lap:!hidden">
                <div className="w-full grid grid-cols-2 gap-2 p-4" >
                    {comprehensiveDataMobile?.map((card, index: any) => (
                        <div
                            key={index}
                            className="w-full h-[180px] overflow-hidden relative cursor-pointer group transform hover:scale-105 transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl"
                            onClick={() => handlePopup(index)}
                        >
                            <Image
                                src={card?.img}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                alt={card?.title || ""}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-600/80 via-transparent to-transparent" />
                            <div className="z-10 absolute text-white font-bold flex flex-col justify-end p-4 w-full h-full" >
                                <h4 className="text-sm font-lato font-bold text-center leading-tight">{card?.title || ""}</h4>
                            </div>
                            
                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-lime-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <Icon icon="humbleicons:arrow-right" className="text-white text-2xl" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Enhanced Modal */}
            <Modal
                open={openPopup?.status}
                onClose={() => setopenPopup(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className="w-full overflow-hidden flex justify-center items-center p-4"
            >
                <div className="w-full max-w-6xl outline-0 overflow-hidden relative bg-white rounded-3xl shadow-2xl">
                    <button 
                        onClick={() => setopenPopup(false)} 
                        className="z-50 absolute top-4 right-4 w-10 h-10 bg-navy-600 text-white rounded-full flex items-center justify-center hover:bg-navy-700 transition-colors duration-200" 
                    > 
                        ✕ 
                    </button>
                    <button
                        onClick={scrollPrev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-50 p-4 rounded-full shadow-xl border border-gray-200 transition-all duration-200 hover:scale-110"
                    >
                        <Icon icon="humbleicons:arrow-left" className="text-navy-600 text-xl" />
                    </button>
                    <button
                        onClick={scrollNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-50 p-4 rounded-full shadow-xl border border-gray-200 transition-all duration-200 hover:scale-110"
                    >
                        <Icon icon="humbleicons:arrow-right" className="text-navy-600 text-xl" />
                    </button>
                    {openPopup?.status && 
                        <div className="py-8 bg-gradient-to-br from-white via-gray-50 to-blue-50 rounded-3xl w-full" >
                            <div ref={scrollRef} className="flex no-scrollbar flex-row justify-start items-center w-full overflow-x-auto min-h-fit gap-8 overflow-auto snap-x snap-mandatory scroll-smooth px-8" >
                                {comprehensiveData?.map((el: any, index: number): any => (
                                    <div
                                        className={`min-w-[350px] w-full flex snap-center`}
                                        key={index}
                                    >
                                        <div className={`w-full h-full overflow-hidden flex flex-col items-center justify-center p-6`} >
                                            <div className="w-[320px] h-[320px] relative flex items-center justify-center mb-6 group" >
                                                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
                                                    <Image
                                                        src={el.img}
                                                        alt={el.title}
                                                        fill
                                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-navy-600/60 via-transparent to-transparent"></div>
                                                </div>
                                            </div>
                                            <div className="w-full h-full flex justify-center items-center text-center" >
                                                <div className="text-navy-600 w-full flex flex-col gap-6 justify-between" >
                                                    <div className="flex flex-col justify-between gap-4" >
                                                        <h3 className="text-2xl font-bold font-lato text-center" >
                                                            {el?.title}
                                                        </h3>
                                                        <p className="text-lg font-semibold font-raleway text-teal-500" >
                                                            {el?.subtitle}
                                                        </p>
                                                        <p className="text-base font-raleway text-justify leading-relaxed text-gray-700" >
                                                            {el?.description}
                                                        </p>
                                                        
                                                        {/* Feature highlights in modal */}
                                                        <div className="grid grid-cols-2 gap-2 mt-4">
                                                            {el.features?.map((feature: string, i: number) => (
                                                                <div key={i} className="flex items-center gap-2">
                                                                    <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                                                                    <span className="text-sm font-medium text-gray-600">{feature}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-center" >
                                                        <Link href={el.link || '#'}>
                                                            <div className='w-[280px] bg-gradient-to-r from-lime-400 to-teal-500 hover:from-teal-500 hover:to-lime-400 flex justify-between items-center gap rounded-full pl-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg group' >
                                                                <p className='text-xl font-semibold text-navy-600' >
                                                                    Explore Solution
                                                                </p>
                                                                <div className='rounded-full bg-navy-600 w-[50px] h-[50px] flex justify-center items-center group-hover:bg-white transition-colors duration-300' >
                                                                    <Icon
                                                                        icon='humbleicons:arrow-right'
                                                                        className="text-white group-hover:text-navy-600 transition-colors duration-300"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    }
                </div>
            </Modal>
        </div>
    )
}

export default ComprehensiveSection;