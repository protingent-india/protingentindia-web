"use client"
import { HRprocesses } from "@/staticData";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

// --------------------------------------------------------------

// 4. Process Approach Section - Vertical Timeline
// --------------------------------------------------------------
const ProcessApproachSection = () => {
    return (
        <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#113F64', fontFamily: 'Lato' }}>
                        Our Streamlined
                        <span className="block text-[#34969E]">Approach</span>
                    </h2>
                    <p className="text-xl lg:text-2xl text-gray-600 max-w-6xl mx-auto leading-relaxed" style={{ fontFamily: 'Raleway' }}>
                        We follow a structured, technology-enabled approach to HR outsourcing, ensuring accuracy, compliance,
                        and transparency at every step—so businesses gain efficiency without losing control.
                    </p>
                </div>

                {/* Vertical Timeline */}
                <div className="relative">
                    {/* Connecting gradient line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#34969E] via-[#C2D92C] to-[#34969E] hidden lg:block"></div>

                    <div className="space-y-24">
                        {HRprocesses.map((process, index) => {
                            const IconComponent = process.icon;
                            const isEven = index % 2 === 0;

                            return (
                                <div
                                    key={index}
                                    className={`flex flex-col lg:flex-row items-center gap-12 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                        }`}
                                    style={{ animationDelay: `${index * 0.2}s` }}
                                >
                                    {/* Image Side */}
                                    <div className="lg:w-1/2 relative">
                                        <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                                            <img
                                                src={process.image}
                                                alt={process.title}
                                                className="w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#113F64]/70 via-transparent to-[#34969E]/60"></div>

                                            {/* Step Number */}
                                            <div className="absolute top-8 left-8">
                                                <div className="w-16 h-16 bg-[#C2D92C] rounded-2xl flex items-center justify-center shadow-xl">
                                                    <span className="text-[#113F64] font-bold text-xl" style={{ fontFamily: 'Lato' }}>{index + 1}</span>
                                                </div>
                                            </div>

                                            {/* Icon */}
                                            <div className="absolute bottom-8 right-8">
                                                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
                                                    <IconComponent className="text-white text-2xl" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Side */}
                                    <div className="lg:w-1/2">
                                        <div className="relative">
                                            {/* Timeline Node (Desktop only) */}
                                            <div className="hidden lg:flex absolute top-8 -left-6 w-12 h-12 bg-[#C2D92C] rounded-full border-4 border-white shadow-lg items-center justify-center">
                                                <IconComponent className="text-[#113F64] text-xl" />
                                            </div>

                                            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                                                <div className="flex items-center gap-4 mb-6">
                                                    <div
                                                        className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg lg:hidden"
                                                        style={{ backgroundColor: index % 2 === 0 ? '#34969E' : '#C2D92C' }}
                                                    >
                                                        <IconComponent className="text-white text-xl" />
                                                    </div>
                                                    <div className="text-sm font-semibold text-[#34969E] uppercase tracking-wider" style={{ fontFamily: 'Lato' }}>
                                                        Step {index + 1}
                                                    </div>
                                                </div>

                                                <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-[#113F64] leading-tight" style={{ fontFamily: 'Lato' }}>
                                                    {process.title}
                                                </h3>
                                                <p className="text-xl text-gray-600 leading-relaxed mb-8" style={{ fontFamily: 'Raleway' }}>
                                                    {process.description}
                                                </p>

                                                <Link href={"/contact"} className="cursor-pointer" >
                                                    <div className="flex items-center gap-3 text-[#34969E] font-semibold hover:gap-5 transition-all duration-300 cursor-pointer">
                                                        <span>Learn More</span>
                                                        <FaArrowRight />
                                                    </div>
                                                </Link>
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

export default ProcessApproachSection;