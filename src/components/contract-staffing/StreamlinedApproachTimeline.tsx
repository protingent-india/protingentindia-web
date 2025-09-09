"use client"
import { useEffect, useRef, useState } from "react";
import { processSteps } from "@/staticData";

// --------------------------------------------------------------------

// Section 3: Interactive Timeline - Streamlined Approach
const StreamlinedApproachTimeline = () => {
    const [activeStep, setActiveStep] = useState<number | null>(null);
    const [visibleSteps, setVisibleSteps] = useState<boolean[]>([]);
    const timelineRef = useRef<HTMLDivElement>(null);

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
        <section className="py-16 md:py-24 relative bg-white">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-5"
                style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1642522029691-029b5a432954?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'
                }}
            ></div>
            <div className="container mx-auto px-4 max-w-[1450px] relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#012D50' }}>
                        Our Streamlined Approach to Contract Staffing
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        We combine AI-driven staff sourcing, deep industry expertise, and agile workflows to deliver the right talent
                        at the right time, ensuring speed, compliance, and business continuity for our clients.
                    </p>
                </div>

                <div ref={timelineRef} className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform md:-translate-x-1/2"></div>
                    <div
                        className="timeline-progress absolute left-4 md:left-1/2 top-0 w-1 transform md:-translate-x-1/2 z-10"
                        style={{
                            height: `${(visibleSteps.filter(Boolean).length / processSteps.length) * 100}%`,
                            background: 'linear-gradient(135deg, #34969D, #CBDC13)'
                        }}
                    ></div>

                    <div className="space-y-12 md:space-y-16">
                        {processSteps.map((step, index) => {
                            const IconComponent = step.icon;
                            return (
                                <div
                                    key={index}
                                    data-index={index}
                                    className={`timeline-step relative ${visibleSteps[index] ? 'animate-in' : ''}`}
                                    style={{ animationDelay: `${index * 0.2}s` }}
                                >
                                    <div className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                        }`}>
                                        {/* Step icon and number */}
                                        <div className="relative z-20 flex-shrink-0 flex flex-col items-center">
                                            {/* Icon */}
                                            <div
                                                className="w-12 h-12 rounded-xl flex items-center justify-center mb-2 transition-all duration-300 hover:scale-110 hover:rotate-6"
                                                style={{
                                                    backgroundColor: step.accentColor,
                                                    boxShadow: visibleSteps[index] ? `0 8px 25px ${step.accentColor}40` : 'none'
                                                }}
                                            >
                                                <IconComponent className="text-white text-lg" />
                                            </div>

                                            {/* Step number */}
                                            <div
                                                className={`w-16 h-16 rounded-full border-4 border-white shadow-lg flex items-center justify-center font-bold text-white cursor-pointer transition-all duration-300 ${activeStep === index ? 'scale-110' : 'hover:scale-105'
                                                    }`}
                                                style={{
                                                    backgroundColor: activeStep === index ? '#CBDC13' : '#012D50'
                                                }}
                                                onClick={() => setActiveStep(activeStep === index ? null : index)}
                                            >
                                                {String(index + 1).padStart(2, '0')}
                                            </div>
                                        </div>

                                        {/* Step content */}
                                        <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                                            <div
                                                className="bg-white p-6 md:p-8 rounded-2xl cursor-pointer hover-lift group shadow-lg border-2"
                                                style={{ borderColor: step.accentColor }}
                                                onClick={() => setActiveStep(activeStep === index ? null : index)}
                                            >
                                                <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-opacity-90 transition-colors duration-300" style={{ color: '#012D50' }}>
                                                    {step.title}
                                                </h3>
                                                <p className="text-gray-600 leading-relaxed">
                                                    {step.description}
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
        </section>
    );
};

export default StreamlinedApproachTimeline;