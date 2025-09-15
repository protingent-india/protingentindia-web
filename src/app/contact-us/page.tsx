"use client"
import React, { useState } from "react";
import {
    GeometricBackground
} from "@/components";
import { 
    FaPhone, 
    FaEnvelope, 
    FaMapMarkerAlt,
    FaFax,
    FaDirections,
    FaUser,
    FaBuilding,
    FaServicestack,
    FaPaperPlane,
    FaCheckCircle,
    FaGlobe,
    FaArrowRight
} from 'react-icons/fa';

// Hero Section
const ContactHeroSection = () => {
    return (
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background with abstract map pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#113F64] via-[#34969E] to-[#C2D92C]"></div>
            
            {/* Abstract map pattern overlay */}
            <div 
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, #C2D92C 2px, transparent 2px), 
                                     radial-gradient(circle at 75% 75%, #113F64 3px, transparent 3px),
                                     linear-gradient(45deg, transparent 40%, #34969E 41%, #34969E 42%, transparent 43%)`,
                    backgroundSize: '80px 80px, 120px 120px, 60px 60px'
                }}
            ></div>
            
            {/* Animated geometric elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-32 h-32 border-2 border-[#C2D92C]/30 rounded-full animate-pulse"></div>
                <div className="absolute bottom-20 right-16 w-24 h-24 border-2 border-white/40 rotate-45 animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#C2D92C]/20 rounded-lg animate-pulse" style={{animationDelay: '2s'}}></div>
            </div>
            
            <div className="relative z-10 text-center text-white max-w-5xl px-4 md:px-6">
                <div className="mb-6">
                    <div className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                        <span className="text-[#C2D92C] font-semibold text-lg">🌍 Connect Globally</span>
                    </div>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Lato' }}>
                    Let's Build Your
                    <span className="block text-[#C2D92C]">Success Story</span>
                </h1>
                
                <p className="text-xl md:text-2xl font-light mb-8 max-w-4xl mx-auto leading-relaxed opacity-90" style={{ fontFamily: 'Raleway' }}>
                    Ready to transform your business with world-class talent solutions? Our global team is here to help you navigate 
                    your workforce challenges and unlock new opportunities for growth.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-10">
                    <button className="px-10 py-4 bg-[#C2D92C] text-[#113F64] font-bold text-lg rounded-full hover:scale-105 transform transition-all shadow-2xl" style={{ fontFamily: 'Lato' }}>
                        <span className="flex items-center gap-3">
                            <FaPhone />
                            Call Us Now
                        </span>
                    </button>
                    
                    <button className="px-8 py-4 border-2 border-white/40 rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group text-white">
                        <span className="flex items-center gap-3">
                            <span>Schedule Meeting</span>
                            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                    </button>
                </div>
                
                {/* Trust indicators */}
                <div className="flex justify-center items-center gap-12 mt-12 text-sm opacity-80">
                    <div className="text-center">
                        <div className="font-bold text-2xl" style={{ fontFamily: 'Lato' }}>24hrs</div>
                        <div style={{ fontFamily: 'Raleway' }}>Response Time</div>
                    </div>
                    <div className="text-center">
                        <div className="font-bold text-2xl" style={{ fontFamily: 'Lato' }}>4</div>
                        <div style={{ fontFamily: 'Raleway' }}>Global Offices</div>
                    </div>
                    <div className="text-center">
                        <div className="font-bold text-2xl" style={{ fontFamily: 'Lato' }}>15+</div>
                        <div style={{ fontFamily: 'Raleway' }}>Years Experience</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// India HQ Section (Primary)
const IndiaHQSection = () => {
    return (
        <div className="w-full bg-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#113F64', fontFamily: 'Lato' }}>
                        Our India Headquarters
                    </h2>
                    <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: 'Raleway' }}>
                        Located in the heart of Jaipur, our India headquarters serves as the primary hub for all our operations, 
                        connecting talent across the globe with opportunities that matter.
                    </p>
                </div>

                {/* Split layout: HQ Info + Map */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* India HQ Info Card */}
                    <div className="group relative">
                        <div className="relative overflow-hidden rounded-3xl p-8 lg:p-12 bg-gradient-to-br from-[#113F64] via-[#34969E] to-[#113F64] text-white shadow-2xl hover:shadow-3xl transition-all duration-500">
                            {/* Abstract pattern overlay */}
                            <div 
                                className="absolute inset-0 opacity-10"
                                style={{
                                    backgroundImage: `linear-gradient(45deg, #C2D92C 1px, transparent 1px), linear-gradient(-45deg, #C2D92C 1px, transparent 1px)`,
                                    backgroundSize: '20px 20px'
                                }}
                            ></div>
                            
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-16 h-16 bg-[#C2D92C] rounded-2xl flex items-center justify-center">
                                        <FaBuilding className="text-2xl text-[#113F64]" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold" style={{ fontFamily: 'Lato' }}>PROTINGENT INDIA LLP</h3>
                                        <div className="text-[#C2D92C] font-semibold">India Headquarters</div>
                                    </div>
                                </div>
                                
                                {/* Address */}
                                <div className="mb-8">
                                    <div className="flex items-start gap-4 mb-4">
                                        <FaMapMarkerAlt className="text-[#C2D92C] text-xl mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="text-lg leading-relaxed" style={{ fontFamily: 'Raleway' }}>
                                                4th floor, Jaipur Centre, 420, Tonk Rd, 
                                                <br />Choti Chopard, Chandrakala Colony, 
                                                <br />Durgapura, Jaipur, Rajasthan 302018
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Contact Details */}
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <FaEnvelope className="text-[#C2D92C] text-xl" />
                                        <a href="mailto:connect@protingentindia.com" className="text-lg hover:text-[#C2D92C] transition-colors duration-300" style={{ fontFamily: 'Raleway' }}>
                                            connect@protingentindia.com
                                        </a>
                                    </div>
                                    
                                    <div className="flex items-center gap-4">
                                        <FaPhone className="text-[#C2D92C] text-xl" />
                                        <div className="space-y-1">
                                            <a href="tel:+911412990687" className="block text-lg hover:text-[#C2D92C] transition-colors duration-300" style={{ fontFamily: 'Raleway' }}>
                                                +91 141 299 0687
                                            </a>
                                            <a href="tel:+919119102197" className="block text-lg hover:text-[#C2D92C] transition-colors duration-300" style={{ fontFamily: 'Raleway' }}>
                                                +91 91191 02197
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* CTA Button */}
                                <div className="mt-8 pt-8 border-t border-white/20">
                                    <button className="flex items-center gap-3 px-6 py-3 bg-[#C2D92C] text-[#113F64] font-bold rounded-lg hover:bg-white transition-colors duration-300" style={{ fontFamily: 'Lato' }}>
                                        <FaDirections />
                                        Get Directions
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Interactive Map */}
                    <div className="relative">
                        <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gray-100 h-[500px]">
                            {/* Embedded Google Map */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.2467892862304!2d75.8172168!3d26.8735391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5c6f2b2b7b7%3A0x8b2b2b2b2b2b2b2b!2sJaipur%20Centre%2C%20Tonk%20Rd%2C%20Choti%20Chopard%2C%20Chandrakala%20Colony%2C%20Durgapura%2C%20Jaipur%2C%20Rajasthan%20302018!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-3xl"
                            ></iframe>
                            
                            {/* Map overlay with office info */}
                            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 border border-gray-200">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-[#34969E] rounded-xl flex items-center justify-center">
                                        <FaBuilding className="text-white text-lg" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-[#113F64]" style={{ fontFamily: 'Lato' }}>Protingent India HQ</div>
                                        <div className="text-gray-600 text-sm" style={{ fontFamily: 'Raleway' }}>Jaipur, Rajasthan</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Contact Form Section
const ContactFormSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                service: '',
                message: ''
            });
        }, 3000);
    };

    if (isSubmitted) {
        return (
            <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-24">
                <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
                    <div className="bg-white rounded-3xl p-12 shadow-2xl">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <FaCheckCircle className="text-3xl text-green-600" />
                        </div>
                        <h3 className="text-3xl font-bold text-[#113F64] mb-4" style={{ fontFamily: 'Lato' }}>
                            Message Sent Successfully!
                        </h3>
                        <p className="text-xl text-gray-600 mb-6" style={{ fontFamily: 'Raleway' }}>
                            Thank you for reaching out. Our team will get back to you within 24 hours.
                        </p>
                        <div className="flex justify-center items-center gap-8 text-sm text-gray-500">
                            <div className="flex items-center gap-2">
                                <FaEnvelope className="text-[#34969E]" />
                                <span>Email confirmation sent</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaPhone className="text-[#34969E]" />
                                <span>24hr response guarantee</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-24">
            <div className="max-w-4xl mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#113F64', fontFamily: 'Lato' }}>
                        Send Us Your Query
                    </h2>
                    <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Raleway' }}>
                        Fill out the form below and our team will get back to you within 24 hours.
                    </p>
                </div>

                <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl">
                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Name and Email */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="relative">
                                <label className="block text-sm font-bold text-[#113F64] mb-3" style={{ fontFamily: 'Lato' }}>
                                    <FaUser className="inline mr-2" />
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#34969E] focus:ring-0 outline-none transition-all duration-300 text-lg"
                                    placeholder="Enter your full name"
                                    style={{ fontFamily: 'Raleway' }}
                                />
                            </div>
                            
                            <div className="relative">
                                <label className="block text-sm font-bold text-[#113F64] mb-3" style={{ fontFamily: 'Lato' }}>
                                    <FaEnvelope className="inline mr-2" />
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#34969E] focus:ring-0 outline-none transition-all duration-300 text-lg"
                                    placeholder="Enter your email address"
                                    style={{ fontFamily: 'Raleway' }}
                                />
                            </div>
                        </div>

                        {/* Phone and Company */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="relative">
                                <label className="block text-sm font-bold text-[#113F64] mb-3" style={{ fontFamily: 'Lato' }}>
                                    <FaPhone className="inline mr-2" />
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#34969E] focus:ring-0 outline-none transition-all duration-300 text-lg"
                                    placeholder="Enter your phone number"
                                    style={{ fontFamily: 'Raleway' }}
                                />
                            </div>
                            
                            <div className="relative">
                                <label className="block text-sm font-bold text-[#113F64] mb-3" style={{ fontFamily: 'Lato' }}>
                                    <FaBuilding className="inline mr-2" />
                                    Company Name
                                </label>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#34969E] focus:ring-0 outline-none transition-all duration-300 text-lg"
                                    placeholder="Enter your company name"
                                    style={{ fontFamily: 'Raleway' }}
                                />
                            </div>
                        </div>

                        {/* Service Interest */}
                        <div className="relative">
                            <label className="block text-sm font-bold text-[#113F64] mb-3" style={{ fontFamily: 'Lato' }}>
                                <FaServicestack className="inline mr-2" />
                                Service Interest
                            </label>
                            <select
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#34969E] focus:ring-0 outline-none transition-all duration-300 text-lg bg-white"
                                style={{ fontFamily: 'Raleway' }}
                            >
                                <option value="">Select a service</option>
                                <option value="rpo">RPO Services</option>
                                <option value="fte">FTE Hiring</option>
                                <option value="contract">Contract Staffing</option>
                                <option value="it-consulting">IT Consulting</option>
                                <option value="marketing">Marketing Solutions</option>
                                <option value="bi-data">BI & Data Visualization</option>
                                <option value="hr-outsourcing">HR Outsourcing</option>
                                <option value="direct-sourcing">Direct Sourcing</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        {/* Message */}
                        <div className="relative">
                            <label className="block text-sm font-bold text-[#113F64] mb-3" style={{ fontFamily: 'Lato' }}>
                                <FaPaperPlane className="inline mr-2" />
                                Message *
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={6}
                                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#34969E] focus:ring-0 outline-none transition-all duration-300 text-lg resize-none"
                                placeholder="Tell us about your requirements..."
                                style={{ fontFamily: 'Raleway' }}
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="text-center pt-6">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`px-12 py-4 bg-gradient-to-r from-[#34969E] to-[#C2D92C] text-white font-bold text-lg rounded-full transform transition-all duration-300 shadow-2xl ${
                                    isSubmitting 
                                        ? 'scale-95 opacity-70 cursor-not-allowed' 
                                        : 'hover:scale-105 hover:shadow-3xl'
                                }`}
                                style={{ fontFamily: 'Lato' }}
                            >
                                <span className="flex items-center gap-3">
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <FaPaperPlane />
                                            Send Message
                                        </>
                                    )}
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

// US Offices Section
const USOfficesSection = () => {
    const usOffices = [
        {
            name: "Corporate / Bellevue Location",
            address: "Lincoln Plaza, Building A\n11235 SE 6th Street, Suite 220\nBellevue, WA 98004",
            phone: "425.284.7777",
            tollFree: "866.244.4396",
            fax: "425.642.8001",
            directionsLink: "#",
            gradient: "from-[#113F64] to-[#34969E]"
        },
        {
            name: "Portland Location",
            address: "20055 SW Pacific Hwy, Suite 101\nSherwood, OR 97140",
            phone: "503.431.2190",
            tollFree: "866.244.4396",
            fax: "425.642.8001",
            directionsLink: "#",
            gradient: "from-[#34969E] to-[#C2D92C]"
        },
        {
            name: "Bay Area / Silicon Valley Location",
            address: "50 Vashell Way, Suite 250\nOrinda, CA 94563",
            phone: "925.255.1367",
            tollFree: "866.244.4396",
            fax: "425.642.8001",
            directionsLink: "#",
            gradient: "from-[#C2D92C] to-[#34969E]"
        }
    ];

    return (
        <div className="w-full bg-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#113F64', fontFamily: 'Lato' }}>
                        Our Partner Offices in USA
                    </h2>
                    <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: 'Raleway' }}>
                        Strategically located across key business hubs in the United States to serve our clients better.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {usOffices.map((office, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-3xl transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-2"
                        >
                            {/* Background gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${office.gradient} opacity-90 group-hover:opacity-100 transition-opacity duration-300`}></div>
                            
                            {/* Subtle pattern overlay */}
                            <div 
                                className="absolute inset-0 opacity-10"
                                style={{
                                    backgroundImage: `radial-gradient(circle at 30% 30%, #fff 2px, transparent 2px)`,
                                    backgroundSize: '40px 40px'
                                }}
                            ></div>
                            
                            <div className="relative z-10 p-8 h-full text-white min-h-[400px] flex flex-col justify-between">
                                {/* Header */}
                                <div>
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
                                            <FaBuilding className="text-2xl text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold leading-tight" style={{ fontFamily: 'Lato' }}>
                                                {office.name}
                                            </h3>
                                        </div>
                                    </div>
                                    
                                    {/* Address */}
                                    <div className="mb-6">
                                        <div className="flex items-start gap-3 mb-4">
                                            <FaMapMarkerAlt className="text-white/80 text-lg mt-1 flex-shrink-0" />
                                            <p className="text-white/90 leading-relaxed" style={{ fontFamily: 'Raleway' }}>
                                                {office.address.split('\n').map((line, idx) => (
                                                    <span key={idx}>
                                                        {line}
                                                        {idx < office.address.split('\n').length - 1 && <br />}
                                                    </span>
                                                ))}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Contact Information */}
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <FaPhone className="text-white/80 text-sm" />
                                        <a href={`tel:${office.phone.replace(/\./g, '')}`} className="text-sm hover:text-white/80 transition-colors duration-300" style={{ fontFamily: 'Raleway' }}>
                                            {office.phone}
                                        </a>
                                    </div>
                                    
                                    <div className="flex items-center gap-3">
                                        <FaGlobe className="text-white/80 text-sm" />
                                        <a href={`tel:${office.tollFree.replace(/\./g, '')}`} className="text-sm hover:text-white/80 transition-colors duration-300" style={{ fontFamily: 'Raleway' }}>
                                            Toll-Free: {office.tollFree}
                                        </a>
                                    </div>
                                    
                                    <div className="flex items-center gap-3">
                                        <FaFax className="text-white/80 text-sm" />
                                        <span className="text-sm" style={{ fontFamily: 'Raleway' }}>
                                            Fax: {office.fax}
                                        </span>
                                    </div>
                                    
                                    {/* Directions Link */}
                                    <div className="pt-4 border-t border-white/20">
                                        <a 
                                            href={office.directionsLink}
                                            className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all duration-300"
                                            style={{ fontFamily: 'Lato' }}
                                        >
                                            <FaDirections />
                                            Get Directions
                                            <FaArrowRight className="text-xs" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Main Contact Us Page Component
export default function ContactUsPage() {
    return (
        <div className="bg-white w-full flex flex-col items-center gap-0">
            <ContactHeroSection />
            <IndiaHQSection />
            <ContactFormSection />
            <USOfficesSection />
        </div>
    );
}