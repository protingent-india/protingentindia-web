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
        <div id="hero section" className='relative h-[280px] sm:min-h-[400px] lg:min-h-[520px] xl:min-h-[650px] lap:!min-h-[800px] 3xl:!min-h-[960px] ease-in duration-300 snap-y snap-mandatory' >
            <div className='sticky top-[100px] left-0 snap-start h-full' >
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/HomeHero.mp4" type="video/mp4" />
                </video>
            </div>
            <div className='absolute top-0 left-0 bg-transparent w-full h-fit snap-start flex flex-col items-center gap-' >
                <p className={`
                    bg-white 
                    w-full min-h-[80px] lg:min-h-[120px] lap:!min-h-[200px] 
                    py-2 xl:py-8 
                    text-3xl sm:text-[45px] lg:text-[65px] xl:text-[80px] lap:!text-[100px] 3xl:!text-[110px] 
                    text-center font-black uppercase 
                    mix-blend-screen 
                    ${montserrat.className}`}
                >
                    PROTINGENT INDIA
                </p>
                <p className='
                    text-sm lg:text-xl xl:text-2xl lap:!text-[32px]
                    text-primary 
                    bg-white
                    absolute bottom-1 sm:bottom-4 sm:left-8 md:left-24 lg:bottom-6 xl:left-28 lap:!left-24 3xl:!left-72 
                    font-medium'
                >
                    Empowering Businesses, Connecting the World
                </p>
            </div>
        </div >
    )
}

export default HeroSection;