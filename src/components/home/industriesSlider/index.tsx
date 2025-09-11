"use client"
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Icon, EllipsisText } from '@/components';
import { industriesSliderData } from '@/utils/constants';

// --------------------------------------------------------------------

export default function IndustriesSlider() {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const subComponent = useRef<HTMLDivElement | null>(null);
    const [activeIndex, setActiveIndex] = useState<number>(1); // kept 1-based to match existing markup
    const [selectedIndustrie, setSelectedIndustrie] = useState<any>(industriesSliderData[0]);

    /*
      Scroll helper that centers the child in the container (if possible).
      We run this for both `scrollRef` and `subComponent` so both views stay in sync.
    */
    const scrollToIndex = (index: number, behavior: ScrollBehavior = 'smooth') => {
        const containers = [scrollRef.current, subComponent.current];
        containers.forEach((container) => {
            if (!container) return;
            const children = Array.from(container.children) as HTMLElement[];
            const child = children[index];
            if (!child) return;

            const containerWidth = container.clientWidth;
            const childWidth = child.clientWidth;

            // center the child inside the container when possible
            const left = Math.max(0, child.offsetLeft - Math.round((containerWidth - childWidth) / 2));
            container.scrollTo({ left, behavior });
        });
    };

    // retry logic - useful when images/layout haven't fully measured yet
    const attemptScroll = (index: number, tries = 0) => {
        if (tries > 6) return;
        const anyChild = scrollRef.current?.children[index] ?? subComponent.current?.children[index];
        if (!anyChild || (anyChild as HTMLElement).clientWidth === 0) {
            // wait a tick for images/layout and try again
            requestAnimationFrame(() => setTimeout(() => attemptScroll(index, tries + 1), 60));
            return;
        }
        scrollToIndex(index, 'smooth');
    };

    const handleSliding = (type: string) => {
        if (type === 'prev') {
            const newIndex = Math.max(1, activeIndex - 1);
            setActiveIndex(newIndex);
            attemptScroll(newIndex - 1);
        } else if (type === 'next') {
            const max = industriesSliderData?.length ?? 1;
            const newIndex = Math.min(max, activeIndex + 1);
            setActiveIndex(newIndex);
            attemptScroll(newIndex - 1);
        }
    };

    const selectItem = (active: number, data: any) => {
        const newIndex = active + 1; // input `active` is 0-based index from map
        setActiveIndex(newIndex);
        attemptScroll(active);
        setSelectedIndustrie(data)
    };

    // ensure the active item is visible on mount
    useEffect(() => {
        attemptScroll(activeIndex - 1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleBtn = (type: string) => {
        if (type === "prev") {
            if (subComponent.current && subComponent.current.firstElementChild?.clientWidth) {
                const childWidth = (subComponent.current.firstElementChild?.clientWidth) || 350;
                subComponent.current.scrollBy({ left: -childWidth, behavior: "smooth" });
            }
        } else if (type === "next") {
            if (subComponent.current && subComponent.current.firstElementChild?.clientWidth) {
                const childWidth = (subComponent.current.firstElementChild?.clientWidth) || 350;
                subComponent.current.scrollBy({ left: childWidth, behavior: "smooth" });
            }
        }
    }

    return (
        <div
            id="industries slider"
            className='flex flex-col xl:flex-row justify-center items-center xl:items-end w-full p-4 '
        >
            <div
                id='slider-pagination'
                className='h-full w-1/5 lap:!w-[10%] hidden xl:flex justify-end gap-2 items-end mb-10'
            >
                <div
                    className='border border-bg-parrot-green w-[63px] h-[63px] flex justify-center items-center rounded-full cursor-pointer'
                    onClick={() => handleBtn('prev')}
                >
                    <Icon
                        icon='material-symbols-light:double-arrow-rounded'
                        height={32}
                        width={32}
                        className='rotate-180'
                    />
                </div>
                <div
                    className='border border-bg-parrot-green w-[63px] h-[63px] flex justify-center items-center rounded-full cursor-pointer'
                    onClick={() => handleBtn('next')}
                >
                    <Icon
                        icon='material-symbols-light:double-arrow-rounded'
                        height={32}
                        width={32}
                    />
                </div>
            </div>
            <div className='w-full md:w-[80%] lg:w-[90%] lap:!w-full max-w-[1500px] flex flex-col items-center lap:items-start 3xl:items-center gap-10 lg:gap-8' >
                <div className='w-full flex justify-start' >
                    <p className='border-b-4 border-dotted text-3xl 3xl:text-[40px] font-semibold text-primary w-fit' >
                        Industries We Empower
                    </p>
                </div>
                <div className='flex w-full max-w-[1300px] xl:max-w-[1150px] lap:!max-w-[1200px] 3xl:!max-w-[1300px]' >
                    <div className='w-full flex flex-col gap-[40px] lg:gap-[100px]' >
                        <div className='relative w-full h-fit flex xl:!hidden lap:!justify-end 3xl:!justify-between' >
                            <button
                                onClick={() => handleSliding('prev')}
                                className="xl:!hidden absolute left-0 lg:-left-5 top-2/5 -translate-y-1/2 z-20 bg-white p-3 rounded-xl shadow-black shadow-2xl"
                            >
                                ◀
                            </button>
                            <button
                                onClick={() => handleSliding('next')}
                                className="xl:!hidden absolute right-0 lg:-right-5 top-2/5 -translate-y-1/2 z-20 bg-white p-3 rounded-xl shadow-black shadow-2xl"
                            >
                                ▶
                            </button>
                            <div
                                ref={scrollRef}
                                id='industrie-slider'
                                className='w-full flex xl:!hidden gap-8 px-8 md:gap-32 overflow-x-auto snap-x snap-mandatory scroll-smooth rm-scrollbar'
                            >
                                {industriesSliderData?.map((el: any, index: number) => (
                                    <div key={index} className='w-fit snap-center md:snap-center flex flex-col gap-12 min-w-[350px] md:min-w-[400px] lg:min-w-full' >
                                        <div className='w-full flex flex-col-reverse lg:flex-row gap-8 items-center justify-between' >
                                            <div className='text-primary w-full lg:w-2/4 flex flex-col gap-8' >
                                                <p className='text-4xl lg:text-5xl lap:!text-6xl 3xl:text-[80px] font-extrabold text-center lg:text-start' >
                                                    {el?.title || ""}
                                                </p>
                                                <p className='text-base 3xl:text-2xl text-justify' >
                                                    {el?.desc || ""}
                                                </p>
                                                <div>
                                                    <div className='px-5 py-2 text-xl  flex gap-2 items-end bg-bg-parrot-green w-fit rounded-full cursor-pointer' >
                                                        <p>
                                                            Read More
                                                        </p>
                                                        <Icon
                                                            icon='ph:arrow-right-fill'
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <Image
                                                    src={el?.image || "/img/healthCareInd.png"}
                                                    alt={el?.title || ''}
                                                    height={0}
                                                    width={576}
                                                    className='!w-full max-w-[576px] rounded-tl-[10px] rounded-br-[10px] rounded-[100px]'
                                                />
                                            </div>
                                        </div>
                                        <div
                                            onClick={() => selectItem(index, el)}
                                            className={`snap-start w-full slide-card flex md:hidden flex-col items-start gap-2 border-t-2 py-4 lap:min-w-[230px] 3xl:min-w-[280px] cursor-pointer
                                                ${activeIndex === (index + 1) ? "border-primary text-primary" : "text-secondry border-secondry "}
                                            `}
                                        >
                                            <p className='text-[30px] font-bold'>
                                                {el?.title || ""}
                                            </p>
                                            <EllipsisText
                                                text={el?.desc || ""}
                                                className='text-xl'
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='hidden xl:flex w-full gap-8 items-center justify-between' >
                            <div className='h-full w-full lg:w-2/4 pt-20' >
                                <div className='text-primary flex flex-col gap-8' >
                                    <p className='text-4xl lg:text-5xl lap:!text-6xl 3xl:text-[80px] font-extrabold' >
                                        {selectedIndustrie?.title || ""}
                                    </p>
                                    <p className='text-xl 3xl:text-2xl text-justify' >
                                        {selectedIndustrie?.desc || ""}
                                    </p>
                                    <div>
                                        <div className='px-5 py-2 text-xl  flex gap-2 items-end bg-bg-parrot-green w-fit rounded-full cursor-pointer' >
                                            <p>
                                                Read More
                                            </p>
                                            <Icon
                                                icon='ph:arrow-right-fill'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Image
                                    src={"/img/healthCareInd.png"}
                                    alt=''
                                    height={0}
                                    width={576}
                                    className='!w-full max-w-[576px] rounded-tl-[10px] rounded-br-[10px] rounded-[100px]'
                                />
                            </div>
                        </div>
                        <div className='w-full overflow-hidden px-4 3xl:px-0 hidden md:flex' >
                            <div className='w-full xl:w-[90%] lap:!w-full overflow-x-scroll no-scrollbar' >
                                <div
                                    id='slider-wrapper'
                                    ref={subComponent}
                                    className='flex gap-8 3xl:!gap-[60px] duration-1000 overflow-x-auto snap-x snap-mandatory scroll-smooth rm-scrollbar'
                                >
                                    {industriesSliderData?.map((el: any, index: number) => (
                                        <div
                                            key={index}
                                            onClick={() => selectItem(index, el)}
                                            className={`snap-start min-w-[300px] slide-card flex flex-col items-start gap-2 border-t-2 py-4 lap:min-w-[280px] 3xl:min-w-[280px] max-w-[280px] cursor-pointer
                                                ${activeIndex === (index + 1) ? "border-primary text-primary" : "text-secondry border-secondry "}
                                            `}
                                        >
                                            <p className='text-[30px] font-bold'>
                                                {el?.title || ""}
                                            </p>
                                            <EllipsisText
                                                text={el?.desc || ""}
                                                className='text-lg 3xl:text-xl'
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
