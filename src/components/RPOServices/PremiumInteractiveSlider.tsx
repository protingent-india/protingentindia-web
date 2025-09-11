"use client"
import { useBreakpoint } from '@/hook';
import { skillCards } from '@/staticData';
import { useEffect, useRef, useState } from 'react';
import {
    FaArrowLeft,
    FaArrowRight,
} from 'react-icons/fa';

// ------------------------------------------------------------------

// Premium Interactive Slider - Highly Skilled Team Section
const PremiumInteractiveSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const [progress, setProgress] = useState(0);
    const { md, lg } = useBreakpoint();
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const slidesToShow = lg ? 3 : md ? 2 : 1
    const maxSlide = skillCards.length - slidesToShow;

    const nextSlide = () => {
        setCurrentSlide(prev => (prev >= maxSlide ? 0 : prev + 1));
        setProgress(0);
    };

    const prevSlide = () => {
        setCurrentSlide(prev => (prev <= 0 ? maxSlide : prev - 1));
        setProgress(0);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(Math.min(index, maxSlide));
        setProgress(0);
    };

    useEffect(() => {
        if (isAutoPlay) {
            intervalRef.current = setInterval(() => {
                setProgress(prev => {
                    if (prev >= 100) {
                        nextSlide();
                        return 0;
                    }
                    return prev + 2.5; // 4 second intervals
                });
            }, 100);
        }

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isAutoPlay, currentSlide]);

    return (
        <section id='PremiumInteractiveSlider' className="relative py-20 overflow-hidden w-full" style={{ background: 'linear-gradient(170deg, #F8FAFB 0%, white 50%, #F8FAFB 100%)' }}>
            {/* Geometric pattern overlay */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 20% 50%, #34969D 2px, transparent 2px), radial-gradient(circle at 80% 50%, #CBDC13 2px, transparent 2px)`,
                    backgroundSize: '100px 100px'
                }}></div>
            </div>

            <div className="relative z-10 max-w-[1450px] mx-auto px-4 md:px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#012D50' }}>
                        Highly Skilled Team for
                        <span className="block" style={{ color: '#34969D' }}>Business Expansions</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Right recruitment means matching the right talent with the team to work efficiently and deliver actionable results.
                        RPO is taking forward more from reactive hiring to strategic talent-pool acquisition to build success.
                    </p>

                    {/* Progress bar */}
                    <div className="w-32 h-2 mx-auto mt-8 rounded-full overflow-hidden" style={{ backgroundColor: '#e5e7eb' }}>
                        <div
                            className="h-full rounded-full transition-all duration-100"
                            style={{
                                width: `${progress}%`,
                                backgroundColor: '#CBDC13'
                            }}
                        ></div>
                    </div>
                </div>

                {/* Slider Container */}
                <div
                    className="relative"
                    onMouseEnter={() => setIsAutoPlay(false)}
                    onMouseLeave={() => setIsAutoPlay(true)}
                >
                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                        style={{
                            backgroundColor: '#34969D',
                            boxShadow: '0 10px 30px rgba(52, 150, 157, 0.3)'
                        }}
                    >
                        <FaArrowLeft className="text-white" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                        style={{
                            backgroundColor: '#34969D',
                            boxShadow: '0 10px 30px rgba(52, 150, 157, 0.3)'
                        }}
                    >
                        <FaArrowRight className="text-white" />
                    </button>

                    {/* Cards Container */}
                    <div className="sm:mx-16">
                        <div
                            className="w-fit flex transition-transform duration-500 ease-out"
                            style={{
                                transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`
                            }}
                        >
                            {skillCards.map((card, index) => {
                                const IconComponent = card.icon;
                                return (
                                    <div
                                        key={index}
                                        className="min-w-[375px] lg:flex-shrink-0 px-4"
                                        style={{ width: `${100 / slidesToShow}%` }}
                                    >
                                        <div
                                            className="service-card group relative overflow-hidden rounded-3xl p-8 md:p-10 transition-all duration-500 hover:-translate-y-3 hover:scale-105 cursor-pointer"
                                            style={{
                                                backgroundColor: card.bgColor,
                                                border: `2px solid ${card.accentColor}`,
                                                boxShadow: '0 10px 30px rgba(1, 45, 80, 0.1)'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.borderColor = '#CBDC13';
                                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(1, 45, 80, 0.3)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.borderColor = card.accentColor;
                                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(1, 45, 80, 0.1)';
                                            }}
                                        >
                                            {/* Accent decoration */}
                                            <div
                                                className="absolute top-0 right-0 w-20 h-20 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                                                style={{
                                                    background: `linear-gradient(135deg, ${card.accentColor}, #CBDC13)`,
                                                    transform: 'translate(50%, -50%)'
                                                }}
                                            ></div>

                                            {/* Icon */}
                                            <div
                                                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                                                style={{ backgroundColor: card.accentColor }}
                                            >
                                                <IconComponent className="text-white text-2xl" />
                                            </div>

                                            {/* Content */}
                                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-opacity-90 transition-all duration-300">
                                                {card.title}
                                            </h3>

                                            <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                                                {card.description}
                                            </p>

                                            {/* Highlights */}
                                            <div className="space-y-2 mb-6">
                                                {card.highlights.map((highlight, idx) => (
                                                    <div key={idx} className="flex items-center text-sm">
                                                        <div
                                                            className="w-2 h-2 rounded-full mr-3"
                                                            style={{ backgroundColor: card.accentColor }}
                                                        ></div>
                                                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                                                            {highlight}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* CTA Button */}
                                            <button
                                                className="w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                                                style={{
                                                    background: `linear-gradient(135deg, ${card.accentColor}, #CBDC13)`,
                                                    color: '#012D50'
                                                }}
                                            >
                                                {card.ctaText}
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex justify-center gap-3 mt-8">
                        {Array.from({ length: maxSlide + 1 }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                    ? 'w-8 scale-110'
                                    : 'hover:scale-110'
                                    }`}
                                style={{
                                    backgroundColor: index === currentSlide ? '#CBDC13' : '#34969D'
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PremiumInteractiveSlider;