"use client"
import Link from "next/link";

// ---------------------------------------------------------

// CTA Section
const CTASection = ({ title, desc }: { title: string, desc: string }) => {
    return (
        <section className="py-16 md:py-24" style={{ background: 'linear-gradient(135deg, #012D50 0%, #34969D 50%, #CBDC13 100%)' }}>
            <div className="container mx-auto px-4 text-center max-w-[1450px]">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                    {title}
                </h2>
                <p className="text-xl text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed">
                    {desc}
                </p>
                <Link href={'/contact'}>
                    <button
                        className="font-bold text-lg px-12 py-4 rounded-full hover:scale-105 transform transition-all shadow-2xl cursor-pointer"
                        style={{
                            background: 'linear-gradient(90deg, #CBDC13, white)',
                            color: '#012D50'
                        }}
                    >
                        Get Contract Staffing Support Today
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default CTASection;