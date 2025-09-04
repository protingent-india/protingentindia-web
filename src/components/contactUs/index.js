'use client'

import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "@mui/material";
import { aboutLeftSide, aboutRightSide, leftSideCircle } from "@/assest";

// ---------------------------------------------------------

const ContactUs = () => {
    const OUTLOOK_URL = process.env.NEXT_PUBLIC_OUTLOOK_URL;
    const GOOGLE_MAP_URL = process.env.NEXT_PUBLIC_GOOGLE_MAP_URL;
    const lg = useMediaQuery('(min-width:1024px)')

    return (
        <div className="w-full flex flex-col items-center relative -top-8 lg:-top-14" >
            <div className="w-full relative flex flex-col items-center" >
                <Image alt="" src={aboutLeftSide} height={'auto'} width={'auto'} className="absolute top-20 sm:top-10 left-0 z-10 h-[30%] lg:h-auto w-[15%]" />
                <Image alt="" src={aboutRightSide} height={'auto'} width={'auto'} className="absolute -bottom-[10%] right-0 z-10 h-[30%] lg:h-auto w-[15%]" />
                <div style={{ clipPath: !lg ? 'polygon(50% 0%, 100% 25%, 100% 100%, 0px 100%, 0px 30%)' : 'polygon(50% 0%, 100% 60%, 100% 100%, 0 100%, 0 60%)' }} className='relative top-1 w-full h-[5rem] bg-primary-bg-color' />
                <div className="w-full flex flex-col items-center bg-primary-bg-color p-4 text-white" >
                    <p className="text-[28px] font-semibold tracking-wide text-center" >ABOUT PROTINGENT INDIA LLP</p>
                    <p className="font-normal text-lg tracking-wide text-center" >Our people and culture drive exceptional results </p>
                    <div className="w-full flex flex-col lg:flex-row justify-center gap-6 items-center py-4 sm:p-12 !pb-0" >
                        <div className="w-full max-w-[530px] [ flex flex-col items-center gap-2 ] [ px-6 py-12 ] [&>p]:font-bold [&>p]:text-lg [&>p>span]:font-normal [&>p>span]:text-lg text-primary-blue-color bg-primary-green-color rounded-xl" >
                            <p className="flex flex-col sm:flex-row gap-2 text-center" >Call Us at: <span> <Link href={'tel:+917073342233'} >+91 7073342233</Link></span></p>
                            <p className="flex flex-col sm:flex-row gap-2 text-center" >Mail Us at: <span> <Link href={'mailto:harry.saxena@protingent.com'} >harry.saxena@protingent.com</Link></span></p>
                        </div>
                        <Link href={OUTLOOK_URL} className="w-full max-w-[530px]" >
                            <div className="w-full [ flex flex-col items-center gap-2 ] [ px-6 py-6 ] text-primary-blue-color bg-primary-green-color rounded-xl" >
                                <p className="flex gap-2 underline font-normal" >You can book appointment online!</p>
                                <p className="flex gap-2 uppercase underline text-[28px] font-bold text-center" >HARSHIT SAXENA <br /> (harry)</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div
                    style={{ clipPath: 'polygon(50% 0%, 100% 70%, 100% 100%, 0 100%, 0 70%)' }}
                    className='relative rotate-180 -bottom-0 w-full h-[5rem] bg-primary-bg-color'
                />
            </div>
            <div className=' w-full flex flex-col sm:flex-row gap-4 items-center justify-center rounded-lg overflow-hidden relative' >
                <Image alt="" src={leftSideCircle} height={'auto'} width={'auto'} className="absolute w-[20%] bottom-[10%] left-0 z-10" />
                <iframe title='moustachescapes' className='sm:h-[500px] w-[90%] max-w-[900px] pt-16' loading="lazy" src={GOOGLE_MAP_URL || ''} />
                <div className="sm:absolute top-[25%] right-40 w-[90%] sm:max-w-[490px] bg-primary-green-color rounded-lg p-8 sm:p-16" >
                    <p className="text-justify text-lg font-bold text-primary-blue-color" >613, 6TH FLOOR, JAIPUR CENTRE, TONK RD, CHOTI CHOPAD, CHANDRAKALA COLONY, DURGAPURA, JAIPUR, RAJASTHAN 302018</p>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;