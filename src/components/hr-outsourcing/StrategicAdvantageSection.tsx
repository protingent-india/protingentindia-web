"use client"
import { stats } from "@/staticData";
import { useEffect, useRef, useState } from "react";
import AnimatedCounter from "./AnimatedCounter";

// --------------------------------------------------------------

// 2. Strategic Advantage Section - Statistics with Animated Counters
// --------------------------------------------------------------
const StrategicAdvantageSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

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
        <div ref={sectionRef} className="relative w-full py-16 md:py-24 bg-white overflow-hidden">
            {/* Subtle geometric pattern background */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `repeating-linear-gradient(45deg, #C2D92C40 0px, #C2D92C40 2px, transparent 2px, transparent 40px), repeating-linear-gradient(-45deg, #34969E40 0px, #34969E40 2px, transparent 2px, transparent 40px)`,
                    }}
                ></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#113F64', fontFamily: 'Lato' }}>
                        HR Outsourcing is a
                        <span className="block text-[#34969E]">Strategic Advantage</span>
                    </h2>
                    <p className="text-xl lg:text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed" style={{ fontFamily: 'Raleway' }}>
                        HR Outsourcing is your organizational growth enabler. By partnering with experts like Protingent,
                        businesses reduce risks, save resources, and gain measurable improvements in efficiency and compliance.
                    </p>
                </div>

                {/* Statistics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => {
                        const IconComponent = stat.icon;
                        return (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-3xl transition-all duration-500 cursor-pointer shadow-xl hover:shadow-2xl hover:-translate-y-4"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Background Image */}
                                <div
                                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    style={{
                                        backgroundImage: `url('${stat.image}')`,
                                    }}
                                ></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-[#113F64]/90 via-[#34969E]/80 to-[#113F64]/95"></div>

                                <div className="relative z-10 p-8 h-full text-white min-h-[300px] flex flex-col justify-between">
                                    {/* Icon */}
                                    <div className="mb-6">
                                        <div
                                            className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-xl"
                                            style={{ backgroundColor: '#C2D92C' }}
                                        >
                                            <IconComponent className="text-[#113F64]" />
                                        </div>
                                    </div>

                                    {/* Animated Counter */}
                                    <div className="text-center">
                                        <div className="text-5xl font-bold mb-2 text-[#C2D92C]" style={{ fontFamily: 'Lato' }}>
                                            {isVisible ? (
                                                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                                            ) : (
                                                `0${stat.suffix}`
                                            )}
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Lato' }}>
                                            {stat.title}
                                        </h3>
                                        <p className="text-white/90 leading-relaxed" style={{ fontFamily: 'Raleway' }}>
                                            {stat.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default StrategicAdvantageSection;