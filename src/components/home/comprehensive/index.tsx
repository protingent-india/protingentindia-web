"use client"

import Image from "next/image";
import { useState } from "react";
import { Icon } from "@/components";
import { comprehensiveData } from "@/utils/constants";

// -----------------------------------------------------------------------

const ComprehensiveSection = () => {
    const [open, setOpen] = useState(1);

    return (
        <div
            id='comprehensive'
            className="w-full flex flex-col items-center"
        >
            <div
                style={{ background: "url(/img/comprehensiveBg.png)" }}
                className='!bg-no-repeat !bg-cover !bg-center flex flex-col justify-center items-center w-full p-12 gap-4'
            >
                <p className='text-[40px] font-bold text-white' >
                    COMPREHENSIVE SOLUTIONS AND EXPERTISE
                </p>
                <p className='text-[26px] font-bold text-bg-parrot-green' >
                    Delivering End-to-End Solutions for Your Business Success
                </p>
                <p className='text-xl text-justify w-full max-w-[1090px] text-white' >
                    Our expertise extends to leading project teams, ensuring reliability, monitoring progress, tracking KPIs, and managing budgets. Additionally, our commitment to personnel management encompasses staff recruitment, performance assessment, training, and mentoring. We take pride in managing regulatory compliance in India for our parent company and offer vital back-office support services.
                </p>
            </div>
            <div className="w-full bg-white flex items-center justify-start max-w-full overflow-hidden" >
                <div className="flex justify-start items-center w-fit gap-2" >
                    {comprehensiveData?.map((el: any, index: number): any => (
                        open === index ?
                            <div
                                className={`w-[896px] h-[720px] flex`}
                                key={index}
                            >
                                <div className={`w-[896px] overflow-hidden flex items-end`} >
                                    <div className="min-w-2/4 h-full relative flex items-center justify-center" >
                                        <Image
                                            src={"/img/ITConsultingBg.png"}
                                            alt=""
                                            height={402}
                                            width={402}
                                            className="absolute w-full"
                                        />
                                        <video
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className={`${open === index ? "h-[400px]" : "h-0"} w-[400px] object-cover  pr-2`}
                                        >
                                            <source src="/ITConsultingBg.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                    <div className="h-full flex justify-center items-center" >
                                        <div className="text-primary p-4 h-[60%] flex flex-col justify-between" >
                                            <div className="flex flex-col justify-between gap-4" >
                                                <p className="text-[40px] font-bold" >
                                                    {el?.title}
                                                </p>
                                                <p className="text-2xl font-semibold" >
                                                    Development & Digital Transformation
                                                </p>
                                                <p className="text-xl" >
                                                    Accelerate your business with expert IT consulting, agile development, and transformative digital solutions tailored for scale and innovation.
                                                </p>
                                            </div>
                                            <div className="flex justify-end pr-16 " >
                                                <div className='w-[258px] bg-bg-parrot-green flex justify-between items-center gap rounded-full pl-6 cursor-pointer' >
                                                    <p className='text-2xl' >
                                                        Explore Solution
                                                    </p>
                                                    <div className='rounded-full bg-secondry w-[50px] h-[50px] flex justify-center items-center' >
                                                        <Icon
                                                            icon='humbleicons:arrow-right'
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div> :
                            <div
                                className="w-[136px] h-[720px] cursor-pointer flex items-end justify-center bg-no-repeat bg-cover pb-8 relative"
                                key={index}
                                onClick={() => setOpen(index)}
                                style={{ background: `url(${el?.img || ''})` }}
                            >
                                <p className="text-4xl text-white [writing-mode:vertical-rl] rotate-180 text-center z-10">
                                    {el?.title}
                                </p>
                                <div className="w-full h-full absolute top-0 left-0 bg-primary/40" ></div>
                            </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ComprehensiveSection;