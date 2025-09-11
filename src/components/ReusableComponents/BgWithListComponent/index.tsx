"use client"
import Image from "next/image";
import { ListComponent } from "@/components";
import { useBreakpoint } from "@/hook";

// ---------------------------------------------------------------

const BgWithListComponent = ({
    bg,
    bgList,
    title,
    desc,
    listData
}: {
    bg: any,
    bgList: string,
    title: string,
    desc: string,
    listData: Record<string, any>[]
}) => {
    const { lg } = useBreakpoint();

    return (
        <div
            style={{ backgroundImage: `url(${bgList})` }}
            className="w-full flex flex-col md:flex-row 3xl:!gap-16 justify-center items-center bg-no-repeat bg-center bg-cover"
        >
            <div
                className="w-full lg:min-h-[490px] 3xl:!min-h-[814px] sm:w-2/4 lg:w-3/4 lap:!w-2/4 overflow-hidden relative flex justify-center items-center !bg-center !bg-no-repeat !bg-cover"
                style={{
                    clipPath: lg ? "polygon(80% 0%, 0% 0%, 0% 100%, 80% 100%, 100% 50%)" : "",
                    background: `url(${bg})`
                }}
            >
                <div
                    className="py-8 px-4 text-white h-full w-full lg:min-h-[490px] 3xl:!min-h-[814px] flex justify-center items-center bg-primary/50"
                >
                    <div className="w-full lg:!w-[75%] 3xl:!w-[65%] flex flex-col items-center justify-center gap-8" >
                        <p className=" text-xl lg:text-2xl lap:!text-3xl 3xl:!text-5xl font-extrabold text-center 3xl:!leading-14" >
                            {title}
                        </p>
                        <p className="text-base lg:text-xl lap:!text-2xl 3xl:!text-2xl text-justify" >
                            {desc}
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full sm:w-2/4 flex justify-center p-4 lap:!py-12" >
                <div className="w-[80%] flex flex-col gap-4 items-center justify-between overflow-y-auto">
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