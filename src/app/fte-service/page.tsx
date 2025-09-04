import {
    BgWithListComponent,
    ContactUsComponent,
    FAQSection,
    FTEIntroSection,
    IndustriesSection,
    ServiceFTEBanner,
    ServiceOffering,
    ServicePartners,
    ThreeCardSlider,
    WorkForceProductivity
} from "@/components";
import {
    businessBenefitsData,
    serviceFTEIndustryData,
    serviceFTEPartnersData,
    ServicesProcessData
} from "@/utils/constants";
import businessBenefits from "../../../public/img/bgListImgs/businessBenefits.png";
import businessBenefits2 from "../../../public/img/bgListImgs/businessBenefits2.png";
import { serviceFTEFAQ } from '@/utils/constants';

// --------------------------------------------------------------

export default function Home() {
    return (
        <div className="bg-white w-full flex flex-col items-center gap-32 pb-20">
            <ServiceFTEBanner />
            <FTEIntroSection />
            <WorkForceProductivity />
            <ServiceOffering />
            <ThreeCardSlider
                title="Precision & Performance Oriented FTE Services Process"
                desc="Our Full-Time Equivalent (FTE) delivery process is streamlined to ensure speed, flexibility, and consistent value for your business operations from planning to project execution."
                cardData={ServicesProcessData}
            />
            <BgWithListComponent
                title="Strategic Business Benefits of Choosing FTE Services"
                desc="Organization with a flexible, scalable, and cost-effective talent model designed to elevate your operational efficiency, reduce overheads, and speed up delivery cycles."
                bg={businessBenefits?.src}
                bgList={businessBenefits2?.src}
                listData={businessBenefitsData}
            />
            <IndustriesSection
                title="Serving Diverse Industries with Tailored FTE Expertise"
                desc=" Our Full-Time Equivalent (FTE) services are designed to seamlessly integrate with businesses across industries empowering them with domain-specific skills, faster turnaround, and scalable operations."
                cardData={serviceFTEIndustryData}
            />
            <ServicePartners
                title="Protingent is the Preferred Partner for FTE Services"
                desc="Finding the right FTE provider can be the difference between stagnation and scalable success. Protingent go beyond basic staffing, bring you dedicated professionals, agile processes, and industry-leading value tailored to your business goals."
                cardList={serviceFTEPartnersData}
            />
            <ContactUsComponent />
            <FAQSection
                title="Frequently Asked Questions"
                desc="Protingent India brings a proven combination of healthcare knowledge, technology capabilities, and agile delivery models that ensure your organization can meet today's challenges while preparing for tomorrow."
                FAQList={serviceFTEFAQ}
            />
        </div>
    );
}
