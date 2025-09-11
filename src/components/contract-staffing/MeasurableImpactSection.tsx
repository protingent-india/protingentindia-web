"use client"
import { impactData } from "@/staticData";
import { useEffect, useRef, useState } from "react";

// ------------------------------------------------------------------------

// Section 4: Measurable Impact with Animated Counters
const MeasurableImpactSection = () => {
    const [countersVisible, setCountersVisible] = useState(false);
    const [counts, setCounts] = useState([0, 0, 0, 0]);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !countersVisible) {
                    setCountersVisible(true);

                    // Animate counters
                    impactData.forEach((item, index) => {
                        let currentCount = 0;
                        const increment = item.number / 50; // 50 steps
                        const timer = setInterval(() => {
                            currentCount += increment;
                            if (currentCount >= item.number) {
                                currentCount = item.number;
                                clearInterval(timer);
                            }
                            setCounts(prev => {
                                const newCounts = [...prev];
                                newCounts[index] = Math.floor(currentCount);
                                return newCounts;
                            });
                        }, 40); // Update every 40ms for smooth animation
                    });
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [countersVisible]);

    return (
        <section ref={sectionRef} className="py-16 md:py-24" style={{ background: 'linear-gradient(135deg, #012D50 0%, #34969D 100%)' }}>
            <div className="container mx-auto px-4 max-w-[1450px]">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Measurable Impact of Contract Staffing on Businesses
                    </h2>
                    <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                        Our contract staffing solutions create measurable impact with agility, cost savings, compliance assurance, and access to top-tier professionals.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {impactData.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <div
                                key={index}
                                className="text-center group cursor-pointer transform transition-all duration-300 hover:scale-105 "
                            >
                                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 min-h-[380px]">
                                    <div
                                        className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110"
                                        style={{ backgroundColor: item.accentColor }}
                                    >
                                        <IconComponent className="text-white text-2xl" />
                                    </div>

                                    <div className="mb-4">
                                        <span
                                            className="text-5xl md:text-6xl font-bold"
                                            style={{ color: '#CBDC13' }}
                                        >
                                            {counts[index]}{item.suffix}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-4">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/80 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default MeasurableImpactSection;