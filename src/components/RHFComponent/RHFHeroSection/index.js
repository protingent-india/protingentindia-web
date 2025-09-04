'use client'
import Image from "next/image";
import { carousel4 } from "@/assest";

// -----------------------------------------------------------------

const RHFHeroSection = ({ img }) => {
    return (
        <>
            <div className='w-full h-auto' >
                <Image src={img || carousel4?.src} alt="" height={400} width={1900} className="!w-full !h-auto" />
            </div>
        </>
    )
}

export default RHFHeroSection;
