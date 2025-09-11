"use client"
import { useEffect, useRef, useState } from "react";
import CommonHeading from "../ReusableComponents/commonHeading";
import {
    FaRocket,
    FaUsers,
    FaDollarSign,
    FaGraduationCap,
} from 'react-icons/fa';
import Divider from "../divider";

// -------------------------------------------------------------------------------

// Brand-Focused Benefits Section with Solid Icons
const BrandBenefitsSection = () => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    const benefits = [
        {
            icon: FaUsers,
            title: "Flexible hiring",
            description: "Adapt to changing business needs with scalable recruitment solutions",
            accentColor: "#34969D"
        },
        {
            icon: FaRocket,
            title: "Faster hires",
            description: "Reduce time-to-hire by 60% with our streamlined processes",
            accentColor: "#CBDC13"
        },
        {
            icon: FaGraduationCap,
            title: "Top talent",
            description: "Access pre-vetted candidates from our extensive talent network",
            accentColor: "#34969D"
        },
        {
            icon: FaDollarSign,
            title: "Cost control",
            description: "Lower recruitment costs while maintaining quality standards",
            accentColor: "#CBDC13"
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={sectionRef} className="w-full max-w-[1450px] flex flex-col items-center gap-8 md:gap-12 px-4 md:px-6">
            <div className={`text-primary flex flex-col items-center gap-4 w-full`} >
                <p className='text-2xl md:text-[28px] lap:!text-3xl 3xl:!text-4xl text-center font-bold' >
                    Recruitment Process Outsourcing (RPO) for Your Talent-Pool
                </p>
                <span className='text-center lg:text-center text-base md:text-[18px] lap:!text-xl max-w-[1060px] w-4/5 3xl:pb-8' >
                    Recruitment increases costs for businesses and consumes more time. It holds back growth, revenue, and innovation. Through professional RPO Services, you can outsource talent hiring responsibility to expert recruiters like Protingent who act as an extension of your in-house HR team.
                    We manage scouting, screening, and first-round interviews with pre-vetted candidates who are both culturally and skill fit for your organization. Speed up your hiring, cut costs, and build a strong, skillful workforce to meet your project’s deadlines with no stress.
                </span>
                <Divider />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full mt-8">
                {benefits.map((benefit, index) => {
                    const IconComponent = benefit.icon;
                    return (
                        <div
                            key={index}
                            className={`group relative overflow-hidden rounded-2xl transition-all duration-500 cursor-pointer bg-white border-2 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                            style={{
                                animationDelay: `${index * 0.1}s`,
                                borderColor: benefit.accentColor,
                                transitionDelay: `${index * 0.1}s`
                            }}
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            {/* Solid background card */}
                            <div className="p-6 md:p-8 h-full relative z-10">
                                {/* Solid Icon with brand colors */}
                                <div className="relative mb-6">
                                    <div
                                        className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                                        style={{
                                            backgroundColor: benefit.accentColor,
                                            boxShadow: hoveredCard === index ? `0 10px 30px ${benefit.accentColor}40` : 'none'
                                        }}
                                    >
                                        <IconComponent className="text-white" />
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl md:text-2xl font-bold mb-3 transition-colors duration-300" style={{ color: '#012D50' }}>
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                    {benefit.description}
                                </p>

                                {/* Accent line */}
                                <div
                                    className="absolute bottom-0 left-0 h-1 w-full transition-all duration-500 group-hover:h-2"
                                    style={{ backgroundColor: benefit.accentColor }}
                                ></div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default BrandBenefitsSection;