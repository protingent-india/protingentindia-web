"use client"
import { useEffect, useRef, useState } from "react";
import {
    FaUsers,
    FaDollarSign,
    FaShieldAlt,
    FaRocket,
} from 'react-icons/fa';

// ---------------------------------------------------------------

// Section 1: Benefits Section
const ContractualBenefitsSection = () => {
    const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
    const sectionRef = useRef<HTMLDivElement>(null);

    const benefits = [
        {
            icon: FaRocket,
            title: "Rapid Scalability",
            description: "Organizations can maximize or minimize their teams as required, based on project needs",
            accentColor: "#34969D",
            image: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        },
        {
            icon: FaDollarSign,
            title: "Cost Control",
            description: "Reduce long-term hiring overheads whenever the project closes",
            accentColor: "#CBDC13",
            image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        },
        {
            icon: FaShieldAlt,
            title: "Compliance Assured",
            description: "Navigate labor laws and payroll complexities with zero risk",
            accentColor: "#34969D",
            image: "https://images.unsplash.com/photo-1551836022-aadb801c60ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        },
        {
            icon: FaUsers,
            title: "Access to Specialists",
            description: "Quickly secure niche experts for short-term and high-priority projects",
            accentColor: "#CBDC13",
            image: "https://images.unsplash.com/photo-1551135049-8a33b5883817?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const cards = entry.target.querySelectorAll('.benefit-card');
                        cards.forEach((_, index) => {
                            setTimeout(() => {
                                setVisibleCards(prev => {
                                    const updated = [...prev];
                                    updated[index] = true;
                                    return updated;
                                });
                            }, index * 200);
                        });
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 max-w-[1450px]">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#012D50' }}>
                        Contractual Staffing Solutions For Dedicated Hiring
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Organizations face volatile demand, rising talent costs, and strict compliance requirements at times.
                        Contractual staffing is a strategic approach, where the needs for a skilled talent pool are filled without permanent pay expected.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => {
                        const IconComponent = benefit.icon;
                        return (
                            <div
                                key={index}
                                className={`benefit-card group relative overflow-hidden rounded-3xl transition-all duration-500 cursor-pointer bg-white shadow-lg hover:shadow-xl hover:-translate-y-2 ${visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                    }`}
                                style={{
                                    transitionDelay: `${index * 0.1}s`
                                }}
                            >
                                {/* Modern Geometric Background Pattern */}
                                <div className="absolute inset-0 overflow-hidden">
                                    <div
                                        className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                                        style={{ backgroundColor: benefit.accentColor }}
                                    ></div>
                                    <div
                                        className="absolute -bottom-4 -left-4 w-16 h-16 rotate-45 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                                        style={{ backgroundColor: benefit.accentColor }}
                                    ></div>
                                    <div
                                        className="absolute top-1/2 right-8 w-2 h-16 rotate-12 opacity-20"
                                        style={{ backgroundColor: benefit.accentColor }}
                                    ></div>
                                </div>

                                <div className="p-8 h-full relative z-10">
                                    <div className="mb-6">
                                        <div
                                            className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-6 transition-all duration-300 group-hover:scale-110 shadow-lg"
                                            style={{
                                                background: `linear-gradient(135deg, ${benefit.accentColor}, ${benefit.accentColor}E6)`
                                            }}
                                        >
                                            <IconComponent className="text-white" />
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold mb-4 transition-colors duration-300" style={{ color: '#012D50' }}>
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {benefit.description}
                                    </p>

                                    {/* Modern accent line */}
                                    <div
                                        className="absolute bottom-0 left-0 h-1 w-full transition-all duration-500 group-hover:h-1.5"
                                        style={{
                                            background: `linear-gradient(90deg, ${benefit.accentColor}, transparent)`
                                        }}
                                    ></div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ContractualBenefitsSection;
