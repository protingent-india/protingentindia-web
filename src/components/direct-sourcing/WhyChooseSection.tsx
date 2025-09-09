"use client"
import { DirectSourcingreasons } from "@/staticData";

// --------------------------------------------------------------
// 8. Why Choose Protingent
// --------------------------------------------------------------
const WhyChooseSection = () => {
    return (
        <div className="w-full bg-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#113F64' }}>
                        Why Companies Choose Protingent
                        <span className="block text-[#34969E]">for Workforce Sourcing?</span>
                    </h2>
                    <p className="text-xl lg:text-2xl text-gray-600 max-w-6xl mx-auto leading-relaxed">
                        We are your partner in how you build and manage your workforce. With years of experience in IT, engineering, and analytics,
                        our recruitment experts designed a direct sourcing model that blends human expertise with smart technology to deliver talent faster, cheaper, and with more long-term impact.
                    </p>
                </div>

                {/* 5 Points with icons and subtle background visuals */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {DirectSourcingreasons.map((reason, index) => {
                        const IconComponent = reason.icon;
                        return (
                            <div
                                key={index}
                                className={`group relative overflow-hidden rounded-3xl transition-all duration-500 cursor-pointer bg-white shadow-lg hover:shadow-2xl hover:-translate-y-2 border-l-4 ${index === 4 ? 'lg:col-span-1 lg:col-start-2' : ''
                                    }`}
                                style={{
                                    borderLeftColor: reason.color,
                                    animationDelay: `${index * 0.1}s`
                                }}
                            >
                                {/* Subtle background visuals */}
                                <div className="absolute inset-0 opacity-5">
                                    <div
                                        className="w-full h-full"
                                        style={{
                                            backgroundImage: `radial-gradient(circle at 80% 20%, ${reason.color}30 2px, transparent 2px)`,
                                            backgroundSize: '40px 40px'
                                        }}
                                    ></div>
                                </div>

                                <div className="relative z-10 p-8 h-full min-h-[280px] flex flex-col justify-between">
                                    {/* Icon */}
                                    <div className="mb-6">
                                        <div
                                            className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                                            style={{ backgroundColor: reason.color }}
                                        >
                                            <IconComponent className="text-white" />
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-[#113F64] group-hover:text-[#34969E] transition-colors duration-300">
                                            {reason.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed text-lg">
                                            {reason.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Hover accent */}
                                <div
                                    className="absolute top-0 right-0 w-1 h-full transition-all duration-500 group-hover:w-2"
                                    style={{ backgroundColor: reason.color }}
                                ></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default WhyChooseSection;