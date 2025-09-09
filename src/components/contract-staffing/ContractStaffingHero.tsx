import {
    FaArrowRight,
} from 'react-icons/fa';

// ------------------------------------------------------------------

// Hero Section
const ContractStaffingHero = () => {
    return (
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden">
            {/* Professional background image */}
            <div
                className="absolute inset-0 w-full h-full object-cover bg-center bg-cover"
                style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80)'
                }}
            ></div>
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(1,45,80,0.85), rgba(52,150,157,0.75))' }}></div>

            {/* Floating geometric elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-20 h-20 border-2 rotate-45 float-animation opacity-30" style={{ borderColor: '#CBDC13' }}></div>
                <div className="absolute bottom-32 right-16 w-16 h-16 rounded-full float-animation opacity-40" style={{ backgroundColor: '#CBDC13', animationDelay: '-2s' }}></div>
                <div className="absolute top-1/2 left-1/4 w-12 h-12 rotate-12 float-animation opacity-25" style={{ backgroundColor: '#34969D', animationDelay: '-4s' }}></div>
            </div>

            <div className="relative z-10 text-center text-white max-w-5xl px-4 md:px-6">
                <div className="mb-6">
                    <div className="inline-block px-4 py-2 rounded-full border mb-4" style={{ backgroundColor: 'rgba(203, 220, 19, 0.2)', borderColor: 'rgba(203, 220, 19, 0.3)' }}>
                        <span className="font-semibold text-sm" style={{ color: '#CBDC13' }}>🎯 Flexible Workforce Solutions</span>
                    </div>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                    <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">Contract Staffing That Delivers</span>
                    <span className="block mt-2" style={{ color: '#CBDC13' }}>the Right Talent, Right on Time</span>
                </h1>

                <p className="text-base md:text-lg lg:text-xl font-light mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
                    Protingent India bridges talent gaps with pre-vetted professionals on demand. We deliver contract staffing services,
                    where dedicated, skilled talent-pool requirements are filled for a certain time. Our technology experts promise agility,
                    cost-efficiency, and compliance, so businesses scale faster without burdening permanent hiring.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="modern-btn group relative overflow-hidden">
                        <span className="relative z-10">Get Contract Staffing Support Today</span>
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(135deg, #CBDC13, #34969D)' }}></div>
                    </button>

                    <button className="px-6 py-3 border-2 border-white/30 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                        <span className="flex items-center gap-2">
                            <span>View Our Solutions</span>
                            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                    </button>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContractStaffingHero;