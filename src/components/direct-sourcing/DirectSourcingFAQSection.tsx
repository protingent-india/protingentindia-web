"use client"
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { DirectSourcingFAQData } from "@/staticData";

// --------------------------------------------------------------
// 10. FAQ Section
// --------------------------------------------------------------
const DirectSourcingFAQSection = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    return (
        <div className="w-full bg-gray-50 py-16 md:py-24 relative">
            {/* MANDATORY: FAQ background pattern */}
            <div
                className="absolute inset-0 bg-repeat opacity-10"
                style={{
                    backgroundImage: `radial-gradient(circle at 50% 50%, #34969E 2px, transparent 2px), radial-gradient(circle at 25% 75%, #C2D92C 1px, transparent 1px)`,
                    backgroundSize: '60px 60px, 40px 40px'
                }}
            ></div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#113F64' }}>
                        Frequently Asked Questions
                    </h2>
                    <p className="text-xl text-gray-600">
                        Get answers to common questions about our direct sourcing services and how we can help transform your talent acquisition strategy.
                    </p>
                </div>

                {/* Accordion with plus/minus animation */}
                <div className="space-y-6">
                    {DirectSourcingFAQData.map((faq, index) => {
                        const isOpen = openFAQ === index;
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl"
                            >
                                <button
                                    onClick={() => setOpenFAQ(isOpen ? null : index)}
                                    className="w-full p-8 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                                >
                                    <h3 className="text-xl lg:text-2xl font-bold text-[#113F64] pr-8 leading-tight">
                                        {faq.q}
                                    </h3>
                                    <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#34969E] flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#34969E] rotate-45' : 'hover:bg-[#34969E]/10'
                                        }`}>
                                        {isOpen ? (
                                            <FaChevronUp className="text-white text-sm" />
                                        ) : (
                                            <FaChevronDown className="text-[#34969E] text-sm" />
                                        )}
                                    </div>
                                </button>

                                <div className={`transition-all duration-500 overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'
                                    }`}>
                                    <div className="px-8 pb-8">
                                        <div className="h-px bg-gradient-to-r from-[#C2D92C] via-[#34969E] to-[#C2D92C] mb-6"></div>
                                        <p className="text-lg text-gray-600 leading-relaxed">
                                            {faq.a}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default DirectSourcingFAQSection;