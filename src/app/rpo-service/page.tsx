"use client"
import { useState, useEffect, useRef } from "react";
import {
    EnhancedFAQSection,
    ModernIndustriesSection,
    CommonHeading,
    GeometricBackground,
    ConsultationPopup
} from "@/components";
import { useConsultationPopup } from '@/hooks/useConsultationPopup';
import {
    rpoBenefitsData,
    rpoEngagementModelsData,
    rpoIndustriesData,
    rpoPartnersData,
    rpoProcessData,
    rpoServicesData,
    serviceRPOFAQ
} from "@/utils/constants";
import {
    FaUsersCog,
    FaChartLine,
    FaHandshake,
    FaCogs,
    FaRocket,
    FaUsers,
    FaLightbulb,
    FaDollarSign,
    FaArrowLeft,
    FaArrowRight,
    FaCheckCircle,
    FaGraduationCap,
    FaSearch,
    FaClipboardCheck,
    FaCalendarAlt,
    FaFileContract,
    FaChartBar,
    FaCircleNotch,
    FaProjectDiagram,
    FaBolt,
    FaLayerGroup,
    FaIndustry,
    FaExpandArrowsAlt,
    FaUserCheck,
    FaHospital,
    FaBuilding,
    FaLaptopCode,
    FaWifi,
    FaFlask,
    FaHeartbeat
} from 'react-icons/fa';
import { useBreakpoint } from "@/hook";

// --------------------------------------------------------------

const RPOServiceBanner = ({ openPopup }: { openPopup: (config?: { title?: string; description?: string }) => void }) => {
    return (
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden">
            <video
                autoPlay
                muted
                loop
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: 'center center' }}
            >
                <source src="/rpo-hero-background.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>

            {/* Floating geometric elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-20 h-20 border border-primary-green-color/30 rotate-45 float-animation"></div>
                <div className="absolute bottom-32 right-16 w-16 h-16 border border-secondry/40 rounded-full float-animation" style={{ animationDelay: '-2s' }}></div>
                <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-primary-green-color/20 rotate-12 float-animation" style={{ animationDelay: '-4s' }}></div>
            </div>

            <div className="relative z-10 text-center text-white max-w-4xl px-4 md:px-6">
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent leading-tight">
                    RPO That Builds Your Team
                    <span className="block text-primary-green-color">Lightning Fast</span>
                </h1>

                <p className="text-base md:text-lg lg:text-xl font-light mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
                    Streamlined recruitment solutions designed for growth-oriented businesses.
                    Our Recruitment Process Outsourcing (RPO) model helps you hire
                    smarter and faster, while reducing costs by up to 40%.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button
                        onClick={() => openPopup({
                            title: "Request Free RPO Consultation",
                            description: "Ready to transform your hiring process? Let's discuss how our RPO solutions can help you hire faster and smarter."
                        })}
                        className="modern-btn group relative overflow-hidden"
                    >
                        <span className="relative z-10">Request Free RPO Consultation</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-green-color to-secondry opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Brand-Focused Benefits Section with Solid Icons
const BrandBenefitsSection = () => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    const benefits = [
        {
            icon: FaUsers,
            title: "Flexible hiring",
            description: "Adapt to changing business needs with scalable recruitment solutions",
            accentColor: "#34969D"
        },
        {
            icon: FaRocket,
            title: "Faster hires",
            description: "Reduce time-to-hire by 60% with our streamlined processes",
            accentColor: "#CBDC13"
        },
        {
            icon: FaGraduationCap,
            title: "Top talent",
            description: "Access pre-vetted candidates from our extensive talent network",
            accentColor: "#34969D"
        },
        {
            icon: FaDollarSign,
            title: "Cost control",
            description: "Lower recruitment costs while maintaining quality standards",
            accentColor: "#CBDC13"
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
        <div ref={sectionRef} className="relative w-full max-w-[1450px] flex flex-col items-center gap-8 md:gap-12 px-4 md:px-6">
            {/* Geometric Background */}
            <GeometricBackground variant="primary" intensity="light" />

            <CommonHeading
                title="Recruitment Process Outsourcing (RPO) for Your Talent-Pool"
                desc="Recruitment delays cost businesses more than time. It holds back growth, revenue, and innovation. Through professional RPO Services, you can outsource talent hiring responsibility to expert recruiters like Protingent who act as an extension of your in-house HR team."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full mt-8">
                {benefits.map((benefit, index) => {
                    const IconComponent = benefit.icon;
                    return (
                        <div
                            key={index}
                            className={`group relative overflow-hidden rounded-2xl transition-all duration-500 cursor-pointer bg-white border-2 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                            style={{
                                animationDelay: `${index * 0.1}s`,
                                borderColor: benefit.accentColor,
                                transitionDelay: `${index * 0.1}s`
                            }}
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            {/* Solid background card */}
                            <div className="p-6 md:p-8 h-full relative z-10">
                                {/* Solid Icon with brand colors */}
                                <div className="relative mb-6">
                                    <div
                                        className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                                        style={{
                                            backgroundColor: benefit.accentColor,
                                            boxShadow: hoveredCard === index ? `0 10px 30px ${benefit.accentColor}40` : 'none'
                                        }}
                                    >
                                        <IconComponent className="text-white" />
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl md:text-2xl font-bold mb-3 transition-colors duration-300" style={{ color: '#012D50' }}>
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                    {benefit.description}
                                </p>

                                {/* Accent line */}
                                <div
                                    className="absolute bottom-0 left-0 h-1 w-full transition-all duration-500 group-hover:h-2"
                                    style={{ backgroundColor: benefit.accentColor }}
                                ></div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

// Modern Case Study Style Slider Component - Enhanced with Fixed Heights & Smooth Transitions
const ModernServiceSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [progress, setProgress] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const services = [
        {
            id: 1,
            number: "01",
            title: "Full-Cycle RPO",
            description: "End-to-end recruitment management, from sourcing and screening to final offer and onboarding, is fully handled by our dedicated hiring specialists. Experience complete recruitment transformation with measurable ROI.",
            image: "/assets/images/rpo-services/full-cycle-rpo.jpg",
            alt: "Team of recruiters collaborating on full-cycle RPO process with laptops and documents",
            features: ["360° Recruitment", "Dedicated Specialists", "Complete Onboarding"],
            link: "#full-cycle"
        },
        {
            id: 2,
            number: "02",
            title: "Project-Based RPO",
            description: "Flexible RPO engagement for high-volume or urgent hiring needs, ideal for new project launches, seasonal spikes, or expansions. Scale your team rapidly without compromising quality.",
            image: "/assets/images/rpo-services/project-based-rpo.jpg",
            alt: "Professional meeting room with team discussing project-based recruitment strategies",
            features: ["Rapid Scaling", "Flexible Engagement", "Quality Assurance"],
            link: "#project-based"
        },
        {
            id: 3,
            number: "03",
            title: "Onsite/Offsite Recruiters",
            description: "Deploy skilled recruiters at your office or remotely, fully aligned with your internal processes, brand, and hiring targets. Seamless integration with your existing team.",
            image: "/assets/images/rpo-services/onsite-offsite-recruiters.jpg",
            alt: "Remote and onsite recruiters working together via video conference and in-person collaboration",
            features: ["Skilled Recruiters", "Brand Alignment", "Seamless Integration"],
            link: "#recruiters"
        },
        {
            id: 4,
            number: "04",
            title: "Talent Sourcing & Screening",
            description: "Access a rich talent pipeline with targeted sourcing, resume screening, and candidate shortlisting done with speed and precision. Quality candidates, delivered faster.",
            image: "/assets/images/rpo-services/talent-sourcing-screening.jpg",
            alt: "HR professional reviewing candidate profiles and conducting talent screening interviews",
            features: ["Rich Talent Pipeline", "Precision Screening", "Speed & Quality"],
            link: "#sourcing"
        },
        {
            id: 5,
            number: "05",
            title: "Employer Branding Support",
            description: "Position your company as an employer of choice with branding strategies that attract high-quality candidates and reduce dropouts. Build your talent magnet.",
            image: "/assets/images/rpo-services/employer-branding-support.jpg",
            alt: "Marketing team developing employer branding materials and social media campaigns",
            features: ["Employer Branding", "Candidate Attraction", "Dropout Reduction"],
            link: "#branding"
        },
        {
            id: 6,
            number: "06",
            title: "Analytics & Hiring Insights",
            description: "Use real-time dashboards and data-driven insights to optimize hiring workflows, track performance, and improve recruitment ROI. Make informed decisions.",
            image: "/assets/images/rpo-services/analytics-hiring-insights.jpg",
            alt: "Analytics dashboard showing recruitment metrics, hiring insights, and performance tracking data",
            features: ["Real-time Analytics", "Performance Tracking", "ROI Optimization"],
            link: "#analytics"
        }
    ];

    const nextSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentSlide((prev) => (prev + 1) % services.length);
            setProgress(0);
            setIsTransitioning(false);
        }, 150);
    };

    const prevSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
            setProgress(0);
            setIsTransitioning(false);
        }, 150);
    };

    const goToSlide = (index: number) => {
        if (isTransitioning || index === currentSlide) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentSlide(index);
            setProgress(0);
            setIsTransitioning(false);
        }, 150);
    };

    useEffect(() => {
        if (isPlaying && !isTransitioning) {
            intervalRef.current = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= 100) {
                        nextSlide();
                        return 0;
                    }
                    return prev + 2; // 2% every 100ms = 5 seconds total
                });
            }, 100);
        }

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isPlaying, currentSlide, isTransitioning]);

    const handleMouseEnter = () => setIsPlaying(false);
    const handleMouseLeave = () => setIsPlaying(true);

    return (
        <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-24">
            <div className="max-w-[1450px] mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
                        Our Core RPO Services
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Comprehensive recruitment solutions tailored to your business needs
                    </p>
                </div>

                <div
                    className="relative bg-white rounded-3xl shadow-2xl overflow-hidden"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{ minHeight: '500px' }} // Fixed minimum height for unified behavior
                >
                    <div className="flex flex-col lg:flex-row h-full">
                        {/* Left side - Full Frame Image Section */}
                        <div className="lg:w-3/5 relative overflow-hidden order-1 lg:order-1">
                            {/* Full Frame Container - No padding, full coverage */}
                            <div className="relative w-full h-full min-h-[400px] lg:min-h-[500px] overflow-hidden">
                                <div
                                    className={`absolute inset-0 transition-all duration-500 ease-in-out ${isTransitioning ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
                                        }`}
                                >
                                    <img
                                        src={services[currentSlide].image}
                                        alt={services[currentSlide].alt}
                                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                        loading="lazy"
                                        style={{
                                            objectPosition: 'center center',
                                            objectFit: 'cover'
                                        }}
                                    />
                                    {/* Enhanced Navy Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#012D50]/45 via-[#34969E]/35 to-[#012D50]/40 transition-opacity duration-500"></div>
                                </div>

                                {/* Floating service number - Fixed position */}
                                <div className="absolute top-6 left-6 md:top-8 md:left-8 z-20">
                                    <div
                                        className={`w-12 h-12 md:w-16 md:h-16 border-2 border-white/30 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-500 hover:scale-110 ${isTransitioning ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                                            }`}
                                    >
                                        <span className="text-white font-bold text-lg md:text-xl">{services[currentSlide].number}</span>
                                    </div>
                                </div>

                                {/* Enhanced Navigation arrows with smooth hover effects */}
                                <button
                                    onClick={prevSlide}
                                    disabled={isTransitioning}
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-8 h-8 md:w-9 md:h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed z-20"
                                    aria-label="Previous service"
                                >
                                    <div className="w-0 h-0 border-r-[6px] border-r-white border-y-[4px] border-y-transparent transition-transform duration-300 hover:-translate-x-0.5"></div>
                                </button>
                                <button
                                    onClick={nextSlide}
                                    disabled={isTransitioning}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-8 h-8 md:w-9 md:h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed z-20"
                                    aria-label="Next service"
                                >
                                    <div className="w-0 h-0 border-l-[6px] border-l-white border-y-[4px] border-y-transparent transition-transform duration-300 hover:translate-x-0.5"></div>
                                </button>
                            </div>
                        </div>

                        {/* Right side - Content with smooth transitions */}
                        <div className="lg:w-2/5 p-6 md:p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-2">
                            <div className="mb-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <span
                                        className={`text-4xl md:text-6xl font-bold text-primary/20 transition-all duration-500 ${isTransitioning ? 'opacity-0 scale-75' : 'opacity-100 scale-100'
                                            }`}
                                    >
                                        {services[currentSlide].number}
                                    </span>
                                    <div className="h-1 flex-1 bg-gradient-to-r from-primary to-secondry rounded-full relative">
                                        <div
                                            className="h-full bg-primary-green-color rounded-full transition-all duration-300"
                                            style={{ width: `${progress}%` }}
                                        ></div>
                                    </div>
                                </div>

                                <h3
                                    className={`text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-4 leading-tight transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                                        }`}
                                >
                                    {services[currentSlide].title}
                                </h3>

                                <p
                                    className={`text-gray-600 leading-relaxed mb-6 text-base md:text-lg transition-all duration-500 delay-100 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                                        }`}
                                >
                                    {services[currentSlide].description}
                                </p>

                                {/* Features with staggered animation */}
                                <div
                                    className={`flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8 transition-all duration-500 delay-200 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                                        }`}
                                >
                                    {services[currentSlide].features.map((feature, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1.5 md:px-4 md:py-2 bg-primary-green-color/10 text-primary rounded-full text-xs md:text-sm font-medium border border-primary-green-color/20 transition-all duration-300 hover:bg-primary-green-color/20"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                <button
                                    className={`modern-btn group transition-all duration-500 delay-300 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                                        }`}
                                >
                                    <span className="relative z-10">Learn More</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary-green-color to-secondry opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Enhanced CSS for smoother animations */}
            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes slideInImage {
                    from {
                        opacity: 0;
                        transform: scale(1.1);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                
                .modern-btn {
                    position: relative;
                    overflow: hidden;
                    padding: 12px 24px;
                    background: linear-gradient(135deg, #34969E, #012D50);
                    color: white;
                    border: none;
                    border-radius: 12px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                
                .modern-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 10px 30px rgba(52, 150, 157, 0.3);
                }
            `}</style>
        </div>
    );
};

// Modern Interactive Timeline Component with Solid Icons
const InteractiveTimeline = () => {
    const [activeStep, setActiveStep] = useState<number | null>(null);
    const [visibleSteps, setVisibleSteps] = useState<boolean[]>(new Array(rpoProcessData.length).fill(false));
    const timelineRef = useRef<HTMLDivElement>(null);

    const timelineIcons = [
        FaSearch,           // Discovery & Requirement Mapping
        FaCogs,             // Custom RPO Strategy  
        FaUsersCog,         // Talent Sourcing & Employer Branding
        FaClipboardCheck,   // Screening & Assessment
        FaCalendarAlt,      // Interview Coordination & Candidate Experience
        FaFileContract,     // Offer Management & Onboarding
        FaChartBar          // Performance Monitoring & Reporting
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.getAttribute('data-index') || '0');
                        setVisibleSteps(prev => {
                            const newState = [...prev];
                            newState[index] = true;
                            return newState;
                        });
                    }
                });
            },
            { threshold: 0.5 }
        );

        const stepElements = timelineRef.current?.querySelectorAll('.timeline-step');
        stepElements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="w-full bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
            <div className="max-w-[1450px] mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
                        RPO Service Delivery Process
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Our streamlined 7-step process designed to deliver exceptional results
                    </p>
                </div>

                <div ref={timelineRef} className="relative">
                    <div className="space-y-8 md:space-y-12">
                        {rpoProcessData.map((step, index) => {
                            const IconComponent = timelineIcons[index];
                            const isEven = index % 2 === 0;
                            return (
                                <div
                                    key={index}
                                    data-index={index}
                                    className={`timeline-step relative ${visibleSteps[index] ? 'animate-in' : ''}`}
                                    style={{ animationDelay: `${index * 0.2}s` }}
                                >
                                    <div className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                                        }`}>

                                        {/* Step Number and Icon - Fixed positioning */}
                                        <div className="relative z-20 flex-shrink-0 flex flex-col items-center">
                                            {/* Step number */}
                                            <div
                                                className={`w-20 h-20 rounded-full shadow-2xl flex items-center justify-center font-bold text-white cursor-pointer transition-all duration-300 mb-4 ${activeStep === index ? 'scale-110' : 'hover:scale-105'
                                                    }`}
                                                style={{
                                                    background: `linear-gradient(135deg, ${isEven ? '#34969D' : '#CBDC13'}, ${isEven ? '#34969DE6' : '#CBDC13E6'})`,
                                                    boxShadow: visibleSteps[index] ? `0 12px 30px ${isEven ? '#34969D' : '#CBDC13'}40` : '0 8px 20px rgba(0,0,0,0.1)'
                                                }}
                                                onClick={() => setActiveStep(activeStep === index ? null : index)}
                                            >
                                                <span className="text-2xl font-black">{String(index + 1).padStart(2, '0')}</span>
                                            </div>

                                            {/* Icon */}
                                            <div
                                                className="w-16 h-16 rounded-2xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:rotate-6 shadow-lg"
                                                style={{
                                                    backgroundColor: '#012D50'
                                                }}
                                            >
                                                <IconComponent className="text-2xl" />
                                            </div>
                                        </div>

                                        {/* Step content - More space and better positioning */}
                                        <div className={`flex-1 ${isEven ? 'md:pl-8' : 'md:pr-8'}`}>
                                            <div
                                                className="glass-card p-8 md:p-10 rounded-3xl cursor-pointer hover-lift group shadow-xl border-l-4 transition-all duration-300 hover:shadow-2xl"
                                                style={{
                                                    borderLeftColor: isEven ? '#34969D' : '#CBDC13',
                                                    transform: visibleSteps[index] ? 'translateY(0)' : 'translateY(20px)',
                                                    opacity: visibleSteps[index] ? 1 : 0.8
                                                }}
                                                onClick={() => setActiveStep(activeStep === index ? null : index)}
                                            >
                                                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 group-hover:text-secondry transition-colors duration-300">
                                                    {step.title}
                                                </h3>
                                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                                    {step.desc}
                                                </p>

                                                {/* Expandable details */}
                                                <div className={`overflow-hidden transition-all duration-500 ${activeStep === index ? 'max-h-96 mt-6' : 'max-h-0'
                                                    }`}>
                                                    <div className="border-t border-gray-200 pt-4">
                                                        <h4 className="font-semibold text-primary mb-2">Key Benefits:</h4>
                                                        <ul className="text-gray-600 space-y-1">
                                                            <li>• Streamlined process for maximum efficiency</li>
                                                            <li>• Real-time progress tracking and updates</li>
                                                            <li>• Quality assurance at every step</li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                {/* Visual accent line */}
                                                <div
                                                    className="mt-6 h-1 w-20 rounded-full transition-all duration-300 group-hover:w-32"
                                                    style={{ backgroundColor: isEven ? '#34969D' : '#CBDC13' }}
                                                ></div>
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

// Premium Interactive Slider - Highly Skilled Team Section
const PremiumInteractiveSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const [progress, setProgress] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const { sm, md, lg } = useBreakpoint();

    const skillCards = [
        {
            icon: FaChartLine,
            title: "Faster Time-to-Hire",
            description: "Streamline hiring with pre-vetted candidates to fill positions quickly with top-tier skills and domain expertise.",
            highlights: ["60% Faster Hiring", "Pre-Vetted Talent", "Quality Assurance"],
            ctaText: "Accelerate Hiring",
            accentColor: "#34969D",
            bgColor: "#012D50"
        },
        {
            icon: FaUsersCog,
            title: "Access to Quality Talent",
            description: "Leveraging organizations with skilled applicants and niche sourcing expertise to attract result-oriented professionals.",
            highlights: ["Global Talent Pool", "Niche Expertise", "Quality Screening"],
            ctaText: "Find Top Talent",
            accentColor: "#CBDC13",
            bgColor: "#012D50"
        },
        {
            icon: FaDollarSign,
            title: "Cost Efficiency",
            description: "Optimized workflows, reduced dependency on agencies, and minimized vacancy gaps for cost-efficient hiring.",
            highlights: ["40% Cost Reduction", "Streamlined Process", "ROI Focused"],
            ctaText: "Reduce Costs",
            accentColor: "#34969D",
            bgColor: "#012D50"
        },
        {
            icon: FaRocket,
            title: "Scalable Recruitment Support",
            description: "Maximizing capable hirings based on dedicated project needs and current market standards.",
            highlights: ["Flexible Scaling", "Project Based", "Market Aligned"],
            ctaText: "Scale Teams",
            accentColor: "#CBDC13",
            bgColor: "#012D50"
        },
        {
            icon: FaLightbulb,
            title: "Improved Employer Branding",
            description: "Build a strong brand image that attracts the right kind of talent consistently and improves retention.",
            highlights: ["Brand Enhancement", "Talent Magnet", "Higher Retention"],
            ctaText: "Build Brand",
            accentColor: "#34969D",
            bgColor: "#012D50"
        },
        {
            icon: FaHandshake,
            title: "Enhanced Candidate Experience",
            description: "Deliver professional, timely, and engaging recruitment journeys reducing drop-offs and improving acceptance rates.",
            highlights: ["Professional Journey", "Higher Acceptance", "Better Experience"],
            ctaText: "Improve Experience",
            accentColor: "#CBDC13",
            bgColor: "#012D50"
        }
    ];

    const slidesToShow = lg ? 3 : md ? 2 : 1;
    const maxSlide = skillCards.length - slidesToShow;

    const nextSlide = () => {
        setCurrentSlide(prev => (prev >= maxSlide ? 0 : prev + 1));
        setProgress(0);
    };

    const prevSlide = () => {
        setCurrentSlide(prev => (prev <= 0 ? maxSlide : prev - 1));
        setProgress(0);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(Math.min(index, maxSlide));
        setProgress(0);
    };

    useEffect(() => {
        if (isAutoPlay) {
            intervalRef.current = setInterval(() => {
                setProgress(prev => {
                    if (prev >= 100) {
                        nextSlide();
                        return 0;
                    }
                    return prev + 2.5; // 4 second intervals
                });
            }, 100);
        }

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isAutoPlay, currentSlide]);

    return (
        <section className="w-full relative py-20 overflow-hidden" style={{ background: 'linear-gradient(170deg, #F8FAFB 0%, white 50%, #F8FAFB 100%)' }}>
            {/* Geometric pattern overlay */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 20% 50%, #34969D 2px, transparent 2px), radial-gradient(circle at 80% 50%, #CBDC13 2px, transparent 2px)`,
                    backgroundSize: '100px 100px'
                }}></div>
            </div>

            <div className="relative z-10 max-w-[1450px] mx-auto px-4 md:px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#012D50' }}>
                        Highly Skilled Team for
                        <span className="block" style={{ color: '#34969D' }}>Business Expansions</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Right recruitment means matching the right talent with the team to work efficiently and deliver actionable results.
                        RPO is taking forward more from reactive hiring to strategic talent-pool acquisition to build success.
                    </p>

                    {/* Progress bar */}
                    <div className="w-32 h-2 mx-auto mt-8 rounded-full overflow-hidden" style={{ backgroundColor: '#e5e7eb' }}>
                        <div
                            className="h-full rounded-full transition-all duration-100"
                            style={{
                                width: `${progress}%`,
                                backgroundColor: '#CBDC13'
                            }}
                        ></div>
                    </div>
                </div>

                {/* Slider Container */}
                <div
                    className="relative flex flex-col items-center"
                    onMouseEnter={() => setIsAutoPlay(false)}
                    onMouseLeave={() => setIsAutoPlay(true)}
                >
                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                        style={{
                            backgroundColor: '#34969D',
                            boxShadow: '0 10px 30px rgba(52, 150, 157, 0.3)'
                        }}
                    >
                        <FaArrowLeft className="text-white" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                        style={{
                            backgroundColor: '#34969D',
                            boxShadow: '0 10px 30px rgba(52, 150, 157, 0.3)'
                        }}
                    >
                        <FaArrowRight className="text-white" />
                    </button>

                    {/* Cards Container */}
                    <div className="overflow-hidden w-full max-w-[1200px] py-8 md:pt-16">
                        <div
                            className="flex transition-transform duration-500 ease-out"
                            style={{
                                transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`
                            }}
                        >
                            {skillCards.map((card, index) => {
                                const IconComponent = card.icon;
                                return (
                                    <div
                                        key={index}
                                        className="flex-shrink-0 w-full px-4"
                                        style={{ width: `${100 / slidesToShow}%` }}
                                    >
                                        <div
                                            className="h-full service-card group relative overflow-hidden rounded-3xl p-8 md:p-10 transition-all duration-500 hover:-translate-y-3 hover:scale-105 cursor-pointer"
                                            style={{
                                                backgroundColor: card.bgColor,
                                                border: `2px solid ${card.accentColor}`,
                                                boxShadow: '0 10px 30px rgba(1, 45, 80, 0.1)'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.borderColor = '#CBDC13';
                                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(1, 45, 80, 0.3)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.borderColor = card.accentColor;
                                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(1, 45, 80, 0.1)';
                                            }}
                                        >
                                            {/* Accent decoration */}
                                            <div
                                                className="absolute top-0 right-0 w-20 h-20 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                                                style={{
                                                    background: `linear-gradient(135deg, ${card.accentColor}, #CBDC13)`,
                                                    transform: 'translate(50%, -50%)'
                                                }}
                                            ></div>

                                            {/* Icon */}
                                            <div
                                                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                                                style={{ backgroundColor: card.accentColor }}
                                            >
                                                <IconComponent className="text-white text-2xl" />
                                            </div>

                                            {/* Content */}
                                            <h3 className="text-2xl font-bold h-[64px] text-white mb-4 group-hover:text-opacity-90 transition-all duration-300">
                                                {card?.title}
                                            </h3>

                                            <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                                                {card?.description}
                                            </p>

                                            {/* Highlights */}
                                            <div className="space-y-2 mb-6">
                                                {card?.highlights?.map((highlight, idx) => (
                                                    <div key={idx} className="flex items-center text-sm">
                                                        <div
                                                            className="w-2 h-2 rounded-full mr-3"
                                                            style={{ backgroundColor: card.accentColor }}
                                                        ></div>
                                                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                                                            {highlight}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* CTA Button */}
                                            <button
                                                className="w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                                                style={{
                                                    background: `linear-gradient(135deg, ${card.accentColor}, #CBDC13)`,
                                                    color: '#012D50'
                                                }}
                                            >
                                                {card.ctaText}
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex justify-center gap-3 mt-8">
                        {Array.from({ length: maxSlide + 1 }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                    ? 'w-8 scale-110'
                                    : 'hover:scale-110'
                                    }`}
                                style={{
                                    backgroundColor: index === currentSlide ? '#CBDC13' : '#34969D'
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// Trusted Partner Section - Updated with Exact Content
const PowerfulPartnerSection = () => {
    return (
        <section className="relative py-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #012D50 0%, #34969D 50%, #012D50 100%)' }}>
            <div className="container mx-auto px-4 relative z-10 max-w-[1450px]">

                {/* Main Headline */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                        <span className="block mb-2">We Are Not Another</span>
                        <span className="text-5xl md:text-7xl" style={{ color: '#CBDC13' }}>RPO Vendor</span>
                        <span className="block mt-4">But A Trusted</span>
                        <span className="bg-gradient-to-r from-[#34969D] to-[#CBDC13] bg-clip-text text-transparent text-5xl md:text-7xl">
                            Talent Growth Partner
                        </span>
                    </h2>

                    {/* Subheading */}
                    <p className="text-xl text-white/90 max-w-4xl mx-auto mt-8 leading-relaxed">
                        We work for excellence with the top-tier talent pool. Our pre-vetted and new
                        candidates are highly skilled to evolve and expand your organization with precision.
                        Our recruiters blend agility, domain expertise, and a tech-enabled approach to
                        build talent pipelines that work efficiently.
                    </p>
                </div>

                {/* Five Key Differentiators */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

                    {/* 1. Deep Industry Experience */}
                    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#CBDC13' }}>
                            <FaIndustry className="text-2xl" style={{ color: '#012D50' }} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Deep Industry Experience
                        </h3>
                        <p className="text-white/80 leading-relaxed">
                            With over 25 years of engineering and tech hiring experience,
                            we know niche talent better than anyone else.
                        </p>
                    </div>

                    {/* 2. Speed + Precision */}
                    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#CBDC13' }}>
                            <FaRocket className="text-2xl" style={{ color: '#012D50' }} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Speed + Precision
                        </h3>
                        <p className="text-white/80 leading-relaxed">
                            We shorten time-to-hire without sacrificing quality by refining
                            our sourcing frameworks and enabling our expert recruiters.
                        </p>
                    </div>

                    {/* 3. Flexible, Scalable Engagement */}
                    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#CBDC13' }}>
                            <FaExpandArrowsAlt className="text-2xl" style={{ color: '#012D50' }} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Flexible, Scalable Engagement
                        </h3>
                        <p className="text-white/80 leading-relaxed">
                            Start small or big - our modular RPO models adapt and grow
                            with your business needs.
                        </p>
                    </div>

                    {/* 4. Transparent Collaboration */}
                    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#CBDC13' }}>
                            <FaHandshake className="text-2xl" style={{ color: '#012D50' }} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Transparent Collaboration
                        </h3>
                        <p className="text-white/80 leading-relaxed">
                            You will always have a say in your hiring process. Expect regular updates,
                            an identified account manager, and full visibility in the hiring process.
                        </p>
                    </div>

                    {/* 5. Candidate-First Approach */}
                    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 lg:col-span-1 md:col-span-2">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#CBDC13' }}>
                            <FaUserCheck className="text-2xl" style={{ color: '#012D50' }} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Candidate-First Approach
                        </h3>
                        <p className="text-white/80 leading-relaxed">
                            We treat every talent touchpoint with intent, creating better
                            brand experiences and higher acceptance rates.
                        </p>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="text-center mt-12">
                    <button
                        className="font-bold text-lg px-10 py-4 rounded-full hover:scale-105 transform transition-all shadow-2xl"
                        style={{
                            background: 'linear-gradient(90deg, #CBDC13, #34969D)',
                            color: '#012D50'
                        }}
                    >
                        Start Building Your Dream Team
                    </button>
                </div>
            </div>
        </section>
    );
};

// RPO Engagement Models Section
const RPOEngagementModelsSection = () => {
    return (
        <section className="py-16 md:py-20 bg-gray-50">
            <div className="container mx-auto px-4 max-w-[1450px]">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#012D50' }}>
                        RPO Engagement Models We Offer
                    </h2>
                    <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                        Protingent offers flexible RPO models tailored to organizational growth stage,
                        talent needs, and operational scalability.
                    </p>
                </div>

                {/* Engagement Models Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

                    {/* Model 1: End-to-End RPO */}
                    <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-2" style={{ borderLeftColor: '#34969D' }}>
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-lg" style={{ backgroundColor: '#34969D' }}>
                                <FaCircleNotch className="text-white text-2xl" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold mb-3" style={{ color: '#012D50' }}>
                                    End-to-End RPO
                                </h3>
                                <p className="text-gray-600">
                                    Recruiters to manage the full recruitment lifecycle from sourcing, screening,
                                    interviewing, onboarding, to monitoring performance for business consistent growth.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Model 2: Project-Based RPO */}
                    <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-2" style={{ borderLeftColor: '#CBDC13' }}>
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-lg" style={{ backgroundColor: '#CBDC13' }}>
                                <FaProjectDiagram className="text-white text-2xl" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold mb-3" style={{ color: '#012D50' }}>
                                    Project-Based RPO
                                </h3>
                                <p className="text-gray-600">
                                    We fulfill short-term project-based hiring needs with promising quick onboarding,
                                    enabling your business to deliver data-driven results within defined deadlines.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Model 3: On-Demand RPO */}
                    <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-2" style={{ borderLeftColor: '#34969D' }}>
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-lg" style={{ backgroundColor: '#34969D' }}>
                                <FaBolt className="text-white text-2xl" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold mb-3" style={{ color: '#012D50' }}>
                                    On-Demand RPO
                                </h3>
                                <p className="text-gray-600">
                                    Need expert recruitment support during spikes or expansions?
                                    Engage us only when required—no long-term commitment.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Model 4: Hybrid RPO */}
                    <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-2" style={{ borderLeftColor: '#CBDC13' }}>
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-lg" style={{ backgroundColor: '#CBDC13' }}>
                                <FaLayerGroup className="text-white text-2xl" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold mb-3" style={{ color: '#012D50' }}>
                                    Hybrid RPO
                                </h3>
                                <p className="text-gray-600">
                                    Combine in-house recruitment with Protingent's support—ideal for
                                    companies wanting to retain control but need added firepower.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default function RPOService() {
    const { isOpen, config, openPopup, closePopup } = useConsultationPopup();

    return (
        <div className="bg-white w-full flex flex-col items-center gap-0 pb-12 md:pb-20 max-w-screen overflow-x-hidden">
            <RPOServiceBanner openPopup={openPopup} />
            <div className="py-16 md:py-24">
                <BrandBenefitsSection />
            </div>

            <ModernServiceSlider />
            <InteractiveTimeline />

            <PremiumInteractiveSlider />

            {/* RPO Engagement Models Section - NEW SECTION */}
            <RPOEngagementModelsSection />

            <div className="py-16 md:py-24 w-full flex justify-center bg-gray-50">
                <div className="w-full max-w-[1450px]">
                    <ModernIndustriesSection
                        title="Industries Where We Serve"
                        desc="We provide tailored RPO solutions across diverse industries, helping businesses hire top talent faster, reduce costs, and scale efficiently. Our expertise adapts to your hiring needs, whether you're in tech, healthcare, manufacturing, or beyond."
                        cardData={rpoIndustriesData}
                    />
                </div>
            </div>

            {/* Updated Trusted Partner Section */}
            <PowerfulPartnerSection />

            <EnhancedFAQSection
                title="Frequently Asked Questions"
                description="Get answers to common questions about our RPO services and how Protingent can help accelerate your hiring process while maintaining quality and reducing costs."
                FAQList={serviceRPOFAQ}
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