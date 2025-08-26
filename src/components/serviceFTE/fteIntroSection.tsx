import { Divider } from "@/components";
import Image from "next/image";
import fteIntroSectionImg from "../../../public/img/serviceFTE/fteIntroSection.png"

// --------------------------------------------------------------

const FTEIntroSection = () => {
    return (
        <div className="w-full flex justify-center py-20" >
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
                <div className="w-full" >
                    <div
                        className="w-full max-w-[560px] min-h-[584px] overflow-hidden bg-center bg-no-repeat"
                        style={{
                            clipPath: "polygon(0% 2%, 75% 0%, 100% 35%, 77% 98%, 36% 100%, 0% 75%)",
                            backgroundImage: `url(${fteIntroSectionImg?.src})`
                        }}
                    >
                    </div>
                </div>
            </div>
        </div >
    )
}

export default FTEIntroSection;