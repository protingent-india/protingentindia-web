"use client"
import React, { useState, useEffect, useRef } from 'react';
import {
    FaTimes,
    FaUser,
    FaEnvelope,
    FaPhone,
    FaBuilding,
    FaCogs,
    FaComment,
    FaDownload,
    FaPaperPlane,
    FaCheckCircle
} from 'react-icons/fa';

interface FormData {
    fullName: string;
    email: string;
    phone: string;
    companyName: string;
    serviceInterested: string;
    message: string;
    submittedAt: string;
}

interface ConsultationPopupProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    description?: string;
}

const ConsultationPopup: React.FC<ConsultationPopupProps> = ({
    isOpen,
    onClose,
    title = "Get Free Consultation",
    description = "Tell us about your requirements and our experts will get in touch with you within 24 hours."
}) => {
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        email: '',
        phone: '',
        companyName: '',
        serviceInterested: '',
        message: '',
        submittedAt: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState<Partial<FormData>>({});
    const [isLoading, setIsLoading] = useState(false);

    const modalRef = useRef<HTMLDivElement>(null);
    const firstInputRef = useRef<HTMLInputElement>(null);

    const services = [
        'RPO (Recruitment Process Outsourcing)',
        'FTE Hiring (Full-Time Employee)',
        'Contract Staffing',
        'Direct Sourcing',
        'HR Outsourcing',
        'IT Consulting',
        'BI Data Visualization',
        'Marketing Solutions',
        'Other'
    ];

    // Handle escape key and focus trap
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';

            // Focus on first input when modal opens
            setTimeout(() => {
                firstInputRef.current?.focus();
            }, 100);

            const handleEscape = (e: KeyboardEvent) => {
                if (e.key === 'Escape') {
                    onClose();
                }
            };

            const handleFocusTrap = (e: KeyboardEvent) => {
                if (e.key === 'Tab' && modalRef.current) {
                    const focusableElements = modalRef.current.querySelectorAll(
                        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                    );
                    const firstElement = focusableElements[0] as HTMLElement;
                    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

                    if (e.shiftKey) {
                        if (document.activeElement === firstElement) {
                            lastElement.focus();
                            e.preventDefault();
                        }
                    } else {
                        if (document.activeElement === lastElement) {
                            firstElement.focus();
                            e.preventDefault();
                        }
                    }
                }
            };

            document.addEventListener('keydown', handleEscape);
            document.addEventListener('keydown', handleFocusTrap);

            return () => {
                document.body.style.overflow = 'unset';
                document.removeEventListener('keydown', handleEscape);
                document.removeEventListener('keydown', handleFocusTrap);
            };
        }
    }, [isOpen, onClose]);

    // Handle input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (errors[name as keyof FormData]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    // Validate form
    const validateForm = (): boolean => {
        const newErrors: Partial<FormData> = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Full name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email address is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
            newErrors.phone = 'Please enter a valid phone number';
        }

        if (!formData.companyName.trim()) {
            newErrors.companyName = 'Company name is required';
        }

        if (!formData.serviceInterested) {
            newErrors.serviceInterested = 'Please select a service';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Please describe your requirements';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsLoading(true);

        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        const submissionData = {
            ...formData,
            submittedAt: new Date().toISOString()
        };

        // Save to localStorage
        const existingData = JSON.parse(localStorage.getItem('consultationRequests') || '[]');
        existingData.push(submissionData);
        localStorage.setItem('consultationRequests', JSON.stringify(existingData));

        setIsLoading(false);
        setIsSubmitted(true);
    };

    // Download data as JSON
    const downloadJSON = () => {
        const allData = JSON.parse(localStorage.getItem('consultationRequests') || '[]');
        const dataStr = JSON.stringify(allData, null, 2);
        const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

        const exportFileDefaultName = `consultation-requests-${new Date().toISOString().split('T')[0]}.json`;

        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
    };

    // Send via email
    const sendViaEmail = () => {
        const subject = encodeURIComponent('New Consultation Request - Protingent India');
        const body = encodeURIComponent(`
Hello Protingent India Team,

I have submitted a consultation request with the following details:

Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.companyName}
Service Interested In: ${formData.serviceInterested}

Requirements:
${formData.message}

Submitted on: ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}

Please get in touch with me at your earliest convenience.

Best regards,
${formData.fullName}
        `);

        window.open(`mailto:info@protingentindia.com?subject=${subject}&body=${body}`);
    };

    // Handle background click
    const handleBackgroundClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    // Reset form and submission state when modal closes
    const handleClose = () => {
        setIsSubmitted(false);
        setFormData({
            fullName: '',
            email: '',
            phone: '',
            companyName: '',
            serviceInterested: '',
            message: '',
            submittedAt: ''
        });
        setErrors({});
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#113F64]/30 backdrop-blur-md max-w-screen"
            onClick={handleBackgroundClick}
        >
            <div
                ref={modalRef}
                className={`relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl transform transition-all duration-500 max-h-[90vh] overflow-y-auto scrollbar-hide overscroll-contain ${isOpen ? 'scale-100 opacity-100 translate-x-0' : 'scale-95 opacity-0 -translate-x-8'
                    }`}
                style={{
                    fontFamily: 'Raleway, sans-serif',
                    WebkitOverflowScrolling: 'touch', /* Smooth scrolling on iOS */
                }}
            >
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-300"
                    aria-label="Close modal"
                >
                    <FaTimes className="w-5 h-5 text-gray-600" />
                </button>

                {/* Header */}
                <div className="px-8 pt-8 pb-6 border-b border-gray-100">
                    <h2 className="text-3xl font-bold mb-2" style={{ color: '#113F64', fontFamily: 'Lato, sans-serif' }}>
                        {title}
                    </h2>
                    <p className="text-gray-600 text-lg">
                        {description}
                    </p>
                </div>

                {/* Success State */}
                {isSubmitted ? (
                    <div className="px-8 py-12 text-center">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <FaCheckCircle className="w-10 h-10 text-green-600" />
                        </div>

                        <h3 className="text-2xl font-bold mb-4" style={{ color: '#113F64', fontFamily: 'Lato, sans-serif' }}>
                            Thank You!
                        </h3>

                        <p className="text-gray-600 text-lg mb-8">
                            Your details have been saved successfully. Our team will reach out to you within 24 hours to discuss your requirements.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={downloadJSON}
                                className="flex items-center justify-center gap-3 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors duration-300 min-h-[44px]"
                            >
                                <FaDownload className="w-5 h-5" />
                                Download Data
                            </button>

                            <button
                                onClick={sendViaEmail}
                                className="flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-[#34969E] to-[#113F64] hover:from-[#2d7a85] hover:to-[#0d2f4a] text-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg min-h-[44px]"
                            >
                                <FaPaperPlane className="w-5 h-5" />
                                Send via Email
                            </button>
                        </div>

                        <button
                            onClick={handleClose}
                            className="mt-6 text-gray-500 hover:text-gray-700 transition-colors duration-300"
                        >
                            Close
                        </button>
                    </div>
                ) : (
                    /* Form */
                    <form onSubmit={handleSubmit} className="px-8 py-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            {/* Full Name */}
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Full Name *
                                </label>
                                <div className="relative">
                                    <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        ref={firstInputRef}
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#34969E]/20 transition-colors duration-300 ${errors.fullName ? 'border-red-500' : 'border-gray-200 focus:border-[#34969E]'
                                            }`}
                                        placeholder="Enter your full name"
                                    />
                                </div>
                                {errors.fullName && (
                                    <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email Address *
                                </label>
                                <div className="relative">
                                    <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#34969E]/20 transition-colors duration-300 ${errors.email ? 'border-red-500' : 'border-gray-200 focus:border-[#34969E]'
                                            }`}
                                        placeholder="your.email@company.com"
                                    />
                                </div>
                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                                )}
                            </div>

                            {/* Phone */}
                            <div>
                                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Phone Number *
                                </label>
                                <div className="relative">
                                    <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#34969E]/20 transition-colors duration-300 ${errors.phone ? 'border-red-500' : 'border-gray-200 focus:border-[#34969E]'
                                            }`}
                                        placeholder="+1 (555) 123-4567"
                                    />
                                </div>
                                {errors.phone && (
                                    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                                )}
                            </div>

                            {/* Company Name */}
                            <div>
                                <label htmlFor="companyName" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Company Name *
                                </label>
                                <div className="relative">
                                    <FaBuilding className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type="text"
                                        id="companyName"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleInputChange}
                                        className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#34969E]/20 transition-colors duration-300 ${errors.companyName ? 'border-red-500' : 'border-gray-200 focus:border-[#34969E]'
                                            }`}
                                        placeholder="Your Company Name"
                                    />
                                </div>
                                {errors.companyName && (
                                    <p className="mt-1 text-sm text-red-600">{errors.companyName}</p>
                                )}
                            </div>
                        </div>

                        {/* Service Interested In */}
                        <div className="mb-6">
                            <label htmlFor="serviceInterested" className="block text-sm font-semibold text-gray-700 mb-2">
                                Service Interested In *
                            </label>
                            <div className="relative">
                                <FaCogs className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <select
                                    id="serviceInterested"
                                    name="serviceInterested"
                                    value={formData.serviceInterested}
                                    onChange={handleInputChange}
                                    className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#34969E]/20 transition-colors duration-300 appearance-none bg-white ${errors.serviceInterested ? 'border-red-500' : 'border-gray-200 focus:border-[#34969E]'
                                        }`}
                                >
                                    <option value="">Select a service...</option>
                                    {services.map((service, index) => (
                                        <option key={index} value={service}>
                                            {service}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            {errors.serviceInterested && (
                                <p className="mt-1 text-sm text-red-600">{errors.serviceInterested}</p>
                            )}
                        </div>

                        {/* Message */}
                        <div className="mb-8">
                            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                Message / Requirements *
                            </label>
                            <div className="relative">
                                <FaComment className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={4}
                                    className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#34969E]/20 transition-colors duration-300 resize-y ${errors.message ? 'border-red-500' : 'border-gray-200 focus:border-[#34969E]'
                                        }`}
                                    placeholder="Tell us about your specific requirements, timeline, team size, or any questions you have..."
                                />
                            </div>
                            {errors.message && (
                                <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="flex-1 flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#34969E] to-[#C2D92C] hover:from-[#2d7a85] hover:to-[#a8c128] text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none min-h-[44px]"
                                style={{ fontFamily: 'Lato, sans-serif' }}
                            >
                                {isLoading ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        Submitting...
                                    </>
                                ) : (
                                    <>
                                        <FaPaperPlane className="w-5 h-5" />
                                        Submit Request
                                    </>
                                )}
                            </button>

                            <button
                                type="button"
                                onClick={handleClose}
                                className="px-6 py-4 border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-semibold rounded-xl transition-colors duration-300 min-h-[44px]"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ConsultationPopup;