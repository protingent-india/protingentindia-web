"use client"
import React from "react";
import {
    GeometricBackground
} from "@/components";
import {
    FaBullseye,
    FaEye,
    FaMedal,
    FaHandshake,
    FaShieldAlt,
    FaUsersCog,
    FaLightbulb,
    FaCheckCircle,
    FaUserCircle,
    FaRocket,
    FaUsers,
    FaCogs,
    FaChartLine,
    FaLinkedin
} from 'react-icons/fa';

// Section 1: Hero - Company Introduction
const AboutHeroSection = () => {
    return (
        <section className="relative w-full min-h-[60vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden py-8">
            {/* Gradient Background */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#113F64] via-[#34969E] to-[#C2D92C]"></div>

            {/* Floating geometric elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-24 h-24 border-2 border-white/30 rotate-45 animate-pulse"></div>
                <div className="absolute bottom-32 right-16 w-20 h-20 border-2 border-[#C2D92C]/40 rounded-full animate-bounce" style={{ animationDelay: '-2s' }}></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '-1s' }}></div>
            </div>

            <div className="relative z-10 max-w-7xl container-responsive text-center text-white">
                <h1 className="heading-xl mb-6 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent" style={{ fontFamily: 'Lato, sans-serif' }}>
                    Empowering Businesses with
                    <span className="block text-[#C2D92C] mt-2">
                        Talent & Technology
                    </span>
                </h1>

                <p className="body-lg leading-relaxed mb-12 max-w-5xl mx-auto opacity-90" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    Protingent India LLP delivers staffing and technology solutions designed for businesses that want scale, reliability, and control over modern operations.
                    Services include talent acquisition, payroll outsourcing, IT consulting, staff augmentation, BI data visualization, managed IT, and marketing services.
                    Founded in 2021, Protingent India operates as a specialized workforce and technology partner, combining disciplined hiring practices with advanced IT services.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <button className="px-12 py-4 bg-[#C2D92C] text-[#113F64] font-bold text-lg rounded-full hover:scale-105 transform transition-all shadow-2xl min-h-[44px]">
                        <span className="flex items-center gap-3">
                            <FaRocket className="w-5 h-5" />
                            Discover Our Story
                        </span>
                    </button>

                    <button className="px-8 py-4 border-2 border-white/40 rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group text-white min-h-[44px]">
                        <span className="flex items-center gap-3">
                            <FaUsers className="w-5 h-5" />
                            Meet Our Team
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
};

// Section 2: Company Overview
const CompanyOverviewSection = () => {
    return (
        <div className="relative w-full bg-white section-padding overflow-hidden">
            <GeometricBackground variant="primary" intensity="light" />

            <div className="max-w-7xl container-responsive relative z-10">
                <div className="grid-responsive-2 items-center gap-16">
                    {/* Text Content - Left */}
                    <div>
                        <h2 className="heading-xl mb-6" style={{ color: '#113F64', fontFamily: 'Lato, sans-serif' }}>
                            Your Partner in Growth
                            <span className="block text-[#34969E]">Since 2021</span>
                        </h2>

                        <div className="space-y-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            <p className="body-lg text-gray-600 leading-relaxed">
                                Protingent India combines disciplined hiring practices with advanced IT services to provide clients with the people and systems they need to perform at their best.
                                Our approach emphasizes transparent communication, governance, and long-term partnerships.
                            </p>

                            <p className="body-lg text-gray-600 leading-relaxed">
                                Each engagement is guided by transparent communication, governance, and a dedication to long-term partnerships.
                                The firm embraces innovation to keep businesses future-ready, using tools and talent to accelerate transformation.
                            </p>

                            <p className="body-lg text-gray-600 leading-relaxed">
                                We focus on sustainable growth where technology and people evolve together, creating lasting value for our clients and their stakeholders.
                            </p>
                        </div>

                        {/* Key Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                            {[
                                { icon: FaUsers, value: "2021", label: "Founded" },
                                { icon: FaCogs, value: "7+", label: "Services" },
                                { icon: FaRocket, value: "100+", label: "Projects" },
                                { icon: FaChartLine, value: "98%", label: "Success Rate" }
                            ].map((stat, index) => {
                                const IconComponent = stat.icon;
                                return (
                                    <div key={index} className="text-center">
                                        <IconComponent className="w-8 h-8 text-[#34969E] mb-3 mx-auto" />
                                        <div className="text-3xl font-bold text-[#113F64]">{stat.value}</div>
                                        <div className="text-sm text-gray-600">{stat.label}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Image - Right */}
                    <div className="relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                            <img
                                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxvZmZpY2V8ZW58MHx8fHwxNzU3NjY4MDE5fDA&ixlib=rb-4.1.0&q=85"
                                alt="Protingent India Office"
                                className="w-full h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#113F64]/40 via-transparent to-[#34969E]/20"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 3: Mission & Vision
const MissionVisionSection = () => {
    const purposeData = [
        {
            title: "Our Mission",
            description: "To empower organizations with staffing, IT consulting, BI, and managed services that deliver measurable outcomes. Our mission is to combine exceptional talent with reliable technology for sustainable business growth.",
            icon: FaBullseye,
            gradient: "from-[#34969E] to-[#C2D92C]",
            border: "border-[#34969E]/30"
        },
        {
            title: "Our Vision",
            description: "To be recognized globally as a trusted partner in workforce and IT solutions, driving innovation, compliance, and long-term client success.",
            icon: FaEye,
            gradient: "from-[#C2D92C] to-[#34969E]",
            border: "border-[#C2D92C]/30"
        }
    ];

    return (
        <div className="relative w-full bg-gradient-to-b from-gray-50 to-white section-padding overflow-hidden">
            <GeometricBackground variant="secondary" intensity="light" />

            <div className="max-w-7xl container-responsive relative z-10">
                <div className="text-center mb-16">
                    <h2 className="heading-xl mb-6" style={{ color: '#113F64', fontFamily: 'Lato, sans-serif' }}>
                        Our Purpose
                    </h2>
                    <p className="body-lg text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        To fulfill purpose-driven services for result-oriented outcomes.
                    </p>
                </div>

                <div className="grid-responsive-2 gap-8">
                    {purposeData.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <div
                                key={index}
                                className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 ${item.border}`}
                            >
                                <div className={`w-20 h-20 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                    <IconComponent className="text-white w-8 h-8" />
                                </div>

                                <h3 className="heading-md mb-4 group-hover:text-[#34969E] transition-colors duration-300" style={{ fontFamily: 'Lato, sans-serif' }}>
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 body-md leading-relaxed" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

// Section 4: Our Values
const ValuesSection = () => {
    const values = [
        {
            title: "Excellence in Delivery",
            description: "Ensuring quality in every mandate with meticulous attention to detail and unwavering commitment to superior outcomes.",
            icon: FaMedal,
            color: "#34969E"
        },
        {
            title: "Client-Centered Collaboration",
            description: "Working side-by-side with clients as trusted partners, understanding their unique needs and delivering tailored solutions.",
            icon: FaHandshake,
            color: "#C2D92C"
        },
        {
            title: "Integrity & Compliance",
            description: "Upholding the highest ethical standards in all our operations, maintaining transparency and regulatory compliance.",
            icon: FaShieldAlt,
            color: "#34969E"
        },
        {
            title: "Empowerment through Talent & Technology",
            description: "Empowering businesses with the right people and cutting-edge tools to drive transformation and growth.",
            icon: FaUsersCog,
            color: "#C2D92C"
        },
        {
            title: "Innovation for Growth",
            description: "Staying ahead of industry trends and embracing innovative solutions to keep our clients future-ready.",
            icon: FaLightbulb,
            color: "#34969E"
        },
        {
            title: "Accountability that Builds Trust",
            description: "Owning every action and measuring every outcome to build lasting trust and deliver on our promises.",
            icon: FaCheckCircle,
            color: "#C2D92C"
        }
    ];

    return (
        <div className="relative w-full bg-white section-padding overflow-hidden">
            <GeometricBackground variant="tertiary" intensity="light" />

            <div className="max-w-7xl container-responsive relative z-10">
                <div className="text-center mb-16">
                    <h2 className="heading-xl mb-6" style={{ color: '#113F64', fontFamily: 'Lato, sans-serif' }}>
                        Our Values Drive Your
                        <span className="block text-[#34969E]">Business Growth</span>
                    </h2>
                    <p className="body-lg text-gray-600 max-w-4xl mx-auto" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Our core values shape every interaction, decision, and solution we deliver,
                        ensuring exceptional outcomes for our clients and partners.
                    </p>
                </div>

                <div className="grid-responsive-3 gap-8">
                    {values.map((value, index) => {
                        const IconComponent = value.icon;
                        return (
                            <div
                                key={index}
                                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                            >
                                <div
                                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                                    style={{ backgroundColor: value.color }}
                                >
                                    <IconComponent className="text-white w-6 h-6" />
                                </div>

                                <h3 className="heading-md mb-4 group-hover:text-[#34969E] transition-colors duration-300" style={{ fontFamily: 'Lato, sans-serif' }}>
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 body-md leading-relaxed" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                    {value.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

// Section 5: Team Section
const TeamSection = () => {
    const teamMembers = [
        {
            name: "Harry Saxena",
            role: "Designated Partner",
            bio: "Harry Saxena is a visionary strategist and growth leader with expertise in data strategy, operations, and market expansion. He has been instrumental in establishing Protingent India's presence and scaling its recruitment and client delivery models. His leadership blends innovation, operational discipline, and client-focused outcomes, positioning Protingent India as a trusted partner for global businesses.",
            image: "https://customer-assets.emergentagent.com/job_repair-website-1/artifacts/cqjashvu_Harry.jpg",
            isImageLeft: true
        },
        {
            name: "Sachin Kumar",
            role: "Head of Operations",
            bio: "Sachin Kumar is a seasoned leader in operations, HR, client services, and account management. With expertise in building frameworks that align talent acquisition and business strategy, he has scaled recruitment functions, enhanced client delivery, and strengthened operational efficiency. He holds an MBA in HR and Finance and is committed to fostering a high-performance culture that drives sustainable growth.",
            image: "/assets/images/team/sachin-kumar.png",
            isImageLeft: false
        },
        {
            name: "Mohd. Ajaz",
            role: "Head of Technical Product and Architecture",
            bio: "Mohd. Ajaz leads technology innovation with over a decade of experience in product management, digital transformation, and blockchain integration. He spearheads the development of a centralized platform that unifies hiring, payroll, and HRMS. A certified blockchain professional from IIT Kanpur, Ajaz bridges traditional business strategies with decentralized solutions that deliver transparency, security, and scalability.",
            image: "/assets/images/team/mohamad-ajaz.jpeg",
            isImageLeft: true
        },
        {
            name: "Leena Kanwar",
            role: "Finance Lead",
            bio: "Leena Kanwar leads Finance and Payroll operations at Protingent India, driving financial strategy, compliance, and operational excellence. With nearly four years of diverse experience across recruitment, training, and finance functions, she brings a unique blend of expertise that bridges people, processes, and financial management. Her strategic approach to developing training frameworks, supporting major client accounts, and implementing robust financial practices ensures accuracy, efficiency, and transparency across operations. With a B.Com in Accounting and Finance and an executive certification from IIM Bangalore, Leena's adaptability and results-driven leadership continue to strengthen Protingent India's financial foundation for sustainable growth.",
            image: "/assets/images/team/leena-kanwar.png",
            isImageLeft: false
        },
        {
            name: "Sakshi Saxena",
            role: "Human Resource Specialist",
            bio: "Sakshi Saxena is an HR specialist with expertise in compliance, labor law, payroll, and employee relations. UGC-NET qualified and a certified POSH trainer, she aligns HR operations with business objectives while creating a positive and growth-oriented workplace culture. Her compliance mastery and people-first leadership ensure Protingent India's workforce remains empowered, engaged, and future-ready.",
            image: "/assets/images/team/sakshi-saxena.png",
            isImageLeft: true
        },
        {
            name: "Martin Vimal Kumar",
            role: "Manager, Talent Sourcing",
            bio: "Martin Vimal Kumar brings over a decade of experience in recruitment, team management, and process optimization. He is known for building high-performing sourcing teams and improving candidate experiences. Martin's ability to evolve recruitment strategies with market demands ensures clients always access top talent aligned with their goals.",
            image: "/assets/images/team/martin-vimal-kumar.png",
            isImageLeft: false
        },
        {
            name: "Brian Deb",
            role: "Recruitment Manager",
            bio: "Brian Deb specializes in global talent sourcing and structured recruitment processes. He connects businesses with the right candidates through innovative sourcing strategies. His collaborative approach, market insight, and commitment to client success make him a key driver of Protingent India's reputation for reliable staffing outcomes.",
            image: "https://customer-assets.emergentagent.com/job_repair-website-1/artifacts/l832v4j1_Brian%20Deb.png",
            isImageLeft: true
        }
    ];

    return (
        <div className="relative w-full bg-white section-padding overflow-hidden">
            <GeometricBackground variant="secondary" intensity="light" />

            <div className="max-w-7xl container-responsive relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="heading-xl mb-6" style={{ color: '#113F64', fontFamily: 'Lato, sans-serif' }}>
                        Team Behind Your Success
                    </h2>
                    <p className="body-lg text-gray-600 max-w-4xl mx-auto" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Meet the experts driving innovation and excellence at Protingent India,
                        each bringing unique expertise and passion to deliver exceptional results.
                    </p>
                </div>

                {/* Team Member Profiles */}
                <div className="space-y-24">
                    {teamMembers.map((member, index) => (
                        <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${!member.isImageLeft ? 'lg:grid-flow-col-dense' : ''
                            }`}>
                            {/* Image Section */}
                            <div className={`relative ${!member.isImageLeft ? 'lg:col-start-2' : ''}`}>
                                <div className="relative inline-block">
                                    {/* Circular Image Frame */}
                                    <div className="relative w-80 h-80 mx-auto lg:mx-0 rounded-full overflow-hidden shadow-2xl group">
                                        <img
                                            src={member.image}
                                            alt={`${member.name} - ${member.role}`}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#34969E]/20 to-[#113F64]/20 group-hover:opacity-0 transition-opacity duration-500"></div>
                                    </div>

                                    {/* Floating accent elements */}
                                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#C2D92C] rounded-full opacity-70"></div>
                                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#34969E] rounded-full opacity-60"></div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className={`space-y-6 ${!member.isImageLeft ? 'lg:col-start-1 lg:text-right' : ''}`}>
                                <div>
                                    <h3 className="heading-lg mb-2" style={{ color: '#113F64', fontFamily: 'Lato, sans-serif' }}>
                                        {member.name}
                                    </h3>
                                    <p className="text-[#34969E] font-bold text-xl mb-4" style={{ fontFamily: 'Lato, sans-serif' }}>
                                        {member.role}
                                    </p>
                                </div>

                                <p className="body-lg text-gray-600 leading-relaxed" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                    {member.bio}
                                </p>

                                {/* LinkedIn Icon */}
                                <div className={`flex ${!member.isImageLeft ? 'lg:justify-end' : 'justify-start'}`}>
                                    <a
                                        href="#"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#0077B5] text-white rounded-full hover:bg-[#005885] transition-colors duration-300 group"
                                    >
                                        <FaLinkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                                        <span className="font-medium">LinkedIn</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// CTA Section
const CTASection = () => {
    return (
        <div className="relative w-full section-padding overflow-hidden">
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center object-cover"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxvZmZpY2V8ZW58MHx8fHwxNzU3NjY4MDE5fDA&ixlib=rb-4.1.0&q=85')`,
                }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#113F64]/95 via-[#34969E]/90 to-[#C2D92C]/85"></div>

            <div className="relative z-10 max-w-6xl container-responsive text-center text-white">
                <h2 className="heading-xl mb-6" style={{ fontFamily: 'Lato, sans-serif' }}>
                    Ready to Transform Your
                    <span className="block text-[#C2D92C]">Business with Us?</span>
                </h2>
                <p className="body-lg leading-relaxed mb-12 max-w-4xl mx-auto opacity-90" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    Join hundreds of businesses that trust Protingent India for their staffing and technology needs.
                    Let's discuss how we can help you achieve sustainable growth and operational excellence.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <button className="px-12 py-4 bg-[#C2D92C] text-[#113F64] font-bold text-lg rounded-full hover:scale-105 transform transition-all shadow-2xl min-h-[44px]">
                        Start Your Journey with Us
                    </button>

                    <button className="px-8 py-4 border-2 border-white/40 rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group text-white min-h-[44px]">
                        <span className="flex items-center gap-3">
                            <span>Schedule a Consultation</span>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

// Main About Page Component
export default function AboutPage() {
    return (
        <div className="bg-white w-full flex flex-col items-center gap-0 pb-12 md:pb-20">
            <AboutHeroSection />
            <CompanyOverviewSection />
            <MissionVisionSection />
            <ValuesSection />
            <TeamSection />
            <CTASection />
        </div>
    );
}
