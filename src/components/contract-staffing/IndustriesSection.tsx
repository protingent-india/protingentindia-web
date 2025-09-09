"use client"
import { industries } from "@/staticData";
import {
    FaArrowRight,
} from 'react-icons/fa';

// ---------------------------------------------------

// Section 6: Industries We Serve
const IndustriesSection = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 max-w-[1450px]">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#012D50' }}>
                        Industries We Serve
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Our contract staffing expertise spans across diverse industries, providing specialized talent solutions
                        tailored to sector-specific requirements and compliance standards.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((industry, index) => {
                        const IconComponent = industry.icon;
                        return (
                            <div
                                key={index}
                                className="group flex flex-col justify-between relative overflow-hidden rounded-3xl transition-all duration-500 cursor-pointer bg-white shadow-lg hover:shadow-xl hover:-translate-y-2"
                            >
                                {/* Modern Gradient Header */}
                                <div
                                    className="h-fit flex justify-start items-start relative overflow-hidden"
                                    style={{
                                        background: `linear-gradient(135deg, ${industry.accentColor}, ${industry.accentColor}CC)`
                                    }}
                                >
                                    {/* Geometric Pattern */}
                                    <div className="hidden absolute inset-0 opacity-20">
                                        <div className="absolute top-2 right-4 w-16 h-16 border-2 border-white/30 rounded-full"></div>
                                        <div className="absolute bottom-2 left-4 w-8 h-8 bg-white/20 rotate-45"></div>
                                        <div className="absolute top-1/2 left-1/2 w-4 h-16 bg-white/10 rotate-12"></div>
                                    </div>

                                    {/* Icon */}
                                    <div className="p-8 pt-12">
                                        <div
                                            className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 group-hover:scale-110 shadow-lg border-4 border-white"
                                            style={{ backgroundColor: industry.accentColor }}
                                        >
                                            <IconComponent className="text-white" />
                                        </div>
                                    </div>
                                </div>

                                <div className="p-8 pt-12">
                                    <h3 className="text-xl font-bold mb-4 transition-colors duration-300" style={{ color: '#012D50' }}>
                                        {industry.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        {industry.description}
                                    </p>

                                    {/* Modern hover effect */}
                                    <div className="hidden items-center gap-2 text-sm font-semibold transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:gap-3" style={{ color: industry.accentColor }}>
                                        <span>Explore Solutions</span>
                                        <FaArrowRight className="text-xs" />
                                    </div>
                                </div>

                                {/* Side accent */}
                                <div
                                    className="absolute right-0 top-1/4 w-1 h-1/2 transition-all duration-500 group-hover:h-3/4"
                                    style={{ backgroundColor: industry.accentColor }}
                                ></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default IndustriesSection;