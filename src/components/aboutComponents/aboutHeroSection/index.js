'use client'
import Image from "next/image";
import { aboutLeftSide, aboutRightSide } from "@/assest";
import { useMediaQuery } from "@mui/material";

// ------------------------------------------------

const AboutHeroSection = () => {
    const lg = useMediaQuery('(min-width:1024px)')

    return (
        <div id="about-hero-section" className="w-full h-auto" >
            <section className='w-full relative -top-5 lg:-top-12 z-10 ' >
                <Image src={aboutLeftSide} height={'auto'} width={'auto'} alt='' className='h-[10%] w-[10%] lg:h-[400px] lg:w-[100px] sm:w-auto sm:h-auto absolute top-[50%] lg:top-0 left-0 z-10' />
                <Image src={aboutRightSide} height={'auto'} width={'auto'} alt='' className='h-[10%] w-[10%] lg:h-[400px] lg:w-[100px] sm:w-auto sm:h-auto absolute bottom-0 sm:top-[-370px] xl:bottom-0 2xl:top-[-370px] right-0 z-10' />
                <div
                    style={{ clipPath: !lg ? 'polygon(48% 0%, 100% 40%, 100% 105%, 0 105%, 0 40%)' : 'polygon(48% 0%, 100% 100%, 100% 105%, 0 105%, 0 100%)' }}
                    className="w-full text-black h-12 before:content-[''] before:border before:border-primary-bg-color before:absolute before:top-0 before:w-full before:h-12 before:bg-primary-bg-color before:z-[10]"
                />
                <div className='[ flex justify-center ] [ p-8 lg:p-12 pt-0 ] bg-primary-bg-color border border-primary-bg-color' >
                    <div className='w-full max-w-[900px] 2xl:max-w-[1100px] text-white text-justify flex flex-col items-center' >
                        <p className='uppercase text-center mb-2 text-[28px] font-semibold' >PROTINGENT INDIA LLP</p>
                        <p className="text-lg font-normal mb-8" >Empowering Excellence in Staffing and Employee Sourcing</p>
                        <div className='flex flex-col gap-4 tracking-wider font-normal' >
                            <p>
                                Established on September 10, 2021, Protingent India LLP (PIL) is a dynamic Limited Liability Partnership headquartered in the vibrant city of Jaipur, India.
                            </p>

                            <p>
                                Protingent India LLP collaborates seamlessly with its parent company, Protingent Inc., as an integral part of its strategic mission. Our comprehensive services to Protingent Inc. encompass a wide spectrum, from pre-screening and client submissions to project management and regulatory compliance in India
                            </p>

                            <p>
                                Our commitment to excellence is deeply ingrained in our culture. The true value of any enterprise lies in the quality of its people. Our exceptional team, handpicked for their high levels of skill and technological knowledge, powers the success of our clients. We understand that cutting-edge products are born of exceptional people, consistent communication, and collaboration.
                            </p>

                            <p>
                                At Protingent India LLP, we understand that culture trumps strategy every time. We&apos;ve built a culture of engagement and collaboration that is second to none. Being an employee-owned company reinforces our dedication to a shared purpose. We work tirelessly to maintain and strengthen our culture, nurturing relationships with our team, clients, and candidates.
                            </p>

                            <p>
                                At Protingent India LLP, we are more than just a staffing and employee sourcing partner; we are your path to exceptional talent and successful collaborations. Join us on this journey towards excellence.
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    style={{ clipPath: 'polygon(48% 0%, 100% 100%, 100% 105%, 0 105%, 0 100%)' }}
                    className="w-full text-black h-12 rotate-180 [ after:content-[''] after:border after:border-primary-bg-color after:absolute after:bottom-0 after:w-full after:h-12 after:bg-primary-bg-color after:z-[10] ]"
                />
            </section>
        </div>
    )
}

export default AboutHeroSection;