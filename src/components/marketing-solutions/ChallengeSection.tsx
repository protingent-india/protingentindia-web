"use client"
// --------------------------------------------------------------
// Challenge Section with Mandatory Images on Each Card

import { challenges } from "@/staticData";
import { FaArrowRight } from "react-icons/fa";

// --------------------------------------------------------------
const ChallengeSection = () => {
    return (
        <div className="w-full bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
            <div className="max-w-[1450px] mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#113F64' }}>
                       Overcome Hiring Challenges with Private Talent Pool 
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Approx. 75% of marketing strategies fail to give results. Businesses that invest in digital marketing services lack campaign direction, scattered strategies, and uncertain ROI. There are many marketing aspects still ignored, but they matter a lot.
                    </p>
                </div>

                {/* Connected card system with visual flow */}
                <div className="relative">
                    {/* SVG Connection Lines */}
                    <div className="absolute inset-0 pointer-events-none hidden lg:block">
                        <svg className="w-full h-full" viewBox="0 0 1200 600">
                            <defs>
                                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#C2D92C" stopOpacity="0.3" />
                                    <stop offset="50%" stopColor="#34969E" stopOpacity="0.5" />
                                    <stop offset="100%" stopColor="#113F64" stopOpacity="0.3" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M 200 100 Q 400 50 600 100 Q 800 150 1000 100"
                                stroke="url(#lineGradient)"
                                strokeWidth="2"
                                fill="none"
                                strokeDasharray="5,5"
                                className="animate-pulse"
                            />
                            <path
                                d="M 200 300 Q 600 250 1000 300"
                                stroke="url(#lineGradient)"
                                strokeWidth="2"
                                fill="none"
                                strokeDasharray="5,5"
                                className="animate-pulse"
                                style={{ animationDelay: '1s' }}
                            />
                        </svg>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                        {challenges.map((challenge, index) => {
                            const IconComponent = challenge.icon;
                            return (
                                <div
                                    key={index}
                                    className="group relative overflow-hidden rounded-2xl transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-3"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    {/* MANDATORY: Card background image */}
                                    <div
                                        className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                        style={{
                                            backgroundImage: `url('${challenge.image}')`,
                                        }}
                                    ></div>
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#113F64]/90 via-[#34969E]/80 to-[#113F64]/90"></div>

                                    <div className="relative z-10 p-8 h-full text-white">
                                        {/* Icon */}
                                        <div className="mb-6">
                                            <div
                                                className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg"
                                                style={{ backgroundColor: '#C2D92C' }}
                                            >
                                                <IconComponent className="text-[#113F64]" />
                                            </div>
                                        </div>

                                        <h3 className="text-xl md:text-2xl font-bold mb-4">
                                            {challenge.title}
                                        </h3>
                                        <p className="text-white/90 leading-relaxed">
                                            {challenge.description}
                                        </p>

                                        {/* Hover indicator */}
                                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <FaArrowRight className="text-[#C2D92C]" />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChallengeSection;