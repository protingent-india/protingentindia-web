'use client'
import AOS from 'aos';
import Image from 'next/image';
import Link from 'next/link';
import moment from 'moment';
import { useEffect, useState } from 'react';
import {
    FaArrowLeft,
    FaCalendar,
    FaClock,
    FaLinkedin,
    FaTwitter,
    FaFacebook,
    FaLink
} from 'react-icons/fa';
import { blogsQueryData } from '@/utils';

// --------------------------------------------------------------------------------------------------

const ClientBlogPost: React.FC<any> = ({ blogSlug }) => {
    const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
    const [shareTitle, setShareTitle] = useState<any>(null);
    const [post, setBlog] = useState<any>(null);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(shareUrl);
    };

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
                    .catch((err) => console.log('GraphQl API error :', err));
                if (response?.data?.postBy) {
                    setBlog(response?.data?.postBy);
                    setShareTitle(response?.data?.postBy?.title);
                }
            }
        })()
    }, [blogSlug])

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    return (
        <div className='flex flex-col gap-16' >
            {post ? <main className="min-h-screen bg-white">
                {/* Hero Section */}
                <section className="relative py-12 lg:py-20">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Back Button */}
                        <div data-aos="fade-right" className="mb-8">
                            <Link
                                href="/insights"
                                className="inline-flex items-center gap-2 text-[#34969E] hover:text-[#113F64] transition-colors duration-300 font-semibold"
                            >
                                <FaArrowLeft />
                                Back to Insights
                            </Link>
                        </div>

                        {/* Article Meta */}
                        <div data-aos="fade-up" className="mb-6">
                            <span className="hidden bg-[#34969E]/10 text-[#34969E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                                {""}
                            </span>
                            <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                                <span className="flex items-center gap-2">
                                    <FaCalendar className="text-[#34969E]" />
                                    {moment(post?.date, "YYYY-MM-DDThh:mm:ss").format("MMMM DD, YYYY")}
                                </span>
                                <span className="hidden items-center gap-2">
                                    <FaClock className="text-[#34969E]" />
                                    {post?.readTime} min read
                                </span>
                            </div>
                        </div>

                        {/* Title */}
                        <h1 data-aos="fade-up" data-aos-delay="100" className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#113F64] mb-8 font-lato leading-tight">
                            {post?.title}
                        </h1>

                        {/* Author Info */}
                        <div data-aos="fade-up" data-aos-delay="200" className="flex items-center justify-between border-b border-gray-200 pb-6 mb-8">
                            <div className="flex items-center gap-4">
                                <Image
                                    src={post?.author?.node?.avatar?.url || null}
                                    alt={post?.author.node?.name || ""}
                                    width={60}
                                    height={60}
                                    className="rounded-full border-2 border-gray-100"
                                />
                                <div>
                                    <p className="font-bold text-gray-900 font-lato text-lg">{post?.author.node?.name}</p>
                                    {post?.author.node?.name && (
                                        <p className="text-gray-600 font-raleway">{post?.author.node?.name}</p>
                                    )}
                                </div>
                            </div>

                            {/* Share Buttons */}
                            <div className="hidden items-center gap-3">
                                <span className="text-sm text-gray-600 font-raleway hidden sm:block">Share:</span>
                                <div className="flex items-center gap-2">
                                    <a
                                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-gray-100 hover:bg-[#0077b5] hover:text-white rounded-full transition-all duration-300"
                                    >
                                        <FaLinkedin size={16} />
                                    </a>
                                    <a
                                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-gray-100 hover:bg-[#1da1f2] hover:text-white rounded-full transition-all duration-300"
                                    >
                                        <FaTwitter size={16} />
                                    </a>
                                    <a
                                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-gray-100 hover:bg-[#1877f2] hover:text-white rounded-full transition-all duration-300"
                                    >
                                        <FaFacebook size={16} />
                                    </a>
                                    <button
                                        onClick={copyToClipboard}
                                        className="p-2 bg-gray-100 hover:bg-[#34969E] hover:text-white rounded-full transition-all duration-300"
                                    >
                                        <FaLink size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Image */}
                <section className="mb-12">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div data-aos="fade-up" className="relative h-64 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src={post?.featuredImage?.node?.mediaItemUrl || ""}
                                alt={post?.title}
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                        </div>
                    </div>
                </section>

                {/* Article Content */}
                <section className="pb-16">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div data-aos="fade-up" className="prose prose-lg max-w-none">
                            {/* Introduction */}
                            <div dangerouslySetInnerHTML={{ __html: post?.content }} className="text-xl text-gray-700 leading-relaxed mb-8 font-raleway">
                                {post?.excerpt}
                            </div>

                            {/* Mock Article Content */}
                            {/* <div className="space-y-6 text-gray-600 leading-relaxed font-raleway">
                            <p>
                                In today's rapidly evolving business landscape, the intersection of technology and human resources
                                has created unprecedented opportunities for innovation and growth. Organizations that successfully
                                navigate this digital transformation are not just surviving – they're thriving in ways that seemed
                                impossible just a few years ago.
                            </p>

                            <h2 className="text-2xl font-bold text-[#113F64] mt-8 mb-4 font-lato">
                                The Current State of Industry
                            </h2>

                            <p>
                                The modern workplace has undergone a fundamental shift, driven by technological advancement and
                                changing workforce expectations. This transformation has reshaped how organizations approach
                                talent acquisition, employee engagement, and operational efficiency.
                            </p>

                            <p>
                                Key trends that are defining this new era include:
                            </p>

                            <ul className="list-disc pl-6 space-y-2">
                                <li>Increased adoption of AI and automation in recruitment processes</li>
                                <li>Growing emphasis on data-driven decision making</li>
                                <li>Rising importance of remote and hybrid work models</li>
                                <li>Enhanced focus on employee experience and retention</li>
                                <li>Integration of advanced analytics in workforce planning</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-[#113F64] mt-8 mb-4 font-lato">
                                Strategic Approaches for Success
                            </h2>

                            <p>
                                To succeed in this evolving landscape, organizations must adopt a holistic approach that combines
                                technological innovation with human-centered strategies. This requires a deep understanding of
                                both current market dynamics and future trends.
                            </p>

                            <blockquote className="border-l-4 border-[#34969E] pl-6 italic text-gray-700 my-8 bg-gray-50 p-6 rounded-r-lg">
                                "The companies that will thrive in the next decade are those that can seamlessly blend
                                technological capabilities with authentic human connection and strategic thinking."
                            </blockquote>

                            <p>
                                Implementation of these strategies requires careful planning, dedicated resources, and a
                                commitment to continuous improvement. Organizations must be prepared to adapt quickly
                                to changing conditions while maintaining focus on their core objectives.
                            </p>

                            <h2 className="text-2xl font-bold text-[#113F64] mt-8 mb-4 font-lato">
                                Looking Ahead: Future Opportunities
                            </h2>

                            <p>
                                As we look toward the future, several emerging opportunities present themselves to forward-thinking
                                organizations. These opportunities span across technology adoption, workforce development, and
                                strategic partnerships.
                            </p>

                            <p>
                                The organizations that will lead in this new era are those that can effectively balance
                                innovation with execution, creating sustainable competitive advantages while delivering
                                exceptional value to all stakeholders.
                            </p>
                        </div> */}
                        </div>
                    </div>
                </section>

                {/* Related Articles */}
                {/* {relatedPosts.length > 0 && (
                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div data-aos="fade-up" className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-[#113F64] mb-4 font-lato">
                                Related Articles
                            </h2>
                            <p className="text-gray-600 font-raleway max-w-2xl mx-auto">
                                Explore more insights and expertise in {post?.category.toLowerCase()}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {relatedPosts.map((relatedPost, index) => (
                                <div
                                    key={relatedPost.slug}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <BlogCard post={relatedPost} />
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <Link
                                href="/insights"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#34969E] to-[#113F64] text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                            >
                                View All Articles
                                <FaArrowLeft className="rotate-180" />
                            </Link>
                        </div>
                    </div>
                </section>
            )} */}
            </main> : ""}
        </div>
    );
};

export default ClientBlogPost;