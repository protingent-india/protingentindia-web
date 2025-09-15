"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Icon, ConsultationPopup } from '@/components';
import { useConsultationPopup } from '@/hooks/useConsultationPopup';

const ITConsultingPage = () => {
    const { isOpen, config, openPopup, closePopup } = useConsultationPopup();
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);
    const [faqSearch, setFaqSearch] = useState('');

    // FAQ data from the document
    const faqData = [
        {
            question: "What does an IT consulting firm do?",
            answer: "An IT consulting firm evaluates a company's technology landscape, identifies improvement areas, and recommends solutions that drive growth. It covers strategic planning, system integration, risk management, and implementation guidance. The goal is to help businesses leverage technology efficiently, cut unnecessary costs, and ensure operations align with long-term business objectives."
        },
        {
            question: "How do IT consulting services benefit businesses?",
            answer: "IT consulting services deliver measurable business value by improving productivity, accelerating time-to-market, and enhancing customer experiences. Consultants provide access to specialized expertise, modern frameworks, and proven methodologies. They also ensure smooth adoption of new technologies while reducing risks. This structured approach results in better scalability, stronger security, and improved ROI from IT investments."
        },
        {
            question: "When should a business hire IT consulting services?",
            answer: "A business should consider IT consulting when facing challenges like rising IT costs, legacy systems slowing operations, compliance requirements, or the need for cloud adoption. It is also essential during digital transformation, mergers, or rapid scaling. Hiring IT consulting experts at the right time ensures smarter decisions, faster execution, and long-term business success."
        },
        {
            question: "How much do IT consulting services cost?",
            answer: "The cost of IT consulting varies based on project scope, technology stack, and duration. Short advisory sprints may require smaller budgets, while large-scale digital transformation or cloud migration consulting involves phased investments. Transparent pricing models ensure businesses can predict costs accurately. Ultimately, consulting saves money by preventing inefficiencies and aligning IT spend with business goals."
        },
        {
            question: "How is IT consulting different from IT outsourcing?",
            answer: "IT consulting focuses on strategy, planning, and guiding technology decisions, while IT outsourcing handles the execution of IT operations or tasks. A consulting firm acts as an advisor helping define roadmaps and ensuring systems align with goals whereas outsourcing providers deliver manpower or services. Many businesses combine both for maximum efficiency and flexibility."
        },
        {
            question: "What is the typical timeline for an IT consulting project?",
            answer: "Timelines vary based on complexity and objectives. An IT strategy consultation may take a few weeks, while enterprise-wide modernization or cloud consulting projects can span several months. The structured approach assessment, design, delivery, and adoption ensures every stage is time-bound. This balance guarantees both speed and quality in delivering business-focused technology solutions."
        }
    ];

    // Filter FAQs based on search
    const filteredFAQs = faqData.filter(faq =>
        faq.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
        faq.answer.toLowerCase().includes(faqSearch.toLowerCase())
    );

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section - 20% height reduction */}
            <section className="relative bg-gradient-to-br from-navy-600 via-teal-500 to-lime-400 overflow-hidden">
                {/* Floating geometric elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 left-10 w-24 h-24 border-2 border-white/30 rotate-45 animate-pulse"></div>
                    <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/10 rotate-12 animate-bounce"></div>
                    <div className="absolute top-40 right-10 w-16 h-16 border border-lime-400/40 rounded-full animate-ping"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-24 min-h-[60vh] lg:min-h-[80vh] flex items-center">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2 text-white" data-aos="fade-right">
                            <h1 className="text-4xl lg:text-6xl font-bold font-lato mb-6 leading-tight">
                                IT Consulting Services that Accelerate Business Growth
                            </h1>
                            <p className="text-lg lg:text-xl font-raleway mb-8 leading-relaxed text-white/90">
                                Protingent India delivers end-to-end IT consulting services covering IT strategy consulting, application modernization, cloud consulting, data and AI consulting, and cybersecurity solutions to help enterprises reduce costs, enhance agility, and scale with confidence.
                            </p>
                            <button 
                                onClick={() => openPopup({
                                    title: "Get a Free Consultation",
                                    description: "Ready to transform your IT infrastructure? Let our experts help you develop a strategic roadmap for digital transformation and technology optimization."
                                })}
                                className="px-8 py-4 bg-gradient-to-r from-teal-500 to-lime-400 hover:from-lime-400 hover:to-teal-500 text-navy-600 font-bold text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                            >
                                <span className="flex items-center gap-3">
                                    Get a Free Consultation
                                    <Icon 
                                        icon="ph:arrow-right-fill"
                                        className="group-hover:translate-x-1 transition-transform duration-300"
                                    />
                                </span>
                            </button>
                        </div>
                        <div className="lg:w-1/2" data-aos="fade-left">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl transform group-hover:scale-105 transition-transform duration-300"></div>
                                <Image
                                    src="https://images.unsplash.com/photo-1573166364366-3f4f8b1857ea"
                                    alt="Professional IT consultants in modern office discussing strategy"
                                    width={600}
                                    height={400}
                                    className="relative z-10 w-full rounded-3xl shadow-2xl object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Businesses Need IT Consulting */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-3xl lg:text-5xl font-bold font-lato text-navy-600 mb-6">
                            Why Do Businesses Need IT Consulting Services?
                        </h2>
                        <p className="text-lg lg:text-xl font-raleway text-gray-700 max-w-4xl mx-auto leading-relaxed">
                            Organizations face increasing pressure to modernize technology, secure operations, and maximize efficiency. IT consulting services provide the expertise, strategies, and frameworks that guide businesses through this transformation.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {[
                            {
                                icon: "ph:target-fill",
                                title: "Strategic Alignment",
                                desc: "IT strategy consulting ensures technology decisions directly support business goals."
                            },
                            {
                                icon: "ph:gear-fill",
                                title: "Operational Efficiency", 
                                desc: "IT infrastructure consulting and ITSM consulting streamline processes, reduce downtime, and enhance productivity."
                            },
                            {
                                icon: "ph:chart-line-up-fill",
                                title: "Scalable Growth",
                                desc: "Cloud consulting services and application modernization consulting unlock agility, speed, and innovation."
                            },
                            {
                                icon: "ph:chart-bar-fill",
                                title: "Data-Driven Decisions",
                                desc: "Data and AI consulting services enable smarter insights and predictive intelligence."
                            },
                            {
                                icon: "ph:shield-check-fill",
                                title: "Enhanced Security",
                                desc: "Cybersecurity consulting services strengthen compliance, protect assets, and ensure business continuity."
                            }
                        ].map((item, index) => (
                            <div 
                                key={index}
                                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-lime-400 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <Icon icon={item.icon} className="text-2xl text-navy-600" />
                                    </div>
                                    <h3 className="text-xl font-bold font-lato text-navy-600 mb-4">{item.title}</h3>
                                    <p className="font-raleway text-gray-700 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center" data-aos="fade-up" data-aos-delay="600">
                        <p className="text-lg font-raleway text-gray-700 max-w-3xl mx-auto">
                            Partnering with the right IT consulting firm, businesses gain the clarity and confidence to implement solutions that deliver measurable results.
                        </p>
                    </div>
                </div>
            </section>

            {/* Comprehensive IT Consulting Services - Bento Grid with Tech Backgrounds */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-3xl lg:text-5xl font-bold font-lato text-navy-600 mb-6">
                            Comprehensive IT Consulting Services for Every Business Need
                        </h2>
                        <p className="text-lg lg:text-xl font-raleway text-gray-700 max-w-4xl mx-auto leading-relaxed">
                            Protingent India provides a full spectrum of IT consulting solutions that help businesses modernize, innovate, and scale efficiently.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up" data-aos-delay="200">
                        {/* Large card - IT Strategy */}
                        <div className="lg:col-span-2 lg:row-span-2 relative rounded-3xl p-8 text-white hover:scale-105 transition-all duration-300 group cursor-pointer overflow-hidden">
                            {/* Tech Background Image */}
                            <div 
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                style={{
                                    backgroundImage: `url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=2070')`,
                                }}
                            ></div>
                            {/* Enhanced Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-navy-600/95 via-teal-500/90 to-navy-600/95"></div>
                            
                            <div className="relative z-10">
                                <Icon icon="ph:strategy-fill" className="text-4xl mb-6 text-lime-400" />
                                <h3 className="text-2xl font-bold font-lato mb-4">IT Strategy & Enterprise Architecture Consulting</h3>
                                <p className="font-raleway leading-relaxed text-white/90">
                                    Design future-ready IT strategies and enterprise architectures that align technology with business goals. From roadmap creation to portfolio rationalization, IT strategy consulting ensures every decision supports growth and efficiency.
                                </p>
                            </div>
                        </div>

                        {/* Medium card - Application Modernization */}
                        <div className="lg:col-span-2 relative rounded-3xl p-6 text-navy-600 hover:scale-105 transition-all duration-300 group cursor-pointer overflow-hidden">
                            {/* Tech Background Image */}
                            <div 
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                style={{
                                    backgroundImage: `url('https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070')`,
                                }}
                            ></div>
                            {/* Enhanced Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/90 via-lime-400/85 to-teal-500/90"></div>
                            
                            <div className="relative z-10">
                                <Icon icon="ph:device-mobile-fill" className="text-3xl mb-4 text-navy-600" />
                                <h3 className="text-xl font-bold font-lato mb-3">Application Modernization Consulting</h3>
                                <p className="font-raleway leading-relaxed text-navy-600/95">
                                    Transform legacy applications into agile, high-performing systems. Application modernization consulting focuses on re-platforming, API integration, and microservices architecture for faster delivery and improved user experience.
                                </p>
                            </div>
                        </div>

                        {/* Small card - Cloud Consulting */}
                        <div className="relative rounded-3xl p-6 text-navy-600 hover:scale-105 transition-all duration-300 group cursor-pointer overflow-hidden">
                            {/* Tech Background Image */}
                            <div 
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                style={{
                                    backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')`,
                                }}
                            ></div>
                            {/* Enhanced Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-lime-400/90 via-teal-500/85 to-lime-400/90"></div>
                            
                            <div className="relative z-10">
                                <Icon icon="ph:cloud-fill" className="text-3xl mb-4 text-navy-600" />
                                <h3 className="text-lg font-bold font-lato mb-3">Cloud Consulting & Migration</h3>
                                <p className="font-raleway leading-relaxed text-navy-600/95">
                                    Plan and execute seamless cloud migrations across AWS, Azure, or GCP. Cloud consulting services optimize infrastructure, improve resilience, and include cloud cost optimization (FinOps) to maximize ROI.
                                </p>
                            </div>
                        </div>

                        {/* Small card - AI & Data Analytics */}
                        <div className="relative rounded-3xl p-6 text-white hover:scale-105 transition-all duration-300 group cursor-pointer overflow-hidden">
                            {/* Tech Background Image - AI/Neural Networks */}
                            <div 
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                style={{
                                    backgroundImage: `url('https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070')`,
                                }}
                            ></div>
                            {/* Enhanced Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-navy-600/95 via-lime-400/85 to-navy-600/95"></div>
                            
                            <div className="relative z-10">
                                <Icon icon="ph:brain-fill" className="text-3xl mb-4 text-lime-400" />
                                <h3 className="text-lg font-bold font-lato mb-3">Data, Analytics & AI Consulting</h3>
                                <p className="font-raleway leading-relaxed text-white/95">
                                    Build data-driven enterprises with advanced analytics, AI models, and intelligent automation. Data and AI consulting services enable predictive insights, improved decision-making, and competitive advantage.
                                </p>
                            </div>
                        </div>

                        {/* Medium card - Cybersecurity */}
                        <div className="lg:col-span-2 relative rounded-3xl p-6 text-white hover:scale-105 transition-all duration-300 group cursor-pointer overflow-hidden">
                            {/* Tech Background Image - Cybersecurity/Digital Security */}
                            <div 
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                style={{
                                    backgroundImage: `url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070')`,
                                }}
                            ></div>
                            {/* Enhanced Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-navy-600/90 to-gray-900/95"></div>
                            
                            <div className="relative z-10">
                                <Icon icon="ph:shield-check-fill" className="text-3xl mb-4 text-lime-400" />
                                <h3 className="text-xl font-bold font-lato mb-3">Cybersecurity & Compliance Consulting</h3>
                                <p className="font-raleway leading-relaxed text-white/95">
                                    Strengthen IT infrastructure with cybersecurity consulting services. Implement zero-trust frameworks, identity management, and regulatory compliance (ISO, SOC2, HIPAA, GDPR) to protect business-critical assets.
                                </p>
                            </div>
                        </div>

                        {/* Small card - ITSM Operations */}
                        <div className="relative rounded-3xl p-6 text-white hover:scale-105 transition-all duration-300 group cursor-pointer overflow-hidden">
                            {/* Tech Background Image - Server/Operations */}
                            <div 
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                style={{
                                    backgroundImage: `url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034')`,
                                }}
                            ></div>
                            {/* Enhanced Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/95 via-navy-600/90 to-teal-500/95"></div>
                            
                            <div className="relative z-10">
                                <Icon icon="ph:gear-six-fill" className="text-3xl mb-4 text-lime-400" />
                                <h3 className="text-lg font-bold font-lato mb-3">ITSM & Operations Consulting</h3>
                                <p className="font-raleway leading-relaxed text-white/95">
                                    Improve service quality and reduce downtime with ITSM consulting services. From process maturity assessments to IT operations consulting, this service enhances observability, governance, and incident response.
                                </p>
                            </div>
                        </div>

                        {/* Small card - Enterprise Platform */}
                        <div className="relative rounded-3xl p-6 text-white hover:scale-105 transition-all duration-300 group cursor-pointer overflow-hidden">
                            {/* Tech Background Image - Database/Platform */}
                            <div 
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                style={{
                                    backgroundImage: `url('https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070')`,
                                }}
                            ></div>
                            {/* Enhanced Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-lime-400/90 via-navy-600/95 to-lime-400/85"></div>
                            
                            <div className="relative z-10">
                                <Icon icon="ph:database-fill" className="text-3xl mb-4 text-lime-400" />
                                <h3 className="text-lg font-bold font-lato mb-3">Enterprise Platform Consulting</h3>
                                <p className="font-raleway leading-relaxed text-white/95">
                                    Leverage CRM, ERP, and low-code platforms to streamline business operations. Enterprise platform consulting helps organizations adopt scalable solutions that improve collaboration and customer engagement.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Consulting Process Timeline */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-3xl lg:text-5xl font-bold font-lato text-navy-600 mb-6">
                            A Proven IT Consulting Process That Delivers Results
                        </h2>
                        <p className="text-lg lg:text-xl font-raleway text-gray-700 max-w-4xl mx-auto leading-relaxed">
                            Every engagement follows a structured methodology designed to deliver measurable outcomes. Our IT consulting process covers strategy, execution, and adoption, ensuring technology directly supports business objectives.
                        </p>
                    </div>

                    <div className="space-y-16">
                        {[
                            {
                                title: "Assess",
                                description: "We begin with IT assessments, capability reviews, and infrastructure analysis. This phase identifies challenges, uncovers opportunities, and sets a clear baseline for digital transformation consulting.",
                                image: "https://images.unsplash.com/photo-1637855195094-992d3d578f42",
                                icon: "ph:magnifying-glass-fill",
                                position: "left"
                            },
                            {
                                title: "Design", 
                                description: "Our consultants build detailed roadmaps, enterprise architectures, and solution frameworks. IT strategy consulting ensures each design aligns with business priorities and prepares for application modernization, cloud migration, and compliance.",
                                image: "https://images.unsplash.com/photo-1573164713988-8665fc963095",
                                icon: "ph:blueprint-fill",
                                position: "right"
                            },
                            {
                                title: "Deliver",
                                description: "With the roadmap in place, we execute modernization, cloud consulting, data and AI consulting, and cybersecurity initiatives. Every project is delivered with speed, transparency, and measurable milestones.",
                                image: "https://images.unsplash.com/photo-1536148935331-408321065b18",
                                icon: "ph:rocket-fill",
                                position: "left"
                            },
                            {
                                title: "Adopt",
                                description: "True success comes with adoption. We provide training, ITSM consulting, change management, and support to embed new systems, improve operations, and maximize ROI.",
                                image: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg",
                                icon: "ph:check-circle-fill",
                                position: "right"
                            }
                        ].map((step, index) => (
                            <div 
                                key={index} 
                                className={`flex flex-col lg:flex-row items-center gap-12 ${step.position === 'right' ? 'lg:flex-row-reverse' : ''}`}
                                data-aos={step.position === 'left' ? 'fade-right' : 'fade-left'}
                            >
                                <div className="lg:w-1/2">
                                    <div className="relative group">
                                        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-navy-600/20 rounded-3xl transform group-hover:scale-105 transition-transform duration-300"></div>
                                        <Image
                                            src={step.image}
                                            alt={`${step.title} process step`}
                                            width={600}
                                            height={400}
                                            className="relative z-10 w-full rounded-3xl shadow-xl object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="lg:w-1/2">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-16 h-16 bg-gradient-to-br from-lime-400 to-teal-500 rounded-full flex items-center justify-center">
                                            <Icon icon={step.icon} className="text-2xl text-navy-600" />
                                        </div>
                                        <h3 className="text-3xl lg:text-4xl font-bold font-lato text-navy-600">{step.title}</h3>
                                    </div>
                                    <p className="text-lg font-raleway text-gray-700 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries Served */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-3xl lg:text-5xl font-bold font-lato text-navy-600 mb-6">
                            IT Consulting Services Tailored for Every Industry
                        </h2>
                        <p className="text-lg lg:text-xl font-raleway text-gray-700 max-w-4xl mx-auto leading-relaxed">
                            Protingent India delivers IT consulting solutions designed to meet the unique needs of businesses across diverse sectors. As a trusted IT consulting company in India, we provide strategies that drive measurable impact in global and local markets.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Banking & Financial Services (BFSI)",
                                description: "Optimize core banking platforms, strengthen cybersecurity, and ensure compliance with IT strategy consulting and digital transformation services.",
                                icon: "ph:bank-fill",
                                image: "/assets/images/it-consulting-industries/finance-bfsi.png",
                                alt: "Banking & Financial Services IT Consulting Solutions - Digital banking platforms and financial technology"
                            },
                            {
                                title: "Healthcare",
                                description: "Enable secure data exchange, modernize electronic health records, and improve patient experiences through application modernization consulting and IT infrastructure consulting.",
                                icon: "ph:heart-fill",
                                image: "/assets/images/it-consulting-industries/healthcare.png",
                                alt: "Healthcare IT Consulting Solutions - Medical technology and healthcare systems"
                            },
                            {
                                title: "Retail & eCommerce", 
                                description: "Boost scalability with cloud consulting services, enhance personalization through data and AI consulting, and streamline supply chains for faster delivery.",
                                icon: "ph:shopping-cart-fill",
                                image: "/assets/images/it-consulting-industries/retail-ecommerce.jpg",
                                alt: "Retail & eCommerce IT Consulting Solutions - Digital commerce and retail technology platforms"
                            },
                            {
                                title: "Manufacturing",
                                description: "Modernize operations with ITSM consulting and enterprise platform consulting, improve productivity with IoT-driven analytics, and reduce downtime with predictive insights.",
                                icon: "ph:factory-fill",
                                image: "/assets/images/it-consulting-industries/manufacturing.jpg",
                                alt: "Manufacturing IT Consulting Solutions - Smart factory automation and industrial technology"
                            },
                            {
                                title: "Staffing & HRTech",
                                description: "Transform recruitment platforms, integrate ATS and HRMS systems, and enable secure payroll processing with tailored IT consulting solutions.",
                                icon: "ph:users-fill",
                                image: "/assets/images/it-consulting-industries/hr-staffing.jpg",
                                alt: "Staffing & HR Technology IT Consulting Solutions - HR systems and recruitment platforms"
                            },
                            {
                                title: "Public Sector & Government",
                                description: "Adopt secure IT infrastructure, implement compliance-driven systems, and deliver citizen services more efficiently with cloud consulting and cybersecurity consulting services.",
                                icon: "ph:buildings-fill",
                                image: "/assets/images/it-consulting-industries/public-sector.jpg",
                                alt: "Public Sector & Government IT Consulting Solutions - Secure government technology and compliance systems"
                            }
                        ].map((industry, index) => (
                            <div 
                                key={index}
                                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={industry.image}
                                        alt={industry.alt}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy-600/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute top-4 right-4 w-12 h-12 bg-lime-400/90 rounded-full flex items-center justify-center">
                                        <Icon icon={industry.icon} className="text-xl text-navy-600" />
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold font-lato text-navy-600 mb-3 group-hover:text-teal-500 transition-colors duration-300">
                                        {industry.title}
                                    </h3>
                                    <p className="font-raleway text-gray-700 leading-relaxed">
                                        {industry.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Engagement Models - Responsive Grid */}
            <section className="py-20 bg-gradient-to-br from-navy-600 to-teal-500">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-3xl lg:text-5xl font-bold font-lato text-white mb-6">
                            Flexible IT Consulting Engagement Models with Transparent Pricing
                        </h2>
                        <p className="text-lg lg:text-xl font-raleway text-white/90 max-w-4xl mx-auto leading-relaxed">
                            Every organization has unique needs, which is why Protingent India offers multiple IT consulting engagement models. Whether you require short-term advisory or full-scale digital transformation consulting, our approach ensures flexibility and measurable ROI.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up" data-aos-delay="200">
                        {[
                            {
                                title: "Advisory Sprints",
                                description: "Focused IT strategy consulting sessions to assess current systems, define quick wins, and create a roadmap for modernization.",
                                icon: "ph:lightning-fill",
                                features: ["Quick Assessment", "Roadmap Creation", "Strategic Planning", "Fast Implementation"]
                            },
                            {
                                title: "Project-Based Consulting", 
                                description: "Ideal for specific initiatives like cloud migration consulting, application modernization consulting, or cybersecurity consulting services, with defined scope and timelines.",
                                icon: "ph:target-fill",
                                features: ["Defined Scope", "Fixed Timeline", "Specific Deliverables", "Budget Control"]
                            },
                            {
                                title: "Managed Transformation Programs",
                                description: "End-to-end IT consulting services covering design, delivery, and adoption. This model suits organizations seeking large-scale digital transformation consulting and continuous improvement.",
                                icon: "ph:rocket-fill",
                                features: ["Full Lifecycle", "Continuous Support", "Change Management", "Measurable ROI"]
                            },
                            {
                                title: "Dedicated Consulting Pods",
                                description: "A specialized team of IT consulting experts embedded into your business for ongoing support across IT infrastructure consulting, ITSM consulting, and enterprise platform adoption.",
                                icon: "ph:users-three-fill",
                                features: ["Dedicated Team", "Deep Integration", "Ongoing Support", "Flexible Scaling"]
                            }
                        ].map((model, index) => (
                            <div 
                                key={index}
                                className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/20 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group"
                            >
                                <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Icon icon={model.icon} className="text-2xl text-navy-600" />
                                </div>
                                <h3 className="text-xl font-bold font-lato text-white mb-4">{model.title}</h3>
                                <p className="font-raleway text-white/90 mb-6 leading-relaxed">{model.description}</p>
                                <div className="space-y-2">
                                    {model.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-2">
                                            <Icon icon="ph:check-circle-fill" className="text-lime-400 text-sm" />
                                            <span className="text-white/90 font-raleway text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Businesses Trust Protingent India */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2" data-aos="fade-right">
                            <h2 className="text-3xl lg:text-5xl font-bold font-lato text-navy-600 mb-6">
                                Why Do Businesses Trust Protingent India for IT Consulting Services?
                            </h2>
                            <p className="text-lg font-raleway text-gray-700 mb-8 leading-relaxed">
                                Choosing the right IT consulting company means selecting a partner who delivers measurable outcomes, not just strategies. Protingent India combines domain expertise, advanced frameworks, and compliance-driven delivery to create lasting value.
                            </p>

                            <div className="space-y-6">
                                {[
                                    {
                                        title: "Outcome-First Consulting",
                                        desc: "Every engagement focuses on measurable business results—reduced IT costs, improved performance, and faster time-to-market."
                                    },
                                    {
                                        title: "AI-Ready Modernization",
                                        desc: "Our IT consulting services are designed for the future, enabling businesses to modernize infrastructure and prepare for AI-driven operations."
                                    },
                                    {
                                        title: "Security by Design",
                                        desc: "Cybersecurity consulting services are embedded at every stage, ensuring compliance with ISO 27001, SOC2, HIPAA, and GDPR standards."
                                    },
                                    {
                                        title: "Domain Expertise in HRTech",
                                        desc: "Protingent India stands apart as an IT consulting firm with deep expertise in HRTech, ATS, and payroll system transformations—giving clients industry-specific advantages."
                                    },
                                    {
                                        title: "Flexible Engagement Models",
                                        desc: "From advisory sprints to managed transformation programs, our consulting approach adapts to the needs of startups, SMBs, and large enterprises."
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="flex gap-4">
                                        <div className="w-6 h-6 bg-gradient-to-br from-lime-400 to-teal-500 rounded-full flex-shrink-0 flex items-center justify-center mt-1">
                                            <Icon icon="ph:check-bold" className="text-navy-600 text-xs" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold font-lato text-navy-600 mb-2">{item.title}</h3>
                                            <p className="font-raleway text-gray-700 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:w-1/2" data-aos="fade-left">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-navy-600/20 rounded-3xl transform group-hover:scale-105 transition-transform duration-300"></div>
                                <Image
                                    src="https://images.unsplash.com/photo-1573166364366-3f4f8b1857ea"
                                    alt="Business consultant presenting to executives"
                                    width={600}
                                    height={500}
                                    className="relative z-10 w-full rounded-3xl shadow-2xl object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call-to-Action */}
            <section className="py-20 bg-gradient-to-br from-navy-600 via-teal-500 to-lime-400 relative overflow-hidden">
                {/* Gradient mesh background */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-navy-600/50 via-teal-500/30 to-lime-400/50"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <div data-aos="fade-up">
                        <h2 className="text-3xl lg:text-5xl font-bold font-lato text-white mb-6">
                            Start Your IT Consulting Journey Today
                        </h2>
                        <p className="text-lg lg:text-xl font-raleway text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
                            Accelerate growth, reduce costs, and secure your business with Protingent India's IT consulting services. Whether you need IT strategy consulting, cloud migration consulting, or cybersecurity consulting services, our experts are ready to guide you.
                        </p>
                        <button 
                            onClick={() => openPopup({
                                title: "Request a Custom Roadmap",
                                description: "Get a personalized IT strategy roadmap tailored to your business needs. Our experts will analyze your current infrastructure and provide a clear path forward."
                            })}
                            className="px-10 py-4 bg-white text-navy-600 font-bold text-lg rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                        >
                            <span className="flex items-center gap-3">
                                Request a Custom Roadmap
                                <Icon 
                                    icon="ph:arrow-right-fill"
                                    className="group-hover:translate-x-1 transition-transform duration-300"
                                />
                            </span>
                        </button>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative">
                {/* Subtle pattern background */}
                <div className="absolute inset-0 opacity-5">
                    <div className="w-full h-full" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23113F64' fill-opacity='0.15'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundSize: '60px 60px'
                    }} />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-6">
                    <div className="text-center mb-12" data-aos="fade-up">
                        <h2 className="text-3xl lg:text-5xl font-bold font-lato text-navy-600 mb-6">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-lg font-raleway text-gray-700 mb-8">
                            Get answers to common questions about our IT consulting services
                        </p>
                        
                        {/* Search bar */}
                        <div className="max-w-md mx-auto relative">
                            <Icon icon="ph:magnifying-glass-bold" className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search FAQs..."
                                value={faqSearch}
                                onChange={(e) => setFaqSearch(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                            />
                        </div>
                    </div>

                    <div className="space-y-4" data-aos="fade-up" data-aos-delay="200">
                        {filteredFAQs.map((faq, index) => (
                            <div 
                                key={index}
                                className={`bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 ${
                                    openFAQ === index ? 'shadow-lg border-teal-500' : 'hover:shadow-md'
                                }`}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                                >
                                    <h3 className="text-lg font-bold font-lato text-navy-600 pr-8">
                                        {faq.question}
                                    </h3>
                                    <div className={`w-6 h-6 flex items-center justify-center transition-transform duration-300 ${
                                        openFAQ === index ? 'transform rotate-180' : ''
                                    }`}>
                                        <Icon 
                                            icon={openFAQ === index ? "ph:minus-bold" : "ph:plus-bold"} 
                                            className={`text-lg ${openFAQ === index ? 'text-teal-500' : 'text-gray-400'}`}
                                        />
                                    </div>
                                </button>
                                {openFAQ === index && (
                                    <div className="px-6 pb-6">
                                        <div className="w-full h-px bg-gradient-to-r from-teal-500 to-lime-400 mb-4"></div>
                                        <p className="font-raleway text-gray-700 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {filteredFAQs.length === 0 && (
                        <div className="text-center py-12" data-aos="fade-up">
                            <Icon icon="ph:magnifying-glass-bold" className="text-4xl text-gray-400 mb-4" />
                            <p className="text-lg font-raleway text-gray-600">
                                No FAQs found matching your search. Try different keywords.
                            </p>
                        </div>
                    )}
                </div>
            </section>
            
            {/* Consultation Popup */}
            <ConsultationPopup 
                isOpen={isOpen}
                onClose={closePopup}
                title={config.title}
                description={config.description}
            />
        </div>
    );
};

export default ITConsultingPage;