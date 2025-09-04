'use client'
import Image from "next/image";
import moment from "moment";
import { useEffect, useState } from "react";
import { blogsQueryData } from "@/utils";
import { noImage } from '@/assest';
import { Loader } from '@/components';

// ------------------------------------------------------------

const BlogPageComponent = ({ blogSlug }) => {
    const [blog, setBlog] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        (async function () {
            if (blogSlug) {
                const response = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_URL || ''}`, {
                    method: 'post',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(blogsQueryData(blogSlug))
                })
                    .then((res) => res.json())
                    .catch((err) => console.error('GraphQl API error :', err));

                if (response?.data?.postBy) {
                    setBlog(response?.data?.postBy)
                    setIsLoading(false);
                    setImageUrl(response?.data?.postBy?.author?.node?.avatar?.url)
                }
            }
        })()
    }, [blogSlug])

    return (
        <>
            {isLoading ? <Loader loading={isLoading} />
                :
                <div className='min-h-screen flex items-center py-24 justify-center'>
                    <div className='max-w-[1300px] px-4 '>
                        <h1 className='text-4xl font-medium leading-10'>{blog?.title || ''}</h1>
                        <p className='pt-4'>
                            {moment(blog?.date || '', 'YYYY-MM-DDTHH:mm:ssz').format('MMMM DD, YYYY')}
                        </p>
                        <div className='pt-8 flex flex-col items-center'>
                            <Image alt='' src={blog?.featuredImage?.node?.mediaItemUrl || noImage} width={500} height={500} className='!w-auto !h-auto object-fit border-none' />
                            <div className='pt-12 flex flex-col gap-4 [&>p]:text-justify'>
                                <div dangerouslySetInnerHTML={{ __html: blog?.content }} className="text-justify [&>p]:mb-4 [&>h2]:py-4 [&>h2]:text-xl [&>h3]:text-lg [&>h3]:mb-2" />
                            </div>
                            <div className='hidden justify-start border-t border-black py-6 mt-6 w-full' >
                                <div className='w-fit flex justify-start min-w-[50px]' >
                                    <Image src={imageUrl || ''} height={50} width={50} alt='' className="rounded-full mb-2 w-12" />
                                </div>
                                <div className='w-full pl-4' >
                                    <h4 className="font-bold tracking-wider" >Author:</h4>
                                    <p>{blog?.author?.node?.description || ''}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            }
        </>
    )
}

export default BlogPageComponent;