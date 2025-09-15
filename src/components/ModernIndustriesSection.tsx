"use client"
import React, { useState, useEffect, useRef } from 'react';
import { 
    FaRocket, 
    FaHospital, 
    FaCogs, 
    FaBuilding, 
    FaBolt, 
    FaChartLine, 
    FaLaptopCode, 
    FaWifi, 
    FaIndustry, 
    FaFlask, 
    FaHeartbeat 
} from 'react-icons/fa';

// Icon mapping for dynamic rendering
const iconMap = {
    FaRocket,
    FaHospital,
    FaCogs,
    FaBuilding,
    FaBolt,
    FaChartLine,
    FaLaptopCode,
    FaWifi,
    FaIndustry,
    FaFlask,
    FaHeartbeat
};

interface IndustryData {
    title: string;
    icon: string;
    alt: string;
}

interface ModernIndustriesSectionProps {
    title: string;
    desc: string;
    cardData: IndustryData[];
}

const ModernIndustriesSection: React.FC<ModernIndustriesSectionProps> = ({
    title,
    desc,
    cardData
}) => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(cardData.length).fill(false));
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.getAttribute('data-index') || '0');
                        setVisibleCards(prev => {
                            const newState = [...prev];
                            newState[index] = true;
                            return newState;
                        });
                    }
                });
            },
            { threshold: 0.2 }
        );

        const cardElements = sectionRef.current?.querySelectorAll('.industry-card');
        cardElements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="w-full py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#012D50' }}>
                        {title}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        {desc}
                    </p>
                </div>

                {/* Industries Grid */}
                <div ref={sectionRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
                    {cardData.map((industry, index) => {
                        const IconComponent = iconMap[industry.icon as keyof typeof iconMap];
                        
                        return (
                            <div
                                key={index}
                                data-index={index}
                                className={`industry-card group relative overflow-hidden rounded-2xl transition-all duration-500 cursor-pointer bg-white shadow-lg hover:shadow-2xl hover:-translate-y-3 hover:scale-105 border-2 border-transparent hover:border-white ${
                                    visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                                style={{ 
                                    animationDelay: `${index * 0.1}s`,
                                    transitionDelay: `${index * 0.1}s`
                                }}
                                onMouseEnter={() => setHoveredCard(index)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                {/* Background Gradient - Animated */}
                                <div 
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
                                    style={{
                                        background: 'linear-gradient(135deg, #34969D 0%, #012D50 100%)'
                                    }}
                                ></div>
                                
                                {/* Content */}
                                <div className="relative z-10 p-6 md:p-8 text-center">
                                    {/* Icon Container */}
                                    <div className="mb-6">
                                        <div 
                                            className={`w-16 h-16 md:w-20 md:h-20 mx-auto rounded-2xl flex items-center justify-center text-3xl md:text-4xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${
                                                hoveredCard === index ? 'shadow-2xl' : 'shadow-lg'
                                            }`}
                                            style={{
                                                background: hoveredCard === index 
                                                    ? 'linear-gradient(135deg, #CBDC13, #34969D)' 
                                                    : 'linear-gradient(135deg, #34969D, #012D50)',
                                                boxShadow: hoveredCard === index 
                                                    ? '0 15px 40px rgba(203, 220, 19, 0.4)' 
                                                    : '0 10px 30px rgba(52, 150, 157, 0.3)'
                                            }}
                                        >
                                            {IconComponent && (
                                                <IconComponent className="text-white transition-transform duration-300" />
                                            )}
                                        </div>
                                    </div>
                                    
                                    {/* Title */}
                                    <h3 
                                        className="text-lg md:text-xl font-bold transition-colors duration-300 group-hover:text-white leading-tight"
                                        style={{ 
                                            color: hoveredCard === index ? 'white' : '#012D50'
                                        }}
                                    >
                                        {industry.title}
                                    </h3>
                                    
                                    {/* Accessibility - Screen reader only */}
                                    <span className="sr-only">{industry.alt}</span>
                                    
                                    {/* Hover indicator */}
                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#34969D] to-[#CBDC13] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                
                                {/* Decorative elements */}
                                <div className="absolute top-4 right-4 w-8 h-8 border-2 border-[#34969D]/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-180"></div>
                                <div className="absolute bottom-4 left-4 w-6 h-6 bg-[#CBDC13]/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-150"></div>
                            </div>
                        );
                    })}
                </div>
                
                {/* Bottom accent line */}
                <div className="mt-16 w-32 h-1 mx-auto rounded-full bg-gradient-to-r from-[#34969D] to-[#CBDC13]"></div>
            </div>
            
            {/* Custom CSS for enhanced animations */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                
                .industry-card:hover {
                    animation: float 2s ease-in-out infinite;
                }
                
                @media (max-width: 640px) {
                    .grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
                
                @media (max-width: 480px) {
                    .grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </section>
    );
};

export default ModernIndustriesSection;