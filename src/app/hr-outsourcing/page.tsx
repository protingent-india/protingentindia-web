"use client"
import { useState, useEffect, useRef } from "react";
import {
    EnhancedFAQSection,
    CommonHeading,
    GeometricBackground,
    ConsultationPopup
} from "@/components";
import { useConsultationPopup } from '@/hooks/useConsultationPopup';
import { 
    FaUsers, 
    FaChartLine, 
    FaHandshake, 
    FaCogs, 
    FaRocket,
    FaUserTie,
    FaFileAlt,
    FaShieldAlt,
    FaSearch,
    FaBullseye,
    FaChartBar,
    FaLightbulb,
    FaExpand,
    FaCheckCircle,
    FaArrowRight,
    FaPlay,
    FaClock,
    FaDollarSign,
    FaAward,
    FaStar,
    FaGraduationCap,
    FaBuilding,
    FaIndustry,
    FaEye,
    FaNetworkWired,
    FaTachometerAlt,
    FaRobot,
    FaProjectDiagram,
    FaCalendarAlt,
    FaMoneyBillWave,
    FaUserCheck,
    FaGlobe,
    FaHeart,
    FaUserShield
} from 'react-icons/fa';

// --------------------------------------------------------------
// 1. Hero Section - Split Screen with Animated Gradient
// --------------------------------------------------------------
const HROutsourcingHeroSection = ({ openPopup }: { openPopup: (config?: { title?: string; description?: string }) => void }) => {
    return (
        <section className="relative w-full min-h-[60vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden">
            {/* Animated gradient mesh background */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#C2D92C] via-[#34969E] to-[#113F64] animate-gradient-shift"></div>
            
            {/* Floating geometric elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-24 h-24 border-2 border-white/30 rounded-full float-animation"></div>
                <div className="absolute bottom-32 right-16 w-20 h-20 border-2 border-[#C2D92C]/40 rotate-45 float-animation" style={{animationDelay: '-2s'}}></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full float-animation" style={{animationDelay: '-4s'}}></div>
                <div className="absolute bottom-1/4 right-1/3 w-12 h-12 border border-white/40 rotate-12 float-animation" style={{animationDelay: '-6s'}}></div>
            </div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
                {/* Split-screen layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Content */}
                    <div className="text-white">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent leading-tight">
                            End-to-End HR Outsourcing
                            <span className="block text-[#C2D92C] mt-2">That Scales With You</span>
                        </h1>
                        
                        <p className="text-xl lg:text-2xl font-light mb-8 leading-relaxed opacity-90" style={{ fontFamily: 'Raleway' }}>
                            Protingent India takes over all HR complexities like payroll, compliance, recruitment, and employee support, 
                            where entrepreneurs take innovations, growth, and efficiency towards next-gen technologies without administrative burdens.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-6 mb-8">
                            <button 
                                onClick={() => openPopup({
                                    title: "Transform Your HR Today",
                                    description: "Ready to streamline your HR operations? Let's discuss how our comprehensive HR outsourcing solutions can transform your business efficiency."
                                })}
                                className="group relative overflow-hidden px-8 py-4 bg-[#C2D92C] text-[#113F64] font-bold text-lg rounded-xl hover:scale-105 transform transition-all shadow-2xl"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    Transform Your HR Today
                                    <FaRocket className="group-hover:rotate-12 transition-transform duration-300" />
                                </span>
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
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
                                    <div className="bg-[#34969E] rounded-2xl p-4 shadow-xl animate-pulse flex items-center gap-3" style={{animationDelay: '0.5s'}}>
                                        <FaShieldAlt className="text-white text-2xl" />
                                        <div>
                                            <div className="text-white font-bold text-sm">Compliance</div>
                                            <div className="text-white text-xs">100% Assured</div>
                                        </div>
                                    </div>
                                    
                                    {/* Recruitment Card */}
                                    <div className="bg-white rounded-2xl p-4 shadow-xl animate-pulse flex items-center gap-3" style={{animationDelay: '1s'}}>
                                        <FaUsers className="text-[#113F64] text-2xl" />
                                        <div>
                                            <div className="text-[#113F64] font-bold text-sm">Recruitment</div>
                                            <div className="text-[#113F64] text-xs">RPO Services</div>
                                        </div>
                                    </div>
                                    
                                    {/* Analytics Card */}
                                    <div className="bg-[#113F64] rounded-2xl p-4 shadow-xl animate-pulse flex items-center gap-3" style={{animationDelay: '1.5s'}}>
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
        </section>
    );
};

// --------------------------------------------------------------
// 2. Strategic Advantage Section - Statistics with Animated Counters
// --------------------------------------------------------------
const StrategicAdvantageSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    const stats = [
        {
            value: 40,
            suffix: "%",
            title: "Cost Savings",
            description: "Cut HR overheads with streamlined payroll and admin operations.",
            image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
            icon: FaDollarSign
        },
        {
            value: 60,
            suffix: "%",
            title: "Faster Hiring",
            description: "Accelerated talent acquisition through optimized HR processes.",
            image: "https://images.unsplash.com/photo-1676275773827-f6554c1ef62a",
            icon: FaClock
        },
        {
            value: 100,
            suffix: "%",
            title: "Compliance Assurance",
            description: "Stay fully aligned with labor laws and regulations always.",
            image: "https://images.unsplash.com/photo-1718220268527-4477fd170775",
            icon: FaShieldAlt
        },
        {
            value: 70,
            suffix: "%",
            title: "Productivity Boost",
            description: "Free leadership focus by reducing the administrative workload significantly.",
            image: "https://images.pexels.com/photos/4344860/pexels-photo-4344860.jpeg",
            icon: FaRocket
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={sectionRef} className="relative w-full py-16 md:py-24 bg-white overflow-hidden">
            {/* Enhanced geometric background */}
            <GeometricBackground variant="primary" intensity="medium" />
            
            {/* Subtle geometric pattern background */}
            <div className="absolute inset-0 opacity-5">
                <div 
                    className="w-full h-full"
                    style={{
                        backgroundImage: `repeating-linear-gradient(45deg, #C2D92C40 0px, #C2D92C40 2px, transparent 2px, transparent 40px), repeating-linear-gradient(-45deg, #34969E40 0px, #34969E40 2px, transparent 2px, transparent 40px)`,
                    }}
                ></div>
            </div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#113F64', fontFamily: 'Lato' }}>
                        HR Outsourcing is a
                        <span className="block text-[#34969E]">Strategic Advantage</span>
                    </h2>
                    <p className="text-xl lg:text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed" style={{ fontFamily: 'Raleway' }}>
                        HR Outsourcing is your organizational growth enabler. By partnering with experts like Protingent, 
                        businesses reduce risks, save resources, and gain measurable improvements in efficiency and compliance.
                    </p>
                </div>

                {/* Statistics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => {
                        const IconComponent = stat.icon;
                        return (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-3xl transition-all duration-500 cursor-pointer shadow-xl hover:shadow-2xl hover:-translate-y-4"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Background Image */}
                                <div
                                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    style={{
                                        backgroundImage: `url('${stat.image}')`,
                                    }}
                                ></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-[#113F64]/90 via-[#34969E]/80 to-[#113F64]/95"></div>
                                
                                <div className="relative z-10 p-8 h-full text-white min-h-[300px] flex flex-col justify-between">
                                    {/* Icon */}
                                    <div className="mb-6">
                                        <div 
                                            className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-xl"
                                            style={{ backgroundColor: '#C2D92C' }}
                                        >
                                            <IconComponent className="text-[#113F64]" />
                                        </div>
                                    </div>
                                    
                                    {/* Animated Counter */}
                                    <div className="text-center">
                                        <div className="text-5xl font-bold mb-2 text-[#C2D92C]" style={{ fontFamily: 'Lato' }}>
                                            {isVisible ? (
                                                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                                            ) : (
                                                `0${stat.suffix}`
                                            )}
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Lato' }}>
                                            {stat.title}
                                        </h3>
                                        <p className="text-white/90 leading-relaxed" style={{ fontFamily: 'Raleway' }}>
                                            {stat.description}
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

// Animated Counter Component
const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps

        const timer = setInterval(() => {
            setCount(prev => {
                const next = prev + increment;
                if (next >= target) {
                    clearInterval(timer);
                    return target;
                }
                return next;
            });
        }, 16);

        return () => clearInterval(timer);
    }, [target]);

    return <>{Math.floor(count)}{suffix}</>;
};

// --------------------------------------------------------------
// 3. HR Solutions Section - Bento Grid Layout
// --------------------------------------------------------------
const HRSolutionsSection = () => {
    const [hoveredSolution, setHoveredSolution] = useState<number | null>(null);

    const solutions = [
        {
            title: "Payroll Management",
            description: "Timely and accurate payroll with automated systems, free of errors and fully compliant with required legislation.",
            image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643",
            icon: FaMoneyBillWave,
            color: "#C2D92C",
            size: "large" // Featured large card
        },
        {
            title: "Compliance Management",
            description: "End-to-end management of compliance, taxation, and employee documentation related to labor law to eliminate legal risk.",
            image: "https://images.unsplash.com/photo-1676275773814-ad0819d45436",
            icon: FaShieldAlt,
            color: "#34969E",
            size: "medium"
        },
        {
            title: "Recruitment Process Outsourcing (RPO)",
            description: "End-to-end hiring process support, including talent sourcing, screening, and onboarding, all defined by the business requirements.",
            image: "https://images.unsplash.com/photo-1676275774895-7fbba85dce94",
            icon: FaUsers,
            color: "#C2D92C",
            size: "medium"
        },
        {
            title: "Employee Lifecycle Management",
            description: "Management of employee files, documentation, and HR workflows from onboarding to exits.",
            image: "https://images.pexels.com/photos/4344860/pexels-photo-4344860.jpeg",
            icon: FaUserCheck,
            color: "#34969E",
            size: "small"
        },
        {
            title: "Benefits Administration",
            description: "Management of employee insurance, reimbursements, and leave management to minimize administrative overhead.",
            image: "https://images.unsplash.com/photo-1718220268527-4477fd170775",
            icon: FaHeart,
            color: "#C2D92C",
            size: "small"
        },
        {
            title: "Performance & Engagement Support",
            description: "Ongoing HR support for performance tracking, employee satisfaction, and attrition reduction.",
            image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
            icon: FaChartLine,
            color: "#34969E",
            size: "small"
        }
    ];

    return (
        <div className="w-full bg-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#113F64', fontFamily: 'Lato' }}>
                        Our HR Outsourcing
                        <span className="block text-[#34969E]">Solutions</span>
                    </h2>
                    <p className="text-xl lg:text-2xl text-gray-600 max-w-6xl mx-auto leading-relaxed" style={{ fontFamily: 'Raleway' }}>
                        Protingent India offers end-to-end HR outsourcing services, combining compliance expertise, digital tools, 
                        and experienced professionals to streamline workforce management and empower organizations to focus on strategic growth.
                    </p>
                </div>

                {/* Balanced Symmetrical Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
                    {solutions.map((solution, index) => {
                        const IconComponent = solution.icon;
                        return (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-3xl transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-2 min-h-[350px]"
                                style={{ animationDelay: `${index * 0.1}s` }}
                                onMouseEnter={() => setHoveredSolution(index)}
                                onMouseLeave={() => setHoveredSolution(null)}
                            >
                                <div
                                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    style={{
                                        backgroundImage: `url('${solution.image}')`,
                                    }}
                                ></div>
                                <div className={`absolute inset-0 bg-gradient-to-br from-[#113F64]/85 via-[${solution.color}]/75 to-[#113F64]/90`}>
                                    <div className="absolute inset-0 opacity-15">
                                        <div 
                                            className="w-full h-full"
                                            style={{
                                                backgroundImage: `radial-gradient(circle at 30% 30%, ${solution.color}30 2px, transparent 2px), radial-gradient(circle at 70% 70%, #113F6430 3px, transparent 3px)`,
                                                backgroundSize: '50px 50px, 70px 70px'
                                            }}
                                        ></div>
                                    </div>
                                </div>
                                
                                <div className="relative z-10 p-6 lg:p-8 h-full text-white flex flex-col justify-between">
                                    <div>
                                        <div 
                                            className="w-20 h-20 rounded-2xl flex items-center justify-center text-2xl lg:text-3xl mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-xl"
                                            style={{ backgroundColor: solution.color }}
                                        >
                                            <IconComponent className="text-[#113F64]" />
                                        </div>
                                        
                                        <h3 className="text-xl lg:text-2xl font-bold mb-4 leading-tight" style={{ fontFamily: 'Lato' }}>
                                            {solution.title}
                                        </h3>
                                        <p className="text-white/90 leading-relaxed text-base" style={{ fontFamily: 'Raleway' }}>
                                            {solution.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* CTA Button */}
                <div className="text-center mt-16">
                    <button className="group relative overflow-hidden px-12 py-4 bg-[#34969E] text-white font-bold text-lg rounded-2xl hover:scale-105 transform transition-all shadow-2xl">
                        <span className="relative z-10 flex items-center gap-3">
                            Explore All HR Solutions
                            <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                        </span>
                        <div className="absolute inset-0 bg-[#C2D92C] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                </div>
            </div>
        </div>
    );
};

// --------------------------------------------------------------
// 4. Process Approach Section - Vertical Timeline
// --------------------------------------------------------------
const ProcessApproachSection = () => {
    const processes = [
        {
            title: "Discovery & Assessment",
            description: "Analyze organizational HR needs, compliance requirements, and current gaps.",
            image: "https://images.unsplash.com/photo-1676275773827-f6554c1ef62a",
            icon: FaSearch
        },
        {
            title: "Tailored HR Strategy",
            description: "Design customized outsourcing solutions aligned with business goals.",
            image: "https://images.unsplash.com/photo-1676275773814-ad0819d45436",
            icon: FaBullseye
        },
        {
            title: "AI-Driven Execution",
            description: "Leverage automation for payroll, compliance, and recruitment efficiency.",
            image: "https://images.unsplash.com/photo-1676275774895-7fbba85dce94",
            icon: FaRobot
        },
        {
            title: "Transparent Reporting",
            description: "Provide real-time insights and dashboards for complete visibility.",
            image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
            icon: FaChartBar
        },
        {
            title: "Continuous Optimization",
            description: "Regular reviews to enhance efficiency, compliance, and employee satisfaction.",
            image: "https://images.unsplash.com/photo-1718220268527-4477fd170775",
            icon: FaLightbulb
        }
    ];

    return (
        <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#113F64', fontFamily: 'Lato' }}>
                        Our Streamlined
                        <span className="block text-[#34969E]">Approach</span>
                    </h2>
                    <p className="text-xl lg:text-2xl text-gray-600 max-w-6xl mx-auto leading-relaxed" style={{ fontFamily: 'Raleway' }}>
                        We follow a structured, technology-enabled approach to HR outsourcing, ensuring accuracy, compliance, 
                        and transparency at every step—so businesses gain efficiency without losing control.
                    </p>
                </div>

                {/* Vertical Timeline */}
                <div className="relative">
                    {/* Connecting gradient line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#34969E] via-[#C2D92C] to-[#34969E] hidden lg:block"></div>

                    <div className="space-y-24">
                        {processes.map((process, index) => {
                            const IconComponent = process.icon;
                            const isEven = index % 2 === 0;
                            
                            return (
                                <div
                                    key={index}
                                    className={`flex flex-col lg:flex-row items-center gap-12 ${
                                        isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                    }`}
                                    style={{ animationDelay: `${index * 0.2}s` }}
                                >
                                    {/* Image Side */}
                                    <div className="lg:w-1/2 relative">
                                        <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                                            <img
                                                src={process.image}
                                                alt={process.title}
                                                className="w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#113F64]/70 via-transparent to-[#34969E]/60"></div>
                                            
                                            {/* Step Number */}
                                            <div className="absolute top-8 left-8">
                                                <div className="w-16 h-16 bg-[#C2D92C] rounded-2xl flex items-center justify-center shadow-xl">
                                                    <span className="text-[#113F64] font-bold text-xl" style={{ fontFamily: 'Lato' }}>{index + 1}</span>
                                                </div>
                                            </div>
                                            
                                            {/* Icon */}
                                            <div className="absolute bottom-8 right-8">
                                                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
                                                    <IconComponent className="text-white text-2xl" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Side */}
                                    <div className="lg:w-1/2">
                                        <div className="relative">
                                            {/* Timeline Node (Desktop only) */}
                                            <div className="hidden lg:block absolute top-8 -left-6 w-12 h-12 bg-[#C2D92C] rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                                                <IconComponent className="text-[#113F64] text-xl" />
                                            </div>
                                            
                                            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                                                <div className="flex items-center gap-4 mb-6">
                                                    <div 
                                                        className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg lg:hidden"
                                                        style={{ backgroundColor: index % 2 === 0 ? '#34969E' : '#C2D92C' }}
                                                    >
                                                        <IconComponent className="text-white text-xl" />
                                                    </div>
                                                    <div className="text-sm font-semibold text-[#34969E] uppercase tracking-wider" style={{ fontFamily: 'Lato' }}>
                                                        Step {index + 1}
                                                    </div>
                                                </div>
                                                
                                                <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-[#113F64] leading-tight" style={{ fontFamily: 'Lato' }}>
                                                    {process.title}
                                                </h3>
                                                <p className="text-xl text-gray-600 leading-relaxed mb-8" style={{ fontFamily: 'Raleway' }}>
                                                    {process.description}
                                                </p>
                                            </div>
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
// 5. Business Efficiency Section - Bento Grid Benefits
// --------------------------------------------------------------
const BusinessEfficiencySection = () => {
    const benefits = [
        {
            title: "Operational Agility",
            description: "Adapt quickly to growth, restructuring, or market shifts without HR delays.",
            image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643",
            icon: FaRocket,
            color: "#C2D92C",
            size: "large"
        },
        {
            title: "Reduced Administrative Burden",
            description: "Free leadership and teams from time-consuming payroll and compliance tasks.",
            image: "https://images.unsplash.com/photo-1676275774289-6cc2e0a0203d",
            icon: FaCogs,
            color: "#34969E",
            size: "large"
        },
        {
            title: "Improved Talent Retention",
            description: "Structured HR support ensures satisfied, engaged, and motivated employees.",
            image: "https://images.pexels.com/photos/4344860/pexels-photo-4344860.jpeg",
            icon: FaUserShield,
            color: "#C2D92C",
            size: "medium"
        },
        {
            title: "Scalable HR Framework",
            description: "Outsourced processes designed to expand seamlessly as your business grows.",
            image: "https://images.unsplash.com/photo-1718220268527-4477fd170775",
            icon: FaExpand,
            color: "#34969E",
            size: "medium"
        },
        {
            title: "Strategic Growth Focus",
            description: "Shift leadership bandwidth from administration to core innovation and business strategy.",
            image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
            icon: FaBullseye,
            color: "#C2D92C",
            size: "medium"
        }
    ];

    return (
        <div className="w-full bg-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#113F64', fontFamily: 'Lato' }}>
                        How HR Outsourcing Boosts
                        <span className="block text-[#34969E]">Business Efficiency</span>
                    </h2>
                    <p className="text-xl lg:text-2xl text-gray-600 max-w-6xl mx-auto leading-relaxed" style={{ fontFamily: 'Raleway' }}>
                        By outsourcing HR functions to Protingent, organizations gain freedom from administrative complexities, 
                        enabling them to focus on scaling operations, driving innovation, and building stronger, future-ready teams.
                    </p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 auto-rows-fr">
                    {/* Top Row: 2 Large Cards */}
                    {benefits.slice(0, 2).map((benefit, index) => {
                        const IconComponent = benefit.icon;
                        return (
                            <div
                                key={index}
                                className="md:col-span-2 lg:col-span-3 group relative overflow-hidden rounded-3xl transition-all duration-700 cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 min-h-[400px]"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Professional Human Image Background */}
                                <div
                                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{
                                        backgroundImage: `url('${benefit.image}')`,
                                    }}
                                ></div>
                                
                                {/* Abstract Geometric Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br from-[#113F64]/85 via-[${benefit.color}]/75 to-[#113F64]/90`}>
                                    <div className="absolute inset-0 opacity-20">
                                        <div 
                                            className="w-full h-full"
                                            style={{
                                                backgroundImage: `repeating-linear-gradient(45deg, ${benefit.color}40 0px, ${benefit.color}40 2px, transparent 2px, transparent 40px)`,
                                            }}
                                        ></div>
                                    </div>
                                </div>
                                
                                <div className="relative z-10 p-8 lg:p-12 h-full text-white flex flex-col justify-between">
                                    <div>
                                        <div 
                                            className="w-24 h-24 rounded-2xl flex items-center justify-center text-4xl mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-xl"
                                            style={{ backgroundColor: benefit.color }}
                                        >
                                            <IconComponent className="text-[#113F64]" />
                                        </div>
                                        
                                        <h3 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Lato' }}>
                                            {benefit.title}
                                        </h3>
                                        <p className="text-white/90 leading-relaxed text-xl" style={{ fontFamily: 'Raleway' }}>
                                            {benefit.description}
                                        </p>
                                    </div>
                                    
                                    <div className="flex items-center gap-4 font-semibold text-lg" style={{ color: benefit.color }}>
                                        <span>Learn More</span>
                                        <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                    {/* Bottom Row: 3 Medium Cards */}
                    {benefits.slice(2).map((benefit, index) => {
                        const actualIndex = index + 2;
                        const IconComponent = benefit.icon;
                        return (
                            <div
                                key={actualIndex}
                                className="md:col-span-4 lg:col-span-2 group relative overflow-hidden rounded-3xl transition-all duration-700 cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 min-h-[350px]"
                                style={{ animationDelay: `${actualIndex * 0.1}s` }}
                            >
                                {/* Professional Human Image Background */}
                                <div
                                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{
                                        backgroundImage: `url('${benefit.image}')`,
                                    }}
                                ></div>
                                
                                {/* Abstract Geometric Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br from-[#113F64]/85 via-[${benefit.color}]/75 to-[#113F64]/90`}>
                                    <div className="absolute inset-0 opacity-15">
                                        <div 
                                            className="w-full h-full"
                                            style={{
                                                backgroundImage: `radial-gradient(circle at 30% 30%, ${benefit.color}30 2px, transparent 2px), radial-gradient(circle at 70% 70%, #113F6430 3px, transparent 3px)`,
                                                backgroundSize: '50px 50px, 70px 70px'
                                            }}
                                        ></div>
                                    </div>
                                </div>
                                
                                <div className="relative z-10 p-6 h-full text-white flex flex-col justify-between">
                                    <div>
                                        <div 
                                            className="w-18 h-18 rounded-2xl flex items-center justify-center text-2xl mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-xl"
                                            style={{ backgroundColor: benefit.color }}
                                        >
                                            <IconComponent className="text-[#113F64]" />
                                        </div>
                                        
                                        <h3 className="text-xl lg:text-2xl font-bold mb-4 leading-tight" style={{ fontFamily: 'Lato' }}>
                                            {benefit.title}
                                        </h3>
                                        <p className="text-white/90 leading-relaxed text-base" style={{ fontFamily: 'Raleway' }}>
                                            {benefit.description}
                                        </p>
                                    </div>
                                    
                                    <div className="flex items-center gap-2 font-semibold text-sm mt-4" style={{ color: benefit.color }}>
                                        <span>Explore Benefits</span>
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
// 6. Why Choose Protingent Section
// --------------------------------------------------------------
const WhyChooseProtingentSection = () => {
    const features = [
        {
            title: "Compliance-First Approach",
            description: "Stay stress-free as we ensure 100% legal and statutory adherence.",
            icon: FaShieldAlt,
            color: "#C2D92C"
        },
        {
            title: "AI-Driven Automation",
            description: "Faster payroll and reporting for improved decision-making and workforce agility.",
            icon: FaRobot,
            color: "#34969E"
        },
        {
            title: "Scalable HR Models",
            description: "Adapt HR functions as your business grows—without disruptions.",
            icon: FaExpand,
            color: "#C2D92C"
        },
        {
            title: "Proven Reliability",
            description: "Our SLA-backed delivery minimizes risks and guarantees consistent HR operations.",
            icon: FaAward,
            color: "#34969E"
        },
        {
            title: "Employee-Centric Processes",
            description: "Better engagement and retention through structured, professional HR support.",
            icon: FaHeart,
            color: "#C2D92C"
        },
        {
            title: "Strategic Partnership",
            description: "Free leadership bandwidth to focus on innovation, while we manage HR.",
            icon: FaHandshake,
            color: "#34969E"
        }
    ];

    return (
        <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#113F64', fontFamily: 'Lato' }}>
                        Why Choose Protingent
                        <span className="block text-[#34969E]">for HR Outsourcing?</span>
                    </h2>
                    <p className="text-xl lg:text-2xl text-gray-600 max-w-6xl mx-auto leading-relaxed" style={{ fontFamily: 'Raleway' }}>
                        With Protingent India, HR outsourcing becomes more than administration—it's a growth accelerator that ensures compliance, 
                        reduces costs, and strengthens your workforce for long-term success.
                    </p>
                </div>

                {/* Proper Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-3xl transition-all duration-500 cursor-pointer bg-white shadow-lg hover:shadow-2xl hover:-translate-y-3 border-l-4"
                                style={{ 
                                    borderLeftColor: feature.color,
                                    animationDelay: `${index * 0.1}s`
                                }}
                            >
                                {/* Abstract background visual */}
                                <div className="absolute inset-0 opacity-5">
                                    <div 
                                        className="w-full h-full"
                                        style={{
                                            backgroundImage: `radial-gradient(circle at 80% 20%, ${feature.color}30 2px, transparent 2px)`,
                                            backgroundSize: '40px 40px'
                                        }}
                                    ></div>
                                </div>
                                
                                <div className="relative z-10 p-8 h-full min-h-[280px] flex flex-col justify-between">
                                    {/* Icon */}
                                    <div className="mb-6">
                                        <div 
                                            className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                                            style={{ backgroundColor: feature.color }}
                                        >
                                            <IconComponent className="text-[#113F64]" />
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-[#113F64] group-hover:text-[#34969E] transition-colors duration-300" style={{ fontFamily: 'Lato' }}>
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed text-lg" style={{ fontFamily: 'Raleway' }}>
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                                
                                {/* Hover accent */}
                                <div 
                                    className="absolute top-0 right-0 w-1 h-full transition-all duration-500 group-hover:w-2"
                                    style={{ backgroundColor: feature.color }}
                                ></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

// --------------------------------------------------------------
// 7. FAQ Section (Using Enhanced FAQ Component)
// --------------------------------------------------------------
const HROutsourcingFAQSection = () => {
    const faqs = [
        {
            q: "What exactly is HR Outsourcing, and how does it work?",
            a: "HR outsourcing is the outsourcing of HR functions, such as payroll, compliance, recruitment, and employee management, to an outsourced HR partner. At Protingent, we manage those functions, using not just HR process expertise but also AI and automation capabilities, compliance expertise, and reporting, so your team can move forward and grow the business away from administrative activities and work. You remain in control via reporting and insights, while we do the rest."
        },
        {
            q: "How does HR outsourcing reduce costs for businesses?",
            a: "When companies outsource HR, they avoid the costs of full-time HR personnel, the costs of training, the expense of a payroll system, compliance specialists, etc. At Protingent, we provide a 30-40% cost savings because of our more efficient payroll process and automated processes, as well as being able to handle all compliance without errors. Instead of investing your money in extensive infrastructure for HR, you are simply paying for what you need at that moment, when you need it, which allows for HR that is cost-effective and scalable."
        },
        {
            q: "Is HR outsourcing safe in terms of compliance and confidentiality?",
            a: "We are committed to compliance and confidentiality as an integral part of our services. Protingent is committed to adherence to a rigorous standard for data protection, encryption, and role-based access controls. Our HR outsourcing solutions come with the assurance of 100% accuracy in compliance with labor laws, tax compliance, and documentation for employees. Clients receive full transparency on compliance reports, and can be confident that there are no legal and regulatory risks."
        },
        {
            q: "Can Protingent manage payroll for large organizations with complex structures?",
            a: "Our payroll management system has been designed to manage all scenarios. Whether a startup or an enterprise with multiple locations and employee categories, we can automate time and processes accurately without error. As part of your payroll, if you need to make taxes, reimbursements, or statutory deductions, you can be assured that Protingent will complete everything accurately, and compliantly while still giving you real-time access to payroll reports. Our model will also grow with you."
        },
        {
            q: "How does outsourcing HR improve employee engagement and retention?",
            a: "When HR processes are mishandled or delayed, the experience of the employee often diminishes. Protingent provides the employee experience through timely payroll, transparent dialogue, informed policies, and prompt contact regarding HR issues. Protingent operates to properly administer benefits, reporting when required, manage leaves, and prevent employee issues from becoming worse. That experience helps develop trust and confidence with your employee, resulting in lower turnover and improved morale. A structured HR framework ultimately promotes engagement and retains employees for the long term."
        },
        {
            q: "Will I lose control over HR functions if I outsource them?",
            a: "With Protingent Outsourcing, you share responsibility, not lose control. You set the expectations, objectives, and level of engagement, while we execute impeccably. You will still have clear visibility into every aspect of HR via reporting, dashboards, and continued updates. You won't be involved in the minute details of operations, but you maintain clarity and results that ensure HR is considered an enabler, not a hassle for your business."
        },
        {
            q: "Which industries benefit most from HR outsourcing?",
            a: "Almost every industry can find value, but especially those that have compliance-heavy or high-volume HR needs. By size, organizations in the IT sector, healthcare, manufacturing, retail, BFSI, and startups are the most benefited sectors from outsourcing. Protingent designed an additional HR outsourced solutions that specifically match the sector demands; processing payroll for many, service and compliance for the healthcare sector, and rapid ramp-ups for IT firms' hiring. Flexibility is one of our offering strengths."
        },
        {
            q: "Why should I choose Protingent over other HR outsourcing firms?",
            a: "In contrast to conventional HR outsourcing companies, Protingent offers a compliance-centric process, AI-driven automation, and the opportunity to scale. We don't just provide a Google Doc; We provide HR ecosystems that reduce cost, eliminate risk, and enhance efficiency. SLA-backed delivery; Employee-centric solutions; Proven results; no need to consider a vendor when working with us. Ours is an HR Model that expands your business. When you partner with Protingent, you're partnering for sustainable growth."
        }
    ];

    return (
        <EnhancedFAQSection
            title="Frequently Asked Questions"
            description="Get answers to common questions about our HR outsourcing services and how Protingent can help transform your human resources operations while ensuring compliance and reducing costs."
            FAQList={faqs}
        />
    );
};

// --------------------------------------------------------------
// 8. Final CTA Section
// --------------------------------------------------------------
const FinalCTASection = ({ openPopup }: { openPopup: (config?: { title?: string; description?: string }) => void }) => {
    return (
        <div className="relative w-full py-20 md:py-32 overflow-hidden">
            {/* Professional team image background */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{
                    backgroundImage: `url('https://images.pexels.com/photos/4344860/pexels-photo-4344860.jpeg')`,
                }}
            ></div>
            {/* Full-width gradient background with geometric overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#C2D92C]/90 via-[#34969E]/85 to-[#113F64]/90"></div>
            
            {/* Geometric overlay pattern */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                <div 
                    className="w-full h-full"
                    style={{
                        backgroundImage: `repeating-linear-gradient(45deg, #C2D92C40 0px, #C2D92C40 3px, transparent 3px, transparent 60px), repeating-linear-gradient(-45deg, #34969E40 0px, #34969E40 3px, transparent 3px, transparent 60px)`,
                    }}
                ></div>
            </div>
            
            {/* Animated floating elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-20 w-40 h-40 border-2 border-white/20 rounded-full animate-pulse"></div>
                <div className="absolute bottom-32 right-32 w-32 h-32 border-2 border-[#C2D92C]/40 rotate-45 animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
            </div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 text-center text-white">
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight" style={{ fontFamily: 'Lato' }}>
                    Ready to Transform
                    <span className="block text-[#C2D92C]">Your HR Operations?</span>
                </h2>
                <p className="text-2xl lg:text-3xl leading-relaxed mb-16 max-w-6xl mx-auto opacity-90 font-light" style={{ fontFamily: 'Raleway' }}>
                    Partner with Protingent India and experience the difference that professional HR outsourcing makes. 
                    Reduce costs, ensure compliance, and focus on what you do best – growing your business.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16">
                    <button className="group relative overflow-hidden px-16 py-6 bg-[#C2D92C] text-[#113F64] font-bold text-2xl rounded-2xl hover:scale-105 transform transition-all shadow-2xl">
                        <span className="relative z-10 flex items-center gap-4">
                            Transform Your HR Today
                            <FaRocket className="group-hover:rotate-12 transition-transform duration-300" />
                        </span>
                        {/* Ripple effect */}
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </button>
                    
                    <button 
                        onClick={() => openPopup({
                            title: "Schedule Free Consultation",
                            description: "Book a free consultation with our HR outsourcing experts. Let's discuss how we can streamline your HR operations and reduce costs."
                        })}
                        className="px-12 py-6 border-3 border-white/40 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group text-white text-xl font-semibold"
                    >
                        <span className="flex items-center gap-4">
                            <span>Schedule Free Consultation</span>
                            <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                        </span>
                    </button>
                </div>
                
                {/* Final trust indicators */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                    {[
                        { icon: FaShieldAlt, label: "100% Compliant", value: "Guaranteed" },
                        { icon: FaDollarSign, label: "Cost Savings", value: "40%" },
                        { icon: FaClock, label: "Faster Processing", value: "60%" },
                        { icon: FaUsers, label: "Happy Clients", value: "500+" }
                    ].map((stat, index) => {
                        const IconComponent = stat.icon;
                        return (
                            <div key={index} className="text-center">
                                <IconComponent className="text-4xl text-[#C2D92C] mb-4 mx-auto" />
                                <div className="text-3xl font-bold mb-2" style={{ fontFamily: 'Lato' }}>{stat.value}</div>
                                <div className="text-lg opacity-80" style={{ fontFamily: 'Raleway' }}>{stat.label}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

// --------------------------------------------------------------
// Main HR Outsourcing Page Component
// --------------------------------------------------------------
export default function HROutsourcingService() {
    const { isOpen, config, openPopup, closePopup } = useConsultationPopup();
    
    return (
        <div className="bg-white w-full flex flex-col items-center gap-0 pb-12 md:pb-20">
            <HROutsourcingHeroSection openPopup={openPopup} />
            <StrategicAdvantageSection />
            <HRSolutionsSection />
            <ProcessApproachSection />
            <BusinessEfficiencySection />
            <WhyChooseProtingentSection />
            <FinalCTASection openPopup={openPopup} />
            
            <HROutsourcingFAQSection />
            
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