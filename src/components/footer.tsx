"use client"
import { Icon } from "@/components";
import Image from "next/image";
import Link from "next/link";

// -----------------------------------------------------------------

const Footer = () => {
    return (
        <div id="footer" className="bg-primary w-full min-h-[700px] relative text-white">
            <div style={{ background: "url(/img/footerBg.png)" }} className="w-full h-full min-h-[776px] opacity-[50%] !bg-size-[auto_100%] !bg-center !bg-no-repeat absolute top-0 left-0 z-[0]">
            </div>
            <div className="relative z-10 w-full flex flex-col justify-center items-center px-4" >
                <div className="w-full lap:max-w-[1250px] 2xl:max-w-[1430px] flex flex-col gap-10 lg:flex-row justify-between [&>div>p]:text-[26px] py-16 lg:py-28 border-b border-white" >
                    <div className="flex flex-col gap-12 w-full lg:max-w-[345px] xl:max-w-[445px] !border-0" >
                        <p className="!text-3xl xl!text-4xl " >
                            <span className="font-extrabold" >PRO</span>TINGENT INDIA LLP
                        </p>
                        <div className="flex gap-6 items-center pr-4" >
                            <Image
                                src={"/img/addressIcon.svg"}
                                height={35}
                                width={35}
                                alt=""
                                className="min-w-[40px] h-[40px]"
                            />
                            <p className="text-base lg:text-lg lap:text-xl 2xl:text-2xl text-justify" >
                                4th floor, Jaipur Centre, 420, Tonk Rd, Choti Chopad, Chandrakala Colony, Durgapura, Jaipur, Rajasthan 302018
                            </p>
                        </div>
                        <div className="flex gap-6 items-center" >
                            <Image
                                src={"/img/emailIcon.png"}
                                height={40}
                                width={40}
                                alt=""
                                className="min-w-[40px] h-[40px]"
                            />
                            <Link href="mailto:connect@protingentindia.com">
                                <p className="text-lg lg:text-xl lap:text-xl 2xl:text-2xl" >
                                    connect@protingentindia.com
                                </p>
                            </Link>
                        </div>
                        <div className="flex gap-6 items-center" >
                            <Image
                                src={"/img/callIcon.png"}
                                height={40}
                                width={40}
                                alt=""
                                className="min-w-[40px] h-[40px]"
                            />
                            <div>
                                <Link href={'tel:+911412990687'}>
                                    <p className="text-lg lg:text-xl lap:text-xl 2xl:text-2xl" >
                                        +91 141 299 0687
                                    </p>
                                </Link>
                                <Link href={'tel:+919119102197'}>
                                    <p className="text-lg lg:text-xl lap:text-xl 2xl:text-2xl" >
                                        +91 91191 02197
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>
                            Services
                        </p>
                        <div className="text-xl lg:text-lg xl:text-xl h-fit lg:min-h-[360px] border-l pl-6 pt-12  border-white flex flex-col gap-2 ">
                            <p>
                                RPO
                            </p>
                            <p>
                                FTE Hiring
                            </p>
                            <p>
                                Contract Staffing
                            </p>
                            <p>
                                IT Consulting
                            </p>
                            <p>
                                Marketing Solutions
                            </p>
                            <p>
                                BI DATA Visualization
                            </p>
                            <p>
                                Product Development
                            </p>
                        </div>
                    </div>
                    <div>
                        <p>
                            Industries
                        </p>
                        <div className="text-xl lg:text-lg xl:text-xl h-fit lg:min-h-[360px] border-l pl-6 pt-12 border-white flex flex-col gap-2 ">
                            <p>
                                Healthcare
                            </p>
                            <p>
                                Engineering
                            </p>
                            <p>
                                Startups
                            </p>
                            <p>
                                Consumer Goods & Retail
                            </p>
                            <p>
                                IT, Technology & Software
                            </p>
                            <p>
                                Life Sciences & Pharmaceutical
                            </p>
                            <p>
                                Manufacturing & Distribution
                            </p>
                            <p>
                                Professional Services
                            </p>
                        </div>
                    </div>
                    <div>
                        <p>
                            Company
                        </p>
                        <div className="text-xl lg:text-lg xl:text-xl text-nowrap h-fit lg:min-h-[360px] border-l pl-6 pt-12 border-white flex flex-col gap-2 ">
                            <Link href={"/"} >
                                <p>
                                    Home
                                </p>
                            </Link>
                            <Link href={"/about"} >
                                <p>
                                    About Us
                                </p>
                            </Link>
                            <p>
                                Careers
                            </p>
                            <Link href={"/insights"} >
                                <p>
                                    insights
                                </p>
                            </Link>
                            <Link href={"/contact"} >
                                <p>
                                    Contact Us
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-8 xl:gap-10 justify-between w-full lap:max-w-[1250px] 2xl:max-w-[1430px] py-8 lg:py-14" >
                    <div className="flex justify-between lg:gap-4 xl:gap-11 " >
                        <Icon
                            icon="ri:facebook-fill"
                            height={36}
                            width={36}
                            className="text-white"
                        />
                        <Icon
                            icon="ri:youtube-fill"
                            height={36}
                            width={36}
                            className="text-white"
                        />
                        <Link href="https://www.linkedin.com/company/protingent-india-llp/" target="new">
                            <Icon
                                icon="ri:linkedin-fill"
                                height={36}
                                width={36}
                                className="text-white"
                            />
                        </Link>
                        <Icon
                            icon="ri:twitter-fill"
                            height={36}
                            width={36}
                            className="text-white"
                        />
                        <Icon
                            icon="grommet-icons:reddit"
                            height={36}
                            width={36}
                            className="text-white"
                        />
                    </div>
                    <div className="w-full flex justify-center" >
                        <p>
                            © 2025 Protingent India LLP | All Right reserved
                        </p>
                    </div>
                    <div className="w-full flex justify-center" >
                        <div className="flex gap-6" >
                            <Link href={"/privacy-policy"} >
                                <p>
                                    Privacy Policy & Cookies
                                </p>
                            </Link>
                            <Link href={"/terms-condition"} >
                                <p>
                                    Terms & Conditions
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;