"use client"
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Icon from '@/components/icon';
// import { blogData } from '@/utils/constants';
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
                    <Link href={`/insights/${blogData[0]?.slug}` || "/"} className='row-span-2' >
                        <div
                            style={{ background: `url(${blogData[0]?.featuredImage?.node?.mediaItemUrl})` }}
                            className="w-[700px] h-[700px] row-span-2 rounded-[30px] !bg-center !bg-cover text-white p-8 relative"
                        >
                            <div className='absolute z-0 bottom-0 left-0 w-full h-full bg-gradient-to-t from-primary to-black/20 rounded-[30px]' />
                            <div className='flex flex-col z-10 relative h-full items-start justify-end gap-4' >
                                <p className='text-xl uppercase font-semibold' >
                                    {blogData[0]?.subTitle || ""}
                                </p>
                                <TruncateText
                                    text={blogData[0]?.title || ""}
                                    className='text-[48px] leading-[55px]'
                                    limit={90}
                                    readMore={false}
                                />
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
                    </Link>
                    <Link href={`/insights/${blogData[1]?.slug}` || "/"} >
                        <div
                            className="rounded-[30px] bg-bg-powder-blue relative text-primary p-8"
                        >
                            <div className='flex flex-col z-10 relative h-full items-start justify-end gap-4' >
                                <p className='text-xl uppercase font-semibold' >
                                    {blogData[1]?.subTitle || ""}
                                </p>
                                <TruncateText
                                    text={blogData[1]?.title || ""}
                                    className='text-[48px] leading-[55px]'
                                    limit={80}
                                    readMore={false}
                                />
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
                    </Link>
                    <Link href={`/insights/${blogData[2]?.slug}` || "/"} >
                        <div
                            style={{ background: `url(${blogData[2]?.featuredImage?.node?.mediaItemUrl})` }}
                            className="rounded-[30px] !bg-cover !bg-center relative text-white p-8 min-h-[335px]"
                        >
                            <div className='absolute z-0 bottom-0 left-0 w-full h-full bg-gradient-to-t from-primary to-black/20 rounded-[30px]' />
                            <div className='flex flex-col z-10 relative h-full items-start justify-between gap-14' >
                                <div className='flex flex-col w-full h-full' >
                                    <p className='text-xl uppercase font-semibold' >
                                        {blogData[2]?.subTitle || ""}
                                    </p>
                                    <TruncateText
                                        text={blogData[2]?.title || ""}
                                        className='text-[48px] leading-[55px]'
                                        limit={90}
                                        readMore={false}
                                    />
                                </div>
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
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default BlogSection;