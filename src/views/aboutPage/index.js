'use client'
import { AboutHeroSection, OurCommitment, OurValues, OurTeam, RHFHeroSection } from "@/components"
import { About } from '@/assest';

// ---------------------------------------

const AboutPage = () => {
    return (
        <div id="about-page" className="w-full" >
            <RHFHeroSection img={About?.src} />
            <AboutHeroSection />
            <OurCommitment />
            <OurValues />
            <OurTeam />
        </div>
    )
}

export default AboutPage
