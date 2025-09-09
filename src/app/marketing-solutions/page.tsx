// --------------------------------------------------------------
// Main Marketing Solutions Page Component

import {
    ChallengeSection,
    CTASection,
    MarketingIndustriesSection,
    MarketingHeroSection,
    ResultsSection,
    SolutionsSection,
    TeamSection,
    ContactUsComponent,
    MarketingFAQSection
} from "@/components";

// --------------------------------------------------------------
export default function MarketingSolutionsService() {
    return (
        <div className="bg-white w-full flex flex-col items-center gap-0 pb-12 md:pb-20">
            <MarketingHeroSection />
            <ChallengeSection />
            <SolutionsSection />
            <ResultsSection />
            <TeamSection />
            <MarketingIndustriesSection />
            <CTASection />

            <div className="py-16 md:py-24 w-full flex justify-center">
                <ContactUsComponent />
            </div>

            <MarketingFAQSection />
        </div>
    );
}