"use client"
import { ContractStaffingSolutionsData } from '@/staticData';
import {
    FaArrowRight
} from 'react-icons/fa';

// ---------------------------------------------------

// Section 2: Contract Staffing Solutions
const ContractStaffingSolutions = () => {
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 max-w-[1400px]">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#012D50' }}>
                        Our Contract Staffing Solutions
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Protingent India delivers tailored contractual staffing services aligned to the dynamic workforce needs for short-term projects.
                        We have the recruiters ensure compliance, quality, and speed.
                    </p>
                </div>

                <div className="space-y-8">
                    {ContractStaffingSolutionsData.map((solution, index) => {
                        const IconComponent = solution.icon;
                        const isEven = index % 2 === 0;
                        return (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-3xl transition-all duration-500 cursor-pointer bg-white shadow-lg hover:shadow-xl hover:-translate-y-1"
                            >
                                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} min-h-[300px]`}>

                                    {/* Image Section - 40% */}
                                    <div className="lg:w-2/5 relative overflow-hidden">
                                        <img
                                            src={solution.image}
                                            alt={solution.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div
                                            className="absolute inset-0 opacity-20"
                                            style={{
                                                background: `linear-gradient(135deg, ${solution.accentColor}40, ${solution.accentColor}20)`
                                            }}
                                        ></div>

                                        {/* Icon positioned on image */}
                                        <div className="absolute top-6 left-6">
                                            <div
                                                className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 group-hover:scale-110 shadow-lg"
                                                style={{
                                                    background: `linear-gradient(135deg, ${solution.accentColor}, ${solution.accentColor}E6)`
                                                }}
                                            >
                                                <IconComponent className="text-white" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Section - 60% */}
                                    <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
                                        <div className="max-w-xl">
                                            <h3 className="text-2xl lg:text-3xl font-bold mb-6 transition-colors duration-300" style={{ color: '#012D50' }}>
                                                {solution.title}
                                            </h3>
                                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                                {solution.description}
                                            </p>

                                            {/* Modern CTA */}
                                            <div className="hidden items-center gap-3 text-base font-semibold transition-colors duration-300 group-hover:gap-4" style={{ color: solution.accentColor }}>
                                                <span>Learn More</span>
                                                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                                            </div>
                                        </div>

                                        {/* Decorative element */}
                                        <div
                                            className="absolute bottom-0 right-0 w-32 h-32 rounded-full opacity-5 transition-opacity duration-500 group-hover:opacity-10"
                                            style={{ backgroundColor: solution.accentColor }}
                                        ></div>
                                    </div>
                                </div>

                                {/* Modern accent border */}
                                <div
                                    className={`absolute ${isEven ? 'left-0' : 'right-0'} top-0 w-1 h-full transition-all duration-500 group-hover:w-1.5`}
                                    style={{ backgroundColor: solution.accentColor }}
                                ></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ContractStaffingSolutions;