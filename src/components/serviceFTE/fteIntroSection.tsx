import { Divider } from "@/components";
import Image from "next/image";
import fteIntroSectionImg from "../../../public/img/serviceFTE/fteIntroSection.png"

// --------------------------------------------------------------

const FTEIntroSection = () => {
    return (
        <div className="w-full flex justify-center" >
            <div className="w-full max-w-[1253px] flex flex-col items-center gap-20" >
                <div className="flex flex-col items-center gap-8 px-20" >
                    <p className="text-5xl leading-[60px] text-primary font-extrabold text-center" >
                        Full-Time Equivalent (FTE) Services to <br /> Scale Without Excess Hiring
                    </p>
                    <Divider />
                    <p
                        className="
                            text-[22px]
                            leading-[25px]  
                            text-primary
                            font-normal
                            text-center
                    ">
                        Full-Time Equivalent (FTE) Services are designed to help businesses build dedicated teams, reduce overheads, and stay focused on business growth. It enables organizations to gain a consistent, cost-effective, and project-aligned talent pool to meet deadlines.
                    </p>
                </div>
                <div className="w-full flex justify-center" >
                    <div
                        className="w-full max-w-[560px] min-h-[584px] overflow-hidden bg-center bg-no-repeat"
                        style={{
                            clipPath: "polygon(0% 2%, 75% 0%, 100% 35%, 77% 98%, 36% 100%, 0% 75%)",
                            backgroundImage: `url(${fteIntroSectionImg?.src})`
                        }}
                    >
                    </div>
                    <div className="w-3/4 pl-8 flex flex-col justify-center gap-8 text-primary" >
                        <p
                            className="text-4xl  font-extrabold"
                        >
                            Dedicated Full-Time Equivalent (FTE) Experts for Growth
                        </p>
                        <p className="text-justify text-xl" >
                            Full-Time Equivalent (FTE) Services provide businesses structural and skilled talent pool exclusively for your projects without the need to hire in-house.
                        </p>
                        <p className="text-justify text-xl" >
                            FTE is a flexible workforce model that enables organizations to scale operations, manage hiring costs effectively, and maintain complete control over deliverables. Protingent’s FTE Services has pre-vetted tech-engineers aligned with your project goals, timelines, and workflows. It’s ideal for long-term initiatives, compliance-heavy operations, or companies aiming to expand without inflating internal headcount. Maximize productivity while minimizing hiring risks with consistent accountability and measurable ROI.
                        </p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default FTEIntroSection;