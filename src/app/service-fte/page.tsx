import {
    BgWithListComponent,
    FTEIntroSection,
    ServiceFTEBanner,
    ServiceOffering,
    ThreeCardSlider,
    WorkForceProductivity
} from "@/components";
import { businessBenefitsData, ServicesProcessData } from "@/utils/constants";
import businessBenefits from "../../../public/img/bgListImgs/businessBenefits.png";
import businessBenefits2 from "../../../public/img/bgListImgs/businessBenefits2.png";

// --------------------------------------------------------------

export default function Home() {
    return (
        <div className="bg-white w-full flex flex-col items-center gap-20 pb-20">
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
        </div>
    );
}
