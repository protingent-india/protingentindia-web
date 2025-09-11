"use client"
import Link from "next/link";
// --------------------------------------------------------------
// 3. CTA Banner (Studio Beyond Style)

import { FaEye, FaRocket, FaShieldAlt, FaTachometerAlt } from "react-icons/fa";

// --------------------------------------------------------------
const CTABannerSection = () => {
    return (
        <div className="relative w-full py-16 md:py-24 overflow-hidden">
            {/* MANDATORY: Full-width background image with overlay gradient */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{
                    backgroundImage: `url('https://images.pexels.com/photos/33809955/pexels-photo-33809955.jpeg')`,
                }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#34969E]/95 via-[#113F64]/90 to-[#C2D92C]/85"></div>

            {/* Animated particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-10 w-32 h-32 border-2 border-[#C2D92C]/30 rounded-full animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-white/40 rotate-45 animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-[#C2D92C]/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 text-center text-white">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                    A Flexible Hiring Solution That
                    <span className="block text-[#C2D92C]">Puts You in Control</span>
                </h2>
                <p className="text-xl lg:text-2xl leading-relaxed mb-12 max-w-5xl mx-auto opacity-90">
                    Building a private talent pool, Protingent gives you a flexible hiring solution that eliminates middle-layer delays.
                    You manage your own contingent workforce, gain visibility into available skills, and engage talent faster without the heavy agency costs.
                </p>

                <Link href={"/contact"} className="cursor-pointer" >
                    <button className="group relative overflow-hidden px-12 py-6 bg-[#C2D92C] text-[#113F64] font-bold text-xl rounded-2xl hover:scale-105 transform transition-all shadow-2xl">
                        <span className="relative z-10 flex items-center gap-4">
                            Get Started Today
                            <FaRocket className="group-hover:translate-x-2 group-hover:rotate-12 transition-all duration-300" />
                        </span>
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </button>
                </Link>

                {/* Trust indicators */}
                <div className="flex justify-center items-center gap-12 mt-12 text-lg opacity-80">
                    <div className="text-center">
                        <FaShieldAlt className="text-3xl text-[#C2D92C] mb-2 mx-auto" />
                        <div>Secure & Compliant</div>
                    </div>
                    <div className="text-center">
                        <FaEye className="text-3xl text-[#C2D92C] mb-2 mx-auto" />
                        <div>Full Transparency</div>
                    </div>
                    <div className="text-center">
                        <FaTachometerAlt className="text-3xl text-[#C2D92C] mb-2 mx-auto" />
                        <div>Real-time Control</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CTABannerSection;