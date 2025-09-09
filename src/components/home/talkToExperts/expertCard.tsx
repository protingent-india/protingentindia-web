"use client"
import { Inter } from "next/font/google";
import Image from "next/image";

// ----------------------------------------------------------------

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"]
});

// ----------------------------------------------------------------

const ExpertCard = ({
    title,
    desc,
    img,
    index
}: {
    title: string,
    desc: string,
    img: string
    index: number
}) => {
    return (
        <div className={`flex flex-col items-center w-full sm:w-[400px] lg:w-[300px] 3xl:min-w-fit rounded-[10px]  overflow-hidden text-primary ${inter.className}`} >
            <Image
                src={img}
                alt=""
                width={321}
                height={0}
                className="z-10"
            />
            <div className="bg-white p-4 py-8 flex flex-col justify-center items-center gap-2 min-w-fit relative" >
                <div className="bg-primary/30 py-16 absolute w-full bottom-[100%] rounded-t-[10px]" > </div>
                <p className="text-2xl lg:text-xl 3xl:!text-[28px] font-semibold text-nowrap" >
                    {title}
                </p>
                <p className="text-justify 3xl:!w-[350px]" >
                    {desc}
                </p>
            </div>
        </div>
    )
}

export default ExpertCard;