"use client"
import {
    FaPlay
} from 'react-icons/fa';

// --------------------------------------------------------------

// Hero Section with Mandatory Background Image
const MarketingHeroSection = () => {
    return (
        <div className="relative w-full flex items-center justify-center overflow-hidden py-8">
            {/* MANDATORY: Full-screen background image with gradient overlay */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1626123080782-10b336a160b4')`,
                }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#C2D92C]/60 via-[#34969E]/70 to-[#113F64]/80"></div>

            {/* Animated geometric overlays */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-20 h-20 border border-[#C2D92C]/40 rotate-45 float-animation"></div>
                <div className="absolute bottom-32 right-16 w-16 h-16 border border-[#34969E]/50 rounded-full float-animation" style={{ animationDelay: '-2s' }}></div>
                <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-[#C2D92C]/30 rotate-12 float-animation" style={{ animationDelay: '-4s' }}></div>
            </div>

            <div className="relative z-10 text-center text-white max-w-4xl px-4 md:px-6">
                <div className="mb-6">
                    <div className="inline-block px-4 py-2 bg-[#113F64]/30 backdrop-blur-sm rounded-full border border-[#C2D92C]/40 mb-4">
                        <span className="text-[#C2D92C] font-semibold text-sm">🚀 ROI-Driven Marketing</span>
                    </div>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent leading-tight">
                    Digital Marketing Services
                    <span className="block text-[#C2D92C]">To Grow Your Business</span>
                </h1>

                <p className="text-base md:text-lg lg:text-xl font-light mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
                    Protingent India delivers ROI-driven marketing services to businesses that generate heavy traffic and higher conversion possibilities.
                    We have a team of skilled Martech professionals who execute strategic and insightful SEO, performance marketing, social media, and content strategy that enable growth.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="modern-btn group relative overflow-hidden">
                        <span className="relative z-10">Connect for Free Consultation</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#C2D92C] to-[#34969E] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>

                    <button className="px-6 py-3 border-2 border-white/30 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                        <span className="flex items-center gap-2">
                            <span>View Portfolio</span>
                            <FaPlay className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                    </button>
                </div>

                {/* Trust indicators */}
                <div className="flex justify-center items-center gap-8 mt-8 text-sm opacity-80">
                    <div className="text-center">
                        <div className="font-bold text-xl">500+</div>
                        <div>Clients</div>
                    </div>
                    <div className="text-center">
                        <div className="font-bold text-xl">15+</div>
                        <div>Years</div>
                    </div>
                    <div className="text-center">
                        <div className="font-bold text-xl">95%</div>
                        <div>Retention</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarketingHeroSection;