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
        <div id="hero-section" className='relative min-h-[340px] sm:min-h-[660px] lg:min-h-[856px] xl:min-h-[1090px] lap:!min-h-[1330px] 3xl:!min-h-[1600px] ease-in duration-300' >
            <div className='sticky top-[80px] left-0 snap-start' >
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full object-cover md:h-[calc(100vh-80px)]"
                >
                    <source src="/HomeHero.mp4" type="video/mp4" />
                </video>
            </div>
            <div className='absolute top-0 left-0 bg-transparent w-full h-fit snap-start flex flex-col items-center ' >
                <p className={`
                    bg-white 
                    w-full min-h-[130px] sm:min-h-[140px] lg:min-h-[180px] 
                    pt-4 pb-8 sm:pb-10 md:pb-14 xl:py-20 lap:!pt-8
                    text-4xl sm:text-[65px] md:text-[80px] lap:!text-[100px] 3xl:!text-[128px] 
                    text-center font-black uppercase 
                    mix-blend-screen flex items-center justify-center relative
                    ${montserrat.className}`}
                >
                    PROTINGENT INDIA
                </p>
                <p className='
                    text-base sm:text-lg lg:text-2xl lap:!text-3xl 3xl:!text-3xl
                    text-primary 
                    bg-white
                    text-center
                    absolute bottom-2 md:bottom-6 lap:!bottom-6
                    font-medium'
                >
                    Empowering Businesses, Connecting the World
                </p>
            </div>
        </div >
    )
}

export default HeroSection;