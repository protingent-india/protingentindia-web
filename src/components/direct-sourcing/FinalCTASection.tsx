"use client"
import { FinalCTASectionData } from "@/staticData";
import { FaArrowRight, FaUsers } from "react-icons/fa";

// --------------------------------------------------------------
// 9. Final CTA Section
// --------------------------------------------------------------

const FinalCTASection = () => {
    return (
        <div className="relative w-full py-20 md:py-32 overflow-hidden">
            {/* MANDATORY: Full-width gradient image background */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{
                    backgroundImage: `url('https://images.pexels.com/photos/33809956/pexels-photo-33809956.jpeg')`,
                }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#C2D92C]/90 via-[#34969E]/85 to-[#113F64]/90"></div>

            {/* Animated elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-20 w-40 h-40 border-2 border-white/20 rounded-full animate-pulse"></div>
                <div className="absolute bottom-32 right-32 w-32 h-32 border-2 border-[#C2D92C]/40 rotate-45 animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 text-center text-white">
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                    Save Time and Cost While Hiring
                    <span className="block text-[#C2D92C]">Skilled Professionals?</span>
                </h2>
                <p className="text-2xl lg:text-3xl leading-relaxed mb-16 max-w-6xl mx-auto opacity-90 font-light">
                    Protingent helps you build your own talent ecosystem faster, smarter, and designed to scale with your business.
                    With deep expertise in IT, engineering, BI, and managed services, we're here to deliver a sourcing model that's efficient, transparent, and built around your goals.
                </p>

                <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16">
                    <button className="group relative overflow-hidden px-16 py-6 bg-[#C2D92C] text-[#113F64] font-bold text-2xl rounded-2xl hover:scale-105 transform transition-all shadow-2xl">
                        <span className="relative z-10 flex items-center gap-4">
                            Start Building Your Talent Pool
                            <FaUsers className="group-hover:rotate-12 transition-transform duration-300" />
                        </span>
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </button>

                    <button className="px-12 py-6 border-3 border-white/40 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group text-white text-xl font-semibold">
                        <span className="flex items-center gap-4">
                            <span>Schedule Consultation</span>
                            <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                        </span>
                    </button>
                </div>

                {/* Final trust indicators */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                    {FinalCTASectionData.map((stat, index) => {
                        const IconComponent = stat.icon;
                        return (
                            <div key={index} className="text-center">
                                <IconComponent className="text-4xl text-[#C2D92C] mb-4 mx-auto" />
                                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                                <div className="text-lg opacity-80">{stat.label}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default FinalCTASection;