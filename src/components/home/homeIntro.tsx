"use client"
import { Divider } from '@/components';
import fteIntroSectionImg from "../../../public/img/serviceFTE/fteIntroSection.png"

// -----------------------------------------------------------

const HomeIntro = () => {
    return (
        <div id="intro section" className="w-full flex justify-center p-4 lg:pt-24" >
            <div className="w-full lg:w-[80%] max-w-[1253px] flex flex-col items-center gap-14 lg:gap-20" >
                <div className={`text-primary flex flex-col items-center gap-2 lg:gap-4 w-full text-[30px] xl:text-4xl 3xl:!text-5xl`} >
                    <span className='!text-secondry font-extrabold' > PROTINGENT INDIA</span>
                    <p className='font-extrabold text-primary text-center' >
                        Delivering 360° Solutions for Modern Businesses
                    </p>
                    <Divider />
                </div>
                <div className="w-full flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 lg:gap-2 xl:gap-8" >
                    <div
                        className="w-full max-w-[560px] min-h-[300px] sm:min-h-[450px] lg:min-h-[400px] xl:max-w-[450px] xl:min-h-[450px] overflow-hidden !bg-center !bg-no-repeat !bg-cover"
                        style={{
                            clipPath: "polygon(0% 2%, 75% 0%, 100% 35%, 77% 98%, 36% 100%, 0% 75%)",
                            backgroundImage: `url(${fteIntroSectionImg?.src})`
                        }}
                    >
                    </div>
                    <div className="w-full lg:w-3/4 lg:pl-8 flex flex-col justify-center gap-8 text-primary" >
                        <p className="text-justify text-base md:text-lg lg: xl:text-xl" >
                            Our AI-Led IT Solutions enable enterprises to eliminate inefficiencies, enhance decision-making, and scale with agility. By combining expertise in talent, technology, and digital solutions, we transform challenges into opportunities and help businesses achieve lasting impact.
                        </p>
                        <p className="text-justify text-base md:text-lg lg: xl:text-xl" >
                            We Are Your #1 partner for growth, resilience, and transformation.
                        </p>
                        <ul className='list-disc list-inside pl-8' >
                            <li className="text-justify text-base md:text-lg lg: xl:text-xl" >
                                50% Higher Productivity
                            </li>
                            <li className="text-justify text-base md:text-lg lg: xl:text-xl" >
                                24/7 Business Continuity
                            </li>
                            <li className="text-justify text-base md:text-lg lg: xl:text-xl" >
                                30+ Global Markets
                            </li>
                            <li className="text-justify text-base md:text-lg lg: xl:text-xl" >
                                100+ Trusted Brands
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeIntro;