"use client"

// --------------------------------------------------------------
// 5. Business Efficiency Section - Bento Grid Benefits

import { FaArrowRight } from "react-icons/fa";
import { HRbenefits } from "@/staticData";

// --------------------------------------------------------------
const BusinessEfficiencySection = () => {
    return (
        <div className="w-full bg-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#113F64', fontFamily: 'Lato' }}>
                        How HR Outsourcing Boosts
                        <span className="block text-[#34969E]">Business Efficiency</span>
                    </h2>
                    <p className="text-xl lg:text-2xl text-gray-600 max-w-6xl mx-auto leading-relaxed" style={{ fontFamily: 'Raleway' }}>
                        By outsourcing HR functions to Protingent, organizations gain freedom from administrative complexities,
                        enabling them to focus on scaling operations, driving innovation, and building stronger, future-ready teams.
                    </p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 auto-rows-fr">
                    {/* Top Row: 2 Large Cards */}
                    {HRbenefits.slice(0, 2).map((benefit, index) => {
                        const IconComponent = benefit.icon;
                        return (
                            <div
                                key={index}
                                className="md:col-span-2 lg:col-span-3 group relative overflow-hidden rounded-3xl transition-all duration-700 cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 min-h-[400px]"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Professional Human Image Background */}
                                <div
                                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{
                                        backgroundImage: `url('${benefit.image}')`,
                                    }}
                                ></div>

                                {/* Abstract Geometric Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br from-[#113F64]/85 via-[${benefit.color}]/75 to-[#113F64]/90`}>
                                    <div className="absolute inset-0 opacity-20">
                                        <div
                                            className="w-full h-full"
                                            style={{
                                                backgroundImage: `repeating-linear-gradient(45deg, ${benefit.color}40 0px, ${benefit.color}40 2px, transparent 2px, transparent 40px)`,
                                            }}
                                        ></div>
                                    </div>
                                </div>

                                <div className="relative z-10 p-8 lg:p-12 h-full text-white flex flex-col justify-between">
                                    <div>
                                        <div
                                            className="w-24 h-24 rounded-2xl flex items-center justify-center text-4xl mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-xl"
                                            style={{ backgroundColor: benefit.color }}
                                        >
                                            <IconComponent className="text-[#113F64]" />
                                        </div>

                                        <h3 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Lato' }}>
                                            {benefit.title}
                                        </h3>
                                        <p className="text-white/90 leading-relaxed text-xl" style={{ fontFamily: 'Raleway' }}>
                                            {benefit.description}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-4 font-semibold text-lg" style={{ color: benefit.color }}>
                                        <span>Learn More</span>
                                        <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                    {/* Bottom Row: 3 Medium Cards */}
                    {HRbenefits.slice(2).map((benefit, index) => {
                        const actualIndex = index + 2;
                        const IconComponent = benefit.icon;
                        return (
                            <div
                                key={actualIndex}
                                className="md:col-span-4 lg:col-span-2 group relative overflow-hidden rounded-3xl transition-all duration-700 cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 min-h-[350px]"
                                style={{ animationDelay: `${actualIndex * 0.1}s` }}
                            >
                                {/* Professional Human Image Background */}
                                <div
                                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{
                                        backgroundImage: `url('${benefit.image}')`,
                                    }}
                                ></div>

                                {/* Abstract Geometric Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br from-[#113F64]/85 via-[${benefit.color}]/75 to-[#113F64]/90`}>
                                    <div className="absolute inset-0 opacity-15">
                                        <div
                                            className="w-full h-full"
                                            style={{
                                                backgroundImage: `radial-gradient(circle at 30% 30%, ${benefit.color}30 2px, transparent 2px), radial-gradient(circle at 70% 70%, #113F6430 3px, transparent 3px)`,
                                                backgroundSize: '50px 50px, 70px 70px'
                                            }}
                                        ></div>
                                    </div>
                                </div>

                                <div className="relative z-10 p-6 h-full text-white flex flex-col justify-between">
                                    <div>
                                        <div
                                            className="w-18 h-18 rounded-2xl flex items-center justify-center text-2xl mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-xl"
                                            style={{ backgroundColor: benefit.color }}
                                        >
                                            <IconComponent className="text-[#113F64]" />
                                        </div>

                                        <h3 className="text-xl lg:text-2xl font-bold mb-4 leading-tight" style={{ fontFamily: 'Lato' }}>
                                            {benefit.title}
                                        </h3>
                                        <p className="text-white/90 leading-relaxed text-base" style={{ fontFamily: 'Raleway' }}>
                                            {benefit.description}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-2 font-semibold text-sm mt-4" style={{ color: benefit.color }}>
                                        <span>Explore Benefits</span>
                                        <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
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

export default BusinessEfficiencySection;