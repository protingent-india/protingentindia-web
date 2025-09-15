"use client"
import { useState, useEffect, useRef } from "react";
import {
    EnhancedFAQSection,
    CommonHeading,
    GeometricBackground
} from "@/components";
import { 
    FaChartLine, 
    FaBullseye, 
    FaUsers, 
    FaCogs, 
    FaRocket,
    FaLightbulb,
    FaHandshake,
    FaArrowRight,
    FaCheckCircle,
    FaSearch,
    FaBullhorn,
    FaShare,
    FaRobot,
    FaUserFriends,
    FaHeartbeat,
    FaUtensils,
    FaLaptopCode,
    FaHome,
    FaShoppingCart,
    FaGraduationCap,
    FaTools,
    FaChartBar,
    FaCode,
    FaPlay,
    FaEye,
    FaMousePointer,
    FaAward,
    FaThumbsUp,
    FaGlobe
} from 'react-icons/fa';

// --------------------------------------------------------------
// Hero Section with Mandatory Background Image
// --------------------------------------------------------------
const MarketingHeroSection = () => {
    return (
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden">
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
                <div className="absolute bottom-32 right-16 w-16 h-16 border border-[#34969E]/50 rounded-full float-animation" style={{animationDelay: '-2s'}}></div>
                <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-[#C2D92C]/30 rotate-12 float-animation" style={{animationDelay: '-4s'}}></div>
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

// --------------------------------------------------------------
// Challenge Section with Mandatory Images on Each Card
// --------------------------------------------------------------
const ChallengeSection = () => {
    const challenges = [
        {
            title: "Unclear ROI",
            description: "Marketing spend increases, but the revenue is still uncertain.",
            image: "https://images.unsplash.com/photo-1705846973668-0e9ed382ea8f",
            icon: FaChartLine
        },
        {
            title: "Scattered Efforts",
            description: "Multiple vendors, disconnected tools, no unified strategy.",
            image: "https://images.unsplash.com/photo-1646394828039-0802101e1053",
            icon: FaCogs
        },
        {
            title: "Low Conversion Rates",
            description: "Traffic comes in, but leads don't turn into paying customers.",
            image: "https://images.pexels.com/photos/33820159/pexels-photo-33820159.jpeg",
            icon: FaMousePointer
        },
        {
            title: "Scaling Struggles",
            description: "Campaigns that work at a small scale fail when the business grows.",
            image: "https://images.unsplash.com/photo-1652359282381-63624506739c",
            icon: FaRocket
        },
        {
            title: "Lack of Real-Time Insights",
            description: "Decisions rely on guesswork instead of data-driven clarity.",
            image: "https://images.unsplash.com/photo-1664526937033-fe2c11f1be25",
            icon: FaEye
        }
    ];

    return (
        <div className="relative w-full bg-gradient-to-b from-white to-gray-50 py-16 md:py-24 overflow-hidden">
            <GeometricBackground variant="tertiary" intensity="light" />
            
            <div className="max-w-[1450px] mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#113F64' }}>
                        The Challenge We Solve
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Approx. 75% of marketing strategies fail to give results. Businesses that invest in digital marketing services lack campaign direction, scattered strategies, and uncertain ROI.
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
                                style={{animationDelay: '1s'}}
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

// --------------------------------------------------------------
// Solutions Section with Mandatory Background Images on Cards
// --------------------------------------------------------------
const SolutionsSection = () => {
    const solutions = [
        {
            title: "Strategy & Consulting",
            description: "We study your market, understand your customers, and craft clear roadmaps that help you grow with focus and confidence.",
            image: "https://images.unsplash.com/photo-1646394828039-0802101e1053",
            icon: FaBullseye,
            features: ["Market Analysis", "Customer Research", "Growth Roadmap"]
        },
        {
            title: "Performance Marketing",
            description: "From SEO to PPC, we design campaigns that attract the right audience and turn clicks into measurable business growth.",
            image: "https://images.unsplash.com/photo-1664526937033-fe2c11f1be25",
            icon: FaRocket,
            features: ["SEO Optimization", "PPC Campaigns", "Conversion Tracking"]
        },
        {
            title: "Content & Social",
            description: "We create stories, visuals, and conversations that connect with your audience, build trust, and keep your brand top of mind.",
            image: "https://images.unsplash.com/photo-1705846973668-0e9ed382ea8f",
            icon: FaShare,
            features: ["Content Strategy", "Social Media", "Brand Storytelling"]
        },
        {
            title: "Automation & Analytics",
            description: "Our dashboards, email workflows, and CRM tools give you clarity so every decision is guided by data, not guesswork.",
            image: "https://images.pexels.com/photos/7948065/pexels-photo-7948065.jpeg",
            icon: FaRobot,
            features: ["Marketing Automation", "Analytics Dashboard", "CRM Integration"]
        },
        {
            title: "Scalable Teams",
            description: "Need more professionals on the team? Our on-demand marketing experts plug right into your team, ensuring campaigns never stall or lose momentum.",
            image: "https://images.unsplash.com/photo-1652359282381-63624506739c",
            icon: FaUserFriends,
            features: ["Expert Teams", "On-Demand Scaling", "Seamless Integration"]
        }
    ];

    return (
        <div className="w-full bg-white py-16 md:py-24">
            <div className="max-w-[1450px] mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#113F64' }}>
                        End-to-End Marketing Solutions
                        <span className="block text-[#34969E]">That Help You Scale</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                        Tap into insightful marketing services designed on strategies, creative, and BI analytics basis to make every campaign work on a measurable scale. 
                        Protingent India curates impactful solutions that fit and align with business goals.
                    </p>
                </div>

                {/* Asymmetric grid with image-rich cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {solutions.map((solution, index) => {
                        const IconComponent = solution.icon;
                        return (
                            <div
                                key={index}
                                className={`group relative overflow-hidden rounded-3xl transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-2 ${
                                    index === 0 ? 'lg:col-span-2' : ''
                                }`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* MANDATORY: Full background image for each card */}
                                <div
                                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    style={{
                                        backgroundImage: `url('${solution.image}')`,
                                    }}
                                ></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-[#113F64]/95 via-[#34969E]/85 to-[#113F64]/95"></div>
                                
                                <div className="relative z-10 p-8 lg:p-12 h-full text-white min-h-[300px] flex flex-col justify-between">
                                    <div>
                                        {/* Icon */}
                                        <div className="mb-6">
                                            <div 
                                                className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-xl"
                                                style={{ backgroundColor: '#C2D92C' }}
                                            >
                                                <IconComponent className="text-[#113F64]" />
                                            </div>
                                        </div>
                                        
                                        <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                                            {solution.title}
                                        </h3>
                                        <p className="text-white/90 leading-relaxed mb-6 text-lg">
                                            {solution.description}
                                        </p>
                                    </div>
                                    
                                    {/* Features */}
                                    <div>
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {solution.features.map((feature, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm border border-white/30"
                                                >
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                        
                                        {/* Learn More button */}
                                        <button className="flex items-center gap-2 text-[#C2D92C] font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 hover:gap-3">
                                            <span>Learn More</span>
                                            <FaArrowRight className="text-sm" />
                                        </button>
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
// Results Section with Mandatory Large Image Visualization
// --------------------------------------------------------------
const ResultsSection = () => {
    const results = [
        {
            icon: FaChartLine,
            title: "Clarity on ROI",
            description: "Every rupee spent is tracked, so you see exactly how marketing drives revenue.",
            metric: "300%",
            metricLabel: "Average ROI Increase"
        },
        {
            icon: FaRocket,
            title: "Faster Growth",
            description: "Data-driven campaigns help you scale faster without burning money on guesswork.",
            metric: "60%",
            metricLabel: "Faster Time-to-Market"
        },
        {
            icon: FaAward,
            title: "Stronger Brand Presence",
            description: "Content and social engagement that make your brand memorable and trusted.",
            metric: "200%",
            metricLabel: "Brand Engagement Up"
        },
        {
            icon: FaThumbsUp,
            title: "Smarter Decisions",
            description: "Real-time analytics dashboards keep you in control of your strategy.",
            metric: "95%",
            metricLabel: "Data-Driven Decisions"
        },
        {
            icon: FaGlobe,
            title: "Flexibility to Scale",
            description: "On-demand teams and services that grow with your business needs.",
            metric: "24/7",
            metricLabel: "Team Availability"
        }
    ];

    return (
        <div className="w-full bg-gradient-to-br from-gray-50 to-white py-16 md:py-24">
            <div className="max-w-[1450px] mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#113F64' }}>
                        Actionable Marketing Results
                        <span className="block text-[#34969E]">That Matter to You</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                        Insightful and actionable marketing strategies that promise impeccable results and massive growth. 
                        We plan to make your business success measurable and sustainable.
                    </p>
                </div>

                {/* Split screen layout with large image visualization */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                    {/* Left Side (40%) - MANDATORY: Animated dashboard mockup image */}
                    <div className="lg:col-span-2 relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1664526937033-fe2c11f1be25"
                                alt="Analytics Dashboard"
                                className="w-full h-[400px] lg:h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-[#113F64]/60 via-transparent to-[#34969E]/40"></div>
                            
                            {/* Interactive data points */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="grid grid-cols-2 gap-6 text-white text-center">
                                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                                        <div className="text-3xl font-bold text-[#C2D92C]">300%</div>
                                        <div className="text-sm">ROI Growth</div>
                                    </div>
                                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                                        <div className="text-3xl font-bold text-[#C2D92C]">95%</div>
                                        <div className="text-sm">Client Retention</div>
                                    </div>
                                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                                        <div className="text-3xl font-bold text-[#C2D92C]">60%</div>
                                        <div className="text-sm">Faster Growth</div>
                                    </div>
                                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                                        <div className="text-3xl font-bold text-[#C2D92C]">24/7</div>
                                        <div className="text-sm">Support</div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Flowing connection lines */}
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                <div className="absolute top-1/4 left-1/4 w-20 h-20 border-2 border-[#C2D92C]/30 rounded-full animate-pulse"></div>
                                <div className="absolute bottom-1/4 right-1/4 w-16 h-16 border-2 border-[#34969E]/40 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side (60%) - Results with background pattern */}
                    <div className="lg:col-span-3 relative">
                        {/* MANDATORY: Subtle pattern background image */}
                        <div
                            className="absolute inset-0 opacity-5 bg-repeat"
                            style={{
                                backgroundImage: `url('https://images.pexels.com/photos/33820159/pexels-photo-33820159.jpeg')`,
                                backgroundSize: '100px 100px'
                            }}
                        ></div>
                        
                        <div className="relative z-10 space-y-8">
                            {results.map((result, index) => {
                                const IconComponent = result.icon;
                                return (
                                    <div
                                        key={index}
                                        className="group flex items-start gap-6 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        {/* Icon + Metric */}
                                        <div className="flex-shrink-0 text-center">
                                            <div 
                                                className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-2 transition-all duration-300 group-hover:scale-110 shadow-lg"
                                                style={{ backgroundColor: index % 2 === 0 ? '#34969E' : '#C2D92C' }}
                                            >
                                                <IconComponent className="text-white" />
                                            </div>
                                            <div className="text-2xl font-bold text-[#113F64]">{result.metric}</div>
                                            <div className="text-xs text-gray-500">{result.metricLabel}</div>
                                        </div>
                                        
                                        {/* Content */}
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold mb-2 text-[#113F64] group-hover:text-[#34969E] transition-colors duration-300">
                                                {result.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                {result.description}
                                            </p>
                                        </div>
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

// --------------------------------------------------------------
// Team Section with Mandatory Full-Width Background Image
// --------------------------------------------------------------
const TeamSection = () => {
    return (
        <div className="relative w-full py-16 md:py-24 overflow-hidden">
            {/* MANDATORY: Full-width abstract team visualization image */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1652359282381-63624506739c')`,
                }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#113F64]/95 via-[#34969E]/90 to-[#113F64]/95"></div>
            
            {/* Animated connection lines between nodes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <svg className="w-full h-full opacity-20" viewBox="0 0 1200 600">
                    <defs>
                        <linearGradient id="teamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#C2D92C" />
                            <stop offset="50%" stopColor="#34969E" />
                            <stop offset="100%" stopColor="#C2D92C" />
                        </linearGradient>
                    </defs>
                    {/* Network nodes representing team collaboration */}
                    <circle cx="200" cy="150" r="8" fill="url(#teamGradient)" className="animate-pulse" />
                    <circle cx="400" cy="200" r="6" fill="url(#teamGradient)" className="animate-pulse" style={{animationDelay: '0.5s'}} />
                    <circle cx="600" cy="120" r="10" fill="url(#teamGradient)" className="animate-pulse" style={{animationDelay: '1s'}} />
                    <circle cx="800" cy="180" r="7" fill="url(#teamGradient)" className="animate-pulse" style={{animationDelay: '1.5s'}} />
                    <circle cx="1000" cy="140" r="9" fill="url(#teamGradient)" className="animate-pulse" style={{animationDelay: '2s'}} />
                    
                    {/* Connection lines */}
                    <line x1="200" y1="150" x2="400" y2="200" stroke="url(#teamGradient)" strokeWidth="2" opacity="0.6" />
                    <line x1="400" y1="200" x2="600" y2="120" stroke="url(#teamGradient)" strokeWidth="2" opacity="0.6" />
                    <line x1="600" y1="120" x2="800" y2="180" stroke="url(#teamGradient)" strokeWidth="2" opacity="0.6" />
                    <line x1="800" y1="180" x2="1000" y2="140" stroke="url(#teamGradient)" strokeWidth="2" opacity="0.6" />
                </svg>
            </div>
            
            <div className="relative z-10 max-w-[1450px] mx-auto px-4 md:px-6 text-center text-white">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    We are The Team Behind
                    <span className="block text-[#C2D92C]">Your Growth Story</span>
                </h2>
                <p className="text-xl leading-relaxed mb-12 max-w-4xl mx-auto opacity-90">
                    Protingent India is a top marketing agency that combines strategy, technology, and people to turn those promises into growth. 
                    We don't just run campaigns, but build systems that keep delivering, month after month.
                </p>
                
                {/* Team highlights grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mt-16">
                    {[
                        { 
                            icon: FaCogs, 
                            title: "End-to-End Execution", 
                            desc: "From research and planning to campaign launch and optimization, everything happens under one roof."
                        },
                        { 
                            icon: FaChartBar, 
                            title: "Data at the Core", 
                            desc: "Our BI and analytics expertise ensures your marketing isn't guesswork—it's guided by insights."
                        },
                        { 
                            icon: FaAward, 
                            title: "Industry Experience", 
                            desc: "From startups to large enterprises, across healthcare, F&B, IT, and more, we've scaled brands in multiple industries."
                        },
                        { 
                            icon: FaUsers, 
                            title: "Scalable Teams", 
                            desc: "Staff augmentation gives you access to experts exactly when you need them, without overhead."
                        },
                        { 
                            icon: FaHandshake, 
                            title: "Long-Term Focus", 
                            desc: "We prioritize sustainable growth, not just short-term spikes in traffic or clicks."
                        }
                    ].map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <div
                                key={index}
                                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div 
                                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-4 mx-auto transition-all duration-300 group-hover:scale-110 shadow-lg"
                                    style={{ backgroundColor: '#C2D92C' }}
                                >
                                    <IconComponent className="text-[#113F64]" />
                                </div>
                                <h3 className="text-lg font-bold mb-3 text-[#C2D92C]">
                                    {item.title}
                                </h3>
                                <p className="text-white/80 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

// --------------------------------------------------------------
// Industries Section with Mandatory Unique Images per Card
// --------------------------------------------------------------
const IndustriesSection = () => {
    const industries = [
        {
            icon: FaHeartbeat,
            title: "Healthcare & Life Sciences",
            description: "Building patient trust and brand credibility while staying compliant.",
            image: "https://images.unsplash.com/photo-1626123080782-10b336a160b4",
            accentColor: "#34969E"
        },
        {
            icon: FaUtensils,
            title: "Food & Beverage",
            description: "Driving visibility and loyalty in a fast-moving consumer market.",
            image: "https://images.unsplash.com/photo-1646394828039-0802101e1053",
            accentColor: "#C2D92C"
        },
        {
            icon: FaLaptopCode,
            title: "Information Technology & SaaS",
            description: "Turning complex solutions into simple, compelling stories.",
            image: "https://images.unsplash.com/photo-1705846973668-0e9ed382ea8f",
            accentColor: "#34969E"
        },
        {
            icon: FaHome,
            title: "Real Estate",
            description: "Generating qualified leads and trust in high-investment decisions.",
            image: "https://images.unsplash.com/photo-1664526937033-fe2c11f1be25",
            accentColor: "#C2D92C"
        },
        {
            icon: FaShoppingCart,
            title: "E-Commerce & Retail",
            description: "Converting traffic into repeat customers through performance-driven campaigns.",
            image: "https://images.unsplash.com/photo-1652359282381-63624506739c",
            accentColor: "#34969E"
        },
        {
            icon: FaGraduationCap,
            title: "Education & E-Learning",
            description: "Designing digital journeys that attract learners and strengthen reputation.",
            image: "https://images.unsplash.com/photo-1623410439361-22ac19216577",
            accentColor: "#C2D92C"
        },
        {
            icon: FaTools,
            title: "Engineering",
            description: "Positioning technical innovations in ways that resonate with decision-makers.",
            image: "https://images.pexels.com/photos/33820159/pexels-photo-33820159.jpeg",
            accentColor: "#34969E"
        },
        {
            icon: FaChartBar,
            title: "BI & Analytics",
            description: "Showcasing the value of data-driven intelligence to drive adoption and business impact.",
            image: "https://images.pexels.com/photos/7948065/pexels-photo-7948065.jpeg",
            accentColor: "#C2D92C"
        },
        {
            icon: FaCode,
            title: "Developer Ecosystem",
            description: "Helping developer-focused brands engage communities, build trust, and grow adoption.",
            image: "https://images.unsplash.com/photo-1626123080782-10b336a160b4",
            accentColor: "#34969E"
        }
    ];

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
                    {industries.map((industry, index) => {
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
                    <button className="modern-btn group relative overflow-hidden">
                        <span className="relative z-10">Check More Marketing Solutions for Your Industry</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#C2D92C] to-[#34969E] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                </div>
            </div>
        </div>
    );
};

// --------------------------------------------------------------
// CTA Section with Mandatory Dynamic Gradient Mesh Background
// --------------------------------------------------------------
const CTASection = () => {
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
                <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-white/40 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-[#C2D92C]/20 rotate-45 animate-pulse" style={{animationDelay: '2s'}}></div>
                <div className="absolute bottom-1/3 left-1/4 w-20 h-20 border-2 border-[#34969E]/40 rotate-12 animate-pulse" style={{animationDelay: '3s'}}></div>
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

// --------------------------------------------------------------
// FAQ Section with Enhanced Design
// --------------------------------------------------------------
const MarketingFAQSection = () => {
    const faqs = [
        {
            q: "How can a marketing agency help my business grow revenue?",
            a: "A marketing agency drives business growth by combining digital strategy, SEO, paid advertising, and content marketing to attract qualified leads. Protingent India focuses on measurable results boosting visibility, improving conversions, and building customer loyalty. With data-driven campaigns and performance tracking, we ensure every marketing dollar works harder, turning engagement into consistent revenue growth."
        },
        {
            q: "What makes Protingent India different from other digital marketing agencies?",
            a: "Protingent India offers end-to-end solutions; such as strategy, performance marketing, content, and BI analytics. We blend creativity with data-driven insights to design campaigns that scale. Our flexible staff augmentation services model ensures you get the right team when you need it. We don't just deliver clicks; we build conversion-focused strategies that help businesses grow faster and smarter across industries."
        },
        {
            q: "Do you provide end-to-end marketing solutions or just campaign execution?",
            a: "We see marketing more than just executing a campaign. We include all elements of marketing from market research to digital strategy, SEO, paid advertising, social media, and marketing automation. Protingent India is a complete marketing solution. Our ecosystem ensures that every aspect of your marketing - content, analytics, and performance marketing is integrated to drive growth. Clients come to us because we provide a complete solution that helps them to scale revenue, optimize ROI, and create sustained visibility for their brand."
        },
        {
            q: "How long does it take to see measurable results from digital marketing?",
            a: "The outcomes of digital marketing strategies rely on your business goals and strategy. Results from SEO usually take 3–6 months whereas paid ads and performance campaigns can yield measurable ROI in weeks. Protingent India has clients that want to balance the short-term wins of lead generation with the long-term growth of organic visibility. We've integrated strategic analytics and performance tracking so that you will be able to measure progress, optimize campaigns, and scale revenue faster."
        },
        {
            q: "Can you customize marketing strategies for startups, SMBs, and large enterprises?",
            a: "There is no one-size-fits-all approach for any business. Startups need lean and rapid-growth strategies, SMBs need scalable and adaptable solutions, and enterprise businesses are looking for advanced marketing automation and analytics. Protingent India creates tailored strategies to be successful at every stage, for example from brand awareness, to getting qualified leads, and then optimizing your set-it-and-forget-it enterprise-level campaigns. Our flexible solutions are built to fit the current size of your business; while also preparing you for scalability and future growth."
        },
        {
            q: "Do you also offer staff augmentation or flexible team support for marketing projects?",
            a: "Protingent India offers staff augmentation - tapping into full cadres of marketing talent when needed. Whether you need SEO specialists, PPC managers, content strategists or BI analysts, we offer staffing models that fit technical, engagement or performance-based projects as well as long-term growth. This also helps reduce costs for businesses as they can access specialist talent while eliminating unnecessary, permanent payroll overhead. Clients appreciate flexibility if we need to scale a team to meet a workload they may need to do that without making more permanent hires."
        },
        {
            q: "What industries do you specialize in serving with your marketing solutions?",
            a: "We serve multiple industries including healthcare, IT & SaaS, e-commerce, education, real estate, and food & beverage. Beyond industries, we also specialize in business intelligence analytics, engineering, and developer ecosystems. Each industry has its own set of challenges whether compliance, lead generation, or community engagement. Protingent India creates customized marketing strategies for your industry to ensure your campaigns reach the appropriate audience, draw qualified leads, and drive sustainable growth."
        }
    ];

    return (
        <EnhancedFAQSection
            title="Frequently Asked Questions"
            description="Get answers to common questions about our marketing solutions and how Protingent India can help you achieve sustainable business growth through data-driven marketing strategies."
            FAQList={faqs}
        />
    );
};

// --------------------------------------------------------------
// Main Marketing Solutions Page Component
// --------------------------------------------------------------
export default function MarketingSolutionsService() {
    return (
        <div className="bg-white w-full flex flex-col items-center gap-0 pb-12 md:pb-20">
            <MarketingHeroSection />
            <ChallengeSection />
            <SolutionsSection />
            <ResultsSection />
            <TeamSection />
            <IndustriesSection />
            <CTASection />
            
            <MarketingFAQSection />
        </div>
    );
}