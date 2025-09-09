"use client"
// --------------------------------------------------------------
// CTA Section with Mandatory Dynamic Gradient Mesh Background

import { FaArrowRight, FaChartLine, FaCheckCircle, FaRocket } from "react-icons/fa";

// --------------------------------------------------------------
const MarketingCTASection = () => {
    return (
        <div className="relative w-full py-16 md:py-24 overflow-hidden">
            {/* MANDATORY: Dynamic gradient mesh background image */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1623410439361-22ac19216577')`,
                }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#113F64]/95 via-[#34969E]/90 to-[#C2D92C]/85"></div>

            {/* Animated geometric overlays */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Particle effects or flowing lines */}
                <div className="absolute top-10 left-10 w-32 h-32 border-2 border-[#C2D92C]/30 rounded-full animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-white/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-[#C2D92C]/20 rotate-45 animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-1/3 left-1/4 w-20 h-20 border-2 border-[#34969E]/40 rotate-12 animate-pulse" style={{ animationDelay: '3s' }}></div>
            </div>

            <div className="relative z-10 max-w-[1450px] mx-auto px-4 md:px-6 text-center text-white">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    Connect and Let Us Together
                    <span className="block text-[#C2D92C]">Grow Your Business</span>
                </h2>
                <p className="text-xl leading-relaxed mb-12 max-w-4xl mx-auto opacity-90">
                    Stop getting frustrated from marketing campaigns that do not deliver results.
                    Protingent India will help design engaging and result-driven marketing strategies for scalability.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <button className="group relative overflow-hidden px-12 py-4 bg-[#C2D92C] text-[#113F64] font-bold text-lg rounded-full hover:scale-105 transform transition-all shadow-2xl">
                        <span className="relative z-10">Start Your Growth Journey</span>
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </button>

                    <button className="px-8 py-4 border-2 border-white/40 rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group text-white">
                        <span className="flex items-center gap-3">
                            <span>Schedule Free Consultation</span>
                            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                    </button>
                </div>

                {/* Trust indicators */}
                <div className="flex justify-center items-center gap-12 mt-12 text-sm opacity-80">
                    <div className="text-center">
                        <FaCheckCircle className="text-2xl text-[#C2D92C] mb-2 mx-auto" />
                        <div>Free Consultation</div>
                    </div>
                    <div className="text-center">
                        <FaRocket className="text-2xl text-[#C2D92C] mb-2 mx-auto" />
                        <div>Quick Setup</div>
                    </div>
                    <div className="text-center">
                        <FaChartLine className="text-2xl text-[#C2D92C] mb-2 mx-auto" />
                        <div>Guaranteed ROI</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarketingCTASection;