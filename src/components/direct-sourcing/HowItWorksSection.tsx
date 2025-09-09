"use client"
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { HowItWorksSectionData } from "@/staticData";

// --------------------------------------------------------------
// 5. How It Works (SPD Tech Style) - Bento Grid Layout
// --------------------------------------------------------------
const HowItWorksSection = () => {
    const [activeCard, setActiveCard] = useState<number | null>(null);

    return (
        <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#113F64' }}>
                        How Protingent's Direct
                        <span className="block text-[#34969E]">Talent Sourcing Works?</span>
                    </h2>
                    <p className="text-xl lg:text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
                        We've simplified workforce sourcing into a structured yet flexible process that gives you full visibility at every step.
                        Our direct sourcing service company helps businesses move from open roles to onboarded talent without the inefficiencies of traditional staffing.
                    </p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 auto-rows-fr">
                    {/* Top Row: 2 Large Cards */}
                    {HowItWorksSectionData.slice(0, 2).map((step, index) => {
                        const IconComponent = step.icon;
                        return (
                            <div
                                key={index}
                                className="md:col-span-2 lg:col-span-3 group relative overflow-hidden rounded-3xl transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-2 bg-white min-h-[400px]"
                                style={{ animationDelay: `${index * 0.1}s` }}
                                onMouseEnter={() => setActiveCard(index)}
                                onMouseLeave={() => setActiveCard(null)}
                            >
                                {/* Professional Human Image Background */}
                                <div
                                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    style={{
                                        backgroundImage: `url('${step.image}')`,
                                    }}
                                ></div>

                                {/* Abstract Geometric Overlay with Brand Colors */}
                                <div className={`absolute inset-0 bg-gradient-to-br from-[#113F64]/85 via-[${step.color}]/75 to-[#113F64]/90`}>
                                    {/* Geometric Pattern Overlay */}
                                    <div className="absolute inset-0 opacity-20">
                                        <div
                                            className="w-full h-full"
                                            style={{
                                                backgroundImage: `radial-gradient(circle at 25% 25%, ${step.color}40 2px, transparent 2px), radial-gradient(circle at 75% 75%, #113F6440 3px, transparent 3px)`,
                                                backgroundSize: '60px 60px, 80px 80px'
                                            }}
                                        ></div>
                                    </div>
                                </div>

                                <div className="relative z-10 p-8 h-full flex flex-col justify-between text-white">
                                    {/* Step number and icon */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div
                                            className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                                            style={{ backgroundColor: step.color }}
                                        >
                                            <IconComponent className="text-[#113F64]" />
                                        </div>
                                        <div
                                            className="text-5xl font-bold opacity-30"
                                            style={{ color: step.color }}
                                        >
                                            {String(index + 1).padStart(2, '0')}
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-3xl font-bold mb-4 leading-tight">
                                            {step.title}
                                        </h3>
                                        <p className="text-white/90 leading-relaxed text-lg mb-6">
                                            {step.description}
                                        </p>

                                        {/* Expand indicator */}
                                        <div className={`flex items-center gap-3 text-lg font-semibold transition-all duration-300 ${activeCard === index
                                            ? 'opacity-100 gap-4'
                                            : 'opacity-70'
                                            }`} style={{ color: step.color }}>
                                            <span>Explore Process</span>
                                            <FaArrowRight />
                                        </div>
                                    </div>
                                </div>

                                {/* Accent border */}
                                <div
                                    className="absolute bottom-0 left-0 w-full h-2 transition-all duration-500 group-hover:h-3"
                                    style={{ backgroundColor: step.color }}
                                ></div>
                            </div>
                        );
                    })}

                    {/* Bottom Row: 3 Smaller Cards */}
                    {HowItWorksSectionData.slice(2).map((step, index) => {
                        const actualIndex = index + 2;
                        const IconComponent = step.icon;
                        return (
                            <div
                                key={actualIndex}
                                className="md:col-span-4 lg:col-span-2 group relative overflow-hidden rounded-3xl transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-2 bg-white min-h-[320px]"
                                style={{ animationDelay: `${actualIndex * 0.1}s` }}
                                onMouseEnter={() => setActiveCard(actualIndex)}
                                onMouseLeave={() => setActiveCard(null)}
                            >
                                {/* Professional Human Image Background */}
                                <div
                                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    style={{
                                        backgroundImage: `url('${step.image}')`,
                                    }}
                                ></div>

                                {/* Abstract Geometric Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br from-[#113F64]/85 via-[${step.color}]/75 to-[#113F64]/90`}>
                                    {/* Subtle geometric pattern */}
                                    <div className="absolute inset-0 opacity-15">
                                        <div
                                            className="w-full h-full"
                                            style={{
                                                backgroundImage: `linear-gradient(45deg, ${step.color}20 25%, transparent 25%), linear-gradient(-45deg, ${step.color}20 25%, transparent 25%)`,
                                                backgroundSize: '40px 40px'
                                            }}
                                        ></div>
                                    </div>
                                </div>

                                <div className="relative z-10 p-6 h-full flex flex-col justify-between text-white">
                                    {/* Step number and icon */}
                                    <div className="flex items-center justify-between mb-4">
                                        <div
                                            className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                                            style={{ backgroundColor: step.color }}
                                        >
                                            <IconComponent className="text-[#113F64]" />
                                        </div>
                                        <div
                                            className="text-4xl font-bold opacity-30"
                                            style={{ color: step.color }}
                                        >
                                            {String(actualIndex + 1).padStart(2, '0')}
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold mb-3 leading-tight">
                                            {step.title}
                                        </h3>
                                        <p className="text-white/90 leading-relaxed text-base mb-4">
                                            {step.description}
                                        </p>

                                        {/* Expand indicator */}
                                        <div className={`flex items-center gap-2 text-sm font-semibold transition-all duration-300 ${activeCard === actualIndex
                                            ? 'opacity-100 gap-3'
                                            : 'opacity-70'
                                            }`} style={{ color: step.color }}>
                                            <span>Learn More</span>
                                            <FaArrowRight />
                                        </div>
                                    </div>
                                </div>

                                {/* Accent border */}
                                <div
                                    className="absolute bottom-0 left-0 w-full h-2 transition-all duration-500 group-hover:h-3"
                                    style={{ backgroundColor: step.color }}
                                ></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default HowItWorksSection;