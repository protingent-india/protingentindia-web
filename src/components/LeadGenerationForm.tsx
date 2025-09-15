'use client';
import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Check } from 'lucide-react';

interface LeadGenerationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  // Step 1: Basic Info
  fullName: string;
  businessEmail: string;
  phoneNumber: string;
  companyName: string;
  
  // Step 2: Service Requirements
  serviceRequired: string;
  budgetRange: string;
  projectTimeline: string;
  teamSize: string;
  
  // Step 3: Additional Details
  projectDetails: string;
  hearAboutUs: string;
  gdprConsent: boolean;
}

interface FormErrors {
  fullName?: string;
  businessEmail?: string;
  phoneNumber?: string;
  companyName?: string;
  serviceRequired?: string;
  budgetRange?: string;
  projectTimeline?: string;
  teamSize?: string;
  projectDetails?: string;
  hearAboutUs?: string;
  gdprConsent?: string;
}

const initialFormData: FormData = {
  fullName: '',
  businessEmail: '',
  phoneNumber: '',
  companyName: '',
  serviceRequired: '',
  budgetRange: '',
  projectTimeline: '',
  teamSize: '',
  projectDetails: '',
  hearAboutUs: '',
  gdprConsent: false,
};

const services = [
  'RPO',
  'FTE',
  'Contract Staffing',
  'Direct Sourcing',
  'HR Outsourcing',
  'BI & Data Visualization',
  'Multiple Services',
];

const budgetRanges = [
  '<$50k',
  '$50k–100k',
  '$100k–250k',
  '$250k–500k',
  '>$500k',
];

const timelines = [
  'Immediate',
  '1 month',
  '3 months',
  '6 months',
  'Planning',
];

const teamSizes = [
  '1–5',
  '6–15',
  '16–30',
  '31–50',
  '51–100',
  '100+',
];

const hearAboutOptions = [
  'Google',
  'LinkedIn',
  'Referral',
  'Website',
  'Other',
];

const LeadGenerationForm: React.FC<LeadGenerationFormProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Close form on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when form is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: FormErrors = {};

    if (step === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
      if (!formData.businessEmail.trim()) {
        newErrors.businessEmail = 'Business email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.businessEmail)) {
        newErrors.businessEmail = 'Please enter a valid email';
      }
      if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';
      if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    }

    if (step === 2) {
      if (!formData.serviceRequired) newErrors.serviceRequired = 'Service selection is required';
      if (!formData.projectTimeline) newErrors.projectTimeline = 'Project timeline is required';
    }

    if (step === 3) {
      if (!formData.gdprConsent) newErrors.gdprConsent = 'Consent is required to proceed';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 3));
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!validateStep(3)) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form and close
    setFormData(initialFormData);
    setCurrentStep(1);
    setIsSubmitting(false);
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-start"
      onClick={handleBackdropClick}
    >
      {/* Backdrop with blur */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      
      {/* Form Panel */}
      <div 
        className={`
          relative bg-white h-full w-full max-w-[500px] shadow-2xl transform transition-transform duration-300 ease-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:w-[500px] overflow-y-auto
        `}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#113F64] to-[#34969E] p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Close form"
          >
            <X size={20} />
          </button>
          
          <h2 className="text-2xl font-bold mb-2">Get Your Quote</h2>
          <p className="text-white/90 text-sm">
            Tell us about your requirements and we'll get back to you within 24 hours
          </p>
          
          {/* Progress Bar */}
          <div className="mt-6 flex items-center space-x-2">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`
                    w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all
                    ${currentStep >= step 
                      ? 'bg-[#C2D92C] text-[#113F64]' 
                      : 'bg-white/20 text-white'
                    }
                  `}
                >
                  {currentStep > step ? <Check size={16} /> : step}
                </div>
                {step < 3 && (
                  <div 
                    className={`
                      w-8 h-1 mx-1 rounded transition-all
                      ${currentStep > step ? 'bg-[#C2D92C]' : 'bg-white/20'}
                    `}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Body */}
        <div className="p-6 flex-1">
          <div className="animate-fadeIn">
            {/* Step 1: Basic Info */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#113F64] mb-4">Basic Information</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className={`
                      w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#34969E] transition-all
                      ${errors.fullName ? 'border-red-500' : 'border-gray-300'}
                    `}
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    value={formData.businessEmail}
                    onChange={(e) => handleInputChange('businessEmail', e.target.value)}
                    className={`
                      w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#34969E] transition-all
                      ${errors.businessEmail ? 'border-red-500' : 'border-gray-300'}
                    `}
                    placeholder="Enter your business email"
                  />
                  {errors.businessEmail && <p className="text-red-500 text-sm mt-1">{errors.businessEmail}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                    className={`
                      w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#34969E] transition-all
                      ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'}
                    `}
                    placeholder="Enter your phone number"
                  />
                  {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                    className={`
                      w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#34969E] transition-all
                      ${errors.companyName ? 'border-red-500' : 'border-gray-300'}
                    `}
                    placeholder="Enter your company name"
                  />
                  {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>}
                </div>
              </div>
            )}

            {/* Step 2: Service Requirements */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#113F64] mb-4">Service Requirements</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Required *
                  </label>
                  <select
                    value={formData.serviceRequired}
                    onChange={(e) => handleInputChange('serviceRequired', e.target.value)}
                    className={`
                      w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#34969E] transition-all
                      ${errors.serviceRequired ? 'border-red-500' : 'border-gray-300'}
                    `}
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                  {errors.serviceRequired && <p className="text-red-500 text-sm mt-1">{errors.serviceRequired}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Estimated Budget Range
                  </label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => handleInputChange('budgetRange', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#34969E] transition-all"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Timeline *
                  </label>
                  <select
                    value={formData.projectTimeline}
                    onChange={(e) => handleInputChange('projectTimeline', e.target.value)}
                    className={`
                      w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#34969E] transition-all
                      ${errors.projectTimeline ? 'border-red-500' : 'border-gray-300'}
                    `}
                  >
                    <option value="">Select timeline</option>
                    {timelines.map((timeline) => (
                      <option key={timeline} value={timeline}>{timeline}</option>
                    ))}
                  </select>
                  {errors.projectTimeline && <p className="text-red-500 text-sm mt-1">{errors.projectTimeline}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Team Size Required
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {teamSizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => handleInputChange('teamSize', size)}
                        className={`
                          px-3 py-2 text-sm rounded-lg border transition-all
                          ${formData.teamSize === size
                            ? 'bg-[#34969E] text-white border-[#34969E]'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-[#34969E]'
                          }
                        `}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Additional Details */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#113F64] mb-4">Additional Details</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details
                  </label>
                  <textarea
                    value={formData.projectDetails}
                    onChange={(e) => handleInputChange('projectDetails', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#34969E] transition-all resize-none"
                    placeholder="Tell us more about your project requirements..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    How did you hear about us?
                  </label>
                  <select
                    value={formData.hearAboutUs}
                    onChange={(e) => handleInputChange('hearAboutUs', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#34969E] transition-all"
                  >
                    <option value="">Select an option</option>
                    {hearAboutOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div className="pt-4">
                  <label className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      checked={formData.gdprConsent}
                      onChange={(e) => handleInputChange('gdprConsent', e.target.checked)}
                      className="mt-1 w-4 h-4 text-[#34969E] border-gray-300 rounded focus:ring-[#34969E]"
                    />
                    <span className="text-sm text-gray-700 leading-5">
                      I consent to the processing of my personal data for the purpose of receiving information about services. 
                      I understand that I can withdraw my consent at any time. *
                    </span>
                  </label>
                  {errors.gdprConsent && <p className="text-red-500 text-sm mt-1 ml-7">{errors.gdprConsent}</p>}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t bg-gray-50 flex justify-between items-center">
          <button
            onClick={handleBack}
            disabled={currentStep === 1}
            className={`
              flex items-center space-x-2 px-4 py-2 rounded-lg transition-all
              ${currentStep === 1 
                ? 'text-gray-400 cursor-not-allowed' 
                : 'text-[#113F64] hover:bg-gray-100'
              }
            `}
          >
            <ChevronLeft size={16} />
            <span>Back</span>
          </button>

          {currentStep < 3 ? (
            <button
              onClick={handleNext}
              className="flex items-center space-x-2 bg-gradient-to-r from-[#34969E] to-[#C2D92C] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              <span>Next</span>
              <ChevronRight size={16} />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`
                flex items-center space-x-2 bg-gradient-to-r from-[#113F64] to-[#34969E] text-white px-6 py-3 rounded-lg font-semibold transition-all
                ${isSubmitting 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:shadow-lg'
                }
              `}
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <Check size={16} />
                  <span>Get Your Quote</span>
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadGenerationForm;