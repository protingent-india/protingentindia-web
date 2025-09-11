"use client"
import { advantages } from "@/staticData";

// --------------------------------------------------------------------------

// Section 5: Protingent Advantage
const ProtingentAdvantageSection = () => {
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 max-w-[1400px]">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#012D50' }}>
                        Protingent Advantage: More Than Just Staffing
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        We are redefining contract staffing by blending AI-driven sourcing, domain-specific talent pools, and compliance-backed processes,
                        ensuring organizations receive not just staff, but sustainable workforce solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {advantages.map((advantage, index) => {
                        const IconComponent = advantage.icon;
                        return (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-2xl transition-all duration-500 cursor-pointer bg-white shadow-lg hover:shadow-2xl hover:-translate-y-3 border-l-4"
                                style={{ borderLeftColor: advantage.accentColor }}
                            >
                                <div className="p-8 h-full">
                                    <div className="relative mb-6">
                                        <div
                                            className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                                            style={{ backgroundColor: advantage.accentColor }}
                                        >
                                            <IconComponent className="text-white" />
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold mb-4 transition-colors duration-300" style={{ color: '#012D50' }}>
                                        {advantage.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                        {advantage.description}
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

export default ProtingentAdvantageSection;