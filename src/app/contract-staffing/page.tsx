"use client"
import React from "react";
import {
    EnhancedFAQSection,
    GeometricBackground,
    ConsultationPopup
} from "@/components";
import { useConsultationPopup } from '@/hooks/useConsultationPopup';
import { 
    FaUsers, 
    FaClock, 
    FaMoneyBillWave, 
    FaCheckCircle,
    FaRocket,
    FaHandshake,
    FaArrowRight,
    FaCogs,
    FaShieldAlt,
    FaChartLine,
    FaUserTie,
    FaGlobe,
    FaExchangeAlt,
    FaProjectDiagram,
    FaLaptopHouse,
    FaIndustry,
    FaSync,
    FaRobot,
    FaLaptopCode,
    FaHospital,
    FaUniversity,
    FaShoppingCart,
    FaSatelliteDish,
    FaAward,
    FaHandsHelping,
    FaEye,
    FaExpand,
    FaBullseye
} from 'react-icons/fa';

// Hero Section - 20% height reduction from full screen
const ContractStaffingHeroSection = ({ openPopup }: { openPopup: (config?: { title?: string; description?: string }) => void }) => {
    return (
        <section className="relative w-full min-h-[60vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center object-cover"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1638262052640-82e94d64664a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoYW5kc2hha2V8ZW58MHx8fHwxNzU3NjY4MDE0fDA&ixlib=rb-4.1.0&q=85')`,
                }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#113F64]/95 via-[#34969E]/90 to-[#C2D92C]/85"></div>
            
            {/* Floating geometric elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-24 h-24 border-2 border-white/30 rotate-45 animate-pulse"></div>
                <div className="absolute bottom-32 right-16 w-20 h-20 border-2 border-[#C2D92C]/40 rounded-full animate-bounce" style={{animationDelay: '-2s'}}></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-pulse" style={{animationDelay: '-1s'}}></div>
            </div>
            
            <div className="relative z-10 max-w-7xl container-responsive">
                <div className="grid-responsive-2 items-center">
                    {/* Content Side */}
                    <div className="text-white">
                        <h1 className="heading-xl mb-6 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent" style={{ fontFamily: 'Lato, sans-serif' }}>
                            Smart Contract Staffing
                            <span className="block text-[#C2D92C]">For Growing Teams</span>
                        </h1>
                        
                        <p className="body-lg mb-8 opacity-90" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            Protingent India provides flexible contract staffing solutions that help businesses scale quickly, 
                            access specialized skills on-demand, and maintain operational agility in rapidly changing markets.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-6 mb-8">
                            <button 
                                onClick={() => openPopup({
                                    title: "Scale Your Team Today",
                                    description: "Tell us about your contract staffing needs and we'll help you scale your team with the right talent."
                                })}
                                className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-[#34969E] to-[#113F64] hover:from-[#2d7a85] hover:to-[#0d2f4a] text-white font-bold text-lg rounded-full hover:scale-105 transform transition-all shadow-2xl min-h-[44px]"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    Scale Your Team Today
                                    <FaUsers className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                                </span>
                            </button>
                            
                            <button 
                                onClick={() => openPopup({
                                    title: "Schedule Consultation",
                                    description: "Book a free consultation with our contract staffing experts to discuss your specific requirements."
                                })}
                                className="px-8 py-4 border-2 border-white/40 rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group text-white min-h-[44px]"
                            >
                                <span className="flex items-center gap-3">
                                    <span>Schedule Consultation</span>
                                    <FaArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
                            </button>
                        </div>
                        
                        {/* Key Stats */}
                        <div className="grid-responsive-4 text-center">
                            {[
                                { icon: FaClock, label: "Faster Deployment", value: "50%" },
                                { icon: FaMoneyBillWave, label: "Cost Savings", value: "35%" },
                                { icon: FaUsers, label: "Expert Contractors", value: "2000+" },
                                { icon: FaCheckCircle, label: "Success Rate", value: "98%" }
                            ].map((stat, index) => {
                                const IconComponent = stat.icon;
                                return (
                                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                                        <IconComponent className="w-6 h-6 text-[#C2D92C] mb-2 mx-auto" />
                                        <div className="text-2xl font-bold">{stat.value}</div>
                                        <div className="text-sm opacity-80">{stat.label}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Image Side */}
                    <div className="relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                            <img
                                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxvZmZpY2V8ZW58MHx8fHwxNzU3NjY4MDE5fDA&ixlib=rb-4.1.0&q=85"
                                alt="Contract Staffing Team Collaboration"
                                className="w-full h-[400px] lg:h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#113F64]/60 via-transparent to-[#C2D92C]/20"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Section 1: Our Contract Staffing Solutions
const ContractStaffingSolutionsSection = () => {
    const solutions = [
        {
            title: "Contract-to-Hire",
            description: "Evaluate candidates through contract work before making full-time commitments, reducing hiring risks and ensuring perfect cultural fit.",
            icon: FaExchangeAlt,
            image: "https://images.unsplash.com/photo-1681505526188-b05e68c77582?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwzfHxjb250cmFjdCUyMHN0YWZmaW5nfGVufDB8fHx8MTc1NzY2ODAwOHww&ixlib=rb-4.1.0&q=85",
            color: "#34969E"
        },
        {
            title: "Project-Based Staffing",
            description: "Deploy specialized teams for specific projects with defined timelines, deliverables, and success metrics for optimal results.",
            icon: FaProjectDiagram,
            image: "https://images.unsplash.com/photo-1739285452621-59d92842fcc8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBoYW5kc2hha2V8ZW58MHx8fHwxNzU3NjY4MDE0fDA&ixlib=rb-4.1.0&q=85",
            color: "#C2D92C"
        },
        {
            title: "Short/Long Term Contracts",
            description: "Flexible contract durations from 3 months to 2+ years, perfectly aligned with your business cycles and project requirements.",
            icon: FaClock,
            image: "https://images.pexels.com/photos/7414275/pexels-photo-7414275.jpeg",
            color: "#34969E"
        },
        {
            title: "Remote/Hybrid Workforce",
            description: "Access global talent pools with remote and hybrid work arrangements that expand your reach beyond geographical boundaries.",
            icon: FaLaptopHouse,
            image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHw0fHxvZmZpY2V8ZW58MHx8fHwxNzU3NjY4MDE5fDA&ixlib=rb-4.1.0&q=85",
            color: "#C2D92C"
        },
        {
            title: "Specialized Industry Staffing",
            description: "Industry-specific expertise in healthcare, IT, manufacturing, finance, and more with deep domain knowledge and compliance.",
            icon: FaIndustry,
            image: "https://images.pexels.com/photos/7841420/pexels-photo-7841420.jpeg",
            color: "#34969E"
        },
        {
            title: "Workforce Replacement",
            description: "Seamless replacement services for temporary leaves, resignations, or urgent capacity needs with minimal disruption.",
            icon: FaSync,
            image: "https://images.pexels.com/photos/327540/pexels-photo-327540.jpeg",
            color: "#C2D92C"
        }
    ];

    return (
        <div className="relative w-full bg-gradient-to-b from-white to-gray-50 section-padding overflow-hidden">
            <GeometricBackground variant="secondary" intensity="light" />
            
            <div className="max-w-7xl container-responsive relative z-10">
                <div className="text-center mb-16">
                    <h2 className="heading-xl mb-6" style={{ color: '#113F64', fontFamily: 'Lato, sans-serif' }}>
                        Our Contract Staffing Solutions
                    </h2>
                    <p className="body-lg text-gray-600 max-w-4xl mx-auto" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Comprehensive staffing solutions designed to meet diverse business needs with flexibility, 
                        expertise, and seamless integration into your existing workflows.
                    </p>
                </div>

                <div className="grid-responsive-3">
                    {solutions.map((solution, index) => {
                        const IconComponent = solution.icon;
                        return (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-3xl transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-3 min-h-[380px]"
                            >
                                <div
                                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    style={{
                                        backgroundImage: `url('${solution.image}')`,
                                    }}
                                ></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-[#113F64]/90 via-[#34969E]/80 to-[#113F64]/90"></div>
                                
                                <div className="relative z-10 p-8 h-full text-white flex flex-col justify-between">
                                    <div>
                                        <div 
                                            className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg"
                                            style={{ backgroundColor: solution.color }}
                                        >
                                            <IconComponent className="text-[#113F64] w-6 h-6" />
                                        </div>
                                        
                                        <h3 className="heading-md mb-4" style={{ fontFamily: 'Lato, sans-serif' }}>
                                            {solution.title}
                                        </h3>
                                        <p className="text-white/90 body-md" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                            {solution.description}
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

// Section 2: Our Streamlined Approach
const StreamlinedApproachSection = () => {
    const processSteps = [
        {
            number: "01",
            title: "Requirement Analysis",
            description: "Deep dive into your business needs, project scope, skill requirements, and cultural fit to create precise job specifications.",
            image: "https://images.unsplash.com/photo-1551135049-8a33b5883817?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxjb250cmFjdCUyMHN0YWZmaW5nfGVufDB8fHx8MTc1NzY2ODAwOHww&ixlib=rb-4.1.0&q=85"
        },
        {
            number: "02",
            title: "AI-Powered Sourcing",
            description: "Leverage advanced AI algorithms to identify and match the best candidates from our extensive global talent network.",
            image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxvZmZpY2V8ZW58MHx8fHwxNzU3NjY4MDE5fDA&ixlib=rb-4.1.0&q=85"
        },
        {
            number: "03",
            title: "Comprehensive Screening",
            description: "Multi-stage evaluation including technical assessments, behavioral interviews, and reference verification for quality assurance.",
            image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwzfHxvZmZpY2V8ZW58MHx8fHwxNzU3NjY4MDE5fDA&ixlib=rb-4.1.0&q=85"
        },
        {
            number: "04",
            title: "Seamless Onboarding",
            description: "Structured onboarding process with proper documentation, system access setup, and team integration support.",
            image: "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg"
        },
        {
            number: "05",
            title: "Continuous Monitoring",
            description: "Regular performance reviews, feedback collection, and proactive issue resolution to ensure optimal productivity.",
            image: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg"
        },
        {
            number: "06",
            title: "Scalability Management",
            description: "Dynamic team scaling based on project demands with seamless addition or reduction of resources as needed.",
            image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHw0fHxvZmZpY2V8ZW58MHx8fHwxNzU3NjY4MDE5fDA&ixlib=rb-4.1.0&q=85"
        }
    ];

    return (
        <div className="relative w-full bg-white section-padding overflow-hidden">
            <GeometricBackground variant="tertiary" intensity="light" />
            
            <div className="max-w-7xl container-responsive relative z-10">
                <div className="text-center mb-16">
                    <h2 className="heading-xl mb-6" style={{ color: '#113F64', fontFamily: 'Lato, sans-serif' }}>
                        Our Streamlined Approach
                    </h2>
                    <p className="body-lg text-gray-600 max-w-4xl mx-auto" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        A systematic 6-step process that ensures efficient talent acquisition, seamless integration, 
                        and ongoing success for your contract staffing needs.
                    </p>
                </div>

                <div className="grid-responsive-3 gap-8">
                    {processSteps.map((step, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
                        >
                            {/* Large faded number in background */}
                            <div className="absolute top-4 right-4 text-8xl font-black text-gray-100 opacity-50 leading-none pointer-events-none">
                                {step.number}
                            </div>
                            
                            {/* Image */}
                            <div className="relative mb-6 rounded-2xl overflow-hidden shadow-lg">
                                <img
                                    src={step.image}
                                    alt={step.title}
                                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-[#34969E]/20 to-[#113F64]/20"></div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-[#34969E] to-[#C2D92C] rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                        {step.number}
                                    </div>
                                </div>
                                
                                <h3 className="heading-md mb-4 group-hover:text-[#34969E] transition-colors duration-300" style={{ fontFamily: 'Lato, sans-serif' }}>
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 body-md" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Section 3: Measurable Impact
const MeasurableImpactSection = () => {
    const stats = [
        {
            value: "45%",
            title: "Faster Workforce Deployment",
            description: "Accelerated hiring process reduces time-to-productivity and gets your projects moving quickly."
        },
        {
            value: "30-35%",
            title: "Lower Hiring Costs",
            description: "Reduced recruitment overhead, training costs, and employee benefits compared to traditional hiring."
        },
        {
            value: "100%",
            title: "Compliance Assurance",
            description: "Full regulatory compliance with labor laws, tax requirements, and industry-specific regulations."
        },
        {
            value: "60%",
            title: "Faster Access to Niche Expertise",
            description: "Quick deployment of specialized skills that would take months to recruit through traditional methods."
        }
    ];

    return (
        <div className="relative w-full section-padding" style={{ backgroundColor: '#113F64' }}>
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-20 w-64 h-64 bg-[#34969E]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-48 h-48 bg-[#C2D92C]/10 rounded-full blur-2xl"></div>
            </div>
            
            <div className="max-w-7xl container-responsive relative z-10">
                <div className="text-center mb-16">
                    <h2 className="heading-xl mb-6 text-white" style={{ fontFamily: 'Lato, sans-serif' }}>
                        Measurable Impact
                    </h2>
                    <p className="body-lg text-gray-300 max-w-4xl mx-auto" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Data-driven results that demonstrate the tangible benefits of our contract staffing solutions 
                        for businesses across industries.
                    </p>
                </div>

                <div className="grid-responsive-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="group relative bg-gradient-to-br from-[#34969E]/20 to-[#C2D92C]/10 rounded-3xl p-8 border border-white/10 hover:border-[#C2D92C]/30 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl backdrop-blur-sm"
                        >
                            <div className="text-center">
                                <div className="text-6xl lg:text-7xl font-black mb-4" style={{ color: '#C2D92C' }}>
                                    {stat.value}
                                </div>
                                <h3 className="heading-md mb-4 text-white group-hover:text-[#C2D92C] transition-colors duration-300" style={{ fontFamily: 'Lato, sans-serif' }}>
                                    {stat.title}
                                </h3>
                                <p className="text-gray-300 body-md" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                    {stat.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Section 4: Protingent Advantage
const ProtingentAdvantageSection = () => {
    const advantages = [
        {
            title: "AI-Powered Matching",
            description: "Advanced algorithms ensure perfect candidate-role alignment based on skills, experience, and cultural fit.",
            icon: FaRobot
        },
        {
            title: "Industry Expertise",
            description: "Deep domain knowledge across multiple industries with specialized recruitment teams and processes.",
            icon: FaAward
        },
        {
            title: "Flexible Engagement Models",
            description: "Customizable contract terms, pricing models, and service levels to match your specific business requirements.",
            icon: FaHandsHelping
        },
        {
            title: "Compliance Excellence",
            description: "100% adherence to labor laws, tax regulations, and industry standards with comprehensive documentation.",
            icon: FaShieldAlt
        },
        {
            title: "SLA-Driven Service",
            description: "Guaranteed service levels with defined response times, quality metrics, and performance benchmarks.",
            icon: FaEye
        },
        {
            title: "Global Partnerships",
            description: "Extensive network of talent partners worldwide enabling access to diverse skill sets and expertise.",
            icon: FaGlobe
        }
    ];

    return (
        <div className="relative w-full bg-gradient-to-b from-gray-50 to-white section-padding overflow-hidden">
            <GeometricBackground variant="primary" intensity="light" />
            
            <div className="max-w-7xl container-responsive relative z-10">
                <div className="text-center mb-16">
                    <h2 className="heading-xl mb-6" style={{ color: '#113F64', fontFamily: 'Lato, sans-serif' }}>
                        The Protingent Advantage
                    </h2>
                    <p className="body-lg text-gray-600 max-w-4xl mx-auto" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        What sets us apart in the contract staffing landscape - innovation, expertise, 
                        and unwavering commitment to your success.
                    </p>
                </div>

                <div className="grid-responsive-3 gap-8">
                    {advantages.map((advantage, index) => {
                        const IconComponent = advantage.icon;
                        return (
                            <div
                                key={index}
                                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                            >
                                <div className="w-16 h-16 bg-gradient-to-r from-[#34969E] to-[#C2D92C] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <IconComponent className="text-white w-6 h-6" />
                                </div>

                                <h3 className="heading-md mb-4 group-hover:text-[#34969E] transition-colors duration-300" style={{ fontFamily: 'Lato, sans-serif' }}>
                                    {advantage.title}
                                </h3>
                                <p className="text-gray-600 body-md" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                    {advantage.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

// Section 5: Industries We Serve
const IndustriesSection = () => {
    const industries = [
        {
            title: "Information Technology",
            description: "Software developers, data scientists, cybersecurity experts, and IT infrastructure specialists.",
            icon: FaLaptopCode,
            image: "https://images.pexels.com/photos/7841420/pexels-photo-7841420.jpeg"
        },
        {
            title: "Healthcare & Life Sciences",
            description: "Medical professionals, clinical researchers, healthcare administrators, and pharmaceutical experts.",
            icon: FaHospital,
            image: "https://images.pexels.com/photos/327540/pexels-photo-327540.jpeg"
        },
        {
            title: "Banking & Financial Services",
            description: "Financial analysts, risk managers, compliance officers, and investment professionals.",
            icon: FaUniversity,
            image: "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg"
        },
        {
            title: "Manufacturing & Engineering",
            description: "Process engineers, quality specialists, production managers, and technical consultants.",
            icon: FaIndustry,
            image: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg"
        },
        {
            title: "Retail & E-commerce",
            description: "Digital marketing experts, supply chain managers, customer experience specialists, and analysts.",
            icon: FaShoppingCart,
            image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHw0fHxvZmZpY2V8ZW58MHx8fHwxNzU3NjY4MDE5fDA&ixlib=rb-4.1.0&q=85"
        },
        {
            title: "Telecommunications",
            description: "Network engineers, 5G specialists, telecom analysts, and infrastructure architects.",
            icon: FaSatelliteDish,
            image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxvZmZpY2V8ZW58MHx8fHwxNzU3NjY4MDE5fDA&ixlib=rb-4.1.0&q=85"
        }
    ];

    return (
        <div className="relative w-full bg-white section-padding overflow-hidden">
            <GeometricBackground variant="secondary" intensity="light" />
            
            <div className="max-w-7xl container-responsive relative z-10">
                <div className="text-center mb-16">
                    <h2 className="heading-xl mb-6" style={{ color: '#113F64', fontFamily: 'Lato, sans-serif' }}>
                        Industries We Serve
                    </h2>
                    <p className="body-lg text-gray-600 max-w-4xl mx-auto" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Specialized contract staffing solutions across diverse industries, 
                        each with unique requirements and compliance standards.
                    </p>
                </div>

                <div className="grid-responsive-3 gap-8">
                    {industries.map((industry, index) => {
                        const IconComponent = industry.icon;
                        return (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-3xl transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-3"
                            >
                                <div
                                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    style={{
                                        backgroundImage: `url('${industry.image}')`,
                                    }}
                                ></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-[#113F64]/85 via-[#34969E]/75 to-[#113F64]/85"></div>
                                
                                <div className="relative z-10 p-8 h-full text-white flex flex-col justify-between min-h-[300px]">
                                    <div>
                                        <div className="w-16 h-16 bg-gradient-to-r from-[#34969E] to-[#C2D92C] rounded-2xl flex items-center justify-center text-2xl mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
                                            <IconComponent className="text-white w-6 h-6" />
                                        </div>
                                        
                                        <h3 className="heading-md mb-4" style={{ fontFamily: 'Lato, sans-serif' }}>
                                            {industry.title}
                                        </h3>
                                        <p className="text-white/90 body-md" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                            {industry.description}
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

// CTA Section
const CTASection = ({ openPopup }: { openPopup: (config?: { title?: string; description?: string }) => void }) => {
    return (
        <div className="relative w-full section-padding overflow-hidden">
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center object-cover"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1638262052640-82e94d64664a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoYW5kc2hha2V8ZW58MHx8fHwxNzU3NjY4MDE0fDA&ixlib=rb-4.1.0&q=85')`,
                }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#113F64]/95 via-[#34969E]/90 to-[#C2D92C]/85"></div>
            
            <div className="relative z-10 max-w-6xl container-responsive text-center text-white">
                <h2 className="heading-xl mb-6" style={{ fontFamily: 'Lato, sans-serif' }}>
                    Ready to Build Your
                    <span className="block text-[#C2D92C]">Flexible Workforce?</span>
                </h2>
                <p className="body-lg leading-relaxed mb-12 max-w-4xl mx-auto opacity-90" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    Connect with our contract staffing experts to discuss your specific needs and discover 
                    how we can help you build a more agile and cost-effective workforce.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <button 
                        onClick={() => openPopup({
                            title: "Start Your Contract Staffing Journey",
                            description: "Ready to build a flexible workforce? Tell us about your staffing needs and let's start your contract staffing journey together."
                        })}
                        className="px-12 py-4 bg-[#C2D92C] text-[#113F64] font-bold text-lg rounded-full hover:scale-105 transform transition-all shadow-2xl min-h-[44px]"
                    >
                        Start Your Contract Staffing Journey
                    </button>
                    
                    <button 
                        onClick={() => openPopup({
                            title: "Schedule Consultation",
                            description: "Book a free consultation with our contract staffing experts to discuss your specific requirements and workforce strategy."
                        })}
                        className="px-8 py-4 border-2 border-white/40 rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group text-white min-h-[44px]"
                    >
                        <span className="flex items-center gap-3">
                            <span>Schedule Consultation</span>
                            <FaArrowRight className="w-6 h-6 text-[#34969E] group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

// FAQ Section
const ContractStaffingFAQSection = () => {
    const faqs = [
        {
            q: "What is contract staffing and how does it differ from permanent hiring?",
            a: "Contract staffing involves hiring professionals for specific projects or predetermined time periods, typically 3-24 months. Unlike permanent hiring, contract staffing offers greater flexibility, faster deployment, and specialized skills access without long-term employment commitments."
        },
        {
            q: "What types of roles are best suited for contract staffing?",
            a: "Contract staffing works well for project-based roles, seasonal demands, specialized technical positions, temporary coverage, and roles requiring niche expertise. Common areas include IT development, digital marketing, engineering, consulting, and specialized business functions."
        },
        {
            q: "How quickly can Protingent deploy contract staff?",
            a: "Our extensive talent network allows us to deploy qualified contract professionals within 1-2 weeks for most roles. For highly specialized positions, deployment typically takes 2-4 weeks. Emergency staffing can often be arranged within 48-72 hours."
        },
        {
            q: "What are the cost benefits of contract staffing?",
            a: "Contract staffing reduces costs by 25-40% compared to permanent hiring. You save on recruitment costs, benefits, training, workspace, and long-term commitments. Pay only for productive work hours while accessing top-tier talent when needed."
        },
        {
            q: "How does Protingent ensure quality and performance of contract staff?",
            a: "We maintain rigorous screening processes including technical assessments, background checks, and reference validation. All contractors undergo performance monitoring, and we provide ongoing support to ensure project success and client satisfaction."
        },
        {
            q: "Can contract staff work remotely or in hybrid arrangements?",
            a: "Yes, we offer flexible work arrangements including fully remote, hybrid, and on-site options. Our global talent network enables access to skilled professionals regardless of geographical location, expanding your talent pool significantly."
        },
        {
            q: "What happens if a contract employee doesn't meet expectations?",
            a: "We provide replacement guarantees and will quickly source alternative candidates at no additional cost. Our ongoing monitoring and feedback processes help identify and address performance issues early to minimize disruption."
        },
        {
            q: "Do you handle compliance and legal requirements for contract staff?",
            a: "Yes, we manage all compliance aspects including labor law adherence, tax obligations, insurance requirements, and industry-specific regulations. Our legal team ensures 100% compliance to protect your business from any liability."
        }
    ];

    return (
        <div className="w-full section-padding">
            <EnhancedFAQSection
                title="Frequently Asked Questions"
                description="Get answers to common questions about our contract staffing services and how Protingent can help you build a flexible, cost-effective workforce."
                FAQList={faqs}
            />
        </div>
    );
};

// Main Component
export default function ContractStaffingService() {
    const { isOpen, config, openPopup, closePopup } = useConsultationPopup();

    return (
        <div className="bg-white w-full flex flex-col items-center gap-0 pb-12 md:pb-20">
            <ContractStaffingHeroSection openPopup={openPopup} />
            <ContractStaffingSolutionsSection />
            <StreamlinedApproachSection />
            <MeasurableImpactSection />
            <ProtingentAdvantageSection />
            <IndustriesSection />
            <CTASection openPopup={openPopup} />
            <ContractStaffingFAQSection />
            
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