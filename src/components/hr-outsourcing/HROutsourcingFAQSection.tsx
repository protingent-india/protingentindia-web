"use client"
import { HRfaqs } from "@/staticData";
import EnhancedFAQSection from "../EnhancedFAQSection";

// --------------------------------------------------------------

// 7. FAQ Section (Using Enhanced FAQ Component)
// --------------------------------------------------------------
const HROutsourcingFAQSection = () => {
    return (
        <EnhancedFAQSection
            title="Frequently Asked Questions"
            description="Get answers to common questions about our HR outsourcing services and how Protingent can help transform your human resources operations while ensuring compliance and reducing costs."
            FAQList={HRfaqs}
        />
    );
};

export default HROutsourcingFAQSection;