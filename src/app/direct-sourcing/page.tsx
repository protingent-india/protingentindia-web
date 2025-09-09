// --------------------------------------------------------------
// Main Direct Sourcing Page Component

import { BenefitsSection, ChallengeSection, ContactUsComponent, CTABannerSection, DirectSourcingFAQSection, DirectSourcingHeroSection, DirectSourcingIndustriesSection, FinalCTASection, HowItWorksSection, IndustriesSection, ProcessSection, WhyChooseSection } from "@/components";

// --------------------------------------------------------------
export default function DirectSourcingService() {
    return (
        <div className="bg-white w-full flex flex-col items-center gap-0 pb-12 md:pb-20">
            <DirectSourcingHeroSection />
            <ChallengeSection />
            <CTABannerSection />
            <ProcessSection />
            <HowItWorksSection />
            <BenefitsSection />
            <DirectSourcingIndustriesSection />
            <WhyChooseSection />
            <FinalCTASection />

            <div className="py-16 md:py-24 w-full flex justify-center">
                <ContactUsComponent />
            </div>

            <DirectSourcingFAQSection />
        </div>
    );
}