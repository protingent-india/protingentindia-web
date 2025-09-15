"use client"
import Image from 'next/image';
import { Icon } from '@/components';

// -----------------------------------------------------------

const HomeIntro = () => {
    return (
        <section id="home-intro" className="w-full bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden" >
            {/* Subtle background geometric shapes */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-lime-400 to-teal-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-teal-500 to-navy-600 rounded-full blur-3xl"></div>
                <div className="absolute top-40 right-10 w-24 h-24 bg-gradient-to-br from-lime-400 to-teal-500 rotate-45 blur-2xl"></div>
            </div>

            <div className="w-full flex justify-center p-6 lg:py-20 relative z-10" >
                <div className="w-full lg:w-[90%] max-w-[1400px] flex flex-col items-center gap-16 lg:gap-20" >
                    
                    {/* Hero Header */}
                    <div className="text-center max-w-5xl" data-aos="fade-up">
                        <div className="flex flex-col items-center gap-4 lg:gap-6">
                            <span className="text-2xl lg:text-3xl font-bold font-lato text-teal-500 uppercase tracking-wide">
                                PROTINGENT INDIA
                            </span>
                            <h1 className="text-3xl lg:text-5xl xl:text-6xl font-extrabold font-lato text-navy-600 text-center leading-tight">
                                Your Trusted Partner in Talent, <br className="hidden lg:block" />
                                Technology, and Transformation
                            </h1>
                            <div className="w-24 h-1 bg-gradient-to-r from-lime-400 to-teal-500 rounded-full mx-auto"></div>
                            <p className="text-lg lg:text-xl font-raleway text-gray-700 leading-relaxed max-w-4xl">
                                Protingent India delivers end-to-end solutions across staffing excellence, technology consulting, and digital transformation. We align people, processes, and platforms to drive sustainable performance and long-term impact.
                            </p>
                        </div>
                    </div>

                    {/* Main Content Section */}
                    <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-16" >
                        
                        {/* Left Column - Text Content */}
                        <div className="w-full lg:w-1/2 flex flex-col gap-8" data-aos="fade-right">
                            <div className="space-y-6">
                                <h2 className="text-2xl lg:text-3xl font-bold font-lato text-navy-600 leading-tight">
                                    Protingent India: Delivering 360° Solutions for Modern Businesses
                                </h2>
                                <p className="text-lg font-raleway text-gray-700 leading-relaxed">
                                    Our AI-Led IT Solutions enable enterprises to eliminate inefficiencies, enhance decision-making, and scale with agility. By combining expertise in talent, technology, and digital solutions, we transform challenges into opportunities and help businesses achieve lasting impact.
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-lime-400 rounded-full animate-pulse"></div>
                                    <p className="text-xl font-semibold font-lato text-navy-600">
                                        We Are Your #1 partner for growth, resilience, and transformation.
                                    </p>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <div className="flex justify-start" data-aos="fade-up" data-aos-delay="200">
                                <button 
                                    onClick={() => {
                                        const solutionsSection = document.getElementById('comprehensive');
                                        if (solutionsSection) {
                                            solutionsSection.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                    className="px-8 py-4 bg-gradient-to-r from-lime-400 to-teal-500 hover:from-teal-500 hover:to-lime-400 text-navy-600 font-semibold text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl group flex items-center gap-3"
                                >
                                    <span>Discover Our Solutions</span>
                                    <Icon 
                                        icon="ph:arrow-right-fill"
                                        className="group-hover:translate-x-1 transition-transform duration-300"
                                    />
                                </button>
                            </div>
                        </div>

                        {/* Right Column - Visual Content & KPI Badges */}
                        <div className="w-full lg:w-1/2 flex flex-col gap-8 items-center" data-aos="fade-left">
                            
                            {/* Hero Image */}
                            <div className="relative w-full max-w-[600px] group">
                                {/* Image container with modern styling */}
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-shadow duration-500">
                                    <Image
                                        src="https://images.unsplash.com/photo-1718220216044-006f43e3a9b1"
                                        alt="Collaborative Tech Workspace - Modern Business Innovation"
                                        width={600}
                                        height={400}
                                        className="w-full h-[300px] lg:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                                        priority
                                    />
                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy-600/30 via-transparent to-transparent"></div>
                                    
                                    {/* Floating geometric shapes overlay */}
                                    <div className="absolute top-4 right-4 w-8 h-8 bg-lime-400/80 rounded-full animate-pulse"></div>
                                    <div className="absolute bottom-6 left-6 w-6 h-6 bg-teal-500/80 rotate-45 animate-bounce"></div>
                                </div>
                            </div>

                            {/* KPI Badges Grid */}
                            <div className="w-full max-w-[600px] grid grid-cols-2 gap-4 lg:gap-6">
                                
                                {/* KPI Badge 1 */}
                                <div 
                                    className="bg-gradient-to-br from-lime-400 to-teal-500 p-6 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center group cursor-pointer"
                                    data-aos="fade-up" 
                                    data-aos-delay="300"
                                >
                                    <div className="flex flex-col items-center gap-3">
                                        <Icon 
                                            icon="ph:trend-up-fill" 
                                            className="text-3xl text-navy-600 group-hover:scale-110 transition-transform duration-300"
                                        />
                                        <div className="text-navy-600">
                                            <p className="text-2xl lg:text-3xl font-bold font-lato">50%</p>
                                            <p className="text-sm lg:text-base font-semibold font-raleway">Higher Productivity</p>
                                        </div>
                                    </div>
                                </div>

                                {/* KPI Badge 2 */}
                                <div 
                                    className="bg-gradient-to-br from-teal-500 to-navy-600 p-6 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center group cursor-pointer"
                                    data-aos="fade-up" 
                                    data-aos-delay="400"
                                >
                                    <div className="flex flex-col items-center gap-3">
                                        <Icon 
                                            icon="ph:clock-fill" 
                                            className="text-3xl text-white group-hover:scale-110 transition-transform duration-300"
                                        />
                                        <div className="text-white">
                                            <p className="text-2xl lg:text-3xl font-bold font-lato">24/7</p>
                                            <p className="text-sm lg:text-base font-semibold font-raleway">Business Continuity</p>
                                        </div>
                                    </div>
                                </div>

                                {/* KPI Badge 3 */}
                                <div 
                                    className="bg-gradient-to-br from-navy-600 to-teal-500 p-6 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center group cursor-pointer"
                                    data-aos="fade-up" 
                                    data-aos-delay="500"
                                >
                                    <div className="flex flex-col items-center gap-3">
                                        <Icon 
                                            icon="ph:globe-fill" 
                                            className="text-3xl text-white group-hover:scale-110 transition-transform duration-300"
                                        />
                                        <div className="text-white">
                                            <p className="text-2xl lg:text-3xl font-bold font-lato">30+</p>
                                            <p className="text-sm lg:text-base font-semibold font-raleway">Global Markets</p>
                                        </div>
                                    </div>
                                </div>

                                {/* KPI Badge 4 */}
                                <div 
                                    className="bg-gradient-to-br from-lime-400 to-navy-600 p-6 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center group cursor-pointer"
                                    data-aos="fade-up" 
                                    data-aos-delay="600"
                                >
                                    <div className="flex flex-col items-center gap-3">
                                        <Icon 
                                            icon="ph:buildings-fill" 
                                            className="text-3xl text-white group-hover:scale-110 transition-transform duration-300"
                                        />
                                        <div className="text-white">
                                            <p className="text-2xl lg:text-3xl font-bold font-lato">100+</p>
                                            <p className="text-sm lg:text-base font-semibold font-raleway">Trusted Brands</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Gradient Divider */}
                    <div className="w-full max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="700">
                        <div className="h-px bg-gradient-to-r from-transparent via-lime-400 to-transparent"></div>
                        <div className="text-center py-6">
                            <p className="text-sm lg:text-base font-raleway text-gray-600 uppercase tracking-wider">
                                Transforming Businesses Through Innovation & Excellence
                            </p>
                        </div>
                        <div className="h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeIntro;