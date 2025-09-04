'use client'
import Image from "next/image";

// ----------------------------------------------

const OurValueCard = ({ img, title, desc }) => {
    return (
        <div id="our-value-card" className="[ w-full sm:w-[360px] min-h-[190px] ] [ flex flex-col gap-2 items-center ] [ p-4 pt-16 ] border border-primary-green-color rounded-md relative" >
            <div className="w-full flex justify-center items-center absolute -top-12" >
                <Image src={img} alt="" height={'auto'} width={'auto'} />
            </div>
            <p className="text-lg text-primary-blue-color uppercase font-bold tracking-wide" >{title}</p>
            <p className="text-justify font-normal" >{desc}</p>
        </div>
    )
}

export default OurValueCard;