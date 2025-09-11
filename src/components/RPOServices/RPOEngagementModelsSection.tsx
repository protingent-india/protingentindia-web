"use client"
import {
    FaCircleNotch,
    FaProjectDiagram,
    FaBolt,
    FaLayerGroup,
} from 'react-icons/fa';

// ---------------------------------------------------------------

// RPO Engagement Models Section
const RPOEngagementModelsSection = () => {
    return (
        <section className="py-16 md:py-20 bg-gray-50">
            <div className="container mx-auto px-4 max-w-[1450px]">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#012D50' }}>
                        RPO Engagement Models We Offer
                    </h2>
                    <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                        Protingent to offer flexible RPO models tailored to organizational growth stage, talent needs, and operational scalability.
                    </p>
                </div>

                {/* Engagement Models Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

                    {/* Model 1: End-to-End RPO */}
                    <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-2" style={{ borderLeftColor: '#34969D' }}>
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-lg" style={{ backgroundColor: '#34969D' }}>
                                <FaCircleNotch className="text-white text-2xl" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold mb-3" style={{ color: '#012D50' }}>
                                    End-to-End RPO
                                </h3>
                                <p className="text-gray-600">
                                    Recruiters to manage the full recruitment lifecycle from sourcing, screening, interviewing, onboarding, to monitoring performance for business consistent growth.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Model 2: Project-Based RPO */}
                    <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-2" style={{ borderLeftColor: '#CBDC13' }}>
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-lg" style={{ backgroundColor: '#CBDC13' }}>
                                <FaProjectDiagram className="text-white text-2xl" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold mb-3" style={{ color: '#012D50' }}>
                                    Project-Based RPO
                                </h3>
                                <p className="text-gray-600">
                                    We fulfill short-term project-based hiring needs with promising quick onboarding, enabling your business to deliver data-driven results within defined deadlines.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Model 3: On-Demand RPO */}
                    <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-2" style={{ borderLeftColor: '#34969D' }}>
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-lg" style={{ backgroundColor: '#34969D' }}>
                                <FaBolt className="text-white text-2xl" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold mb-3" style={{ color: '#012D50' }}>
                                    On-Demand RPO
                                </h3>
                                <p className="text-gray-600">
                                    Need expert recruitment support during spikes or expansions? Engage us only when required—no long-term commitment.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Model 4: Hybrid RPO */}
                    <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-2" style={{ borderLeftColor: '#CBDC13' }}>
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-lg" style={{ backgroundColor: '#CBDC13' }}>
                                <FaLayerGroup className="text-white text-2xl" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold mb-3" style={{ color: '#012D50' }}>
                                    Hybrid RPO
                                </h3>
                                <p className="text-gray-600">
                                    Combine in-house recruitment with Protingent’s support—ideal for companies wanting to retain control but need added firepower.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RPOEngagementModelsSection;