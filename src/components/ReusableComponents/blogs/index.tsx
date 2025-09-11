"use client"
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Icon from '@/components/icon';
import { blogsQuery, getLoadMoreData } from '@/utils';
import TruncateText from '@/components/RHFComponent/truncateText';
import Link from 'next/link';

// --------------------------------------------------------------

const BlogSection = () => {
    const router = useRouter();
    const [blogData, setBlogData] = useState<any[]>([]);
    const [hasMore, setHasMore] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async function () {
            const response = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_URL || ''}`, {
                method: 'post',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(blogsQuery(9))
            }).then((res) => res.json()).catch((err) => console.log('GraphQl API error :', err));

            if (response?.data?.posts?.nodes?.length > 0) {
                setBlogData(response?.data?.posts?.nodes);
                setHasMore(response?.data?.posts?.pageInfo);
                setIsLoading(false);
            }
        })()
    }, [])

    const fetchData = async () => {
        await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_URL || ''}`, {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(getLoadMoreData(hasMore?.endCursor))
        }).then((res) => res.json())
            .then(res => {
                if (res?.data?.posts?.nodes?.length > 0) {
                    setBlogData([...blogData, ...res?.data?.posts?.nodes])
                }
                if (res?.data?.posts?.pageInfo) {
                    setHasMore(res?.data?.posts?.pageInfo);
                }
            });
    }

    return (
        <div className='w-full flex justify-center p-4 sm:p-8' >
            <div className='w-full xl:w-[90%] lap:!max-w-[1250px] max-w-[1430px] 3xl:!max-w-[1430px] flex flex-col gap-11 justify-center items-center' >
                <div className='w-full flex flex-col lap:!flex-row items-start lap:!items-center justify-start lap:!gap-4' >
                    <p className='text-3xl sm:text-4xl lap:!text-5xl 3xl:text-[48px] font-semibold text-primary' >
                        Our Latest Insights
                    </p>
                    <div className='flex items-center mt-3 w-[90%] lap:w-fit' >
                        <span className='w-full lg:w-[200px] h-[2px] bg-primary' ></span>
                        <span className='w-[10px] h-[10px] bg-primary rounded-full' />
                    </div>
                </div>
                <div className='w-full flex flex-col lg:flex-row lg:flex-wrap items-center gap-8 xl:grid grid-cols-2 grid-rows-2 lg:gap-4 lap!:gap-' >
                    <Link href={`/insights/${blogData[0]?.slug}` || "/"} className='row-span-2' >
                        <div
                            style={{ background: `url(${blogData[0]?.featuredImage?.node?.mediaItemUrl})` }}
                            className="w-full md:w-[500px] lg:w-[450px] lap:!w-full lap:!h-[550px] 3xl:!h-[700px] row-span-2 rounded-[30px] !bg-center !bg-cover text-white p-8 pt-16 relative"
                        >
                            <div className='absolute z-0 bottom-0 left-0 w-full h-full bg-gradient-to-t from-primary to-black/20 rounded-[30px]' />
                            <div className='flex flex-col z-10 relative h-full items-start justify-end gap-4' >
                                <p className='text-xl uppercase font-semibold' >
                                    {blogData[0]?.subTitle || ""}
                                </p>
                                <TruncateText
                                    text={blogData[0]?.title || ""}
                                    className='text-2xl sm:text-[48px] lg:text-3xl lap:!text-4xl 3xl:!text-[48px] xl:leading-[55px]'
                                    limit={90}
                                    readMore={false}
                                />
                                <div className='flex justify-end w-full' >
                                    <div className='flex items-center cursor-pointer gap-2 bg-bg-parrot-green text-primary px-4 py-2 rounded-full' >
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
                    </Link>
                    <Link href={`/insights/${blogData[1]?.slug}` || "/"} >
                        <div
                            className="rounded-[30px] md:w-[500px] lg:w-[450px] xl:w-auto bg-bg-powder-blue relative text-primary p-8"
                        >
                            <div className='flex flex-col z-10 relative h-full items-start justify-end gap-4' >
                                <p className='text-xl uppercase font-semibold' >
                                    {blogData[1]?.subTitle || ""}
                                </p>
                                <TruncateText
                                    text={blogData[1]?.title || ""}
                                    className='text-2xl sm:text-[48px] lg:text-3xl xl:text-3xl  3xl:!text-[48px] 3xl:leading-[55px]'
                                    limit={80}
                                    readMore={false}
                                />
                                <div className='flex justify-end w-full' >
                                    <div className='flex items-center cursor-pointer gap-2 bg-bg-parrot-green text-primary px-4 py-2 rounded-full' >
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
                    </Link>
                    <Link href={`/insights/${blogData[2]?.slug}` || "/"} >
                        <div
                            style={{ background: `url(${blogData[2]?.featuredImage?.node?.mediaItemUrl})` }}
                            className="rounded-[30px] md:w-[500px] lg:w-[450px] xl:w-auto !bg-cover !bg-center relative text-white p-8"
                        >
                            <div className='absolute z-0 bottom-0 left-0 w-full h-full bg-gradient-to-t from-primary to-black/20 rounded-[30px]' />
                            <div className='flex flex-col z-10 relative h-full items-start justify-between gap-14' >
                                <div className='flex flex-col w-full h-full' >
                                    <p className='text-xl uppercase font-semibold' >
                                        {blogData[2]?.subTitle || ""}
                                    </p>
                                    <TruncateText
                                        text={blogData[2]?.title || ""}
                                        className='text-2xl sm:text-[48px] lg:text-3xl xl:text-3xl 3xl:!text-[48px] 3xl:leading-[55px]'
                                        limit={90}
                                        readMore={false}
                                    />
                                </div>
                                <div className='flex justify-end w-full' >
                                    <div className='flex items-center cursor-pointer gap-2 bg-bg-parrot-green text-primary px-4 py-2 rounded-full' >
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
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default BlogSection;