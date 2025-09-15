"use client"
import { useState, useEffect, useRef } from "react";
import {
    FAQSection,
    CommonHeading,
    GeometricBackground,
    ConsultationPopup,
    EnhancedFAQSection
} from "@/components";
import { useConsultationPopup } from '@/hooks/useConsultationPopup';
import {
    FaUsers,
    FaClock,
    FaDollarSign,
    FaExpand,
    FaCheckCircle,
    FaRocket,
    FaSearch,
    FaBullseye,
    FaHandshake,
    FaShieldAlt,
    FaLaptopCode,
    FaChartBar,
    FaCogs,
    FaCloud,
    FaRobot,
    FaEye,
    FaNetworkWired,
    FaUserFriends,
    FaMoneyBillWave,
    FaTachometerAlt,
    FaAward,
    FaStar,
    FaGem,
    FaMedal,
    FaUniversity,
    FaHospital,
    FaBuilding,
    FaCar,
    FaArrowRight,
    FaIndustry,
    FaTruck,
    FaPills
} from 'react-icons/fa';

// --------------------------------------------------------------
// 1. Hero Section
// --------------------------------------------------------------
const DirectSourcingHeroSection = ({ openPopup }: { openPopup: (config?: { title?: string; description?: string }) => void }) => {
    return (
        <section className="relative w-full min-h-[60vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden py-8">
            {/* Background */}
            <div className="absolute inset-0 w-full h-full">
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-1000"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1664526937033-fe2c11f1be25')`,
                    }}
                ></div>
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

                            {/* Stats overlay */}
                            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                                <div className="grid grid-cols-2 gap-4 text-center">
                                    <div>
                                        <div className="text-2xl font-bold text-[#113F64]">500+</div>
                                        <div className="text-sm text-gray-600">Active Networks</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-[#34969E]">24/7</div>
                                        <div className="text-sm text-gray-600">Global Access</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 60% - Content */}
                    <div className="lg:col-span-3 text-white">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent leading-tight">
                            Direct Sourcing Services for IT and Engineering Talent
                        </h1>

                        <p className="text-xl lg:text-2xl font-light mb-8 leading-relaxed opacity-90">
                            Protingent India enables businesses to design a private talent pool of pre-vetted IT, engineering, and analytics professionals.
                            The direct sourcing service model provides faster access to skilled talent, reduces overheads, and fosters a strong culture to scale the workforce on demand.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 mb-8">
                            <button
                                onClick={() => openPopup({
                                    title: "Build Your Talent Pool",
                                    description: "Ready to build your private talent pool? Let's discuss how our direct sourcing solutions can help you access pre-vetted professionals faster and more efficiently."
                                })}
                                className="group relative overflow-hidden px-8 py-4 bg-[#C2D92C] text-[#113F64] font-bold text-lg rounded-xl hover:scale-105 transform transition-all shadow-2xl"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    Build Your Talent Pool
                                    <FaUsers className="group-hover:rotate-12 transition-transform duration-300" />
                                </span>
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                            </button>
                        </div>

                        {/* Key Benefits Preview */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                            {[
                                { icon: FaClock, label: "Faster Hiring", value: "60%" },
                                { icon: FaDollarSign, label: "Cost Reduction", value: "40%" },
                                { icon: FaUsers, label: "Pre-vetted Talent", value: "5000+" },
                                { icon: FaCheckCircle, label: "Success Rate", value: "95%" }
                            ].map((stat, index) => {
                                const IconComponent = stat.icon;
                                return (
                                    <div key={index} className="group">
                                        <div className="w-16 h-16 mx-auto mb-3 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:bg-[#C2D92C] transition-all duration-300">
                                            <IconComponent className="text-2xl text-[#C2D92C] group-hover:text-[#113F64] transition-colors duration-300" />
                                        </div>
                                        <div className="text-2xl font-bold text-[#C2D92C]">{stat.value}</div>
                                        <div className="text-sm opacity-80">{stat.label}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom CSS for animations */}
            <style jsx>{`
                @keyframes gradient-shift {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                .animate-gradient-shift {
                    background-size: 200% 200%;
                    animation: gradient-shift 8s ease infinite;
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(10deg); }
                }
                .float-animation {
                    animation: float 6s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};

// --------------------------------------------------------------
// 2. Challenge Section
// --------------------------------------------------------------
const ChallengeSection = () => {
    const challenges = [
        {
            title: "Faster hiring cycles",
            description: "Traditional recruitment takes 3-6 months. You need talent ready within weeks.",
            image: "https://images.unsplash.com/photo-1664526937033-fe2c11f1be25",
            icon: FaClock
        },
        {
            title: "Lower recruitment costs",
            description: "Agency fees and long hiring processes drain budgets without guaranteed results.",
            image: "https://images.unsplash.com/photo-1652359282381-63624506739c",
            icon: FaDollarSign
        },
        {
            title: "Workforce scalability",
            description: "Project demands fluctuate, but your talent pipeline needs to stay consistent.",
            image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
            icon: FaExpand
        },
        {
            title: "Quality alignment",
            description: "Finding candidates who match both technical skills and company culture is complex.",
            image: "https://images.unsplash.com/photo-1586991602729-49c1e818ad46",
            icon: FaBullseye
        }
    ];

    return (
        <div className="relative w-full bg-gradient-to-b from-white to-gray-50 section-padding overflow-hidden">
            <GeometricBackground variant="tertiary" intensity="light" />

            <div className="max-w-[1450px] mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#113F64] mb-6">
                        Overcome Hiring Challenges with Private Talent Pool
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Stop struggling with unpredictable hiring cycles, high recruitment costs, and talent mismatches.
                        Build a sustainable direct sourcing strategy that puts you in control.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {challenges.map((challenge, index) => {
                        const IconComponent = challenge.icon;
                        return (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-2xl transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-3 hover:scale-105 hover:rotate-1"
                            >
                                <div
                                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    style={{
                                        backgroundImage: `url('${challenge.image}')`,
                                    }}
                                ></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-[#113F64]/90 via-[#34969E]/80 to-[#113F64]/90"></div>

                                <div className="relative z-10 p-8 h-full text-white min-h-[300px] flex flex-col justify-between">
                                    <div>
                                        <div
                                            className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg"
                                            style={{ backgroundColor: '#C2D92C' }}
                                        >
                                            <IconComponent className="text-[#113F64]" />
                                        </div>

                                        <h3 className="text-xl md:text-2xl font-bold mb-4">
                                            {challenge.title}
                                        </h3>
                                        <p className="text-white/90 leading-relaxed">
                                            {challenge.description}
                                        </p>
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

// --------------------------------------------------------------
// 3. CTA Banner Section
// --------------------------------------------------------------
const CTABannerSection = ({ openPopup }: { openPopup: (config?: { title?: string; description?: string }) => void }) => {
    return (
        <section className="relative w-full py-20 overflow-hidden">
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center object-cover"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1551836022-d5d88e9218df')`,
                }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#113F64]/95 via-[#34969E]/90 to-[#113F64]/95"></div>

            {/* Animated particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-4 h-4 bg-[#C2D92C]/60 rounded-full float-animation"></div>
                <div className="absolute bottom-32 right-16 w-6 h-6 bg-white/40 rounded-full float-animation" style={{ animationDelay: '-2s' }}></div>
                <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-[#C2D92C]/80 rounded-full float-animation" style={{ animationDelay: '-4s' }}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 text-center text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    A Flexible Hiring Solution That Puts You in Control
                </h2>
                <p className="text-xl leading-relaxed mb-12 max-w-4xl mx-auto opacity-90">
                    Stop waiting for the right candidates to apply. Build your private talent community and hire on-demand
                    from a pool of pre-vetted professionals who already understand your business needs.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                    <button
                        onClick={() => openPopup({
                            title: "Get Started Today",
                            description: "Ready to build your private talent pool? Let's discuss how our direct sourcing platform can transform your hiring process and reduce costs."
                        })}
                        className="group relative overflow-hidden px-12 py-6 bg-[#C2D92C] text-[#113F64] font-bold text-xl rounded-2xl hover:scale-105 transform transition-all shadow-2xl"
                    >
                        <span className="relative z-10 flex items-center gap-4">
                            Get Started Today
                            <FaRocket className="group-hover:translate-x-2 group-hover:rotate-12 transition-all duration-300" />
                        </span>
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </button>
                </div>

                <div className="flex justify-center items-center gap-12 text-sm opacity-80">
                    <div className="text-center">
                        <FaShieldAlt className="text-2xl text-[#C2D92C] mb-2 mx-auto" />
                        <div>Secure & Compliant</div>
                    </div>
                    <div className="text-center">
                        <FaEye className="text-2xl text-[#C2D92C] mb-2 mx-auto" />
                        <div>Full Transparency</div>
                    </div>
                    <div className="text-center">
                        <FaCogs className="text-2xl text-[#C2D92C] mb-2 mx-auto" />
                        <div>Real-time Control</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --------------------------------------------------------------
// 4. Process Section
// --------------------------------------------------------------
const ProcessSection = () => {
    const processSteps = [
        {
            step: "01",
            title: "Employer Branding First",
            description: "We position your company as an employer of choice, creating compelling brand narratives that attract top talent to your private talent pool.",
            image: "https://images.unsplash.com/photo-1664526937033-fe2c11f1be25",
            icon: FaAward
        },
        {
            step: "02",
            title: "Building a Private Talent Pool",
            description: "Through targeted sourcing campaigns and community building, we curate a diverse pool of pre-qualified candidates aligned with your specific technical and cultural requirements.",
            image: "https://images.unsplash.com/photo-1586991602729-49c1e818ad46",
            icon: FaUsers
        },
        {
            step: "03",
            title: "Curation & Qualification",
            description: "Every candidate undergoes rigorous technical assessments, behavioral evaluations, and background checks to ensure they meet your quality standards before entering your talent pipeline.",
            image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
            icon: FaCheckCircle
        },
        {
            step: "04",
            title: "On-Demand Deployment",
            description: "When you need talent, simply access your pre-vetted pool and deploy professionals within days, not months. Scale up or down based on project demands with complete flexibility.",
            image: "https://images.unsplash.com/photo-1652359282381-63624506739c",
            icon: FaRocket
        }
    ];

    return (
        <div className="w-full bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#113F64] mb-6">
                        We Have Made Talent Discovery to Deployment Simple
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Our systematic approach ensures you build a sustainable talent pipeline that delivers quality professionals exactly when you need them.
                    </p>
                </div>

                <div className="space-y-20">
                    {processSteps.map((step, index) => {
                        const IconComponent = step.icon;
                        const isEven = index % 2 === 0;

                        return (
                            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                                {/* Image Side */}
                                <div className={`relative ${!isEven ? 'lg:order-2' : ''}`}>
                                    <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                                        <img
                                            src={step.image}
                                            alt={step.title}
                                            className="w-full h-[400px] object-cover transition-transform duration-500 hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#113F64]/60 via-transparent to-transparent"></div>

                                        {/* Step number overlay */}
                                        <div className="absolute top-6 left-6 w-16 h-16 bg-[#C2D92C] rounded-2xl flex items-center justify-center shadow-xl">
                                            <span className="text-2xl font-bold text-[#113F64]">{step.step}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                                    <div className="mb-6">
                                        <div className="w-20 h-20 bg-gradient-to-br from-[#34969E] to-[#C2D92C] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                                            <IconComponent className="text-3xl text-white" />
                                        </div>
                                    </div>

                                    <h3 className="text-3xl font-bold text-[#113F64] mb-6">{step.title}</h3>
                                    <p className="text-xl text-gray-600 leading-relaxed">{step.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

// --------------------------------------------------------------
// 5. How It Works Section
// --------------------------------------------------------------
const HowItWorksSection = () => {
    const workingSteps = [
        {
            title: "Workforce Discovery",
            description: "We identify and engage with passive candidates through strategic sourcing, referrals, and community engagement to build your talent pipeline.",
            icon: FaSearch,
            color: "#34969E"
        },
        {
            title: "Talent Pool Curation",
            description: "Each candidate undergoes comprehensive screening including technical assessments, cultural fit evaluation, and background verification.",
            icon: FaUsers,
            color: "#C2D92C"
        },
        {
            title: "Candidate Engagement",
            description: "We maintain ongoing relationships with your talent pool through regular touchpoints, skill development opportunities, and career guidance.",
            icon: FaHandshake,
            color: "#34969E"
        },
        {
            title: "Selection & Matchmaking",
            description: "When you have requirements, we match the best-fit candidates from your pool based on skills, experience, and project alignment.",
            icon: FaBullseye,
            color: "#C2D92C"
        },
        {
            title: "Onboarding & Support",
            description: "Seamless integration with your team through structured onboarding, continuous support, and performance monitoring throughout the engagement.",
            icon: FaRocket,
            color: "#34969E"
        }
    ];

    return (
        <div className="w-full bg-gradient-to-b from-gray-50 to-white py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#113F64] mb-6">
                        How Protingent's Direct Talent Sourcing Works?
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Our proven methodology combines strategic talent acquisition with relationship management to create
                        sustainable talent pipelines that scale with your business.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {workingSteps.map((step, index) => {
                        const IconComponent = step.icon;
                        return (
                            <div
                                key={index}
                                className={`group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-l-4 ${index === 0 ? 'lg:col-span-2' : ''
                                    } ${index === 3 ? 'lg:col-span-2' : ''}`}
                                style={{ borderLeftColor: step.color }}
                            >
                                <div className="mb-6">
                                    <div
                                        className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg"
                                        style={{ backgroundColor: step.color }}
                                    >
                                        <IconComponent className="text-white" />
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold mb-4 group-hover:text-[#34969E] transition-colors duration-300" style={{ color: '#113F64' }}>
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {step.description}
                                </p>

                                {/* Hover indicator */}
                                <div className="flex items-center gap-2 mt-6 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300" style={{ color: step.color }}>
                                    <span>Learn More</span>
                                    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

// --------------------------------------------------------------
// 6. Benefits Section
// --------------------------------------------------------------
const BenefitsSection = () => {
    const benefits = [
        {
            title: "Lower Recruitment Costs",
            description: "Reduce agency fees and overhead costs by 40% while building your own sustainable talent pipeline that delivers consistent quality.",
            image: "https://images.unsplash.com/photo-1664526937033-fe2c11f1be25",
            icon: FaMoneyBillWave
        },
        {
            title: "Faster Access to Talent",
            description: "Deploy pre-vetted professionals within days instead of months. Your talent pool is always ready when opportunities arise.",
            image: "https://images.unsplash.com/photo-1586991602729-49c1e818ad46",
            icon: FaTachometerAlt
        },
        {
            title: "Workforce Scalability",
            description: "Scale your team up or down based on project demands without the traditional hiring constraints and delays.",
            image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
            icon: FaExpand
        },
        {
            title: "Better Talent Quality",
            description: "Access professionals who are already aligned with your company culture and have been thoroughly vetted for technical skills.",
            image: "https://images.unsplash.com/photo-1652359282381-63624506739c",
            icon: FaAward
        },
        {
            title: "More Control Less Risk",
            description: "Maintain full control over your talent acquisition strategy while minimizing the risks associated with traditional recruitment.",
            image: "https://images.unsplash.com/photo-1661956602116-aa6865609028",
            icon: FaShieldAlt
        }
    ];

    return (
        <div className="relative w-full py-20 overflow-hidden">
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center object-cover"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1551836022-d5d88e9218df')`,
                }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#113F64]/95 via-[#34969E]/90 to-[#113F64]/95"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center mb-16 text-white">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Why Businesses Rely on the Direct Sourcing Model?
                    </h2>
                    <p className="text-xl leading-relaxed max-w-3xl mx-auto opacity-90">
                        Transform your talent acquisition strategy with a model that prioritizes quality, speed, and cost-effectiveness
                        while giving you complete control over your hiring process.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => {
                        const IconComponent = benefit.icon;
                        return (
                            <div
                                key={index}
                                className={`group relative overflow-hidden rounded-2xl transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-105 ${index === 0 ? 'lg:col-span-2' : ''
                                    }`}
                            >
                                <div
                                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    style={{
                                        backgroundImage: `url('${benefit.image}')`,
                                    }}
                                ></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-[#113F64]/90 via-[#34969E]/80 to-[#113F64]/90 group-hover:from-[#C2D92C]/90 group-hover:via-[#34969E]/80 group-hover:to-[#113F64]/90 transition-all duration-500"></div>

                                <div className="relative z-10 p-8 h-full text-white min-h-[320px] flex flex-col justify-between">
                                    <div>
                                        <div
                                            className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg bg-white/20 backdrop-blur-sm"
                                        >
                                            <IconComponent className="text-[#C2D92C]" />
                                        </div>

                                        <h3 className="text-2xl font-bold mb-4">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-white/90 leading-relaxed">
                                            {benefit.description}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-2 mt-6 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 text-[#C2D92C]">
                                        <span>Discover Benefits</span>
                                        <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
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

// --------------------------------------------------------------
// 7. Industries Section
// --------------------------------------------------------------
const IndustriesSection = () => {
    const industries = [
        {
            title: "Information Technology & Software Development",
            description: "Full-stack developers, DevOps engineers, cloud architects, and specialized technology professionals for software companies and IT departments.",
            image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176",
            icon: FaLaptopCode
        },
        {
            title: "Business Intelligence & Data Analytics",
            description: "Data scientists, BI analysts, data engineers, and analytics professionals who transform raw data into actionable business insights.",
            image: "https://images.unsplash.com/photo-1664526937033-fe2c11f1be25",
            icon: FaChartBar
        },
        {
            title: "Engineering & Product Development",
            description: "Mechanical, electrical, and product engineers for manufacturing, automotive, aerospace, and industrial development projects.",
            image: "https://images.unsplash.com/photo-1586991602729-49c1e818ad46",
            icon: FaCogs
        },
        {
            title: "Managed IT & Infrastructure",
            description: "System administrators, network engineers, cybersecurity specialists, and IT infrastructure professionals for enterprise environments.",
            image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
            icon: FaCloud
        },
        {
            title: "Emerging Tech & Niche Roles",
            description: "AI/ML engineers, blockchain developers, IoT specialists, and professionals in cutting-edge technology domains.",
            image: "https://images.unsplash.com/photo-1652359282381-63624506739c",
            icon: FaRobot
        }
    ];

    return (
        <div className="w-full bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#113F64] mb-6">
                        Specialized Workforce Solutions for Every Industry We Power
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Our direct sourcing expertise spans across technology, engineering, and analytics domains,
                        delivering specialized talent that drives innovation and growth.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((industry, index) => {
                        const IconComponent = industry.icon;
                        return (
                            <div
                                key={index}
                                className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2 ${index === 0 ? 'lg:col-span-2' : ''
                                    } ${index === 3 ? 'lg:col-span-2' : ''}`}
                            >
                                <div
                                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    style={{
                                        backgroundImage: `url('${industry.image}')`,
                                    }}
                                ></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-[#113F64]/90 via-[#34969E]/80 to-[#113F64]/90"></div>

                                <div className="relative z-10 p-8 h-full text-white min-h-[300px] flex flex-col justify-between">
                                    <div>
                                        <div
                                            className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg"
                                            style={{ backgroundColor: '#C2D92C' }}
                                        >
                                            <IconComponent className="text-[#113F64]" />
                                        </div>

                                        <h3 className="text-2xl font-bold mb-4">
                                            {industry.title}
                                        </h3>
                                        <p className="text-white/90 leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                            {industry.description}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-2 mt-6 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 text-[#C2D92C]">
                                        <span>Explore Opportunities</span>
                                        <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
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

// --------------------------------------------------------------
// 8. Why Choose Section
// --------------------------------------------------------------
const WhyChooseSection = () => {
    const whyChoosePoints = [
        {
            title: "Deep Tech Expertise",
            description: "25+ years of experience in IT, engineering, and analytics talent acquisition with proven track record of successful placements.",
            icon: FaGem
        },
        {
            title: "Private Talent Communities",
            description: "Build exclusive talent pools that are aligned with your company culture, technical requirements, and long-term growth plans.",
            icon: FaUsers
        },
        {
            title: "Transparent Pricing",
            description: "No hidden fees or surprise charges. Clear, upfront pricing that scales with your hiring needs and delivers measurable ROI.",
            icon: FaDollarSign
        },
        {
            title: "Scalable Workforce Models",
            description: "Flexible engagement models that adapt to your project timelines, budget constraints, and changing business requirements.",
            icon: FaExpand
        },
        {
            title: "High-Quality Matches",
            description: "95% placement success rate with rigorous vetting processes that ensure technical competency and cultural alignment.",
            icon: FaMedal
        }
    ];

    return (
        <div className="w-full bg-gradient-to-b from-gray-50 to-white py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#113F64] mb-6">
                        Why Companies Choose Protingent for Workforce Sourcing?
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        We don't just find talent—we build sustainable workforce solutions that grow with your business
                        and deliver consistent results year after year.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {whyChoosePoints.map((point, index) => {
                        const IconComponent = point.icon;
                        return (
                            <div
                                key={index}
                                className="group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-l-4 border-[#34969E] hover:border-[#C2D92C]"
                            >
                                <div className="mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-[#34969E] to-[#C2D92C] rounded-2xl flex items-center justify-center text-2xl mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
                                        <IconComponent className="text-white" />
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold mb-4 group-hover:text-[#34969E] transition-colors duration-300" style={{ color: '#113F64' }}>
                                    {point.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {point.description}
                                </p>

                                {/* Hover border accent */}
                                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#C2D92C] to-[#34969E] group-hover:w-full transition-all duration-500"></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

// --------------------------------------------------------------
// 9. Final CTA Section
// --------------------------------------------------------------
const FinalCTASection = ({ openPopup }: { openPopup: (config?: { title?: string; description?: string }) => void }) => {
    return (
        <section className="relative w-full py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#113F64] via-[#34969E] to-[#C2D92C]"></div>

            {/* Animated elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full float-animation"></div>
                <div className="absolute bottom-20 right-16 w-16 h-16 border border-[#C2D92C]/40 rotate-45 float-animation" style={{ animationDelay: '-2s' }}></div>
                <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/10 rounded-full float-animation" style={{ animationDelay: '-4s' }}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 text-center text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Save Time and Cost While Hiring Skilled Professionals?
                </h2>
                <p className="text-xl leading-relaxed mb-12 max-w-4xl mx-auto opacity-90">
                    Stop struggling with traditional recruitment challenges. Build your private talent pool today and access
                    pre-vetted professionals whenever you need them.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                    <button
                        onClick={() => openPopup({
                            title: "Start Building Your Talent Pool",
                            description: "Ready to revolutionize your hiring process? Let's discuss how direct sourcing can help you build a sustainable talent pipeline and reduce recruitment costs."
                        })}
                        className="group relative overflow-hidden px-12 py-6 bg-[#C2D92C] text-[#113F64] font-bold text-xl rounded-2xl hover:scale-105 transform transition-all shadow-2xl"
                    >
                        <span className="relative z-10 flex items-center gap-4">
                            Start Building Your Talent Pool
                            <FaUsers className="group-hover:rotate-12 transition-transform duration-300" />
                        </span>
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </button>

                    <button
                        onClick={() => openPopup({
                            title: "Schedule Consultation",
                            description: "Get expert advice on building your direct sourcing strategy. Schedule a free consultation to learn how we can transform your talent acquisition process."
                        })}
                        className="px-8 py-4 border-2 border-white/40 rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group text-white"
                    >
                        <span className="flex items-center gap-3">
                            <span>Schedule Consultation</span>
                            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                    </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { label: "Enterprise Clients", value: "500+" },
                        { label: "Talent Network", value: "50,000+" },
                        { label: "Avg. Time to Hire", value: "7 Days" },
                        { label: "Cost Savings", value: "40%" }
                    ].map((stat, index) => (
                        <div key={index} className="group">
                            <div className="text-3xl font-bold text-[#C2D92C] mb-2 group-hover:scale-110 transition-transform duration-300">
                                {stat.value}
                            </div>
                            <div className="text-sm opacity-80">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --------------------------------------------------------------
// Main Component
// --------------------------------------------------------------
export default function DirectSourcingService() {
    const { isOpen, config, openPopup, closePopup } = useConsultationPopup();

    return (
        <div className="bg-white w-full flex flex-col items-center gap-0 pb-12 md:pb-20 max-w-screen overflow-x-hidden">
            <DirectSourcingHeroSection openPopup={openPopup} />
            <ChallengeSection />
            <CTABannerSection openPopup={openPopup} />
            <ProcessSection />
            <HowItWorksSection />
            <BenefitsSection />
            <IndustriesSection />
            <WhyChooseSection />
            <FinalCTASection openPopup={openPopup} />

            <EnhancedFAQSection
                title="Frequently Asked Questions"
                description="Get answers to common questions about direct sourcing and how it can transform your talent acquisition strategy."
                FAQList={[
                    {
                        q: "What is direct sourcing and how does it differ from traditional recruitment?",
                        a: "Direct sourcing is a strategic talent acquisition model where businesses build and maintain their own private talent pools of pre-vetted candidates. Unlike traditional recruitment that starts the search process when a position opens, direct sourcing creates ongoing relationships with qualified professionals who are ready to engage when opportunities arise. This approach reduces time-to-hire from months to weeks and significantly lowers recruitment costs."
                    },
                    {
                        q: "How quickly can I access talent from my private talent pool?",
                        a: "Once your talent pool is established, you can typically access pre-vetted candidates within 3-7 days of posting a requirement. The initial pool building process takes 4-8 weeks depending on your specific requirements and industry vertical. Our ongoing engagement ensures candidates remain interested and available when opportunities arise."
                    },
                    {
                        q: "What industries and roles does Protingent specialize in for direct sourcing?",
                        a: "We specialize in IT & software development, engineering & product development, business intelligence & data analytics, managed IT & infrastructure, and emerging technologies like AI/ML and blockchain. Our expertise covers roles from individual contributors to senior leadership positions across these technical domains."
                    },
                    {
                        q: "How do you ensure the quality of candidates in my talent pool?",
                        a: "Every candidate undergoes our comprehensive 5-stage vetting process: initial screening, technical assessment, behavioral evaluation, reference checks, and cultural fit analysis. We maintain ongoing engagement through regular touchpoints, skill development opportunities, and career coaching to ensure candidates remain sharp and motivated."
                    },
                    {
                        q: "What are the cost savings compared to traditional recruitment methods?",
                        a: "Our clients typically see 30-50% reduction in overall recruitment costs through eliminated agency fees, reduced time-to-hire, and higher retention rates. The direct sourcing model also provides better budget predictability as you invest in building long-term talent relationships rather than paying premium rates for urgent hiring needs."
                    }
                ]}
            />

            {/* Consultation Popup */}
            <ConsultationPopup
                isOpen={isOpen}
                onClose={closePopup}
                title={config.title}
                description={config.description}
            />
        </div>
    );
}