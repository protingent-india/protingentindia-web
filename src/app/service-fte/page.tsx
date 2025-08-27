import {
    FTEIntroSection,
    ServiceFTEBanner,
    ServiceOffering,
    WorkForceProductivity
} from "@/components";

// --------------------------------------------------------------

export default function Home() {
    return (
        <div className="bg-white w-full flex flex-col items-center gap-20">
            <ServiceFTEBanner />
            <FTEIntroSection />
            <WorkForceProductivity />
            <ServiceOffering />
        </div>
    );
}
