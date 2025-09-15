"use client"
import { useEffect, useRef, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation';
import { MenuList } from '@/utils/constants';

// --------------------------------------------------------------

const HeaderMenuList = () => {
    const divRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const handleNavigation = (menu: any) => {
        if (menu?.name === "services") {
            setOpen((prev) => !prev);
            return
        } if (menu?.name !== "careers" && menu?.name !== "industries") {
            router.push(menu?.link)
        }
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (divRef.current && !divRef.current.contains(event.target as Node) && open) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, [open]);

    useEffect(() => {
        if (pathname?.includes('service')) {
            setOpen(false);
        }
    }, [pathname])

    return (
        <div className='hidden lg:!flex gap-6 items-center text-primary  capitalize font-medium'>
            {MenuList.map((menu, index) => (
                <div
                    key={index}
                    className={`relative ${menu?.name}`}
                    ref={menu?.name === "services" ? divRef : null}
                    onClick={() => handleNavigation(menu)}
                >
                    <p
                        className={`${(menu?.name !== "careers" && menu?.name !== "industries") && "cursor-pointer"} text-lg xl:text-2xl`}
                    >
                        {menu?.name || ""}
                    </p>
                    {menu?.name === "services" && open && (
                        <div
                            className='flex flex-col gap-2 absolute bg-white p-4 w-fit rounded-2xl shadow-2xl'
                        >
                            {menu?.children?.length > 0 && menu?.children?.map((child: Record<string, any>, index: number) => (
                                <span
                                    key={index}
                                    className='text-nowrap text-lg cursor-pointer'
                                    onClick={() => router.push(child?.link)}
                                >
                                    {child?.name || ""}
                                </span>
                            ))}
                        </div>)}
                </div>
            ))}
        </div>
    )
}

export default HeaderMenuList;