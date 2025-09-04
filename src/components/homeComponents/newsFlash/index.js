'use client'
import { NewsFlashHeading, NewsFlashCard, NavigationBtn } from '@/components';
import { useEffect, useState } from 'react';
import { blogsQuery } from '@/utils';
import { addBlogData } from '@/redux/slices/blogDataSlice';
import { dispatch } from '@/redux/store';
import { noImage } from '@/assest';
import Link from 'next/link';

// --------------------------------------------------------

const NewsFlash = () => {
    let currentIndex = 0;
    const [displaySlides, setDisplaySlides] = useState(0);
    const [data, setData] = useState([]);
    const [blogData, setBlogData] = useState([]);

    useEffect(() => {
        if (blogData?.length) {
            setData(blogData);
        }
        // eslint-disable-next-line
    }, [blogData])

    useEffect(() => {
        if (data?.length > 0) {
            setDisplaySlides(Math.floor(document.querySelector('.newsFlashSlider-div')?.clientWidth / document.querySelector('.newsFlashslide')?.clientWidth));
        }
        // eslint-disable-next-line
    }, [data])

    useEffect(() => {
        (async function () {
            const response = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_URL || ''}`, {
                method: 'post',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(blogsQuery(5))
            }).then((res) => res.json()).catch((err) => console.error('GraphQl API error :', err));

            if (response?.data?.posts?.nodes?.length > 0) {
                setBlogData(response?.data?.posts?.nodes);
            }
        })()
    }, [])

    // To handle slider button functionality
    const handleNavigation = (type) => {
        const slider = document.getElementById('newsFlashStaysslider');
        const slides = ((document.querySelector('.newsFlashslide')?.clientWidth) + 16);
        const slideWidth = (document.querySelector('.newsFlashSlider-div')?.clientWidth);
        const totalSlides = document.querySelectorAll('.newsFlashslide')?.length;
        let activeStays = Math.floor(slideWidth / slides);

        if (type === 'right') {
            currentIndex = currentIndex <= (totalSlides - activeStays) ? (currentIndex + 1) % (totalSlides) : 1;
            const translateX = (-currentIndex * slides);
            slider.style.transform = `translateX(${currentIndex <= (totalSlides - activeStays) ? translateX : 0}px)`;
        } else {
            currentIndex = currentIndex !== 0 ? (currentIndex - 1) % totalSlides : (totalSlides - activeStays)
            const translateX = (-currentIndex * slides);
            slider.style.transform = `translateX(${translateX}px)`;
        }
    }

    const handleBlogData = (blog) => {
        dispatch(addBlogData(blog));
    }

    return (
        <div className='w-full flex flex-col gap-16 items-start py-12 ' >
            <NewsFlashHeading />
            <div className='w-full flex justify-center items-center relative ' >
                <div className='h-auto flex flex-col justify-center' >
                    <NavigationBtn
                        onClick={() => handleNavigation('left')}
                        className={`${displaySlides >= data?.length && 'hidden'} z-20 absolute top-[50%] left-0 sm:left-[1%] xl:left-16 2xl:left-72 3xl:left-72`}
                        rotate={1}
                    />
                    <NavigationBtn
                        onClick={() => handleNavigation('right')}
                        className={`${displaySlides >= data?.length && 'hidden'} z-20 absolute top-[50%] right-4 sm:right-[2%] xl:right-16 2xl:right-72 3xl:right-72`}
                        rotate={3}
                    />
                </div>
                <div className='newsFlashSlider-div rm-scrollbar w-4/5 max-w-[1130px] overflow-y-hidden overflow-x-auto' >
                    <div id='newsFlashStaysslider' className='w-fit max-h-[300px] sm:max-h-[400px] duration-1000 snap-x [ flex gap-4 items-center ]' >
                        {blogData?.length > 0 && blogData?.map((el, i) => (
                            <div key={i} >
                                <NewsFlashCard
                                    key={i}
                                    title={el?.title}
                                    img={el?.featuredImage?.node?.mediaItemUrl || noImage}
                                    desc={el?.desc || ''}
                                    date={el?.date}
                                    link={`/blogs/${el?.slug}`}
                                    onClick={handleBlogData(el)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsFlash;


