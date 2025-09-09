"use client"
import { DirectSourcingbenefits } from "@/staticData";
import { FaArrowRight } from "react-icons/fa";

// --------------------------------------------------------------
// 6. Benefits Section
// --------------------------------------------------------------
const BenefitsSection = () => {
    return (
        <div className="w-full bg-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#113F64' }}>
                        Why Businesses Rely on the
                        <span className="block text-[#34969E]">Direct Sourcing Model?</span>
                    </h2>
                    <p className="text-xl lg:text-2xl text-gray-600 max-w-6xl mx-auto leading-relaxed">
                        Protingent India upgrades businesses to a smarter hiring model. Our private talent pools are built and managed around your projects, your culture, and your growth targets.
                        Instead of dealing with vendor markups and slow pipelines, you get a transparent staffing model that delivers qualified IT and engineering talent on demand.
                        We deliver an on-demand hiring approach that scales with your business and keeps costs under control.
                    </p>
                </div>

                {/* 5 Benefits with mandatory background images */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {DirectSourcingbenefits.map((benefit, index) => {
                        const IconComponent = benefit.icon;
                        return (
                            <div
                                key={index}
                                className={`group relative overflow-hidden rounded-3xl transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-3 ${index === 4 ? 'lg:col-span-1 lg:col-start-2' : ''
                                    }`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* MANDATORY: Background image */}
                                <div
                                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    style={{
                                        backgroundImage: `url('${benefit.image}')`,
                                    }}
                                ></div>

                                {/* Hover gradient overlays */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-85 group-hover:opacity-95 transition-opacity duration-300`}></div>

                                <div className="relative z-10 p-8 h-full text-white min-h-[320px] flex flex-col justify-between">
                                    {/* Icon */}
                                    <div className="mb-6">
                                        <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-3xl mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-xl border border-white/30">
                                            <IconComponent className="text-white" />
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-white/90 leading-relaxed text-lg">
                                            {benefit.description}
                                        </p>
                                    </div>

                                    {/* Hover indicator */}
                                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 flex items-center justify-center">
                                            <FaArrowRight className="text-white text-sm" />
                                        </div>
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

export default BenefitsSection;