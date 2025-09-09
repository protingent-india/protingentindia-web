import { BusinessEfficiencySection, ContactUsComponent, FinalCTASection, HRFinalCTASection, HROutsourcingFAQSection, HROutsourcingHeroSection, HRSolutionsSection, ProcessApproachSection, StrategicAdvantageSection, WhyChooseProtingentSection } from "@/components";

// --------------------------------------------------------------

// Main HR Outsourcing Page Component
// --------------------------------------------------------------
export default function HROutsourcingService() {
    return (
        <div className="bg-white w-full flex flex-col items-center gap-0 pb-12 md:pb-20">
            <HROutsourcingHeroSection />
            <StrategicAdvantageSection />
            <HRSolutionsSection />
            <ProcessApproachSection />
            <BusinessEfficiencySection />
            <WhyChooseProtingentSection />
            <HRFinalCTASection />

            <div className="py-16 md:py-24 w-full flex justify-center">
                <ContactUsComponent />
            </div>

            <HROutsourcingFAQSection />
        </div>
    );
}