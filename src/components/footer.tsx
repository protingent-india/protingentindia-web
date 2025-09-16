"use client"
import { Icon } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

// -----------------------------------------------------------------

const Footer = () => {
    return (
        <footer className="relative w-full bg-gradient-to-b from-[#113F64] to-[#0C2A45] text-white overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Floating Gradient Shimmer */}
                <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-[#34969E]/20 to-[#C2D92C]/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-l from-[#C2D92C]/10 to-[#34969E]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

                {/* Subtle Moving Particles */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#C2D92C]/30 rounded-full animate-bounce delay-300"></div>
                <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#34969E]/40 rounded-full animate-ping delay-700"></div>
                <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-[#C2D92C]/20 rounded-full animate-pulse delay-1200"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">

                    {/* Company Info */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-2xl lg:text-3xl font-bold font-lato mb-4">
                                PROTINGENT INDIA LLP
                            </h3>
                        </div>

                        <div className="space-y-4">
                            {/* Address */}
                            <div className="flex items-start gap-3">
                                <FaMapMarkerAlt className="text-[#34969E] mt-1 flex-shrink-0" size={18} />
                                <p className="text-sm lg:text-base font-raleway text-gray-200 leading-relaxed">
                                    4th floor, Jaipur Centre, 420, Tonk Rd, Choti Chopard, Chandrakala Colony, Durgapura, Jaipur, Rajasthan 302018
                                </p>
                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-3">
                                <FaEnvelope className="text-[#34969E] flex-shrink-0" size={16} />
                                <Link
                                    href="mailto:connect@protingentindia.com"
                                    className="text-sm break-words lg:text-base font-raleway hover:text-[#C2D92C] transition-colors duration-300"
                                >
                                    connect@protingentindia.com
                                </Link>
                            </div>

                            {/* Phone Numbers */}
                            <div className="flex items-start gap-3">
                                <FaPhone className="text-[#34969E] mt-1 flex-shrink-0" size={16} />
                                <div className="space-y-1">
                                    <Link
                                        href="tel:+911412990687"
                                        className="block text-sm lg:text-base font-raleway hover:text-[#C2D92C] transition-colors duration-300"
                                    >
                                        +91 141 299 0687
                                    </Link>
                                    <Link
                                        href="tel:+919119102197"
                                        className="block text-sm lg:text-base font-raleway hover:text-[#C2D92C] transition-colors duration-300"
                                    >
                                        +91 91191 02197
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Vertical Separator - Hidden on mobile/tablet */}
                    <div className="hidden lg:block absolute left-1/4 top-0 bottom-0 w-px bg-white/20"></div>

                    {/* Services */}
                    <div className="space-y-6">
                        <h3 className="text-xl lg:text-2xl font-bold font-lato text-[#C2D92C]">
                            Our Services
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/rpo-service"
                                    className="text-sm lg:text-base font-raleway text-gray-200 hover:text-[#C2D92C] transition-colors duration-300 hover:pl-2"
                                >
                                    RPO Service
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/fte-service"
                                    className="text-sm lg:text-base font-raleway text-gray-200 hover:text-[#C2D92C] transition-colors duration-300 hover:pl-2"
                                >
                                    FTE Service
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contract-staffing"
                                    className="text-sm lg:text-base font-raleway text-gray-200 hover:text-[#C2D92C] transition-colors duration-300 hover:pl-2"
                                >
                                    Contract Staffing
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/direct-sourcing"
                                    className="text-sm lg:text-base font-raleway text-gray-200 hover:text-[#C2D92C] transition-colors duration-300 hover:pl-2"
                                >
                                    Direct Sourcing
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/hr-outsourcing"
                                    className="text-sm lg:text-base font-raleway text-gray-200 hover:text-[#C2D92C] transition-colors duration-300 hover:pl-2"
                                >
                                    HR Outsourcing
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/marketing-solutions"
                                    className="text-sm lg:text-base font-raleway text-gray-200 hover:text-[#C2D92C] transition-colors duration-300 hover:pl-2"
                                >
                                    Marketing Solutions
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/it-consulting"
                                    className="text-sm lg:text-base font-raleway text-gray-200 hover:text-[#C2D92C] transition-colors duration-300 hover:pl-2"
                                >
                                    IT Consulting
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/bi-data-visualization"
                                    className="text-sm lg:text-base font-raleway text-gray-200 hover:text-[#C2D92C] transition-colors duration-300 hover:pl-2"
                                >
                                    BI & Data Visualization
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Industries */}
                    <div className="space-y-6">
                        <h3 className="text-xl lg:text-2xl font-bold font-lato text-[#C2D92C]">
                            Industries We Serve
                        </h3>
                        <ul className="space-y-3">
                            <li className="text-sm lg:text-base font-raleway text-gray-200">Aerospace</li>
                            <li className="text-sm lg:text-base font-raleway text-gray-200">Healthcare</li>
                            <li className="text-sm lg:text-base font-raleway text-gray-200">Engineering</li>
                            <li className="text-sm lg:text-base font-raleway text-gray-200">Construction</li>
                            <li className="text-sm lg:text-base font-raleway text-gray-200">Energy</li>
                            <li className="text-sm lg:text-base font-raleway text-gray-200">Finance</li>
                            <li className="text-sm lg:text-base font-raleway text-gray-200">Technology & Software</li>
                            <li className="text-sm lg:text-base font-raleway text-gray-200">Telecommunication</li>
                            <li className="text-sm lg:text-base font-raleway text-gray-200">Manufacturing & Distribution</li>
                            <li className="text-sm lg:text-base font-raleway text-gray-200">Life Sciences & Pharmaceutical</li>
                            <li className="text-sm lg:text-base font-raleway text-gray-200">Medical Devices</li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div className="space-y-6">
                        <h3 className="text-xl lg:text-2xl font-bold font-lato text-[#C2D92C]">
                            Company Links
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/"
                                    className="text-sm lg:text-base font-raleway text-gray-200 hover:text-[#C2D92C] transition-colors duration-300 hover:pl-2"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="text-sm lg:text-base font-raleway text-gray-200 hover:text-[#C2D92C] transition-colors duration-300 hover:pl-2"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/insights"
                                    className="text-sm lg:text-base font-raleway text-gray-200 hover:text-[#C2D92C] transition-colors duration-300 hover:pl-2"
                                >
                                    Insights
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact-us"
                                    className="text-sm lg:text-base font-raleway text-gray-200 hover:text-[#C2D92C] transition-colors duration-300 hover:pl-2"
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-white/20 pt-8">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-6">

                        {/* Social Media Links */}
                        <div className="flex items-center gap-4">
                            <Link
                                href="#"
                                className="w-10 h-10 bg-white/10 hover:bg-[#34969E] rounded-full flex items-center justify-center transition-colors duration-300 hover:scale-110"
                            >
                                <FaFacebookF className="text-white" size={16} />
                            </Link>
                            <Link
                                href="#"
                                className="w-10 h-10 bg-white/10 hover:bg-[#34969E] rounded-full flex items-center justify-center transition-colors duration-300 hover:scale-110"
                            >
                                <FaTwitter className="text-white" size={16} />
                            </Link>
                            <Link
                                href="https://www.linkedin.com/company/protingent-india-llp/"
                                target="_blank"
                                className="w-10 h-10 bg-white/10 hover:bg-[#34969E] rounded-full flex items-center justify-center transition-colors duration-300 hover:scale-110"
                            >
                                <FaLinkedinIn className="text-white" size={16} />
                            </Link>
                            <Link
                                href="#"
                                className="w-10 h-10 bg-white/10 hover:bg-[#34969E] rounded-full flex items-center justify-center transition-colors duration-300 hover:scale-110"
                            >
                                <FaYoutube className="text-white" size={16} />
                            </Link>
                        </div>

                        {/* Copyright */}
                        <div className="text-center">
                            <p className="text-sm font-raleway text-gray-300">
                                © 2025 Protingent India LLP | All Rights Reserved
                            </p>
                        </div>

                        {/* Legal Links */}
                        <div className="flex items-center gap-6">
                            <Link
                                href="/privacy-policy"
                                className="text-sm font-raleway flex items-center text-gray-300 hover:text-[#C2D92C] transition-colors duration-300"
                            >
                                Privacy Policy & Cookies
                            </Link>
                            <Link
                                href="/terms-condition"
                                className="text-sm font-raleway flex items-center text-gray-300 hover:text-[#C2D92C] transition-colors duration-300"
                            >
                                Terms & Conditions
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom CSS for animations */}
            <style jsx>{`
                @keyframes shimmer {
                    0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
                    100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
                }
                
                .animate-shimmer {
                    animation: shimmer 4s ease-in-out infinite;
                }
            `}</style>
        </footer>
    )
}

export default Footer;