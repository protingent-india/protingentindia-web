"use client";
import React, { useState, useEffect } from 'react';
import { EnhancedFAQSection, GeometricBackground, ConsultationPopup } from "@/components";
import { useConsultationPopup } from '@/hooks/useConsultationPopup';
import Image from 'next/image';
import {
    FaChartBar, FaDatabase, FaBell, FaUsers, FaBrain, FaPalette,
    FaSync, FaCog, FaPlug, FaLifeRing, FaArrowRight, FaPlay,
    FaMicrosoft, FaGoogle, FaClock, FaSitemap, FaCube, FaGlobe,
    FaRocket, FaShieldAlt, FaMobile, FaCloud, FaCheck, FaStar
} from 'react-icons/fa';

// --------------------------------------------------------------

// Hero Section
const HeroSection = ({ openPopup }: { openPopup: (config?: { title?: string; description?: string }) => void }) => {
    const [animatedStats, setAnimatedStats] = useState({ roi: 0, speed: 0, service: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimatedStats(prev => ({
                roi: prev.roi < 127 ? prev.roi + 3 : 127,
                speed: prev.speed < 5 ? prev.speed + 0.1 : 5,
                service: prev.service < 48 ? prev.service + 1 : 48
            }));
        }, 50);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full min-h-[45vh] lg:min-h-[55vh] py-8 overflow-hidden">
            {/* Background Gradient Mesh */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy-800 via-teal-600 to-lime-400 opacity-90"></div>

            {/* Animated Chart Lines/Dots */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-64 h-64 opacity-20">
                    <svg viewBox="0 0 200 200" className="w-full h-full animate-pulse">
                        <path d="M20,150 Q50,100 100,120 T180,80" stroke="#C2D92C" strokeWidth="2" fill="none" className="animate-pulse" />
                        <circle cx="50" cy="120" r="4" fill="#34969E" className="animate-bounce" />
                        <circle cx="100" cy="120" r="4" fill="#C2D92C" className="animate-bounce" style={{ animationDelay: '0.5s' }} />
                        <circle cx="150" cy="90" r="4" fill="#113F64" className="animate-bounce" style={{ animationDelay: '1s' }} />
                    </svg>
                </div>
                <div className="absolute bottom-20 right-20 w-48 h-48 opacity-15">
                    <svg viewBox="0 0 150 150" className="w-full h-full animate-spin" style={{ animationDuration: '20s' }}>
                        <circle cx="75" cy="75" r="60" stroke="#34969E" strokeWidth="2" fill="none" strokeDasharray="10,5" />
                        <circle cx="75" cy="75" r="40" stroke="#C2D92C" strokeWidth="2" fill="none" strokeDasharray="5,10" />
                        <circle cx="75" cy="75" r="20" stroke="#113F64" strokeWidth="2" fill="none" />
                    </svg>
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8" data-aos="fade-right">
                        <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
                            Result-Driven Decisions with
                            <span className="bg-gradient-to-r from-lime-400 to-teal-300 bg-clip-text text-transparent"> BI Data Visualization</span> Services
                        </h1>

                        <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-2xl">
                            Bring all scattered data together into simplified dashboards with Data Visualization Services. Protingent India delivers end-to-end business intelligence consulting, including Power BI, Tableau, and other BI tools expertise to take data-driven insights and fast decision-making for businesses to meet performance goals and efficiency.
                        </p>

                        <button
                            onClick={() => openPopup({
                                title: "Check Our Demo Dashboard",
                                description: "Experience the power of our BI data visualization platform. See how we can transform your data into actionable insights and stunning visual dashboards."
                            })}
                            className="group relative px-12 py-6 bg-gradient-to-r from-lime-400 to-teal-500 text-navy-800 font-bold text-xl rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center">
                                <FaPlay className="mr-3" />
                                Check Our Demo Dashboard
                                <FaArrowRight className="ml-3 transform group-hover:translate-x-2 transition-transform duration-300" />
                            </span>
                            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                        </button>
                    </div>

                    {/* Right Dashboard Preview */}
                    <div className="relative" data-aos="fade-left">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white p-8">
                            <Image
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85"
                                alt="BI Dashboard Preview"
                                width={600}
                                height={400}
                                className="w-full h-80 object-cover rounded-2xl"
                            />
                            <div className="absolute inset-8 bg-gradient-to-br from-navy-600/80 to-teal-500/60 rounded-2xl"></div>
                        </div>

                        {/* Floating KPI Cards */}
                        <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-2xl p-4 animate-float" data-aos="zoom-in" data-aos-delay="200">
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-lime-400 to-teal-500 rounded-full flex items-center justify-center">
                                    <FaChartBar className="text-white text-xl" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-navy-800">{Math.round(animatedStats.roi)}%</div>
                                    <div className="text-sm text-gray-600">ROI Retained</div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-2xl p-4 animate-float" data-aos="zoom-in" data-aos-delay="400" style={{ animationDelay: '2s' }}>
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-navy-600 rounded-full flex items-center justify-center">
                                    <FaRocket className="text-white text-xl" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-navy-800">{animatedStats.speed.toFixed(1)}×</div>
                                    <div className="text-sm text-gray-600">Faster Decisions</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// ROI Stats Section
const ROIStatsSection = () => {
    const stats = [
        {
            value: "127%",
            title: "ROI Retained",
            description: "Tableau customers see a 127% ROI, according to an independent study by Forrester Consulting.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85"
        },
        {
            value: "5×",
            title: "Decision Speed (5× faster)",
            description: "Organizations with high BI adoption are 5 times more likely to make faster, better-informed decisions.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85"
        },
        {
            value: "48%",
            title: "Improved Customer Service",
            description: "Businesses improved customer experience after adopting dashboard development services.",
            image: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85"
        }
    ];

    return (
        <section className="w-full py-20 bg-white relative">
            <GeometricBackground variant="primary" intensity="light" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl lg:text-5xl font-black text-navy-800 mb-6">
                        Data-Driven Insights and Dashboards That Pay Back ROI
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-lime-400 to-teal-500 rounded-full mx-auto mb-6"></div>
                    <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                        We can turn the data insights into competitive-edge business impacts. The simple dashboards represent organized data that drives industry leaders to take value-driven decisions for business growth.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            {/* Background Image */}
                            <div className="relative h-48">
                                <Image
                                    src={stat.image}
                                    alt={stat.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-navy-800/80 to-teal-600/60"></div>
                            </div>

                            {/* Content */}
                            <div className="relative p-8">
                                <div className="text-5xl font-black text-navy-800 mb-4">{stat.value}</div>
                                <h3 className="text-xl font-bold text-navy-800 mb-4">{stat.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{stat.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Core BI Capabilities Section - Fixed Split Layout (No Inner Scroll)
const CoreCapabilitiesSection = () => {
    const capabilities = [
        {
            number: "01",
            title: "Dashboard Design & Development",
            description: "Interactive dashboards simplify complex datasets into easy-to-read visuals, highlight KPIs, and uncover trends. Data visualization brings clarity, enabling leaders to explore metrics in real time and make confident, result-driven decisions.",
            icon: FaChartBar,
            tags: ["Interactive", "Real-time", "KPIs"]
        },
        {
            number: "02",
            title: "Data Integration & Modeling",
            description: "Data from multiple sources is integrated into a unified model for consistency and accuracy. Standardized structures ensure error-free analytics, streamline reporting, and deliver a single, reliable version of truth across departments.",
            icon: FaDatabase,
            tags: ["Unified", "Consistent", "Reliable"]
        },
        {
            number: "03",
            title: "Real-Time Reporting & Alerts",
            description: "Live dashboards and automated reports deliver instant updates on business performance. Real-time alerts flag anomalies, track critical KPIs, and empower decision-makers to respond faster, minimizing risks and maximizing opportunities.",
            icon: FaBell,
            tags: ["Live", "Automated", "Instant"]
        },
        {
            number: "04",
            title: "Self-Service BI Enablement",
            description: "Business teams access intuitive dashboards and generate reports without technical support. Self-service BI reduces IT dependency, accelerates decision cycles, and allows users to explore insights independently, driving agility across the organization.",
            icon: FaUsers,
            tags: ["Intuitive", "Independent", "Agile"]
        },
        {
            number: "05",
            title: "Predictive & Advanced Analytics",
            description: "Predictive analytics applies AI and machine learning to identify future trends and behaviors. Forecasting models uncover sales opportunities, predict risks, and guide proactive strategies, ensuring businesses stay ahead with competitive insights.",
            icon: FaBrain,
            tags: ["AI", "ML", "Predictive"]
        },
        {
            number: "06",
            title: "Custom Data Visualization Solutions",
            description: "Tailored visualizations transform raw data into interactive maps, charts, and infographics designed for specific industries. Custom-built dashboards enhance storytelling, reveal hidden patterns, and deliver meaningful insights aligned with business objectives.",
            icon: FaPalette,
            tags: ["Custom", "Tailored", "Interactive"]
        },
        {
            number: "07",
            title: "Migration & Modernization Services",
            description: "Legacy BI tools and spreadsheets transition into modern platforms like Power BI or Tableau. Migration ensures faster performance, user-friendly dashboards, and improved scalability, empowering organizations with future-ready business intelligence solutions.",
            icon: FaSync,
            tags: ["Modern", "Scalable", "Fast"]
        },
        {
            number: "08",
            title: "Data Preparation & Transformation",
            description: "Raw data undergoes cleaning, transformation, and enrichment before analysis. Structured datasets eliminate redundancies, improve accuracy, and ensure dashboards reflect trusted insights for reliable reporting and strategic decision-making.",
            icon: FaCog,
            tags: ["Clean", "Accurate", "Trusted"]
        },
        {
            number: "09",
            title: "Embedded Analytics",
            description: "Dashboards and reports integrate seamlessly into existing business applications, CRMs, and portals. Embedded analytics provides insights directly within workflows, improving user adoption and enabling smarter decisions without switching platforms.",
            icon: FaPlug,
            tags: ["Embedded", "Seamless", "Workflow"]
        },
        {
            number: "10",
            title: "Ongoing Support & Optimization",
            description: "Continuous monitoring enhances dashboard performance, improves load times, and ensures accuracy. Ongoing optimization adapts visualizations to evolving needs, while training programs drive user adoption and maximize BI investment value.",
            icon: FaLifeRing,
            tags: ["Support", "Optimization", "Training"]
        }
    ];

    return (
        <section className="w-full py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Split Layout Container */}
                <div className="flex flex-col lg:flex-row gap-12 relative">
                    {/* Left Panel - Fixed/Sticky (40% width) */}
                    <div className="lg:w-2/5 lg:sticky lg:top-20 lg:self-start lg:h-fit" data-aos="fade-right">
                        <div className="space-y-8 lg:pr-8">
                            <h2 className="text-4xl lg:text-5xl font-black text-navy-800 leading-tight" style={{ fontFamily: 'Lato' }}>
                                Our Core BI & Data Visualization Capabilities
                            </h2>
                            <div className="w-20 h-1 bg-gradient-to-r from-lime-400 to-teal-500 rounded-full"></div>
                            <p className="text-xl text-gray-700 leading-relaxed" style={{ fontFamily: 'Raleway' }}>
                                A complete suite of BI services that unify data, design interactive dashboards, and deliver real-time insights—helping businesses simplify decision-making, improve efficiency, and stay ahead with data-driven strategies.
                            </p>

                            {/* Decorative Stats Card */}
                            <div className="relative mt-12">
                                <div className="absolute -top-4 -left-4 w-16 h-16 bg-lime-400/20 rounded-full animate-pulse"></div>
                                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-teal-500/30 rounded-full animate-bounce"></div>
                                <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg border border-gray-100">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-lime-400 to-teal-500 rounded-full flex items-center justify-center">
                                            <FaChartBar className="text-white text-xl" />
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-navy-800">10+</div>
                                            <div className="text-sm text-gray-600">Core Capabilities</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel - Natural Scroll (60% width) */}
                    <div className="lg:w-3/5" data-aos="fade-left">
                        <div className="space-y-8">
                            {capabilities.map((capability, index) => {
                                const IconComponent = capability.icon;
                                return (
                                    <div
                                        key={index}
                                        className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-transparent hover:border-lime-400/20 overflow-hidden"
                                        data-aos="fade-up"
                                        data-aos-delay={index * 100}
                                        style={{
                                            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)'
                                        }}
                                    >
                                        {/* Background Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-lime-50/50 via-transparent to-teal-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                        {/* Number Badge */}
                                        <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-lime-400 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                                            {capability.number}
                                        </div>

                                        {/* Content Container */}
                                        <div className="relative z-10">
                                            {/* Icon */}
                                            <div className="w-20 h-20 bg-gradient-to-br from-navy-600 to-teal-500 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl">
                                                <IconComponent className="text-white text-3xl" />
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-2xl font-bold text-navy-800 mb-4 group-hover:text-teal-600 transition-colors duration-300" style={{ fontFamily: 'Lato' }}>
                                                {capability.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-gray-600 leading-relaxed mb-6 text-lg" style={{ fontFamily: 'Raleway' }}>
                                                {capability.description}
                                            </p>

                                            {/* Feature Tags */}
                                            <div className="flex flex-wrap gap-3">
                                                {capability.tags.map((tag, tagIndex) => (
                                                    <span
                                                        key={tagIndex}
                                                        className="px-4 py-2 bg-gradient-to-r from-lime-100 to-teal-100 text-navy-700 text-sm font-semibold rounded-full border border-lime-400/30 hover:shadow-md transition-shadow duration-300"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Hover Arrow Indicator */}
                                            <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
                                                <FaArrowRight className="text-lime-400 text-xl" />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Custom Dashboard Solutions Section
const CustomDashboardSection = () => {
    const dashboards = [
        {
            title: "Strategic Leadership Dashboard",
            description: "Presents high-level business KPIs, trends, and executive summaries, empowering senior leaders to monitor organizational health at a glance and guide strategic decisions.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
            metrics: ["KPIs", "Trends", "Executive Summary"]
        },
        {
            title: "Financial Performance Dashboard",
            description: "Tracks revenue, expenses, margins, and cash flow in real time, simplifying financial analysis to spot budget variances and optimize fiscal performance.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
            metrics: ["Revenue", "Expenses", "Cash Flow"]
        },
        {
            title: "Sales & Marketing Insights Dashboard",
            description: "Visualizes sales funnels, campaign ROI, and customer segments, enabling teams to evaluate performance, optimize spend, and target growth opportunities.",
            image: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
            metrics: ["Sales Funnel", "Campaign ROI", "Customer Segments"]
        },
        {
            title: "Operations & Supply Chain Dashboard",
            description: "Displays inventory, production cycles, and logistic metrics highlighting bottlenecks, improving forecasting, and boosting operational efficiency.",
            image: "https://images.unsplash.com/photo-1558655146-d09347e92766?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
            metrics: ["Inventory", "Production", "Logistics"]
        }
    ];

    return (
        <section className="w-full py-20 bg-white relative">
            <GeometricBackground variant="secondary" intensity="light" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl lg:text-5xl font-black text-navy-800 mb-6">
                        Custom Designed Dashboard Solutions for Business Needs
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-lime-400 to-teal-500 rounded-full mx-auto mb-6"></div>
                    <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                        Select from purpose-built dashboard solutions that offer clarity, real-time insights, and strategic impact—built to address key business needs swiftly and effectively.
                    </p>
                </div>

                {/* Dashboard Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {dashboards.map((dashboard, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                            data-aos="fade-up"
                            data-aos-delay={index * 150}
                        >
                            {/* Preview Image */}
                            <div className="relative h-64">
                                <Image
                                    src={dashboard.image}
                                    alt={dashboard.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-navy-600/70 to-teal-500/50 group-hover:from-navy-700/80 group-hover:to-teal-600/60 transition-colors duration-500"></div>

                                {/* Hover Overlay */}
                                <div className="hidden absolute inset-0 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <button className="px-6 py-3 bg-white text-navy-800 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                                        View Dashboard
                                    </button>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-navy-800 mb-4 group-hover:text-teal-600 transition-colors duration-300">
                                    {dashboard.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {dashboard.description}
                                </p>

                                {/* Key Metrics Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {dashboard.metrics.map((metric, metricIndex) => (
                                        <span
                                            key={metricIndex}
                                            className="px-3 py-1 bg-gradient-to-r from-lime-400/20 to-teal-500/20 text-navy-700 text-sm font-semibold rounded-full border border-lime-400/30"
                                        >
                                            {metric}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// BI Platforms Section
const BIPlatformsSection = () => {
    const platforms = [
        {
            name: "Power BI",
            description: "AI-driven dashboards combine data from multiple sources into dynamic reports. Power BI provides real-time monitoring, predictive analytics, and enterprise-grade insights for smarter business decisions.",
            icon: FaMicrosoft,
            color: "#F25022"
        },
        {
            name: "Tableau",
            description: "Interactive dashboards simplify complex data into compelling visual stories. Tableau empowers teams to collaborate, share insights seamlessly, and make informed decisions faster with clear, customizable visualizations.",
            icon: FaChartBar,
            color: "#E97627"
        },
        {
            name: "Looker Studio (Google Data Studio)",
            description: "Cloud-native dashboards integrate with Google services and third-party tools. Looker Studio enables self-service BI, easy sharing, and real-time analytics that keep teams aligned and responsive.",
            icon: FaGoogle,
            color: "#4285F4"
        },
        {
            name: "Qlik",
            description: "Associative analytics reveal hidden patterns across large datasets. Qlik dashboards provide advanced exploration, interactive drill-downs, and instant insights to guide data-driven strategies at scale.",
            icon: FaCube,
            color: "#009845"
        }
    ];

    return (
        <section className="w-full py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl lg:text-5xl font-black text-navy-800 mb-6">
                        Dashboard Solutions Across Leading BI Platforms
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-lime-400 to-teal-500 rounded-full mx-auto mb-6"></div>
                    <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                        Choose the right BI platform to create interactive dashboards, unify scattered data, and deliver insights tailored to your business goals in real-time.
                    </p>
                </div>

                {/* Platforms Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {platforms.map((platform, index) => {
                        const IconComponent = platform.icon;
                        return (
                            <div
                                key={index}
                                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-transparent hover:border-lime-400/20"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                {/* Platform Icon/Logo */}
                                <div
                                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                                    style={{ backgroundColor: `${platform.color}20` }}
                                >
                                    <IconComponent
                                        className="text-4xl"
                                        style={{ color: platform.color }}
                                    />
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold text-navy-800 mb-4 group-hover:text-teal-600 transition-colors duration-300">
                                    {platform.name}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {platform.description}
                                </p>

                                {/* Hover Arrow */}
                                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <FaArrowRight className="text-lime-400 text-xl" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

// Process Timeline Section
const ProcessTimelineSection = () => {
    const processSteps = [
        {
            number: "01",
            title: "Define Business Goals",
            description: "Start with clearly defined objectives to align dashboards with key business priorities and ensure every visualization drives meaningful outcomes.",
            image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85"
        },
        {
            number: "02",
            title: "Collect & Consolidate Data",
            description: "Gather accurate, relevant data from multiple sources—ERP, CRM, spreadsheets, or cloud platforms ensuring your dashboards reflect reliable and unified information.",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85"
        },
        {
            number: "03",
            title: "Analyze Data Insights",
            description: "Explore datasets to identify patterns, trends, and gaps. Analysis converts raw numbers into insights that power informed, faster, and smarter decision-making.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85"
        },
        {
            number: "04",
            title: "Select Visualization Techniques",
            description: "Choose the most effective visualization methods: charts, maps, heatmaps, or KPIs designed to simplify complex data and highlight what matters most.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85"
        },
        {
            number: "05",
            title: "Structure & Refine Data",
            description: "Clean, format, and model datasets for accuracy and consistency. Structured data ensures dashboards load faster and deliver precise insights every time.",
            image: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85"
        },
        {
            number: "06",
            title: "Build Your Visual Story",
            description: "Create interactive dashboards that tell a clear story, making complex insights simple, accessible, and actionable for decision-makers across your organization.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85"
        }
    ];

    return (
        <section className="w-full py-20 bg-white relative">
            <GeometricBackground variant="tertiary" intensity="light" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl lg:text-5xl font-black text-navy-800 mb-6">
                        How do We Transform Data into Actionable Dashboards?
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-lime-400 to-teal-500 rounded-full mx-auto mb-6"></div>
                    <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                        Transforming raw data into clear, actionable insights through a structured process that ensures accuracy, clarity, and business impact.
                    </p>
                </div>

                {/* Timeline Steps */}
                <div className="space-y-8 md:space-y-12">
                    {processSteps.map((step, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div
                                key={index}
                                className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                                data-aos={isEven ? "fade-right" : "fade-left"}
                            >
                                {/* Step Number */}
                                <div className="relative z-20 flex-shrink-0 flex flex-col items-center">
                                    <div className="w-20 h-20 bg-gradient-to-br from-lime-400 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-2xl animate-pulse">
                                        {step.number}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className={`flex-1 ${isEven ? 'md:pl-8' : 'md:pr-8'}`}>
                                    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border-l-4 border-lime-400 hover:shadow-2xl transition-all duration-300">
                                        <h3 className="text-2xl md:text-3xl font-bold text-navy-800 mb-4">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-700 text-lg leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Image */}
                                <div className="flex-1 lg:max-w-md">
                                    <div className="relative rounded-2xl overflow-hidden shadow-xl">
                                        <Image
                                            src={step.image}
                                            alt={step.title}
                                            width={400}
                                            height={300}
                                            className="w-full h-64 object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-br from-navy-600/40 to-teal-400/40"></div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

// Visualization Approaches Section
const VisualizationApproachesSection = () => {
    const approaches = [
        {
            title: "Temporal Data Visualization",
            description: "Track and analyze time-based changes to reveal trends, patterns, and seasonality. Temporal visuals help businesses make accurate predictions and smarter decisions over time.",
            icon: FaClock,
            example: "Timeline Graph"
        },
        {
            title: "Hierarchical Data Visualization",
            description: "Break down complex data into tree-like structures for clarity. Hierarchical visuals simplify relationships, making it easier to drill down into levels and understand data flow.",
            icon: FaSitemap,
            example: "Tree Diagram"
        },
        {
            title: "Multi-Dimensional Data Visualization",
            description: "Explore data through scatter plots, bubble charts, or heatmaps. Multi-dimensional visuals uncover hidden patterns, high-level relationships, and meaningful insights across large datasets.",
            icon: FaCube,
            example: "Scatterplot with Clusters"
        },
        {
            title: "Geospatial Data Visualization",
            description: "Map data points geographically to analyze behavior, trends, and regional performance. Geospatial visuals offer location-based insights for sales, logistics, customer demographics, and operations.",
            icon: FaGlobe,
            example: "World Map with Heat Zones"
        }
    ];

    return (
        <section className="w-full py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl lg:text-5xl font-black text-navy-800 mb-6">
                        Data Visualization Approaches That Drive Clarity
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-lime-400 to-teal-500 rounded-full mx-auto mb-6"></div>
                    <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                        From timelines to geospatial maps, each data visualization type is designed to highlight patterns, reveal trends, and turn data into actionable stories.
                    </p>
                </div>

                {/* Approaches Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {approaches.map((approach, index) => {
                        const IconComponent = approach.icon;
                        return (
                            <div
                                key={index}
                                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                {/* Icon */}
                                <div className="w-16 h-16 bg-gradient-to-br from-lime-400 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <IconComponent className="text-white text-2xl" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-navy-800 mb-4 group-hover:text-teal-600 transition-colors duration-300">
                                    {approach.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    {approach.description}
                                </p>

                                {/* Example Tag */}
                                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-lime-100 to-teal-100 text-navy-700 text-sm font-semibold rounded-full">
                                    <span>Example: {approach.example}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

// Why Choose Us Section
const WhyChooseUsSection = () => {
    const reasons = [
        {
            title: "Dedicated BI & data visualization specialists for end-to-end dashboard solutions",
            icon: FaUsers
        },
        {
            title: "Tailored consulting to address business challenges with industry-focused insights",
            icon: FaShieldAlt
        },
        {
            title: "Support, maintenance, and optimization to keep dashboards accurate and efficient",
            icon: FaLifeRing
        },
        {
            title: "Agile delivery model for faster implementation and scalable BI adoption",
            icon: FaRocket
        },
        {
            title: "Transparent pricing with flexible engagement models",
            icon: FaStar
        },
        {
            title: "Commitment to confidentiality with strict NDA compliance",
            icon: FaShieldAlt
        }
    ];

    return (
        <section className="w-full py-20 bg-white relative overflow-hidden">
            {/* Background Geometric Overlay */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-20 w-64 h-64 bg-lime-400 rounded-full"></div>
                <div className="absolute bottom-20 right-20 w-48 h-48 bg-teal-500 rotate-45"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-navy-600 rounded-full"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl lg:text-5xl font-black text-navy-800 mb-6">
                        Why Choose BI Data Visualization Services from Protingent India?
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-lime-400 to-teal-500 rounded-full mx-auto mb-6"></div>
                    <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                        Protingent India blends technical expertise with business understanding to deliver dashboards and analytics that simplify complex data. Our solutions focus on real-time clarity, decision-making efficiency, and measurable business outcomes across industries.
                    </p>
                </div>

                {/* Reasons Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => {
                        const IconComponent = reason.icon;
                        return (
                            <div
                                key={index}
                                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                {/* Icon */}
                                <div className="w-16 h-16 bg-gradient-to-br from-lime-400 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <IconComponent className="text-white text-2xl" />
                                </div>

                                {/* Content */}
                                <p className="text-gray-700 leading-relaxed font-medium">
                                    {reason.title}
                                </p>

                                {/* Check Mark */}
                                <div className="absolute top-4 right-4">
                                    <FaCheck className="text-lime-400 text-xl" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

// Main Page Component
export default function BIDataVisualizationPage() {
    const { isOpen, config, openPopup, closePopup } = useConsultationPopup();

    useEffect(() => {
        // Initialize AOS
        if (typeof window !== 'undefined') {
            import('aos').then((AOS) => {
                AOS.init({
                    duration: 800,
                    easing: 'ease-out-cubic',
                    once: true,
                });
            });
        }
    }, []);

    return (
        <div className="bg-white w-full flex flex-col items-center max-w-screen">
            {/* Hero Section */}
            <HeroSection openPopup={openPopup} />

            {/* ROI Stats Section */}
            <ROIStatsSection />

            {/* Core BI Capabilities */}
            <CoreCapabilitiesSection />

            {/* Custom Dashboard Solutions */}
            <CustomDashboardSection />

            {/* BI Platforms */}
            <BIPlatformsSection />

            {/* Process Timeline */}
            <ProcessTimelineSection />

            {/* Visualization Approaches */}
            <VisualizationApproachesSection />

            {/* Why Choose Us */}
            <WhyChooseUsSection />

            {/* Enhanced FAQ Section */}
            <div className="w-full py-20">
                <EnhancedFAQSection
                    title="Frequently Asked Questions (FAQs)"
                    description="Get comprehensive answers about our BI Data Visualization services and how we can transform your data into actionable insights."
                    FAQList={[
                        {
                            q: "How secure is my business data during the visualization process?",
                            a: "We ensure strict data security through encryption, access control, and NDA-backed confidentiality. Sensitive business data remains protected throughout integration, processing, and dashboard delivery."
                        },
                        {
                            q: "Can dashboards scale as my business grows?",
                            a: "Dashboards are built with scalability in mind, allowing you to add new data sources, KPIs, and user access without system slowdowns or redevelopment."
                        },
                        {
                            q: "Will my team need technical expertise to use the dashboards?",
                            a: "Dashboards are designed for business users with simple navigation, filters, and drill-down options, so teams can explore data without technical training."
                        },
                        {
                            q: "How do you ensure data accuracy in dashboards?",
                            a: "Data undergoes cleaning, validation, and modeling before visualization. This ensures dashboards show accurate, consistent, and reliable information that supports better business decisions."
                        },
                        {
                            q: "Can dashboards be accessed on mobile or remote devices?",
                            a: "BI dashboards are responsive and cloud-enabled, making them accessible anytime, anywhere—on desktops, tablets, and mobile devices."
                        },
                        {
                            q: "What happens if my data sources change in the future?",
                            a: "Dashboards are built with flexible connectors, so if you switch CRMs, ERPs, or databases, integrations can be updated without rebuilding everything from scratch."
                        }
                    ]}
                />
            </div>

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