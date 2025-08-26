"use client";
import { Icon as IconifyIcon } from '@iconify/react';

// ----------------------------------------------------------

const Icon = ({ icon, width = 24, height = 24 }: { icon: string, width?: number, height?: number }) => {
    return (
        <IconifyIcon
            icon={icon}
            width={width}
            height={height}
        />
    )
}

export default Icon;