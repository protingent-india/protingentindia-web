import { BrandBenefitsSection, ContactUsComponent, FAQSection, IndustriesSection, InteractiveTimeline, ModernServiceSlider, PowerfulPartnerSection, PremiumInteractiveSlider, RPOEngagementModelsSection, RPOServiceBanner } from "@/components";
import { rpoIndustriesData, serviceRPOFAQ } from "@/staticData";

// --------------------------------------------------------------------

export default function RPOService() {
    return (
        <div className="bg-white w-full flex flex-col items-center gap-0 pb-12 md:pb-20">
            <RPOServiceBanner />
            <div className="py-16 md:py-24">
                <BrandBenefitsSection />
            </div>

            <ModernServiceSlider />
            <InteractiveTimeline />

            <PremiumInteractiveSlider />

            {/* RPO Engagement Models Section - NEW SECTION */}
            <RPOEngagementModelsSection />

            <div className="py-16 md:py-24 w-full flex justify-center bg-gray-50">
                <div className="w-full max-w-[1450px]">
                    <IndustriesSection
                        title="Industries Where We Serve"
                        desc="We provide tailored RPO solutions across diverse industries, helping businesses hire top talent faster, reduce costs, and scale efficiently. Our expertise adapts to your hiring needs, whether you're in tech, healthcare, manufacturing, or beyond."
                        cardData={rpoIndustriesData}
                    />
                </div>
            </div>

            {/* Updated Trusted Partner Section */}
            <PowerfulPartnerSection />

            <div className="py-16 md:py-24 w-full flex justify-center bg-gray-50">
                <ContactUsComponent />
            </div>

            <div className="py-16 md:py-24 w-full flex justify-center">
                <FAQSection
                    title="Frequently Asked Questions"
                    desc="Get answers to common questions about our RPO services and how Protingent can help accelerate your hiring process while maintaining quality and reducing costs."
                    FAQList={serviceRPOFAQ}
                />
            </div>
        </div>
    );
}