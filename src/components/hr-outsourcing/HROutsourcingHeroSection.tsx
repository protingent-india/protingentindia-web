"use client"
import {
    FaArrowRight,
    FaChartBar,
    FaMoneyBillWave,
    FaPlay,
    FaRocket,
    FaShieldAlt,
    FaUsers
} from "react-icons/fa";

// --------------------------------------------------------------

// 1. Hero Section - Split Screen with Animated Gradient
// --------------------------------------------------------------
const HROutsourcingHeroSection = () => {
    return (
        <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-8">
            {/* Animated gradient mesh background */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#C2D92C] via-[#34969E] to-[#113F64] animate-gradient-shift"></div>

            {/* Floating geometric elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-24 h-24 border-2 border-white/30 rounded-full float-animation"></div>
                <div className="absolute bottom-32 right-16 w-20 h-20 border-2 border-[#C2D92C]/40 rotate-45 float-animation" style={{ animationDelay: '-2s' }}></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full float-animation" style={{ animationDelay: '-4s' }}></div>
                <div className="absolute bottom-1/4 right-1/3 w-12 h-12 border border-white/40 rotate-12 float-animation" style={{ animationDelay: '-6s' }}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
                {/* Split-screen layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Content */}
                    <div className="text-white">
                        <div className="mb-6">
                            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-4">
                                <span className="text-[#C2D92C] font-semibold text-sm">🚀 Strategic HR Partnership</span>
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                                Focus on Growth,
                            </span>
                            <span className="block text-[#C2D92C] mt-2">
                                Let Us Handle Your HR Department
                            </span>
                        </h1>

                        <p className="text-xl lg:text-2xl font-light mb-8 leading-relaxed opacity-90" style={{ fontFamily: 'Raleway' }}>
                            Protingent India takes over all HR complexities like payroll, compliance, recruitment, and employee support,
                            where entrepreneurs take innovations, growth, and efficiency towards next-gen technologies without administrative burdens.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 mb-8">
                            <button className="group relative overflow-hidden px-8 py-4 bg-[#C2D92C] text-[#113F64] font-bold text-lg rounded-xl hover:scale-105 transform transition-all shadow-2xl">
                                <span className="relative z-10 flex items-center gap-3">
                                    Transform Your HR Today
                                    <FaRocket className="group-hover:rotate-12 transition-transform duration-300" />
                                </span>
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                            </button>

                            <button className="px-8 py-4 border-2 border-white/40 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group text-white">
                                <span className="flex items-center gap-3">
                                    <FaPlay className="text-sm" />
                                    <span>Watch Demo</span>
                                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
                            </button>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                            {[
                                { label: "Cost Savings", value: "40%" },
                                { label: "Faster Hiring", value: "60%" },
                                { label: "Compliance", value: "100%" },
                                { label: "Productivity", value: "70%" }
                            ].map((stat, index) => (
                                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                                    <div className="text-2xl font-bold text-[#C2D92C]">{stat.value}</div>
                                    <div className="text-sm opacity-80">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Hero Image with Floating Cards */}
                    <div className="relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                            <img
                                src="https://images.unsplash.com/photo-1676275774289-6cc2e0a0203d"
                                alt="HR Dashboard and Team Collaboration"
                                className="w-full h-[500px] lg:h-[600px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#113F64]/60 via-transparent to-[#C2D92C]/20"></div>

                            {/* Floating HR Cards */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="grid grid-cols-2 gap-4 opacity-90">
                                    {/* Payroll Card */}
                                    <div className="bg-[#C2D92C] rounded-2xl p-4 shadow-xl animate-pulse flex items-center gap-3">
                                        <FaMoneyBillWave className="text-[#113F64] text-2xl" />
                                        <div>
                                            <div className="text-[#113F64] font-bold text-sm">Payroll</div>
                                            <div className="text-[#113F64] text-xs">Automated</div>
                                        </div>
                                    </div>

                                    {/* Compliance Card */}
                                    <div className="bg-[#34969E] rounded-2xl p-4 shadow-xl animate-pulse flex items-center gap-3" style={{ animationDelay: '0.5s' }}>
                                        <FaShieldAlt className="text-white text-2xl" />
                                        <div>
                                            <div className="text-white font-bold text-sm">Compliance</div>
                                            <div className="text-white text-xs">100% Assured</div>
                                        </div>
                                    </div>

                                    {/* Recruitment Card */}
                                    <div className="bg-white rounded-2xl p-4 shadow-xl animate-pulse flex items-center gap-3" style={{ animationDelay: '1s' }}>
                                        <FaUsers className="text-[#113F64] text-2xl" />
                                        <div>
                                            <div className="text-[#113F64] font-bold text-sm">Recruitment</div>
                                            <div className="text-[#113F64] text-xs">RPO Services</div>
                                        </div>
                                    </div>

                                    {/* Analytics Card */}
                                    <div className="bg-[#113F64] rounded-2xl p-4 shadow-xl animate-pulse flex items-center gap-3" style={{ animationDelay: '1.5s' }}>
                                        <FaChartBar className="text-[#C2D92C] text-2xl" />
                                        <div>
                                            <div className="text-white font-bold text-sm">Analytics</div>
                                            <div className="text-white text-xs">Real-time</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HROutsourcingHeroSection;