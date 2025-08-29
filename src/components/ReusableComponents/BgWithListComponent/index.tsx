"use client"
import Image from "next/image";
import { ListComponent } from "@/components";

// ---------------------------------------------------------------

const BgWithListComponent = ({
    bg,
    bgList,
    title,
    desc,
    listData
}: {
    bg: string,
    bgList: string,
    title: string,
    desc: string,
    listData: Record<string, any>[]
}) => {
    return (
        <div
            style={{ backgroundImage: `url(${bgList})` }}
            className="w-full flex justify-center items-center bg-no-repeat bg-center bg-cover"
        >
            <div
                className="w-2/4 bg-contain bg-no-repeat overflow-hidden relative flex justify-center items-center"
                style={{
                    clipPath: "polygon(80% 0%, 0% 0%, 0% 100%, 80% 100%, 100% 50%)"
                }}
            >
                <Image
                    src={bg}
                    height={0}
                    width={2086}
                    alt=""
                    className="!w-full"
                />
                <div
                    className="absolute text-white h-full w-full flex justify-center items-center bg-primary/50"
                >
                    <div className="w-[65%] flex flex-col items-center justify-center gap-8" >
                        <p className="text-5xl font-extrabold text-center leading-14" >
                            {title}
                        </p>
                        <p className="text-2xl text-justify" >
                            {desc}
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-2/4 flex justify-center" >
                <div className="w-[80%] flex flex-col gap-10 items-center justify-between">
                    {listData?.map((el, index) => (
                        <ListComponent
                            key={index}
                            title={el?.title}
                            desc={el?.desc}
                            firstIndex={index === 0}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BgWithListComponent;