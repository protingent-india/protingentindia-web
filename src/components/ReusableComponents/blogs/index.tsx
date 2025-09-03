import Icon from '@/components/icon';
import { blogData } from '@/utils/constants';
import React from 'react'

// --------------------------------------------------------------

const BlogSection = () => {
    return (
        <div className='w-full flex justify-center' >
            <div className='w-full max-w-[1450px] flex flex-col gap-11 justify-center items-center' >
                <div className='w-full flex items-center justify-start gap-3' >
                    <p className='text-[48px] font-semibold text-primary' >
                        Our Latest Insights
                    </p>
                    <div className='flex items-center mt-3' >
                        <span className='w-[200px] h-[2px] bg-primary' ></span>
                        <span className='w-[10px] h-[10px] bg-primary rounded-full' />
                    </div>
                </div>
                <div className='w-full grid grid-cols-2 grid-rows-2 gap-[30px] ' >
                    <div
                        style={{ background: `url(${blogData[0]?.img})` }}
                        className="w-[700px] h-[700px] row-span-2 rounded-[30px] text-white p-8 relative"
                    >
                        <div className='absolute z-0 bottom-0 left-0 w-full h-full bg-gradient-to-t from-primary to-black/20 rounded-[30px]' />
                        <div className='flex flex-col z-10 relative h-full items-start justify-end gap-4' >
                            <p className='text-xl uppercase font-semibold' >
                                {blogData[0]?.subTitle || ""}
                            </p>
                            <p className='text-[48px] leading-[55px]' >
                                {blogData[0]?.title || ""}
                            </p>
                            <div className='flex justify-end w-full' >
                                <div className='flex items-end cursor-pointer gap-2 bg-bg-parrot-green text-primary px-4 py-2 rounded-full' >
                                    <p className='text-xl' >
                                        Explore
                                    </p>
                                    <Icon
                                        icon='ph:arrow-right-fill'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="rounded-[30px] bg-bg-powder-blue relative text-primary p-8"
                    >
                        <div className='flex flex-col z-10 relative h-full items-start justify-end gap-4' >
                            <p className='text-xl uppercase font-semibold' >
                                {blogData[1]?.subTitle || ""}
                            </p>
                            <p className='text-[48px] leading-[55px]' >
                                {blogData[1]?.title || ""}
                            </p>
                            <div className='flex justify-end w-full' >
                                <div className='flex items-end cursor-pointer gap-2 bg-bg-parrot-green text-primary px-4 py-2 rounded-full' >
                                    <p className='text-xl' >
                                        Explore
                                    </p>
                                    <Icon
                                        icon='ph:arrow-right-fill'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ background: `url(${blogData[2]?.img})` }}
                        className="rounded-[30px] !bg-cover !bg-center relative text-white p-8"
                    >
                        <div className='absolute z-0 bottom-0 left-0 w-full h-full bg-gradient-to-t from-primary to-black/20 rounded-[30px]' />
                        <div className='flex flex-col z-10 relative h-full items-start justify-end gap-4' >
                            <p className='text-xl uppercase font-semibold' >
                                {blogData[2]?.subTitle || ""}
                            </p>
                            <p className='text-[48px] leading-[55px]' >
                                {blogData[2]?.title || ""}
                            </p>
                            <div className='flex justify-end w-full' >
                                <div className='flex items-end cursor-pointer gap-2 bg-bg-parrot-green text-primary px-4 py-2 rounded-full' >
                                    <p className='text-xl' >
                                        Explore
                                    </p>
                                    <Icon
                                        icon='ph:arrow-right-fill'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default BlogSection;