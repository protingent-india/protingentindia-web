'use client'
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import { contentFirstImg, contentSecImg, leftSideCircle, rightSideCircle } from '@/assest';

// --------------------------------------------------------------------

const HomeContent = () => {
    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            }, { threshold: 0.1 }
        );

        if (elementRef?.current) {
            observer?.observe(elementRef?.current);
        }

        return () => {
            if (elementRef?.current) {
                // eslint-disable-next-line
                observer?.unobserve(elementRef?.current);
            }
        };
        // eslint-disable-next-line
    }, [elementRef]);

    return (
        <div id='home-content' className='w-full p-4 lg:p-8 flex flex-col justify-center items-center gap-16 pb-16 relative' >
            <Image src={leftSideCircle} height={'auto'} width={'auto'} className='absolute top-[25%] left-0 max-w-[30%] ' alt='' />
            <Image src={rightSideCircle} height={'auto'} width={'auto'} className='absolute -top-10 md:top-[-21rem] right-0 max-w-[30%] ' alt='' />
            <div className='w-full max-w-[1350px] flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-0' >
                <div className='w-full lg:min-w-[40%] flex justify-center' >
                    <Image ref={elementRef} src={contentFirstImg} height={450} width={450} alt='' className={`transition-transform duration-1000 ${isVisible ? 'scale-100' : 'scale-50'}`} />
                </div>
                <div className='sm:p-4' >
                    <h1 className='text-4xl font-bold text-primary-blue-color tracking-wider' >THE TALENT-DRIVEN <br /> ADVANTAGE</h1>
                    <div className='w-full max-w-[400px] flex gap-2 pt-2 pb-4' >
                        <span className='w-[85%] h-[4px] bg-primary-green-color' />
                        <span className='w-[10%] h-[4px] bg-primary-bg-color' />
                        <span className='w-[5%] h-[4px] bg-primary-blue-color' />
                    </div>
                    <div className='flex flex-col gap-4 text-justify tracking-wider' >
                        <p>
                            Protingent India is your trusted partner for comprehensive talent solutions, supporting the development of cutting-edge products, and driving your business forward. With a focus on system and procedural excellence, we guarantee outstanding service delivery.
                        </p>
                        <p>
                            At Protingent India, we understand that talent is the driving force behind a company&apos;s success. As your trusted partner, we offer comprehensive talent solutions that go beyond traditional staffing services. Our team of skilled professionals is dedicated to supporting the development of cutting-edge products and driving your business forward. With a commitment to system and procedural excellence, we ensure outstanding service delivery that meets the highest industry standards. Partner with Protingent India and experience the talent-driven advantage that will propel your business to new heights.
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center items-center' >
                <div className='w-full max-w-[1350px] flex flex-col lg:flex-row justify-center items-center' >
                    <div className='w-full lg:w-3/5' >
                        <div style={{ clipPath: 'polygon(0 5%, 100% 0, 100% 94%, 0% 100%)' }} className='w-full p-4 py-12 sm:p-12 [ flex flex-col items-start justify-center gap-4 ]  text-white bg-primary-bg-color'>
                            <p className='uppercase text-3xl sm:text-4xl font-bold tracking-wide' >COMPREHENSIVE</p>
                            <p className='uppercase text-3xl sm:text-4xl tracking-wide text-primary-green-color' >SOLUTIONS AND EXPERTISE</p>
                            <p className='font-bold tracking-wider text-lg' >Delivering End-to-End Solutions for Your Business Success</p>
                            <p className='text-justify' >
                                Our expertise extends to leading project teams, ensuring reliability, monitoring progress, tracking KPIs, and managing budgets. Additionally, our commitment to personnel management encompasses staff recruitment, performance assessment, training, and mentoring. We take pride in managing regulatory compliance in India for our parent company and offer vital back-office support services.
                            </p>
                        </div>
                    </div>
                    <div>
                        <Image src={contentSecImg} height={552} width={432} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeContent;