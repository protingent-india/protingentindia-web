"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { MenuList } from '@/utils/constants';

// --------------------------------------------------------------

const HeaderMenuList = () => {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const handleNavigation = (menu: any) => {
        if (menu?.name === "services") {
            setOpen(!open);
            return
        } if (menu?.name !== "careers" && menu?.name !== "industries") {
            router.push(menu?.link)
        }
    }

    return (
        <div className='flex gap-6 items-center text-primary  capitalize font-medium'>
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
                    {menu?.name === "services" && <div className='flex flex-col gap-2 absolute bg-white p-4 w-fit rounded-2xl shadow-2xl'>
                        {menu?.children?.length > 0 && open && menu?.children?.map((child: Record<string, any>, index: number) => (
                            <span
                                key={index}
                                className='text-nowrap text-lg cursor-pointer'
                                onClick={() => router.push(child?.link)}
                            >
                                {child?.name || ""}
                            </span>
                        ))}
                    </div>}
                </div>
            ))}
        </div>
    )
}

export default HeaderMenuList;