"use client"
// --------------------------------------------------------------
// Industries Section with Mandatory Unique Images per Card

import { marketingIndustries } from "@/staticData";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

// --------------------------------------------------------------
const IndustriesSection = () => {
    return (
        <div className="w-full bg-white py-16 md:py-24">
            <div className="max-w-[1450px] mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#113F64' }}>
                        We Market Every Business
                        <span className="block text-[#34969E]">Across Industries</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                        Every industry has its own challenges. What works for healthcare won't work for F&B, and what drives IT leads won't resonate in real estate.
                        Protingent India brings industry-specific expertise to ensure your campaigns connect with the right audience and deliver measurable results.
                    </p>
                </div>

                {/* Image-heavy card grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {marketingIndustries.map((industry, index) => {
                        const IconComponent = industry.icon;
                        return (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-3xl transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-2"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* MANDATORY: Each industry card requires a relevant abstract image */}
                                <div
                                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    style={{
                                        backgroundImage: `url('${industry.image}')`,
                                    }}
                                ></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-[#113F64]/90 via-transparent to-black/70"></div>

                                <div className="relative z-10 p-8 h-full text-white min-h-[280px] flex flex-col justify-between">
                                    <div>
                                        {/* Icon */}
                                        <div className="mb-6">
                                            <div
                                                className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg"
                                                style={{ backgroundColor: industry.accentColor }}
                                            >
                                                <IconComponent className="text-white" />
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-bold mb-4">
                                            {industry.title}
                                        </h3>
                                        <p className="text-white/90 leading-relaxed">
                                            {industry.description}
                                        </p>
                                    </div>

                                    {/* Image hover transitions */}
                                    <div className="flex items-center gap-2 text-sm font-semibold transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:gap-3" style={{ color: industry.accentColor }}>
                                        <span>Explore Solutions</span>
                                        <FaArrowRight className="text-xs" />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="text-center mt-12">
                    <Link href={"/contact"}>
                        <button className="modern-btn group relative overflow-hidden">
                            <span className="relative z-10">Check More Marketing Solutions for Your Industry</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-[#C2D92C] to-[#34969E] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default IndustriesSection;