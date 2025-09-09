"use client"
// --------------------------------------------------------------
// 2. Challenge Section (WANDR Card Style)

import { DirectSourcingchallenges } from "@/staticData";
import { FaArrowRight } from "react-icons/fa";

// --------------------------------------------------------------
const ChallengeSection = () => {
    return (
        <div className="w-full bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#113F64' }}>
                        Overcome Hiring Challenges with
                        <span className="block text-[#34969E]">Private Talent Pool</span>
                    </h2>
                    <p className="text-xl lg:text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
                        Utilise the smarter workforce sourcing model to find the right IT and Engineering professionals when required urgently at reduced overhead expenses.
                        It's a community of business-owned skilled talent-pool who already know your brand before being onboarded.
                    </p>
                </div>

                {/* 4 Challenge Cards with mandatory image backgrounds */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {DirectSourcingchallenges.map((challenge, index) => {
                        const IconComponent = challenge.icon;
                        return (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-3xl transition-all duration-500 cursor-pointer shadow-xl hover:shadow-2xl hover:-translate-y-4 hover:scale-105"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* MANDATORY: Image background with overlay */}
                                <div
                                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    style={{
                                        backgroundImage: `url('${challenge.image}')`,
                                    }}
                                ></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-[#113F64]/90 via-[#34969E]/80 to-[#113F64]/95"></div>

                                <div className="relative z-10 p-8 h-full text-white min-h-[320px] flex flex-col justify-between">
                                    {/* Icon */}
                                    <div className="mb-6">
                                        <div
                                            className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-xl"
                                            style={{ backgroundColor: challenge.accentColor }}
                                        >
                                            <IconComponent className="text-[#113F64]" />
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold mb-4 leading-tight">
                                            {challenge.title}
                                        </h3>
                                        <p className="text-white/90 leading-relaxed text-lg">
                                            {challenge.description}
                                        </p>
                                    </div>

                                    {/* Hover indicator */}
                                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <div className="w-8 h-8 rounded-full border-2 border-[#C2D92C] flex items-center justify-center">
                                            <FaArrowRight className="text-[#C2D92C] text-sm" />
                                        </div>
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

export default ChallengeSection;