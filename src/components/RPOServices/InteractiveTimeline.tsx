"use client"
import { useEffect, useRef, useState } from "react";
import { rpoProcessData } from "@/staticData";

// --------------------------------------------------------------

// Modern Interactive Timeline Component with Solid Icons
const InteractiveTimeline = () => {
    const [activeStep, setActiveStep] = useState<number | null>(null);
    const [visibleSteps, setVisibleSteps] = useState<boolean[]>(new Array(rpoProcessData.length).fill(false));
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

        const stepElements = timelineRef.current?.querySelectorAll('.makeitfade');
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
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform md:-translate-x-1/2" />
                    <div
                        className="timeline-progress absolute left-4 md:left-1/2 top-0 w-1 transform md:-translate-x-1/2 "
                        style={{
                            height: `${(visibleSteps.filter(Boolean).length / rpoProcessData.length) * 100}%`,
                            background: 'linear-gradient(135deg, #34969D, #CBDC13)'
                        }}
                    />
                    <div className="space-y-12 md:space-y-16">
                        {rpoProcessData.map((step, index) => {
                            const IconComponent = step?.icon;
                            return (
                                <div
                                    key={index}
                                    data-index={index}
                                    className={`makeitfade relative ${visibleSteps[index] ? 'animate-in' : ''} ${index % 2 === 0 ? "tra" : ""}`}
                                    style={{ animationDelay: `${index * 0.2}s` }}
                                >
                                    <div className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                        }`}>
                                        {/* Step number with icon */}
                                        <div className="relative z-20 flex-shrink-0 flex flex-col items-center">
                                            {/* Icon */}
                                            <div
                                                className="w-12 h-12 rounded-xl flex items-center justify-center mb-2 transition-all duration-300 hover:scale-110 hover:rotate-6"
                                                style={{
                                                    backgroundColor: index % 2 === 0 ? '#34969D' : '#CBDC13',
                                                    boxShadow: visibleSteps[index] ? `0 8px 25px ${index % 2 === 0 ? '#34969D' : '#CBDC13'}40` : 'none'
                                                }}
                                            >
                                                <IconComponent className="text-white text-lg" />
                                            </div>

                                            {/* Step number */}
                                            <div
                                                className={`w-16 h-16 rounded-full border-4 border-white shadow-lg flex items-center justify-center font-bold text-white cursor-pointer transition-all duration-300 ${activeStep === index
                                                    ? 'scale-110'
                                                    : 'hover:scale-105'
                                                    }`}
                                                style={{
                                                    backgroundColor: activeStep === index ? '#CBDC13' : '#012D50'
                                                }}
                                                onClick={() => setActiveStep(activeStep === index ? null : index)}
                                            >
                                                {String(index + 1).padStart(2, '0')}
                                            </div>
                                            {visibleSteps[index] && (
                                                <div
                                                    className="absolute inset-0 rounded-full animate-pulse"
                                                    style={{
                                                        backgroundColor: index % 2 === 0 ? '#34969D30' : '#CBDC1330'
                                                    }}
                                                ></div>
                                            )}
                                        </div>

                                        {/* Step content */}
                                        <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                                            <div
                                                className="glass-card p-6 md:p-8 rounded-2xl cursor-pointer hover-lift group"
                                                onClick={() => setActiveStep(activeStep === index ? null : index)}
                                            >
                                                <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 group-hover:text-secondry transition-colors duration-300">
                                                    {step.title}
                                                </h3>
                                                <p className="text-gray-600 leading-relaxed">
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

                                                {/* Hover indicator */}
                                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <div className={`w-6 h-6 border-2 border-primary rounded-full flex items-center justify-center transition-transform duration-300 ${activeStep === index ? 'rotate-45' : ''
                                                        }`}>
                                                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                                                    </div>
                                                </div>
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

export default InteractiveTimeline;