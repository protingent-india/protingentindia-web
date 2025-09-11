"use client"
import { FaArrowRight, FaNetworkWired, FaPlay, FaRocket, FaUsers } from "react-icons/fa";
import { DirectSourcingData } from "@/staticData";
import Link from "next/link";

// --------------------------------------------------------------
// 1. Hero Section (Tallium/FuseLab Style)
// --------------------------------------------------------------
const DirectSourcingHeroSection = () => {
    return (
        <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-8">
            {/* MANDATORY: Animated gradient mesh background */}
            <div className="absolute inset-0 w-full h-full">
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-1000"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1664526937033-fe2c11f1be25')`,
                    }}
                ></div>
                {/* Animated gradient mesh overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#C2D92C]/70 via-[#34969E]/80 to-[#113F64]/90 animate-gradient-shift"></div>
            </div>

            {/* Floating network elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-24 h-24 border-2 border-[#C2D92C]/40 rounded-full float-animation"></div>
                <div className="absolute bottom-32 right-16 w-20 h-20 border-2 border-white/30 rotate-45 float-animation" style={{ animationDelay: '-2s' }}></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#C2D92C]/20 rounded-full float-animation" style={{ animationDelay: '-4s' }}></div>
                <div className="absolute bottom-1/4 right-1/3 w-12 h-12 border border-[#34969E]/50 rotate-12 float-animation" style={{ animationDelay: '-6s' }}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
                {/* Side-by-side layout (40% image / 60% content) */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                    {/* 40% - Hero Image */}
                    <div className="lg:col-span-2 relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                            <img
                                src="https://images.unsplash.com/photo-1586991602729-49c1e818ad46"
                                alt="Connected Digital Talent Network"
                                className="w-full h-[400px] lg:h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#113F64]/80 via-transparent to-[#C2D92C]/20"></div>

                            {/* Floating talent network icons */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="grid grid-cols-3 gap-4 opacity-80">
                                    <div className="w-12 h-12 bg-[#C2D92C] rounded-full flex items-center justify-center shadow-lg animate-pulse">
                                        <FaUsers className="text-[#113F64] text-lg" />
                                    </div>
                                    <div className="w-12 h-12 bg-[#34969E] rounded-full flex items-center justify-center shadow-lg animate-pulse" style={{ animationDelay: '0.5s' }}>
                                        <FaNetworkWired className="text-white text-lg" />
                                    </div>
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg animate-pulse" style={{ animationDelay: '1s' }}>
                                        <FaRocket className="text-[#113F64] text-lg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 60% - Content */}
                    <div className="lg:col-span-3 text-white">
                        <div className="mb-6">
                            <div className="inline-block px-4 py-2 bg-[#113F64]/30 backdrop-blur-sm rounded-full border border-[#C2D92C]/40 mb-4">
                                <span className="text-[#C2D92C] font-semibold text-sm">🚀 Build Your Private Talent Pool</span>
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                                Direct Sourcing Services
                            </span>
                            <span className="block text-[#C2D92C] mt-2">
                                for IT and Engineering Talent
                            </span>
                        </h1>

                        <p className="text-xl lg:text-2xl font-light mb-8 leading-relaxed opacity-90">
                            Protingent India enables businesses to design a private talent pool of pre-vetted IT, engineering, and analytics professionals.
                            The direct sourcing service model provides faster access to skilled talent, reduces overheads, and fosters a strong culture to scale the workforce on demand.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 mb-8">
                            <Link href={"/contact"} className="cursor-pointer" >
                                <button className="group relative overflow-hidden px-8 py-4 bg-[#C2D92C] text-[#113F64] font-bold text-lg rounded-xl hover:scale-105 transform transition-all shadow-2xl">
                                    <span className="relative z-10 flex items-center gap-3">
                                        Build Your Talent-Pool
                                        <FaUsers className="group-hover:rotate-12 transition-transform duration-300" />
                                    </span>
                                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                </button>
                            </Link>

                            <Link href={"/contact"} className="cursor-pointer" >
                                <button className="px-8 py-4 border-2 border-white/40 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group text-white">
                                    <span className="flex items-center gap-3">
                                        <FaPlay className="text-sm" />
                                        <span>Watch Demo</span>
                                        <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                                    </span>
                                </button>
                            </Link>
                        </div>

                        {/* Key Benefits Preview */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                            {DirectSourcingData.map((stat, index) => {
                                const IconComponent = stat.icon;
                                return (
                                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                                        <IconComponent className="text-[#C2D92C] text-2xl mb-2 mx-auto" />
                                        <div className="text-2xl font-bold">{stat.value}</div>
                                        <div className="text-sm opacity-80">{stat.label}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DirectSourcingHeroSection;