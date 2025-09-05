"use client"
import { useState } from "react";
import { useRouter } from 'next/navigation'
import {
    HeaderMenuList,
    Icon,
    Logo
} from "@/components";
import { MenuList } from "@/utils/constants";

// --------------------------------------------------------------

const Header = () => {
    const [open, setOpen] = useState<any>(false);
    const [openSubMenu, setOpenSubMenu] = useState<any>(false);
    const router = useRouter();

    const handleNavigation = (menu: any) => {
        if (menu?.name === "services") {
            setOpenSubMenu(!openSubMenu);
            return
        } if (menu?.name !== "careers" && menu?.name !== "industries") {
            router.push(menu?.link)
        }
    }

    return (
        <div id="header" className="w-full flex justify-center py-7 sticky top-0 z-[1000] bg-white p-4 sm:px-8 capitalize">
            <div className="w-full lap:max-w-[1250px] 2xl:max-w-[1350px] flex justify-between" >
                <Logo className="w-[200px] lg:w-[230px] xl:w-[330px]" />
                <HeaderMenuList />
                <div className="flex lg:hidden relative" >
                    <div
                        onClick={() => setOpen(true)}
                    >
                        <Icon
                            icon={"pajamas:hamburger"}
                            height={24}
                            width={24}
                            className={"text-primary"}
                        />
                    </div>
                    <div className={`${open ? "min-h-[350px]" : "h-0"} duration-1000 w-full bg-white overflow-hidden fixed top-0 left-0 shadow-2xl z-[100]`} >
                        <div className="flex items-center justify-center py-4 relative w-full" >
                            <div
                                className="absolute top-4 right-4"
                                onClick={() => setOpen(false)}
                            >
                                X
                            </div>
                            <div className="w-fit flex flex-col items-start justify-center gap-4 text-primary font-medium" >
                                {MenuList.map((menu, index) => (
                                    <div
                                        key={index}
                                        className='relative'
                                        onClick={() => handleNavigation(menu)}
                                    >
                                        <p
                                            className={`${(menu?.name !== "careers" && menu?.name !== "industries") && "cursor-pointer"} text-2xl`}
                                        >
                                            {menu?.name || ""}
                                        </p>
                                        {menu?.name === "services" && openSubMenu && <div className='flex flex-col gap-2  bg-white pt-4 pl-4 w-fit rounded-2xl'>
                                            {menu?.children?.length > 0 && menu?.children?.map((child: Record<string, any>, index: number) => (
                                                <span
                                                    key={index}
                                                    className='text-nowrap text-base cursor-pointer text-black'
                                                    onClick={() => router.push(child?.link)}
                                                >
                                                    {child?.name || ""}
                                                </span>
                                            ))}
                                        </div>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;