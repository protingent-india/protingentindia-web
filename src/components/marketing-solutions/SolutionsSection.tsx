"use client"
// --------------------------------------------------------------
// Solutions Section with Mandatory Background Images on Cards

import { MarketingSolutions } from "@/staticData";
import { FaArrowRight } from "react-icons/fa";

// --------------------------------------------------------------
const SolutionsSection = () => {
    return (
        <div className="w-full bg-white py-16 md:py-24">
            <div className="max-w-[1450px] mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#113F64' }}>
                        End-to-End Marketing Solutions
                        <span className="block text-[#34969E]">That Help You Scale</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                        Tap into insightful marketing services designed on strategies, creative, and BI analytics basis to make every campaign work on a measurable scale.
                        Protingent India curates impactful solutions that fit and align with business goals.
                    </p>
                </div>

                {/* Asymmetric grid with image-rich cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {MarketingSolutions.map((solution, index) => {
                        const IconComponent = solution.icon;
                        return (
                            <div
                                key={index}
                                className={`group relative overflow-hidden rounded-3xl transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-2 ${index === 0 ? 'lg:col-span-2' : ''
                                    }`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* MANDATORY: Full background image for each card */}
                                <div
                                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    style={{
                                        backgroundImage: `url('${solution.image}')`,
                                    }}
                                ></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-[#113F64]/95 via-[#34969E]/85 to-[#113F64]/95"></div>

                                <div className="relative z-10 p-8 lg:p-12 h-full text-white min-h-[300px] flex flex-col justify-between">
                                    <div>
                                        {/* Icon */}
                                        <div className="mb-6">
                                            <div
                                                className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-xl"
                                                style={{ backgroundColor: '#C2D92C' }}
                                            >
                                                <IconComponent className="text-[#113F64]" />
                                            </div>
                                        </div>

                                        <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                                            {solution.title}
                                        </h3>
                                        <p className="text-white/90 leading-relaxed mb-6 text-lg">
                                            {solution.description}
                                        </p>
                                    </div>

                                    {/* Features */}
                                    <div>
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {solution.features.map((feature, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm border border-white/30"
                                                >
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Learn More button */}
                                        <button className="flex items-center gap-2 text-[#C2D92C] font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 hover:gap-3">
                                            <span>Learn More</span>
                                            <FaArrowRight className="text-sm" />
                                        </button>
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

export default SolutionsSection;