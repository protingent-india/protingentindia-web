import { Icon } from "@/components";

// --------------------------------------------------------------

const SliderCard = ({
    className,
    active,
    title,
    desc,
    visibleCards
}: {
    className?: string,
    active?: boolean,
    title: string,
    desc: string,
    visibleCards: boolean
}) => {
    return (
        <div className="w-fit h-fit overflow-hidden" >
            <div className="w-full sm:w-[430px] sm:h-[430px] lg:w-[400px] lg:h-[400px] lap:!w-[350px] lap:!h-[350px] 3xl:!w-[424px] 3xl:!h-[424px] border-[10px] rounded-[10px] border-bg-parrot-green relative flex justify-center items-center cursor-pointer" >
                <div className={`w-[254px] h-[600px] lap:!h-[650px] bg-white absolute duration-1000 ${className} ${!visibleCards && "rotate-90"}`} >
                </div>
                <div className="z-10 flex items-start justify-center h-full w-full pt-10" >
                    <div className=" flex justify-center items-center flex-col gap-8 sm:gap-12 px-8" >
                        <div className={`!h-[70px] !w-[70px] sm:h-[100px] sm:w-[100px] flex justify-center items-center rounded-[10px] rotate-45 ${active ? "bg-primary " : "bg-secondry"}`} >
                            <Icon
                                icon="fluent:arrow-join-20-filled"
                                height={0}
                                width={70}
                                iconClass={`!h-[40px] !w-[40px] rotate-[-45deg] text-white`}
                            />
                        </div>
                        <p className="text-lg sm:text-xl 3xl:!text-2xl font-semibold text-primary" >{title}</p>
                        <p className="text-base sm:text-lg 3xl:!text-[22px] text-primary text-justify" >{desc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SliderCard;