"use client"
// --------------------------------------------------------------
// Results Section with Mandatory Large Image Visualization

import { Marketingresults } from "@/staticData";

// --------------------------------------------------------------
const ResultsSection = () => {

    return (
        <div className="w-full bg-gradient-to-br from-gray-50 to-white py-16 md:py-24">
            <div className="max-w-[1450px] mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#113F64' }}>
                        Actionable Marketing Results
                        <span className="block text-[#34969E]">That Matter to You</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                        Insightful and actionable marketing strategies that promise impeccable results and massive growth. We plan to make your business a success.
                    </p>
                </div>

                {/* Split screen layout with large image visualization */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                    {/* Left Side (40%) - MANDATORY: Animated dashboard mockup image */}
                    <div className="lg:col-span-2 relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1664526937033-fe2c11f1be25"
                                alt="Analytics Dashboard"
                                className="w-full h-[400px] lg:h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-[#113F64]/60 via-transparent to-[#34969E]/40"></div>

                            {/* Interactive data points */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="grid grid-cols-2 gap-6 text-white text-center">
                                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                                        <div className="text-3xl font-bold text-[#C2D92C]">300%</div>
                                        <div className="text-sm">ROI Growth</div>
                                    </div>
                                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                                        <div className="text-3xl font-bold text-[#C2D92C]">95%</div>
                                        <div className="text-sm">Client Retention</div>
                                    </div>
                                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                                        <div className="text-3xl font-bold text-[#C2D92C]">60%</div>
                                        <div className="text-sm">Faster Growth</div>
                                    </div>
                                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                                        <div className="text-3xl font-bold text-[#C2D92C]">24/7</div>
                                        <div className="text-sm">Support</div>
                                    </div>
                                </div>
                            </div>

                            {/* Flowing connection lines */}
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                <div className="absolute top-1/4 left-1/4 w-20 h-20 border-2 border-[#C2D92C]/30 rounded-full animate-pulse"></div>
                                <div className="absolute bottom-1/4 right-1/4 w-16 h-16 border-2 border-[#34969E]/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side (60%) - Results with background pattern */}
                    <div className="lg:col-span-3 relative">
                        {/* MANDATORY: Subtle pattern background image */}
                        <div
                            className="absolute inset-0 opacity-5 bg-repeat"
                            style={{
                                backgroundImage: `url('https://images.pexels.com/photos/33820159/pexels-photo-33820159.jpeg')`,
                                backgroundSize: '100px 100px'
                            }}
                        ></div>

                        <div className="relative z-10 space-y-8">
                            {Marketingresults.map((result, index) => {
                                const IconComponent = result.icon;
                                return (
                                    <div
                                        key={index}
                                        className="group flex items-start gap-6 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        {/* Icon + Metric */}
                                        <div className="flex-shrink-0 text-center">
                                            <div
                                                className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-2 transition-all duration-300 group-hover:scale-110 shadow-lg"
                                                style={{ backgroundColor: index % 2 === 0 ? '#34969E' : '#C2D92C' }}
                                            >
                                                <IconComponent className="text-white" />
                                            </div>
                                            <div className="text-2xl font-bold text-[#113F64]">{result.metric}</div>
                                            <div className="text-xs text-gray-500">{result.metricLabel}</div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold mb-2 text-[#113F64] group-hover:text-[#34969E] transition-colors duration-300">
                                                {result.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                {result.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultsSection;