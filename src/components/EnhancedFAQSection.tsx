"use client"
import { useState, useMemo } from "react";
import { FaChevronDown, FaChevronUp, FaSearch } from 'react-icons/fa';

interface FAQ {
    q: string;
    a: string;
}

interface EnhancedFAQSectionProps {
    title: string;
    description: string;
    FAQList: FAQ[];
}

const EnhancedFAQSection = ({ title, description, FAQList }: EnhancedFAQSectionProps) => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    // Filter FAQs based on search term
    const filteredFAQs = useMemo(() => {
        if (!searchTerm.trim()) return FAQList;

        return FAQList.filter(faq =>
            faq.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
            faq.a.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [FAQList, searchTerm]);

    const handleToggle = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <div className="w-full bg-gray-50 py-16 md:py-24 relative">
            {/* Abstract geometric pattern background */}
            <div
                className="absolute inset-0 bg-repeat opacity-10"
                style={{
                    backgroundImage: `radial-gradient(circle at 50% 50%, #34969E 2px, transparent 2px), radial-gradient(circle at 25% 75%, #C2D92C 1px, transparent 1px)`,
                    backgroundSize: '60px 60px, 40px 40px'
                }}
            ></div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#113F64' }}>
                        {title}
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Search Bar */}
                <div className="mb-12">
                    <div className="relative max-w-2xl mx-auto">
                        <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                            <FaSearch className="h-5 w-5 text-[#34969E]" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search frequently asked questions..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-14 pr-6 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:border-[#34969E] focus:ring-0 outline-none transition-all duration-300 shadow-lg hover:shadow-xl text-lg placeholder-gray-400"
                            style={{ fontFamily: 'Raleway' }}
                        />
                        {searchTerm && (
                            <button
                                onClick={() => setSearchTerm('')}
                                className="absolute inset-y-0 right-0 pr-6 flex items-center text-gray-400 hover:text-[#34969E] transition-colors duration-200"
                            >
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        )}
                    </div>

                    {/* Search Results Info */}
                    {searchTerm && (
                        <div className="text-center mt-4">
                            <p className="text-gray-600" style={{ fontFamily: 'Raleway' }}>
                                {filteredFAQs.length === 0 ? (
                                    "No questions found matching your search."
                                ) : (
                                    `Found ${filteredFAQs.length} question${filteredFAQs.length !== 1 ? 's' : ''} matching "${searchTerm}"`
                                )}
                            </p>
                        </div>
                    )}
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-6">
                    {filteredFAQs.length === 0 && searchTerm ? (
                        <div className="text-center py-12">
                            <div className="text-6xl text-gray-300 mb-4">🔍</div>
                            <h3 className="text-xl font-bold text-gray-600 mb-2" style={{ fontFamily: 'Lato' }}>
                                No Results Found
                            </h3>
                            <p className="text-gray-500" style={{ fontFamily: 'Raleway' }}>
                                Try adjusting your search terms or browse all questions below.
                            </p>
                            <button
                                onClick={() => setSearchTerm('')}
                                className="mt-4 px-6 py-2 bg-[#34969E] text-white rounded-lg hover:bg-[#34969E]/90 transition-colors duration-200"
                                style={{ fontFamily: 'Lato' }}
                            >
                                Show All Questions
                            </button>
                        </div>
                    ) : (
                        filteredFAQs.map((faq, index) => {
                            const isOpen = openFAQ === index;
                            return (
                                <div
                                    key={index}
                                    className={`bg-white rounded-2xl shadow-lg border overflow-hidden transition-all duration-300 hover:shadow-xl ${isOpen
                                        ? 'border-transparent shadow-2xl'
                                        : 'border-gray-100'
                                        }`}
                                    style={{
                                        borderImage: isOpen
                                            ? 'linear-gradient(135deg, #34969E, #C2D92C) 1'
                                            : undefined,
                                        borderWidth: isOpen ? '2px' : '1px'
                                    }}
                                >
                                    <button
                                        onClick={() => handleToggle(index)}
                                        className="w-full p-8 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:bg-gray-50"
                                        aria-expanded={isOpen}
                                        aria-controls={`faq-answer-${index}`}
                                    >
                                        <h3
                                            className="text-xl lg:text-2xl font-bold text-[#113F64] pr-8 leading-tight"
                                            style={{ fontFamily: 'Lato' }}
                                        >
                                            {faq.q}
                                        </h3>
                                        <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#34969E] flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#34969E] rotate-180' : 'hover:bg-[#34969E]/10'
                                            }`}>
                                            {isOpen ? (
                                                <FaChevronUp className="text-white text-sm" />
                                            ) : (
                                                <FaChevronDown className="text-[#34969E] text-sm" />
                                            )}
                                        </div>
                                    </button>

                                    <div
                                        id={`faq-answer-${index}`}
                                        className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                            }`}
                                    >
                                        <div className="px-8 pb-8">
                                            <div className="h-px bg-gradient-to-r from-[#C2D92C] via-[#34969E] to-[#C2D92C] mb-6"></div>
                                            <p
                                                className="text-lg text-gray-600 leading-relaxed"
                                                style={{
                                                    fontFamily: 'Raleway',
                                                    lineHeight: '1.6'
                                                }}
                                            >
                                                {faq.a}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>

                {/* Show All Button (when searching) */}
                {searchTerm && filteredFAQs.length > 0 && filteredFAQs.length < FAQList.length && (
                    <div className="text-center mt-8">
                        <button
                            onClick={() => setSearchTerm('')}
                            className="px-8 py-3 bg-gradient-to-r from-[#34969E] to-[#C2D92C] text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300"
                            style={{ fontFamily: 'Lato' }}
                        >
                            Show All {FAQList.length} Questions
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EnhancedFAQSection;