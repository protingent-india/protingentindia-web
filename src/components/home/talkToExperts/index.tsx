"use client"
import React from 'react'
import {
    FaUserTie,
    FaUsers,
    FaChartLine,
    FaCheck,
    FaArrowRight,
    FaStar,
    FaClock,
    FaRocket
} from 'react-icons/fa';
import { ConsultationPopup } from '@/components';
import { useConsultationPopup } from '@/hooks/useConsultationPopup';

// -----------------------------------------------------------

const TalkToExpert = () => {
    const { isOpen, config, openPopup, closePopup } = useConsultationPopup();

    const pathwayData = [
        {
            id: 'expert-advice',
            title: "Need Expert Advice?",
            subtitle: "Get Strategic Guidance",
            description: "Tap into 25+ years of industry expertise for immediate solutions to your most pressing challenges.",
            benefits: [
                "25+ years experience across industries",
                "Industry-specific insights & strategies",
                "Free 30-minute consultation call"
            ],
            cta: "Schedule Expert Call",
            popup: {
                title: "Schedule Expert Call",
                description: "Connect with our senior experts for strategic guidance and immediate solutions to your business challenges."
            },
            icon: FaUserTie,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face",
            gradient: "from-[#113F64]/95 via-[#34969E]/90 to-[#113F64]/95",
            accentColor: "#34969E",
            featured: false
        },
        {
            id: 'dedicated-team',
            title: "Want A Dedicated Team?",
            subtitle: "Scale Your Operations",
            description: "Get hand-picked experts who integrate seamlessly with your business and start delivering results in 48 hours.",
            benefits: [
                "Hand-picked experts for your domain",
                "Flexible engagement models",
                "Start delivering in 48 hours"
            ],
            cta: "Want A Dedicated Team?",
            popup: {
                title: "Build Your Dedicated Team",
                description: "Tell us about your project requirements and we'll assemble a hand-picked team of experts for you."
            },
            icon: FaUsers,
            image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500&h=600&fit=crop&crop=faces",
            gradient: "from-[#113F64]/95 via-[#34969E]/90 to-[#113F64]/95",
            accentColor: "#C2D92C",
            featured: false
        },
        {
            id: 'business-consultation',
            title: "Need Business Consultation?",
            subtitle: "Transform Your Business",
            description: "Comprehensive business audit with custom roadmap and guaranteed ROI improvement strategies.",
            benefits: [
                "Complete business audit & analysis",
                "Custom growth roadmap delivery",
                "ROI improvement guarantee"
            ],
            cta: "Get Consultation",
            popup: {
                title: "Get Business Consultation",
                description: "Request a comprehensive business consultation with custom roadmap and ROI improvement strategies."
            },
            icon: FaChartLine,
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=600&fit=crop&crop=face",
            gradient: "from-[#113F64]/95 via-[#34969E]/90 to-[#113F64]/95",
            accentColor: "#113F64",
            featured: false
        }
    ];

    const trustSignals = [
        { icon: FaStar, value: "500+", label: "Happy Clients" },
        { icon: FaClock, value: "48hrs", label: "Quick Start" },
        { icon: FaRocket, value: "95%", label: "Success Rate" }
    ];

    return (
        <div className='w-full bg-gradient-to-br from-gray-50 to-white py-16 md:py-24 max-w-screen overflow-x-hidden'>
            {/* Main Content Container */}
            <div className='max-w-7xl mx-auto px-4 md:px-6'>
                {/* Header Section */}
                <div className='text-center mb-16'>
                    <div className='inline-block px-6 py-3 bg-gradient-to-r from-[#34969E]/10 to-[#C2D92C]/10 rounded-full border border-[#34969E]/20 mb-6 hover:border-[#34969E]/30 transition-all duration-300'>
                        <span className='text-[#34969E] font-semibold text-lg' style={{ fontFamily: 'Lato' }}>
                            Choose Your Success Path
                        </span>
                    </div>

                    <h2 className='text-3xl md:text-4xl lg:text-6xl font-bold mb-6 leading-tight' style={{ color: '#113F64', fontFamily: 'Lato' }}>
                        Ready to Transform Your Business?
                        <span className='block text-[#34969E]'>We Have 3 Ways to Help</span>
                    </h2>

                    <p className='text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed' style={{ fontFamily: 'Raleway' }}>
                        From expert guidance to dedicated teams, choose the path that accelerates your growth and drives measurable results.
                    </p>
                </div>

                {/* Pathways Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
                    {pathwayData.map((pathway, index) => {
                        const IconComponent = pathway.icon;
                        return (
                            <div
                                key={pathway.id}
                                className={`group relative overflow-hidden rounded-3xl transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-3`}
                            >
                                {/* Professional Background Image */}
                                <div
                                    className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
                                    style={{
                                        backgroundImage: `url('${pathway.image}')`,
                                    }}
                                ></div>

                                {/* Enhanced Gradient Overlay for Better Contrast */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${pathway.gradient} transition-opacity duration-300`}></div>

                                {/* Subtle Geometric Pattern Overlay */}
                                <div
                                    className="absolute inset-0 opacity-10"
                                    style={{
                                        backgroundImage: `radial-gradient(circle at 25% 25%, ${pathway.accentColor} 2px, transparent 2px), 
                                                         radial-gradient(circle at 75% 75%, white 3px, transparent 3px)`,
                                        backgroundSize: '60px 60px, 80px 80px'
                                    }}
                                ></div>

                                {/* Card Content */}
                                <div className='relative z-10 p-8 lg:p-10 h-full text-white min-h-[500px] flex flex-col justify-between'>
                                    {/* Header */}
                                    <div>
                                        <div className='mb-6'>
                                            <div
                                                className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-3xl mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-xl border border-white/30"
                                            >
                                                <IconComponent className="text-white" />
                                            </div>
                                        </div>

                                        <div className='mb-2'>
                                            <h3 className='text-2xl lg:text-3xl font-bold mb-2' style={{ fontFamily: 'Lato' }}>
                                                {pathway.title}
                                            </h3>
                                            <div className="text-lg font-semibold mb-4 text-[#C2D92C]" style={{ fontFamily: 'Lato' }}>
                                                {pathway.subtitle}
                                            </div>
                                        </div>

                                        <p className='text-white/95 leading-relaxed mb-6 text-lg font-medium' style={{ fontFamily: 'Raleway' }}>
                                            {pathway.description}
                                        </p>

                                        {/* Benefits List */}
                                        <div className='space-y-3 mb-8'>
                                            {pathway.benefits.map((benefit, idx) => (
                                                <div key={idx} className='flex items-start space-x-3'>
                                                    <div className="flex-shrink-0 w-5 h-5 bg-[#C2D92C] rounded-full flex items-center justify-center mt-1">
                                                        <FaCheck className="w-3 h-3 text-[#113F64]" />
                                                    </div>
                                                    <span className='text-white/95 leading-relaxed font-medium' style={{ fontFamily: 'Raleway' }}>
                                                        {benefit}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* CTA Button */}
                                    <div>
                                        <button
                                            onClick={() => openPopup(pathway.popup)}
                                            className="w-full px-6 py-3 bg-gradient-to-r from-[#34969E] to-[#113F64] hover:from-[#2d7a85] hover:to-[#0d2f4a] text-white border-none rounded-full font-bold text-lg transition-all duration-300 transform group-hover:scale-105 shadow-lg hover:shadow-xl"
                                            style={{ fontFamily: 'Lato' }}
                                        >
                                            <span className='flex items-center justify-center space-x-3'>
                                                <span>{pathway.cta}</span>
                                                <FaArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300' />
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Trust Signals */}
                <div className='bg-white rounded-3xl p-8 shadow-lg border border-gray-100'>
                    <div className='text-center mb-6'>
                        <p className='text-gray-600 text-lg' style={{ fontFamily: 'Raleway' }}>
                            Trusted by businesses worldwide
                        </p>
                    </div>

                    <div className='flex flex-wrap justify-center items-center gap-8 md:gap-16'>
                        {trustSignals.map((signal, index) => {
                            const IconComponent = signal.icon;
                            return (
                                <div key={index} className='text-center group'>
                                    <div className='flex items-center justify-center space-x-3'>
                                        <div className='w-12 h-12 bg-gradient-to-r from-[#34969E] to-[#C2D92C] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                                            <IconComponent className='w-6 h-6 text-white' />
                                        </div>
                                        <div className='text-left'>
                                            <div className='text-3xl font-bold text-[#113F64]' style={{ fontFamily: 'Lato' }}>
                                                {signal.value}
                                            </div>
                                            <div className='text-gray-600 text-sm' style={{ fontFamily: 'Raleway' }}>
                                                {signal.label}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Additional CTA Banner */}
                <div className='mt-16 text-center'>
                    <a
                        href="tel:+91 141 299 0687"
                        className='inline-block px-8 py-4 bg-gradient-to-r from-[#113F64] to-[#34969E] rounded-full text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 cursor-pointer'
                    >
                        <span className='text-lg font-semibold flex items-center space-x-3' style={{ fontFamily: 'Lato' }}>
                            <FaRocket className="w-5 h-5" />
                            <span>Not sure which path is right for you? Let's talk!</span>
                        </span>
                    </a>
                </div>
            </div>

            {/* Consultation Popup */}
            <ConsultationPopup
                isOpen={isOpen}
                onClose={closePopup}
                title={config.title}
                description={config.description}
            />
        </div>
    )
}

export default TalkToExpert;