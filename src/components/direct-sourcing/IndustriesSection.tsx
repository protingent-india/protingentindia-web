"use client"
import { DirectSourcingindustries } from "@/staticData";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight, FaEye } from "react-icons/fa";

// --------------------------------------------------------------
// 7. Industries Section (Visual Cards) - Bento Grid Layout
// --------------------------------------------------------------
const IndustriesSection = () => {
    const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);

    return (
        <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#113F64' }}>
                        Specialized Workforce Solutions for
                        <span className="block text-[#34969E]">Every Industry We Power</span>
                    </h2>
                    <p className="text-xl lg:text-2xl text-gray-600 max-w-6xl mx-auto leading-relaxed">
                        Protingent India's strength lies in understanding the unique workforce challenges of technology-driven businesses.
                        We curate industry-specific talent pools that deliver engineers, developers, and analysts who are project-ready from day one.
                    </p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 auto-rows-fr">
                    {/* Top Row: 2 Large Cards */}
                    {DirectSourcingindustries.slice(0, 2).map((industry, index) => {
                        const IconComponent = industry.icon;
                        const isHovered = hoveredIndustry === index;

                        return (
                            <div
                                key={index}
                                className={`md:col-span-2 lg:col-span-3 group relative overflow-hidden rounded-3xl transition-all duration-700 cursor-pointer shadow-lg hover:shadow-2xl min-h-[450px] ${isHovered ? 'scale-105 z-10' : 'hover:scale-102'
                                    }`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                                onMouseEnter={() => setHoveredIndustry(index)}
                                onMouseLeave={() => setHoveredIndustry(null)}
                            >
                                {/* Professional Human Image Background */}
                                <div
                                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{
                                        backgroundImage: `url('${industry.image}')`,
                                    }}
                                ></div>

                                {/* Abstract Geometric Overlay with Brand Colors */}
                                <div className={`absolute inset-0 bg-gradient-to-br from-[#113F64]/85 via-[${industry.color}]/75 to-[#113F64]/90`}>
                                    {/* Geometric Pattern Overlay */}
                                    <div className="absolute inset-0 opacity-20">
                                        <div
                                            className="w-full h-full"
                                            style={{
                                                backgroundImage: `repeating-linear-gradient(45deg, ${industry.color}40 0px, ${industry.color}40 2px, transparent 2px, transparent 20px)`,
                                            }}
                                        ></div>
                                    </div>
                                </div>

                                {/* Content with smooth expansion */}
                                <div className={`relative z-10 p-8 h-full text-white transition-all duration-700 flex flex-col justify-between`}>
                                    {/* Icon and Title */}
                                    <div>
                                        <div
                                            className="w-24 h-24 rounded-2xl flex items-center justify-center text-4xl mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-xl"
                                            style={{ backgroundColor: industry.color }}
                                        >
                                            <IconComponent className="text-[#113F64]" />
                                        </div>

                                        <h3 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                                            {industry.title}
                                        </h3>
                                    </div>

                                    {/* Description - Always visible on large cards */}
                                    <div className="transition-all duration-700">
                                        <p className="text-white/90 leading-relaxed text-xl mb-6">
                                            {industry.description}
                                        </p>

                                        <div className="flex items-center gap-4 font-semibold text-lg" style={{ color: industry.color }}>
                                            <span>Explore Solutions</span>
                                            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
                                        </div>
                                    </div>
                                </div>

                                {/* Accent border */}
                                <div
                                    className="absolute bottom-0 left-0 w-full h-3 transition-all duration-500 group-hover:h-4"
                                    style={{ backgroundColor: industry.color }}
                                ></div>
                            </div>
                        );
                    })}

                    {/* Bottom Row: 3 Smaller Cards */}
                    {DirectSourcingindustries.slice(2).map((industry, index) => {
                        const actualIndex = index + 2;
                        const IconComponent = industry.icon;
                        const isHovered = hoveredIndustry === actualIndex;

                        return (
                            <div
                                key={actualIndex}
                                className={`md:col-span-4 lg:col-span-2 group relative overflow-hidden rounded-3xl transition-all duration-700 cursor-pointer shadow-lg hover:shadow-2xl min-h-[350px] ${isHovered ? 'scale-105 z-10' : 'hover:scale-102'
                                    }`}
                                style={{ animationDelay: `${actualIndex * 0.1}s` }}
                                onMouseEnter={() => setHoveredIndustry(actualIndex)}
                                onMouseLeave={() => setHoveredIndustry(null)}
                            >
                                {/* Professional Human Image Background */}
                                <div
                                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{
                                        backgroundImage: `url('${industry.image}')`,
                                    }}
                                ></div>

                                {/* Abstract Geometric Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br from-[#113F64]/85 via-[${industry.color}]/75 to-[#113F64]/90`}>
                                    {/* Subtle geometric pattern */}
                                    <div className="absolute inset-0 opacity-15">
                                        <div
                                            className="w-full h-full"
                                            style={{
                                                backgroundImage: `radial-gradient(circle at 30% 30%, ${industry.color}30 2px, transparent 2px), radial-gradient(circle at 70% 70%, #113F6430 3px, transparent 3px)`,
                                                backgroundSize: '50px 50px, 70px 70px'
                                            }}
                                        ></div>
                                    </div>
                                </div>

                                {/* Content with smooth expansion */}
                                <div className={`relative z-10 p-6 h-full text-white transition-all duration-700 flex flex-col justify-between`}>
                                    {/* Icon and Title */}
                                    <div>
                                        <div
                                            className="w-18 h-18 rounded-2xl flex items-center justify-center text-2xl mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-xl"
                                            style={{ backgroundColor: industry.color }}
                                        >
                                            <IconComponent className="text-[#113F64]" />
                                        </div>

                                        <h3 className="text-xl lg:text-2xl font-bold mb-4 leading-tight">
                                            {industry.title}
                                        </h3>
                                    </div>

                                    {/* Description with hover reveal */}
                                    <div className={`transition-all duration-700 overflow-hidden ${isHovered ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                        }`}>
                                        <p className="text-white/90 leading-relaxed text-base mb-4">
                                            {industry.description}
                                        </p>

                                        <div className="flex items-center gap-2 font-semibold text-sm" style={{ color: industry.color }}>
                                            <span>Explore Solutions</span>
                                            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                                        </div>
                                    </div>

                                    {/* Show/Hide indicator for smaller cards */}
                                    <div className={`flex items-center gap-2 font-semibold text-sm transition-all duration-300 ${isHovered ? 'opacity-0' : 'opacity-70'
                                        }`} style={{ color: industry.color }}>
                                        <span>Hover to explore</span>
                                        <FaEye />
                                    </div>
                                </div>

                                {/* Accent border */}
                                <div
                                    className="absolute bottom-0 left-0 w-full h-2 transition-all duration-500 group-hover:h-3"
                                    style={{ backgroundColor: industry.color }}
                                ></div>
                            </div>
                        );
                    })}
                </div>

                {/* Call to Action Button */}
                <div className="text-center mt-16">
                    <Link href={"/contact"} className="cursor-pointer" >
                        <button className="group relative overflow-hidden px-12 py-4 bg-[#34969E] text-white font-bold text-lg rounded-2xl hover:scale-105 transform transition-all shadow-2xl">
                            <span className="relative z-10 flex items-center gap-3">
                                Discover Industry Solutions
                                <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                            </span>
                            <div className="absolute inset-0 bg-[#C2D92C] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default IndustriesSection;