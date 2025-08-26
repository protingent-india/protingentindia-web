import { MenuList } from '@/utils/constants';
import React from 'react'

// --------------------------------------------------------------

const HeaderMenuList = () => {
    return (
        <div className='flex gap-6 items-center' >
            {MenuList.map((menu, index) => (
                <p
                    key={index}
                    className='
                        capitalize 
                        text-2xl
                        font-medium
                        cursor-pointer
                        text-primary
                '>
                    {menu}
                </p>
            ))}
        </div>
    )
}

export default HeaderMenuList;