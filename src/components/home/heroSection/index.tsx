import React from 'react'
import { Montserrat } from "next/font/google"

// -------------------------------------------------------------------------

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["900"],
})

// -------------------------------------------------------------------------

const HeroSection = () => {
    return (
        <div id="hero section" className='relative min-h-[1600px] ease-in duration-300 snap-y snap-mandatory' >
            <div className='sticky top-[100px] left-0 snap-start' >
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full object-cover"
                >
                    <source src="/HomeHero.mp4" type="video/mp4" />
                </video>
            </div>
            <div className='absolute top-0 left-0 bg-transparent w-full h-fit snap-start' >
                <p className={`bg-white w-full min-h-[316px] py-20 text-[128px] text-center font-black uppercase text-black mix-blend-screen ${montserrat.className}`} >
                    PROTINGENT INDIA
                </p>
                <p className='text-[40px] text-primary bg-white absolute bottom-12 left-72 font-medium' >
                    360° Solution For Your Business.
                </p>
            </div>
        </div >
    )
}

export default HeroSection;