"use client"
import { marketingFAQs } from "@/staticData";
import EnhancedFAQSection from "../EnhancedFAQSection";

// --------------------------------------------------------------

// FAQ Section with Enhanced Design
const MarketingFAQSection = () => {
    return (
        <EnhancedFAQSection
            title="Frequently Asked Questions"
            description="Get answers to common questions about our marketing solutions and how Protingent India can help you achieve sustainable business growth through data-driven marketing strategies."
            FAQList={marketingFAQs}
        />
    );
};

export default MarketingFAQSection;