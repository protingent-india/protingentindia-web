"use client"

// ------------------------------------------------------------------

const RPOServiceBanner = () => {
    return (
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden">
            <video
                autoPlay
                muted
                loop
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: 'center center' }}
            >
                <source src="/ITConsultingBg.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>

            {/* Floating geometric elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-20 h-20 border border-primary-green-color/30 rotate-45 float-animation"></div>
                <div className="absolute bottom-32 right-16 w-16 h-16 border border-secondry/40 rounded-full float-animation" style={{ animationDelay: '-2s' }}></div>
                <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-primary-green-color/20 rotate-12 float-animation" style={{ animationDelay: '-4s' }}></div>
            </div>

            <div className="relative z-10 text-center text-white w-full px-4 md:px-6">
                <div className="mb-6">
                    <div className="inline-block px-4 py-2 bg-primary-green-color/20 backdrop-blur-sm rounded-full border border-primary-green-color/30 mb-4">
                        <span className="text-primary-green-color font-semibold text-sm">🚀 Transform Your Hiring Process</span>
                    </div>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent leading-tight">
                    RPO That Builds Your Team Fast
                    <span className="hidden text-primary-green-color">Lightning Fast</span>
                </h1>

                <p className="text-base md:text-lg lg:text-xl font-light mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
                    Streamlined recruitment solutions designed for growth-oriented businesses. Protingent India’s Recruitment Process Outsourcing (RPO) model helps you hire smarter and faster, while reducing hiring costs, improving talent quality, and providing real-time insights. We help you focus on what matters for business scalability.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="modern-btn group relative overflow-hidden">
                        <span className="relative z-10">Request for Free RPO Consultation</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-green-color to-secondry opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>

                    <button className="hidden px-6 py-3 border-2 border-white/30 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                        <span className="flex items-center gap-2">
                            <span>Watch Demo</span>
                            <div className="w-0 h-0 border-l-[6px] border-l-white border-y-[4px] border-y-transparent group-hover:translate-x-1 transition-transform duration-300"></div>
                        </span>
                    </button>
                </div>

                {/* Scroll indicator */}
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
                    <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RPOServiceBanner;