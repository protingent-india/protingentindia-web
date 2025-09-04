"use client"

import Image from "next/image";

// ---------------------------------------------------------

const ServicePartnersCard = ({
    img,
    title,
    desc
}: {
    img?: string,
    title?: string,
    desc?: string
}) => {
    return (
        <div
            className="text-white bg-cover !bg-no-repeat bg-center min-h-[420px] w-[420px] rounded-[10px] px-9 flex flex-col items-center gap-6 pt-24 relative"
            style={{ background: `url(/img/servicePartnerBG.png)` }}
        >
            <p className="text-[28px] font-extrabold text-center " >
                {title || "Domain-Ready Talent Pool"}
            </p>
            <p className="text-xl font-light text-center" >
                {desc || "Access pre-vetted experts with specialized skills across industries."}
            </p>
            <div className="absolute bottom-[-25%] rounded-full border-[3px] border-secondry overflow-hidden h-[210px] w-[210px] flex justify-center items-center" >
                <Image
                    src={img || "/img/servicePartner1.jpg"}
                    height={0}
                    width={210}
                    alt=""
                    className="!h-auto !w-auto object-cover"
                />
            </div>
        </div>
    )
}

export default ServicePartnersCard;