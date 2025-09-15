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
        <div className="w-[424px] h-[424px] border-[10px] rounded-[10px] border-bg-parrot-green relative flex justify-center items-center cursor-pointer" >
            <div className={`w-[254px] h-[600px] bg-white absolute duration-1000 ${className} ${!visibleCards && "rotate-90"}`} >
            </div>
            <div className="z-10 flex items-start justify-center h-full w-full pt-10" >
                <div className=" flex justify-center items-center flex-col gap-12 px-8" >
                    <div className={`h-[100px] w-[100px] flex justify-center items-center rounded-[10px] rotate-45 ${active ? "bg-primary " : "bg-secondry"}`} >
                        <Icon
                            icon="fluent:arrow-join-20-filled"
                            height={70}
                            width={70}
                            className={`rotate-[-45deg] text-white`}
                        />
                    </div>
                    <p className="text-2xl font-semibold text-primary" >{title}</p>
                    <p className="text-[22px] text-primary text-justify" >{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default SliderCard;