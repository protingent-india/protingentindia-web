"use client"
import { Divider } from '@/components';
import fteIntroSectionImg from "../../../public/img/serviceFTE/fteIntroSection.png"

// -----------------------------------------------------------

const HomeIntro = () => {
    return (
        <div id="intro section" className="w-full flex justify-center" >
            <div className="w-full max-w-[1253px] flex flex-col items-center gap-20" >
                <div className={`text-primary flex flex-col items-center gap-4 w-full`} >
                    <span className='!text-secondry text-5xl font-extrabold' > PROTINGENT INDIA</span>
                    <p className='text-5xl font-extrabold text-primary text-center' >
                        STAFFING EXCELLENCE, GLOBALLY UNITED
                    </p>
                    <Divider />
                </div>
                <div className="w-full flex justify-center" >
                    <div
                        className="w-full max-w-[560px] min-h-[584px] overflow-hidden bg-center bg-no-repeat"
                        style={{
                            clipPath: "polygon(0% 2%, 75% 0%, 100% 35%, 77% 98%, 36% 100%, 0% 75%)",
                            backgroundImage: `url(${fteIntroSectionImg?.src})`
                        }}
                    >
                    </div>
                    <div className="w-3/4 pl-8 flex flex-col justify-center gap-8 text-primary" >
                        <p className="text-justify text-xl" >
                            Protingent India excels in delivering exceptional staffing and value-added services, such as pre-screening, client submissions, client interviews, contract placement, and more. With a dedicated team of professionals, Protingent India ensures that clients receive top-quality candidates who possess the necessary skills and qualifications.
                            <br />
                            <br />
                            Through a thorough pre-screening process, Protingent India guarantees that only the most qualified individuals are presented to clients for consideration. The company's expertise extends beyond the initial candidate selection, as they also assist with client submissions and conduct client interviews to ensure the perfect match is made.
                            <br />
                            <br />
                            In addition, Protingent India handles all aspects of contract placement to streamline the process for clients. With a commitment to excellence, Protingent India goes above and beyond to provide outstanding staffing solutions and exceptional service.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeIntro;