"use client"
// --------------------------------------------------------------
// 4. Process Section (LaSoft Timeline Style)  

import { DirectSourcingprocesses } from "@/staticData";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

// --------------------------------------------------------------
const ProcessSection = () => {
    return (
        <div className="w-full bg-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#113F64' }}>
                        We Have Made Talent Discovery to
                        <span className="block text-[#34969E]">Deployment Simple</span>
                    </h2>
                    <p className="text-xl lg:text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
                        Protingent India makes hiring predictable by blending technology, human expertise, and your employer brand.
                        Our talent acquisition strategy is designed to keep your pipeline full of pre-qualified IT and engineering professionals, so you always have the right people at the right time.
                    </p>
                </div>

                {/* 4 Process Steps with alternating image/content */}
                <div className="space-y-24">
                    {DirectSourcingprocesses.map((process, index) => {
                        const IconComponent = process.icon;
                        const isEven = index % 2 === 0;

                        return (
                            <div
                                key={index}
                                className={`flex flex-col lg:flex-row items-center gap-12 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                    }`}
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                {/* Image Side - MANDATORY: Each step has image background */}
                                <div className="lg:w-1/2 relative">
                                    <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                                        <img
                                            src={process.image}
                                            alt={process.title}
                                            className="w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#113F64]/70 via-transparent to-[#34969E]/60"></div>

                                        {/* Step Number */}
                                        <div className="absolute top-8 left-8">
                                            <div className="w-16 h-16 bg-[#C2D92C] rounded-2xl flex items-center justify-center shadow-xl">
                                                <span className="text-[#113F64] font-bold text-xl">{index + 1}</span>
                                            </div>
                                        </div>

                                        {/* Icon */}
                                        <div className="absolute bottom-8 right-8">
                                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
                                                <IconComponent className="text-white text-2xl" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="lg:w-1/2">
                                    <div className="relative">
                                        {/* Step indicator */}
                                        <div className="flex items-center gap-4 mb-6">
                                            <div
                                                className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                                                style={{ backgroundColor: index % 2 === 0 ? '#34969E' : '#C2D92C' }}
                                            >
                                                <IconComponent className="text-white text-xl" />
                                            </div>
                                            <div className="text-sm font-semibold text-[#34969E] uppercase tracking-wider">
                                                Step {index + 1}
                                            </div>
                                        </div>

                                        <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-[#113F64] leading-tight">
                                            {process.title}
                                        </h3>
                                        <p className="text-xl text-gray-600 leading-relaxed mb-8">
                                            {process.description}
                                        </p>

                                        <Link href={"/contact"} className="cursor-pointer" >
                                            <div className="flex items-center gap-3 text-[#34969E] font-semibold hover:gap-5 transition-all duration-300 cursor-pointer">
                                                <span>Learn More</span>
                                                <FaArrowRight />
                                            </div>
                                        </Link>
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

export default ProcessSection;