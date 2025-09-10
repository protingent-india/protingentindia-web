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
        <div id="hero section" className='relative h-[340px] sm:min-h-[660px] lg:min-h-[856px] xl:min-h-[1090px] lap:!min-h-[1330px] 3xl:!min-h-[1600px] ease-in duration-300 snap-y snap-mandatory' >
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
            <div className='absolute top-0 left-0 bg-transparent w-full h-fit snap-start flex flex-col items-center gap-' >
                <p className={`
                    bg-white 
                    w-full min-h-[130px] lg:min-h-[180px]  lap:!min-h-[316px] 
                    py-4 xl:py-20 
                    text-4xl sm:text-[55px] lg:text-[80px] xl:text-[100px] lap:!text-[120px] 3xl:!text-[128px] 
                    text-center font-black uppercase 
                    mix-blend-screen 
                    ${montserrat.className}`}
                >
                    PROTINGENT INDIA
                </p>
                <p className='
                    text-base lg:text-2xl xl:text-4xl lap:!text-[40px]
                    text-primary 
                    bg-white
                    absolute bottom-1 sm:bottom-8 sm:left-8 md:left-24 lg:bottom-12 xl:left-28 lap:!left-24 3xl:!left-72 
                    font-medium'
                >
                    Empowering Businesses, Connecting the World
                </p>
            </div>
        </div >
    )
}

export default HeroSection;