"use client"
import { HRsolutions } from "@/staticData";
import { useState } from "react";
import { FaArrowRight, FaMoneyBillWave } from "react-icons/fa";

// --------------------------------------------------------------

// 3. HR Solutions Section - Bento Grid Layout
// --------------------------------------------------------------
const HRSolutionsSection = () => {
    const [hoveredSolution, setHoveredSolution] = useState<number | null>(null);

    return (
        <div className="w-full bg-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#113F64', fontFamily: 'Lato' }}>
                        Our HR Outsourcing
                        <span className="block text-[#34969E]">Solutions</span>
                    </h2>
                    <p className="text-xl lg:text-2xl text-gray-600 max-w-6xl mx-auto leading-relaxed" style={{ fontFamily: 'Raleway' }}>
                        Protingent India offers end-to-end HR outsourcing services, combining compliance expertise, digital tools,
                        and experienced professionals to streamline workforce management and empower organizations to focus on strategic growth.
                    </p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 auto-rows-fr">
                    {/* Large Featured Card - Payroll Management */}
                    <div
                        className="md:col-span-4 lg:col-span-4 group relative overflow-hidden rounded-3xl transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-2 min-h-[400px]"
                        onMouseEnter={() => setHoveredSolution(0)}
                        onMouseLeave={() => setHoveredSolution(null)}
                    >
                        <div
                            className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                            style={{
                                backgroundImage: `url('${HRsolutions[0].image}')`,
                            }}
                        ></div>
                        <div className={`absolute inset-0 bg-gradient-to-br from-[#113F64]/85 via-[${HRsolutions[0].color}]/75 to-[#113F64]/90`}>
                            <div className="absolute inset-0 opacity-20">
                                <div
                                    className="w-full h-full"
                                    style={{
                                        backgroundImage: `repeating-linear-gradient(45deg, ${HRsolutions[0].color}40 0px, ${HRsolutions[0].color}40 3px, transparent 3px, transparent 30px)`,
                                    }}
                                ></div>
                            </div>
                        </div>

                        <div className="relative z-10 p-8 lg:p-12 h-full text-white flex flex-col justify-between">
                            <div>
                                <div
                                    className="w-24 h-24 rounded-2xl flex items-center justify-center text-4xl mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-xl"
                                    style={{ backgroundColor: HRsolutions[0].color }}
                                >
                                    <FaMoneyBillWave className="text-[#113F64]" />
                                </div>

                                <h3 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Lato' }}>
                                    {HRsolutions[0].title}
                                </h3>
                                <p className="text-white/90 leading-relaxed text-xl mb-6" style={{ fontFamily: 'Raleway' }}>
                                    {HRsolutions[0].description}
                                </p>
                            </div>

                            <div className="flex items-center gap-4 font-semibold text-lg" style={{ color: HRsolutions[0].color }}>
                                <span>Explore Payroll Solutions</span>
                                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
                            </div>
                        </div>
                    </div>

                    {/* Medium Cards - Compliance & RPO */}
                    {HRsolutions.slice(1, 3).map((solution, index) => {
                        const actualIndex = index + 1;
                        const IconComponent = solution.icon;
                        return (
                            <div
                                key={actualIndex}
                                className="md:col-span-4 lg:col-span-2 group relative overflow-hidden rounded-3xl transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-2 min-h-[350px]"
                                style={{ animationDelay: `${actualIndex * 0.1}s` }}
                                onMouseEnter={() => setHoveredSolution(actualIndex)}
                                onMouseLeave={() => setHoveredSolution(null)}
                            >
                                <div
                                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    style={{
                                        backgroundImage: `url('${solution.image}')`,
                                    }}
                                ></div>
                                <div className={`absolute inset-0 bg-gradient-to-br from-[#113F64]/85 via-[${solution.color}]/75 to-[#113F64]/90`}>
                                    <div className="absolute inset-0 opacity-15">
                                        <div
                                            className="w-full h-full"
                                            style={{
                                                backgroundImage: `radial-gradient(circle at 30% 30%, ${solution.color}30 2px, transparent 2px), radial-gradient(circle at 70% 70%, #113F6430 3px, transparent 3px)`,
                                                backgroundSize: '50px 50px, 70px 70px'
                                            }}
                                        ></div>
                                    </div>
                                </div>

                                <div className="relative z-10 p-6 h-full text-white flex flex-col justify-between">
                                    <div>
                                        <div
                                            className="w-18 h-18 rounded-2xl flex items-center justify-center text-2xl mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-xl"
                                            style={{ backgroundColor: solution.color }}
                                        >
                                            <IconComponent className="text-[#113F64]" />
                                        </div>

                                        <h3 className="text-xl lg:text-2xl font-bold mb-4 leading-tight" style={{ fontFamily: 'Lato' }}>
                                            {solution.title}
                                        </h3>
                                        <p className="text-white/90 leading-relaxed text-base" style={{ fontFamily: 'Raleway' }}>
                                            {solution.description}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-2 font-semibold text-sm mt-4" style={{ color: solution.color }}>
                                        <span>Learn More</span>
                                        <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                    {/* Small Cards - Remaining Services */}
                    {HRsolutions.slice(3).map((solution, index) => {
                        const actualIndex = index + 3;
                        const IconComponent = solution.icon;
                        return (
                            <div
                                key={actualIndex}
                                className="md:col-span-2 lg:col-span-2 group relative overflow-hidden rounded-3xl transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-2 min-h-[280px]"
                                style={{ animationDelay: `${actualIndex * 0.1}s` }}
                                onMouseEnter={() => setHoveredSolution(actualIndex)}
                                onMouseLeave={() => setHoveredSolution(null)}
                            >
                                <div
                                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    style={{
                                        backgroundImage: `url('${solution.image}')`,
                                    }}
                                ></div>
                                <div className={`absolute inset-0 bg-gradient-to-br from-[#113F64]/85 via-[${solution.color}]/75 to-[#113F64]/90`}>
                                    <div className="absolute inset-0 opacity-10">
                                        <div
                                            className="w-full h-full"
                                            style={{
                                                backgroundImage: `linear-gradient(45deg, ${solution.color}20 25%, transparent 25%), linear-gradient(-45deg, ${solution.color}20 25%, transparent 25%)`,
                                                backgroundSize: '30px 30px'
                                            }}
                                        ></div>
                                    </div>
                                </div>

                                <div className="relative z-10 p-6 h-full text-white flex flex-col justify-between">
                                    <div>
                                        <div
                                            className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-xl"
                                            style={{ backgroundColor: solution.color }}
                                        >
                                            <IconComponent className="text-[#113F64]" />
                                        </div>

                                        <h3 className="text-lg font-bold mb-3 leading-tight" style={{ fontFamily: 'Lato' }}>
                                            {solution.title}
                                        </h3>
                                        <p className="text-white/90 leading-relaxed text-sm" style={{ fontFamily: 'Raleway' }}>
                                            {solution.description}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-2 font-semibold text-xs mt-4" style={{ color: solution.color }}>
                                        <span>Explore</span>
                                        <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* CTA Button */}
                <div className="text-center mt-16">
                    <button className="group relative overflow-hidden px-12 py-4 bg-[#34969E] text-white font-bold text-lg rounded-2xl hover:scale-105 transform transition-all shadow-2xl">
                        <span className="relative z-10 flex items-center gap-3">
                            Explore All HR Solutions
                            <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                        </span>
                        <div className="absolute inset-0 bg-[#C2D92C] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HRSolutionsSection;