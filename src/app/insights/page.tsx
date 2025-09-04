'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { blogsQuery, getLoadMoreData } from '@/utils';
import { Loader, NewsFlashCard } from '@/components';
import { noImage } from '@/assest';
import './index.css'

// ---------------------------------------------

const News = () => {
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

    const redirectUser = (path: string) => {
        router.push(`/insights/${path}`)
    }

    return (
        <div className='flex justify-center px-4 py-14 sm:p-16 md:py-20 min-h-screen'>
            {isLoading ? <Loader loading={isLoading} /> :
                <div className='w-full flex flex-wrap gap-4 justify-center [&>div]:w-full [&>div]:flex'>
                    {blogData?.length > 0 &&
                        <InfiniteScroll
                            dataLength={blogData?.length}
                            next={fetchData}
                            hasMore={true}
                            loader={<Loader loading={true} />}
                            className='flex flex-wrap justify-center xl:justify-start gap-12 xl:gap-12 xl:max-w-[900px] 2xl:max-w-[1300px] 3xl:max-w-[1600px]'
                        >
                            {blogData?.length > 0 && blogData?.map((el, i) => (
                                <div key={i} onClick={() => redirectUser(el?.slug)} className='max-w-full cursor-pointer' >
                                    <NewsFlashCard
                                        key={i}
                                        title={el?.title}
                                        img={el?.featuredImage?.node?.mediaItemUrl || noImage}
                                        date={el?.date}
                                        link={`/insights/${el?.slug}`}
                                    />
                                </div>
                            ))}
                        </InfiniteScroll>}
                </div>
            }
        </div>
    )
}

export default News;