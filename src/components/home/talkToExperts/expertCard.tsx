"use client"
import { Inter } from "next/font/google";
import Image from "next/image";

// ----------------------------------------------------------------

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"], // choose the weights you need
});

// ----------------------------------------------------------------

const ExpertCard = ({
    title,
    desc,
    img
}: {
    title: string,
    desc: string,
    img: string
}) => {
    return (
        <div className={`flex flex-col items-center min-w-[350px] rounded-[10px] relative overflow-hidden text-primary ${inter.className}`} >
            <div className="bg-primary/30 px-4 py-16 absolute w-full bottom-[31%] rounded-t-[10px]" > </div>
            <Image
                src={img}
                alt=""
                width={321}
                height={0}
                className="z-10"
            />
            <div className="bg-white p-7 flex flex-col justify-center items-center gap-2 w-fit" >
                <p className="text-[28px] font-semibold text-nowrap" >
                    {title}
                </p>
                <p className="text-justify" >
                    {desc}
                </p>
            </div>
        </div>
    )
}

export default ExpertCard;