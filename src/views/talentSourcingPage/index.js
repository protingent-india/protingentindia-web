'use client'
import { RHFHeroSection, TalentSource } from "@/components"
import { carousel4 } from "@/assest"

// ---------------------------------------

const TalentSourcePage = () => {
    return (
        <div id="what-we-do" className="w-full" >
            <RHFHeroSection img={carousel4?.src} />
            <TalentSource />
        </div>
    )
}

export default TalentSourcePage
