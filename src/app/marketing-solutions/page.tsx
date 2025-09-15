"use client"
import React from "react";
import {
    EnhancedFAQSection,
    GeometricBackground,
    ConsultationPopup
} from "@/components";
import { useConsultationPopup } from '@/hooks/useConsultationPopup';
import { 
    FaChartLine, 
    FaBullseye, 
    FaUsers, 
    FaCogs, 
    FaRocket,
    FaHandshake,
    FaArrowRight,
    FaCheckCircle,
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

// Hero Section - 20% height reduction: was h-[600px], now h-[480px] for lg
const MarketingHeroSection = ({ openPopup }: { openPopup: (config?: { title?: string; description?: string }) => void }) => {
    return (
        <section className="relative w-full min-h-[60vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden">
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat object-cover"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1626123080782-10b336a160b4')`,
                }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#C2D92C]/60 via-[#34969E]/70 to-[#113F64]/80"></div>
            
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-20 h-20 border border-[#C2D92C]/40 rotate-45 animate-pulse"></div>
                <div className="absolute bottom-32 right-16 w-16 h-16 border border-[#34969E]/50 rounded-full animate-pulse"></div>
            </div>
            
            <div className="relative z-10 text-center text-white max-w-4xl container-responsive">
                <h1 className="heading-xl mb-4 md:mb-6 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent leading-tight">
                    Digital Marketing Services
                    <span className="block text-[#C2D92C]">To Grow Your Business</span>
                </h1>
                
                <p className="body-lg mb-6 md:mb-8 max-w-3xl mx-auto opacity-90">
                    Protingent India delivers ROI-driven marketing services to businesses that generate heavy traffic and higher conversion possibilities. 
                    We have a team of skilled Martech professionals who execute strategic and insightful SEO, performance marketing, social media, and content strategy that enable growth.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button 
                        onClick={() => openPopup({
                            title: "Connect for Free Consultation",
                            description: "Ready to grow your business with data-driven marketing? Let's discuss how our digital marketing solutions can help you scale faster and smarter."
                        })}
                        className="px-8 py-4 bg-[#C2D92C] text-[#113F64] font-bold rounded-lg hover:bg-[#34969E] hover:text-white transition-all duration-300"
                    >
                        Connect for Free Consultation
                    </button>
                </div>
                
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
        </section>
    );
};

// Challenge Section
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
        <div className="relative w-full bg-gradient-to-b from-white to-gray-50 section-padding overflow-hidden">
            <GeometricBackground variant="tertiary" intensity="light" />
            
            <div className="max-w-[1450px] container-responsive relative z-10">
                <div className="text-center mb-16">
                    <h2 className="heading-xl mb-6" style={{ color: '#113F64' }}>
                        The Challenge We Solve
                    </h2>
                    <p className="body-lg text-gray-600 max-w-3xl mx-auto">
                        Approx. 75% of marketing strategies fail to give results. Businesses that invest in digital marketing services lack campaign direction, scattered strategies, and uncertain ROI.
                    </p>
                </div>

                <div className="grid-responsive-3 relative z-10">
                    {challenges.map((challenge, index) => {
                        const IconComponent = challenge.icon;
                        return (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-2xl transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-3"
                            >
                                <div
                                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    style={{
                                        backgroundImage: `url('${challenge.image}')`,
                                    }}
                                ></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-[#113F64]/90 via-[#34969E]/80 to-[#113F64]/90"></div>
                                
                                <div className="relative z-10 p-8 h-full text-white min-h-[280px]">
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
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

// Solutions Section
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
        <div className="w-full bg-white section-padding">
            <div className="max-w-[1450px] container-responsive">
                <div className="text-center mb-16">
                    <h2 className="heading-xl mb-6" style={{ color: '#113F64' }}>
                        End-to-End Marketing Solutions
                        <span className="block text-[#34969E]">That Help You Scale</span>
                    </h2>
                    <p className="body-lg text-gray-600 max-w-4xl mx-auto">
                        Tap into insightful marketing services designed on strategies, creative, and BI analytics basis to make every campaign work on a measurable scale. 
                        Protingent India curates impactful solutions that fit and align with business goals.
                    </p>
                </div>

                <div className="grid-responsive-3">
                    {solutions.map((solution, index) => {
                        const IconComponent = solution.icon;
                        return (
                            <div
                                key={index}
                                className={`group relative overflow-hidden rounded-3xl transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-2 ${
                                    index === 0 ? 'lg:col-span-2' : ''
                                }`}
                            >
                                <div
                                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    style={{
                                        backgroundImage: `url('${solution.image}')`,
                                    }}
                                ></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-[#113F64]/95 via-[#34969E]/85 to-[#113F64]/95"></div>
                                
                                <div className="relative z-10 p-8 lg:p-12 h-full text-white min-h-[300px] flex flex-col justify-between">
                                    <div>
                                        <div className="mb-6">
                                            <div 
                                                className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-xl"
                                                style={{ backgroundColor: '#C2D92C' }}
                                            >
                                                <IconComponent className="text-[#113F64]" />
                                            </div>
                                        </div>
                                        
                                        <h3 className="heading-md mb-4">
                                            {solution.title}
                                        </h3>
                                        <p className="text-white/90 leading-relaxed body-md mb-6">
                                            {solution.description}
                                        </p>
                                    </div>
                                    
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

// Actionable Marketing Results Section
const ActionableResultsSection = () => {
    const results = [
        {
            title: "ROI Clarity",
            description: "Every rupee spent is tracked, so you see exactly how marketing drives revenue.",
            icon: FaChartLine,
            color: "#C2D92C"
        },
        {
            title: "Faster Growth",
            description: "Data-driven campaigns help you scale faster without burning money on guesswork.",
            icon: FaRocket,
            color: "#34969E"
        },
        {
            title: "Stronger Brand Presence",
            description: "Content and social engagement that make your brand memorable and trusted.",
            icon: FaAward,
            color: "#C2D92C"
        },
        {
            title: "Smarter Decisions",
            description: "Real-time analytics dashboards keep you in control of your strategy.",
            icon: FaBullseye,
            color: "#34969E"
        },
        {
            title: "Flexibility to Scale",
            description: "On-demand teams and services that grow with your business needs.",
            icon: FaUsers,
            color: "#C2D92C"
        }
    ];

    return (
        <div className="relative w-full section-padding overflow-hidden">
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center object-cover"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1551836022-d5d88e9218df')`,
                }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#113F64]/95 via-[#34969E]/90 to-[#113F64]/95"></div>
            
            <div className="relative z-10 max-w-[1450px] container-responsive text-white">
                <div className="text-center mb-16">
                    <h2 className="heading-xl mb-6">
                        Actionable Marketing Results
                        <span className="block text-[#C2D92C]">That Matter to You</span>
                    </h2>
                    <p className="body-lg leading-relaxed max-w-4xl mx-auto opacity-90">
                        Insightful and actionable marketing strategies that promise impeccable results and massive growth. 
                        We plan to make your business success measurable and sustainable.
                    </p>
                </div>

                <div className="grid-responsive-3">
                    {results.map((result, index) => {
                        const IconComponent = result.icon;
                        return (
                            <div
                                key={index}
                                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 transition-all duration-500 hover:bg-white/20 hover:-translate-y-2 hover:shadow-2xl border border-white/20"
                            >
                                <div className="mb-6">
                                    <div 
                                        className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg"
                                        style={{ backgroundColor: result.color }}
                                    >
                                        <IconComponent className="text-[#113F64]" />
                                    </div>
                                </div>
                                
                                <h3 className="heading-sm mb-4" style={{ color: result.color }}>
                                    {result.title}
                                </h3>
                                <p className="text-white/90 leading-relaxed body-md">
                                    {result.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

// Team Behind Your Growth Story Section
const TeamStorySection = () => {
    const teamPillars = [
        {
            title: "End-to-End Execution",
            description: "From research and planning to campaign launch and optimization, everything happens under one roof.",
            icon: FaCogs
        },
        {
            title: "Data at the Core",
            description: "Our BI and analytics expertise ensures your marketing isn't guesswork—it's guided by insights.",
            icon: FaChartBar
        },
        {
            title: "Industry Experience",
            description: "From startups to large enterprises, across healthcare, F&B, IT, and more, we've scaled brands in multiple industries.",
            icon: FaGlobe
        },
        {
            title: "Scalable Teams",
            description: "Staff augmentation gives you access to experts exactly when you need them, without overhead.",
            icon: FaUserFriends
        },
        {
            title: "Long-Term Focus",
            description: "We prioritize sustainable growth, not just short-term spikes in traffic or clicks.",
            icon: FaThumbsUp
        }
    ];

    return (
        <div className="w-full bg-gradient-to-b from-gray-50 to-white section-padding">
            <div className="max-w-[1450px] container-responsive">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image Side */}
                    <div className="relative">
                        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                                alt="Professional business team"
                                className="w-full h-[500px] object-cover transition-transform duration-500 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#113F64]/20 to-transparent"></div>
                        </div>
                        
                        {/* Floating elements */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#C2D92C] rounded-2xl rotate-12 opacity-20"></div>
                        <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-[#34969E] rounded-full opacity-20"></div>
                    </div>
                    
                    {/* Content Side */}
                    <div>
                        <h2 className="heading-xl mb-6" style={{ color: '#113F64' }}>
                            We are The Team Behind
                            <span className="block text-[#34969E]">Your Growth Story</span>
                        </h2>
                        <p className="body-lg text-gray-600 mb-12 leading-relaxed">
                            Protingent India is a top marketing agency that combines strategy, technology, and people to turn those promises into growth. 
                            We don't just run campaigns, but build systems that keep delivering, month after month.
                        </p>
                        
                        <div className="space-y-8">
                            {teamPillars.map((pillar, index) => {
                                const IconComponent = pillar.icon;
                                return (
                                    <div key={index} className="flex items-start gap-4 group">
                                        <div 
                                            className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110"
                                            style={{ backgroundColor: index % 2 === 0 ? '#34969E' : '#C2D92C' }}
                                        >
                                            <IconComponent className="text-lg" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2 group-hover:text-[#34969E] transition-colors duration-300" style={{ color: '#113F64' }}>
                                                {pillar.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                {pillar.description}
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

// Industries We Market Section
const IndustriesSection = () => {
    const industries = [
        {
            title: "Healthcare & Life Sciences",
            description: "Building patient trust and brand credibility while staying compliant.",
            icon: FaHeartbeat,
            color: "#34969E"
        },
        {
            title: "Food & Beverage",
            description: "Driving visibility and loyalty in a fast-moving consumer market.",
            icon: FaUtensils,
            color: "#C2D92C"
        },
        {
            title: "Information Technology & SaaS",
            description: "Turning complex solutions into simple, compelling stories.",
            icon: FaLaptopCode,
            color: "#34969E"
        },
        {
            title: "Real Estate",
            description: "Generating qualified leads and trust in high-investment decisions.",
            icon: FaHome,
            color: "#C2D92C"
        },
        {
            title: "E-Commerce & Retail",
            description: "Converting traffic into repeat customers through performance-driven campaigns.",
            icon: FaShoppingCart,
            color: "#34969E"
        },
        {
            title: "Education & E-Learning",
            description: "Designing digital journeys that attract learners and strengthen reputation.",
            icon: FaGraduationCap,
            color: "#C2D92C"
        },
        {
            title: "Engineering",
            description: "Positioning technical innovations in ways that resonate with decision-makers.",
            icon: FaTools,
            color: "#34969E"
        },
        {
            title: "BI & Analytics",
            description: "Showcasing the value of data-driven intelligence to drive adoption and business impact.",
            icon: FaChartBar,
            color: "#C2D92C"
        },
        {
            title: "Developer Ecosystem",
            description: "Helping developer-focused brands engage communities, build trust, and grow adoption.",
            icon: FaCode,
            color: "#34969E"
        }
    ];

    return (
        <div className="w-full bg-white section-padding">
            <div className="max-w-[1450px] container-responsive">
                <div className="text-center mb-16">
                    <h2 className="heading-xl mb-6" style={{ color: '#113F64' }}>
                        We Market Every Business
                        <span className="block text-[#34969E]">Across Industries</span>
                    </h2>
                    <p className="body-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Every industry has its own challenges. What works for healthcare won't work for F&B, and what drives IT leads won't resonate in real estate. 
                        Protingent India brings industry-specific expertise to ensure your campaigns connect with the right audience and deliver measurable results.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((industry, index) => {
                        const IconComponent = industry.icon;
                        return (
                            <div
                                key={index}
                                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 hover:border-[#34969E]/30"
                            >
                                <div className="mb-6">
                                    <div 
                                        className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg"
                                        style={{ backgroundColor: industry.color }}
                                    >
                                        <IconComponent className="text-white" />
                                    </div>
                                </div>
                                
                                <h3 className="text-xl font-bold mb-4 group-hover:text-[#34969E] transition-colors duration-300" style={{ color: '#113F64' }}>
                                    {industry.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {industry.description}
                                </p>
                                
                                {/* Hover indicator */}
                                <div className="flex items-center gap-2 mt-6 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300" style={{ color: industry.color }}>
                                    <span>Learn More</span>
                                    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                                </div>
                            </div>
                        );
                    })}
                </div>
                
                <div className="text-center mt-16">
                    <button className="px-8 py-4 bg-[#34969E] text-white font-bold rounded-full hover:bg-[#113F64] transition-all duration-300 hover:scale-105 shadow-lg">
                        Check More Marketing Solutions for Your Industry
                    </button>
                </div>
            </div>
        </div>
    );
};

// CTA Section
const CTASection = ({ openPopup }: { openPopup: (config?: { title?: string; description?: string }) => void }) => {
    return (
        <div className="relative w-full section-padding overflow-hidden">
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center object-cover"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1623410439361-22ac19216577')`,
                }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#113F64]/95 via-[#34969E]/90 to-[#C2D92C]/85"></div>
            
            <div className="relative z-10 max-w-[1450px] container-responsive text-center text-white">
                <h2 className="heading-xl mb-6">
                    Connect and Let Us Together
                    <span className="block text-[#C2D92C]">Grow Your Business</span>
                </h2>
                <p className="body-lg leading-relaxed mb-12 max-w-4xl mx-auto opacity-90">
                    Stop getting frustrated from marketing campaigns that do not deliver results. 
                    Protingent India will help design engaging and result-driven marketing strategies for scalability.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <button 
                        onClick={() => openPopup({
                            title: "Start Your Growth Journey",
                            description: "Ready to transform your marketing and accelerate growth? Let's create a customized marketing strategy that delivers measurable results for your business."
                        })}
                        className="px-12 py-4 bg-[#C2D92C] text-[#113F64] font-bold text-lg rounded-full hover:scale-105 transform transition-all shadow-2xl"
                    >
                        Start Your Growth Journey
                    </button>
                    
                    <button 
                        onClick={() => openPopup({
                            title: "Schedule Free Consultation",
                            description: "Get expert marketing advice tailored to your business. Schedule a free consultation to discover how we can help you achieve your growth goals."
                        })}
                        className="px-8 py-4 border-2 border-white/40 rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group text-white"
                    >
                        <span className="flex items-center gap-3">
                            <span>Schedule Free Consultation</span>
                            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                    </button>
                </div>
                
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

// FAQ Section - CRITICAL: This section must be visible and functional
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
            q: "What industries do you specialize in serving with your marketing solutions?",
            a: "We serve multiple industries including healthcare, IT & SaaS, e-commerce, education, real estate, and food & beverage. Beyond industries, we also specialize in business intelligence analytics, engineering, and developer ecosystems. Each industry has its own set of challenges whether compliance, lead generation, or community engagement. Protingent India creates customized marketing strategies for your industry to ensure your campaigns reach the appropriate audience, draw qualified leads, and drive sustainable growth."
        },
        {
            q: "Do you also offer staff augmentation or flexible team support for marketing projects?",
            a: "Protingent India offers staff augmentation - tapping into full cadres of marketing talent when needed. Whether you need SEO specialists, PPC managers, content strategists or BI analysts, we offer staffing models that fit technical, engagement or performance-based projects as well as long-term growth. This also helps reduce costs for businesses as they can access specialist talent while eliminating unnecessary, permanent payroll overhead. Clients appreciate flexibility if we need to scale a team to meet a workload they may need to do that without making more permanent hires."
        }
    ];

    return (
        <div className="w-full section-padding">
            <EnhancedFAQSection
                title="Frequently Asked Questions"
                description="Get answers to common questions about our marketing solutions and how Protingent India can help you achieve sustainable business growth through data-driven marketing strategies."
                FAQList={faqs}
            />
        </div>
    );
};

// Main Marketing Solutions Page Component
export default function MarketingSolutionsService() {
    const { isOpen, config, openPopup, closePopup } = useConsultationPopup();
    
    return (
        <div className="bg-white w-full flex flex-col items-center gap-0 pb-12 md:pb-20 max-w-screen overflow-x-hidden">
            <MarketingHeroSection openPopup={openPopup} />
            <ChallengeSection />
            <SolutionsSection />
            <ActionableResultsSection />
            <TeamStorySection />
            <IndustriesSection />
            <CTASection openPopup={openPopup} />
            <MarketingFAQSection />
            
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