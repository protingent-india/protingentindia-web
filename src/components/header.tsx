"use client"
import { useEffect, useState, useRef } from "react";
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { Logo, ConsultationPopup } from "@/components";
import { useConsultationPopup } from '@/hooks/useConsultationPopup';
import {
    FaUserTie,
    FaHandshake,
    FaUsers,
    FaChartLine,
    FaHeadset,
    FaDatabase,
    FaBullhorn,
    FaLaptopCode,
    FaChevronDown,
    FaTimes,
    FaBars,
    FaRocket
} from 'react-icons/fa';

// Custom animations and styles
const fadeInUpKeyframes = `
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
.animate-fadeInUp {
  animation: fadeInUp 0.5s ease forwards;
}
.stagger-1 { animation-delay: 0.1s; }
.stagger-2 { animation-delay: 0.2s; }
.stagger-3 { animation-delay: 0.3s; }
.stagger-4 { animation-delay: 0.4s; }
.stagger-5 { animation-delay: 0.5s; }
.stagger-6 { animation-delay: 0.6s; }

.nav-underline {
  position: relative;
//   overflow: hidden;
}
.nav-underline::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #34969E, #C2D92C);
  transition: width 0.3s ease;
}
.nav-underline:hover::after,
.nav-underline.active::after {
  width: 100%;
}

.logo-pulse::after {
  content: '';
  position: absolute;
  top: 50%;
  right: -8px;
  width: 8px;
  height: 8px;
  background: #C2D92C;
  border-radius: 50%;
  transform: translateY(-50%);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { opacity: 0; transform: translateY(-50%) scale(0.8); }
  50% { opacity: 1; transform: translateY(-50%) scale(1.2); }
  100% { opacity: 0; transform: translateY(-50%) scale(0.8); }
}

.glassmorphism {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
//   border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.mega-menu {
  visibility: hidden;
  opacity: 0;
  transform: translateY(-10px);
  transition: all 0.3s ease;
}
.mega-menu.active {
  visibility: visible;
  opacity: 1;
  transform: translateY(0);
}
`;

interface ServiceItem {
    name: string;
    description: string;
    link: string;
    icon: React.ComponentType<any>;
}

interface ServiceCategory {
    title: string;
    items: ServiceItem[];
}

const servicesData: ServiceCategory[] = [
    {
        title: "Staffing Solutions",
        items: [
            {
                name: "RPO Services",
                description: "Recruitment Process Outsourcing for enterprise hiring",
                link: "/rpo-service",
                icon: FaUserTie
            },
            {
                name: "FTE Hiring",
                description: "Full-time employee recruitment and placement",
                link: "/fte-service",
                icon: FaHandshake
            },
            {
                name: "Contract Staffing",
                description: "Flexible contract and temporary staffing solutions",
                link: "/contract-staffing",
                icon: FaUsers
            }
        ]
    },
    {
        title: "Business Solutions",
        items: [
            {
                name: "Direct Sourcing",
                description: "Strategic talent acquisition and sourcing",
                link: "/direct-sourcing",
                icon: FaChartLine
            },
            {
                name: "HR Outsourcing",
                description: "Complete HR management and outsourcing",
                link: "/hr-outsourcing",
                icon: FaHeadset
            },
            {
                name: "Marketing Solutions",
                description: "Digital marketing and growth strategies",
                link: "/marketing-solutions",
                icon: FaBullhorn
            },
            {
                name: "BI & Data Visualization",
                description: "Business intelligence and data analytics",
                link: "/bi-data-visualization",
                icon: FaDatabase
            },
            {
                name: "IT Consulting",
                description: "Technology consulting and digital transformation",
                link: "/it-consulting",
                icon: FaLaptopCode
            }
        ]
    }
];

const navigationItems = [
    { name: "Home", link: "/", hasDropdown: false },
    { name: "Services", link: "#", hasDropdown: true },
    { name: "About", link: "/about", hasDropdown: false },
    { name: "Insights", link: "/insights", hasDropdown: false },
    { name: "Contact", link: "/contact-us", hasDropdown: false }
];

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
    const { isOpen, config, openPopup, closePopup } = useConsultationPopup();
    const router = useRouter();
    const pathname = usePathname();
    const dropdownRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Handle scroll behavior for glassmorphism effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setIsMobileServicesOpen(false);
        setIsServicesDropdownOpen(false);
    }, [pathname]);

    // Handle mega menu mouse events
    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setIsServicesDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsServicesDropdownOpen(false);
        }, 300); // Increased delay from 150ms to 300ms
    };

    // Handle service link clicks
    const handleServiceClick = (link: string) => {
        setIsServicesDropdownOpen(false);
        setIsMobileMenuOpen(false);
        // Use window.location for more reliable navigation
        window.location.href = link;
    };

    // Check if current route is active
    const isActiveRoute = (link: string) => {
        if (link === "/") return pathname === "/";
        return pathname.startsWith(link);
    };

    // Inject custom styles
    useEffect(() => {
        const styleElement = document.createElement("style");
        styleElement.textContent = fadeInUpKeyframes;
        document.head.appendChild(styleElement);
        return () => {
            if (document.head.contains(styleElement)) {
                document.head.removeChild(styleElement);
            }
        };
    }, []);

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glassmorphism shadow-lg' : 'bg-white'
                }`}>
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo - Left Aligned */}
                        <Link href="/" className="relative logo-pulse group flex-shrink-0">
                            <Logo className="w-2xs sm:w-3xs transition-transform duration-300 group-hover:scale-105" />
                        </Link>

                        {/* Desktop Navigation - Center Aligned */}
                        <nav className="hidden lg:flex items-center justify-center flex-1" style={{ fontFamily: 'Lato, sans-serif' }}>
                            <div className="flex items-center space-x-8">
                                {navigationItems.map((item, index) => (
                                    <div
                                        key={index}
                                        className="relative mx-4"
                                        onMouseEnter={item.hasDropdown ? handleMouseEnter : undefined}
                                        onMouseLeave={item.hasDropdown ? handleMouseLeave : undefined}
                                    >
                                        {item.hasDropdown ? (
                                            <button className={`flex cursor-pointer items-center space-x-1 nav-underline font-medium text-[#113F64] hover:text-[#34969E] transition-colors duration-300 ${isActiveRoute(item.link) ? 'text-[#34969E] active' : ''
                                                }`}>
                                                <span>{item.name}</span>
                                                <FaChevronDown className={`w-3 h-3 transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180' : ''
                                                    }`} />
                                            </button>
                                        ) : (
                                            <Link
                                                href={item.link}
                                                className={`nav-underline font-medium text-[#113F64] hover:text-[#34969E] transition-colors duration-300 ${isActiveRoute(item.link) ? 'text-[#34969E] active' : ''
                                                    }`}
                                            >
                                                {item.name}
                                            </Link>
                                        )}

                                        {/* Mega Menu Dropdown */}
                                        {item.hasDropdown && (
                                            <div
                                                ref={dropdownRef}
                                                className={`mega-menu ${isServicesDropdownOpen ? 'active' : 'hidden'} absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[600px] bg-white rounded-2xl shadow-2xl border border-gray-100 z-50`}
                                            >
                                                <div className="p-8">
                                                    <div className="grid grid-cols-2 gap-8">
                                                        {servicesData.map((category, categoryIndex) => (
                                                            <div key={categoryIndex}>
                                                                <h3 className="text-lg font-bold text-[#113F64] mb-4" style={{ fontFamily: 'Lato, sans-serif' }}>
                                                                    {category.title}
                                                                </h3>
                                                                <div className="space-y-3">
                                                                    {category.items.map((service, serviceIndex) => {
                                                                        const IconComponent = service.icon;
                                                                        return (
                                                                            <button
                                                                                key={serviceIndex}
                                                                                onClick={() => handleServiceClick(service.link)}
                                                                                className="cursor-pointer flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-300 group w-full text-left"
                                                                            >
                                                                                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-[#34969E] to-[#C2D92C] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                                                    <IconComponent className="w-5 h-5 text-white" />
                                                                                </div>
                                                                                <div className="flex-1">
                                                                                    <h4 className="font-semibold text-[#113F64] group-hover:text-[#34969E] transition-colors duration-300">
                                                                                        {service.name}
                                                                                    </h4>
                                                                                    <p className="text-sm text-gray-600 mt-1">
                                                                                        {service.description}
                                                                                    </p>
                                                                                </div>
                                                                            </button>
                                                                        );
                                                                    })}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </nav>

                        {/* CTA Button - Right Aligned */}
                        <div className="hidden lg:block flex-shrink-0">
                            <button
                                onClick={() => openPopup()}
                                className="cursor-pointer px-6 py-2 bg-gradient-to-r from-[#34969E] to-[#113F64] text-white font-bold rounded-full hover:from-[#2d7a85] hover:to-[#0d2f4a] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                style={{ fontFamily: 'Lato, sans-serif' }}
                            >
                                <span className="flex items-center space-x-2">
                                    <FaRocket className="w-4 h-4" />
                                    <span>Get Consultation</span>
                                </span>
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden p-2 rounded-lg text-[#113F64] hover:bg-gray-100 transition-colors duration-300"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle mobile menu"
                        >
                            {isMobileMenuOpen ? (
                                <FaTimes className="w-6 h-6" />
                            ) : (
                                <FaBars className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${isMobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
                }`}>
                <div className="absolute inset-0 bg-[#113F64] bg-opacity-95 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />

                <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#113F64] via-[#34969E] to-[#C2D92C] transform transition-transform duration-500 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}>
                    <div className="pt-24 px-8 h-full overflow-y-auto overscroll-contain">
                        <nav className="space-y-6 pb-20" style={{ fontFamily: 'Lato, sans-serif' }}>
                            {navigationItems.map((item, index) => (
                                <div key={index} className={`animate-fadeInUp stagger-${index + 1} opacity-0`}>
                                    {item.hasDropdown ? (
                                        <>
                                            <button
                                                className="flex items-center justify-between w-full text-white text-2xl font-medium py-2"
                                                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                                            >
                                                <span>{item.name}</span>
                                                <FaChevronDown className={`w-5 h-5 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''
                                                    }`} />
                                            </button>
                                            {isMobileServicesOpen && (
                                                <div className="mt-4 ml-4 space-y-4">
                                                    {servicesData.map((category, categoryIndex) => (
                                                        <div key={categoryIndex}>
                                                            <h4 className="text-[#C2D92C] text-lg font-semibold mb-3">
                                                                {category.title}
                                                            </h4>
                                                            <div className="space-y-2 ml-4">
                                                                {category.items.map((service, serviceIndex) => {
                                                                    const IconComponent = service.icon;
                                                                    return (
                                                                        <button
                                                                            key={serviceIndex}
                                                                            onClick={() => handleServiceClick(service.link)}
                                                                            className="flex items-center space-x-3 text-white hover:text-[#C2D92C] transition-colors duration-300 w-full text-left py-2 min-h-[44px]"
                                                                        >
                                                                            <IconComponent className="w-4 h-4 text-[#34969E]" />
                                                                            <span className="text-lg">{service.name}</span>
                                                                        </button>
                                                                    );
                                                                })}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <Link
                                            href={item.link}
                                            className={`block text-white text-2xl font-medium py-2 hover:text-[#C2D92C] transition-colors duration-300 ${isActiveRoute(item.link) ? 'text-[#C2D92C]' : ''
                                                }`}
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </div>
                            ))}

                            {/* Mobile CTA Button inside dropdown */}
                            <div className="animate-fadeInUp stagger-6 opacity-0 pt-8">
                                <button
                                    onClick={() => {
                                        openPopup();
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="w-full px-6 py-4 bg-gradient-to-r from-[#34969E] to-[#113F64] text-white font-bold rounded-full hover:from-[#2d7a85] hover:to-[#0d2f4a] transition-all duration-300 transform hover:scale-105 shadow-lg"
                                    style={{ fontFamily: 'Lato, sans-serif' }}
                                >
                                    <span className="flex items-center justify-center space-x-2">
                                        <FaRocket className="w-4 h-4" />
                                        <span>Get Consultation</span>
                                    </span>
                                </button>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Spacer for fixed header */}
            <div className="h-16 md:h-20"></div>

            {/* Consultation Popup */}
            <ConsultationPopup
                isOpen={isOpen}
                onClose={closePopup}
                title={config.title}
                description={config.description}
            />
        </>
    );
};

export default Header;