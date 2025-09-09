import {
    ContactUsComponent,
    ContractIndustriesSection,
    ContractStaffingHero,
    ContractStaffingSolutions,
    ContractualBenefitsSection,
    CTASection,
    FAQSection,
    MeasurableImpactSection,
    ProtingentAdvantageSection,
    StreamlinedApproachTimeline
} from "@/components";
import { contractStaffingFAQ } from "@/staticData";

// --------------------------------------------------------------------------------

export default function ContractStaffingService() {
    return (
        <div className="bg-white w-full flex flex-col items-center gap-0 pb-12 md:pb-20">
            <ContractStaffingHero />
            <ContractualBenefitsSection />
            <ContractStaffingSolutions />
            <StreamlinedApproachTimeline />
            <MeasurableImpactSection />
            <ProtingentAdvantageSection />
            <ContractIndustriesSection />
            <CTASection />

            <div className="py-16 md:py-24 w-full flex justify-center">
                <ContactUsComponent />
            </div>

            <div className="py-16 md:py-24 w-full flex justify-center bg-gray-50">
                <FAQSection
                    title="Frequently Asked Questions"
                    desc="Get answers to common questions about our contract staffing services and how Protingent can help you build flexible, compliant workforce solutions."
                    FAQList={contractStaffingFAQ}
                />
            </div>
        </div>
    );
}