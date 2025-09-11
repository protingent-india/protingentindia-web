"use client"
import Link from 'next/link';
import {
    FaHandshake,
    FaRocket,
    FaIndustry,
    FaExpandArrowsAlt,
    FaUserCheck
} from 'react-icons/fa';

// ------------------------------------------------------------------

// Trusted Partner Section - Updated with Exact Content
const PowerfulPartnerSection = () => {
    return (
        <section className="relative py-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #012D50 0%, #34969D 50%, #012D50 100%)' }}>
            <div className="container mx-auto px-4 relative z-10 max-w-[1450px]">

                {/* Main Headline */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                        <span className="block mb-2">We Are Not Another</span>
                        <span className="text-5xl md:text-7xl" style={{ color: '#CBDC13' }}>RPO Vendor</span>
                        <span className="block mt-4">But A Trusted</span>
                        <span className="bg-gradient-to-r from-[#34969D] to-[#CBDC13] bg-clip-text text-transparent text-5xl md:text-7xl">
                            Talent Growth Partner
                        </span>
                    </h2>

                    {/* Subheading */}
                    <p className="text-xl text-white/90 max-w-4xl mx-auto mt-8 leading-relaxed">
                        We work for excellence with the top-tier talent pool. Our pre-vetted and new candidates are highly skilled to evolve and expand your organization with precision. Our recruiters blend agility, domain expertise, and a tech-enabled approach to build talent pipelines that work efficiently.
                    </p>
                </div>

                {/* Five Key Differentiators */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

                    {/* 1. Deep Industry Experience */}
                    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#CBDC13' }}>
                            <FaIndustry className="text-2xl" style={{ color: '#012D50' }} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Deep Industry Experience
                        </h3>
                        <p className="text-white/80 leading-relaxed">
                            With over 25 years of engineering and tech hiring experience, we know niche talent better than anyone else.
                        </p>
                    </div>

                    {/* 2. Speed + Precision */}
                    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#CBDC13' }}>
                            <FaRocket className="text-2xl" style={{ color: '#012D50' }} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Speed + Precision
                        </h3>
                        <p className="text-white/80 leading-relaxed">
                            We shorten time-to-hire without sacrificing quality by refining our sourcing frameworks and enabling our expert recruiters.
                        </p>
                    </div>

                    {/* 3. Flexible, Scalable Engagement */}
                    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#CBDC13' }}>
                            <FaExpandArrowsAlt className="text-2xl" style={{ color: '#012D50' }} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Flexible, Scalable Engagement
                        </h3>
                        <p className="text-white/80 leading-relaxed">
                            Start small or big - our modular RPO models adapt and grow with your business needs.
                        </p>
                    </div>

                    {/* 4. Transparent Collaboration */}
                    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#CBDC13' }}>
                            <FaHandshake className="text-2xl" style={{ color: '#012D50' }} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Transparent Collaboration
                        </h3>
                        <p className="text-white/80 leading-relaxed">
                            You will always have a say in your hiring process. Expect regular updates,
                            an identified account manager, and full visibility in the hiring process.
                        </p>
                    </div>

                    {/* 5. Candidate-First Approach */}
                    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 lg:col-span-1 md:col-span-2">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#CBDC13' }}>
                            <FaUserCheck className="text-2xl" style={{ color: '#012D50' }} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Candidate-First Approach
                        </h3>
                        <p className="text-white/80 leading-relaxed">
                            We treat every talent touchpoint with intent, creating better brand experiences and higher acceptance rates.
                        </p>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="text-center mt-12">
                    <Link href={"/contact"} className="cursor-pointer" >
                        <button
                            className="font-bold text-lg px-10 py-4 rounded-full hover:scale-105 transform transition-all shadow-2xl"
                            style={{
                                background: 'linear-gradient(90deg, #CBDC13, #34969D)',
                                color: '#012D50'
                            }}
                        >
                            Start Building Your Dream Team
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default PowerfulPartnerSection;
