"use client"
// --------------------------------------------------------------
// Team Section with Mandatory Full-Width Background Image

import { TeamSectionData } from "@/staticData";

// --------------------------------------------------------------
const TeamSection = () => {
    return (
        <div className="relative w-full py-16 md:py-24 overflow-hidden">
            {/* MANDATORY: Full-width abstract team visualization image */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1652359282381-63624506739c')`,
                }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#113F64]/95 via-[#34969E]/90 to-[#113F64]/95"></div>

            {/* Animated connection lines between nodes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <svg className="w-full h-full opacity-20" viewBox="0 0 1200 600">
                    <defs>
                        <linearGradient id="teamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#C2D92C" />
                            <stop offset="50%" stopColor="#34969E" />
                            <stop offset="100%" stopColor="#C2D92C" />
                        </linearGradient>
                    </defs>
                    {/* Network nodes representing team collaboration */}
                    <circle cx="200" cy="150" r="8" fill="url(#teamGradient)" className="animate-pulse" />
                    <circle cx="400" cy="200" r="6" fill="url(#teamGradient)" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                    <circle cx="600" cy="120" r="10" fill="url(#teamGradient)" className="animate-pulse" style={{ animationDelay: '1s' }} />
                    <circle cx="800" cy="180" r="7" fill="url(#teamGradient)" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
                    <circle cx="1000" cy="140" r="9" fill="url(#teamGradient)" className="animate-pulse" style={{ animationDelay: '2s' }} />

                    {/* Connection lines */}
                    <line x1="200" y1="150" x2="400" y2="200" stroke="url(#teamGradient)" strokeWidth="2" opacity="0.6" />
                    <line x1="400" y1="200" x2="600" y2="120" stroke="url(#teamGradient)" strokeWidth="2" opacity="0.6" />
                    <line x1="600" y1="120" x2="800" y2="180" stroke="url(#teamGradient)" strokeWidth="2" opacity="0.6" />
                    <line x1="800" y1="180" x2="1000" y2="140" stroke="url(#teamGradient)" strokeWidth="2" opacity="0.6" />
                </svg>
            </div>

            <div className="relative z-10 max-w-[1450px] mx-auto px-4 md:px-6 text-center text-white">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    We are The Team Behind
                    <span className="block text-[#C2D92C]">Your Growth Story</span>
                </h2>
                <p className="text-xl leading-relaxed mb-12 max-w-4xl mx-auto opacity-90">
                    Protingent India is a top marketing agency that combines strategy, technology, and people to turn those promises into growth.
                    We don't just run campaigns, but build systems that keep delivering, month after month.
                </p>

                {/* Team highlights grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mt-16">
                    {TeamSectionData?.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <div
                                key={index}
                                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div
                                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-4 mx-auto transition-all duration-300 group-hover:scale-110 shadow-lg"
                                    style={{ backgroundColor: '#C2D92C' }}
                                >
                                    <IconComponent className="text-[#113F64]" />
                                </div>
                                <h3 className="text-lg font-bold mb-3 text-[#C2D92C]">
                                    {item.title}
                                </h3>
                                <p className="text-white/80 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default TeamSection;