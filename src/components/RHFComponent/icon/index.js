'use client'
import { Icon as Ic } from '@iconify/react';

// ------------------------------------------------------

const Icon = ({ icon, className, height, width, rotate, color, iconClass, ...props }) => {
    return (
        <div className={`${className} overflow-hidden w-fit`} >
            <Ic icon={icon} {...props} className={`h-auto ${iconClass}`} height={height} width={width} rotate={rotate} color={color} />
        </div>
    )
}

export default Icon;
