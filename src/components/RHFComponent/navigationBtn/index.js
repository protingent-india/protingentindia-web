'use client'
import { Icon } from '@/components';

// ------------------------------------------------

const NavigationBtn = ({ onClick, className, rotate }) => {
    return (
        <div onClick={onClick} className={`${className} cursor-pointer bg-white h-7 lg:h-8 lg:w-9 w-8  rounded-lg flex items-center p-1`}>
            <Icon icon={'ep:arrow-down-bold'} height={24} width={36} rotate={rotate} className={'text-primary-blue-color'} />
        </div>
    )
}

export default NavigationBtn;
