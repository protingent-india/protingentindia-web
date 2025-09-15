"use client"
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaCalendar, FaClock } from 'react-icons/fa';

interface Author {
    name: string;
    avatar: string;
    role?: string;
}

interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    image: string;
    category: string;
    date: string;
    readTime: number;
    author: Author;
    featured?: boolean;
}

interface BlogCardProps {
    post?: any;
    variant?: 'default' | 'featured';
}


const BlogCard: React.FC<BlogCardProps> = ({ post, variant = 'default' }) => {

    if (variant === 'featured') {
        return (
            <Link href={`/insights/${post?.slug}`} className="group block">
                <article className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden grid lg:grid-cols-2 h-full">
                    {/* Featured Image */}
                    <div className="relative h-64 lg:h-auto">
                        <Image
                            src={post?.featuredImage?.node?.mediaItemUrl || ''}
                            alt={post?.featuredImage?.node?.altText || ""}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                        <span className="absolute top-4 left-4 bg-[#C2D92C] text-[#113F64] px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                            FEATURED
                        </span>
                    </div>

                    {/* Content */}
                    <div className="p-6 lg:p-8 flex flex-col justify-center">
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                            <span className="flex items-center gap-2">
                                <FaCalendar className="text-[#34969E]" />
                                {moment(post?.date, "YYYY-MM-DDThh:mm:ss").format("MMMM DD, YYYY")}
                            </span>
                            <span className="hidden items-center gap-2">
                                <FaClock className="text-[#34969E]" />
                                {post?.readTime} min read
                            </span>
                        </div>

                        <div className="mb-3">
                            <span className="hidden bg-[#34969E]/10 text-[#34969E] px-3 py-1 rounded-full text-sm font-semibold">
                                {post?.category}
                            </span>
                        </div>

                        <h2 className="text-2xl lg:text-3xl font-bold text-[#113F64] mb-4 group-hover:text-[#34969E] transition-colors duration-300 font-lato">
                            {post?.title}
                        </h2>

                        <div
                            dangerouslySetInnerHTML={{ __html: post?.content }}
                            className="text-gray-600 mb-6 line-clamp-3 font-raleway leading-relaxed"
                        />

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div>
                                    <p className="font-semibold text-gray-900 font-lato">{post?.author?.node?.name || ""}</p>
                                    {post?.author?.role && (
                                        <p className="text-sm text-gray-600 font-raleway">{post?.author?.role}</p>
                                    )}
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-[#34969E] font-semibold group-hover:gap-4 transition-all duration-300">
                                <span>Read More</span>
                                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                            </div>
                        </div>
                    </div>
                </article>
            </Link>
        );
    }

    return (
        <Link href={`/insights/${post?.slug}`} className="group block">
            <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col overflow-hidden group-hover:-translate-y-1">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                    <Image
                        src={post?.featuredImage?.node?.mediaItemUrl || ""}
                        alt={post?.featuredImage?.node?.altText || ""}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4">
                        <span className="bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#113F64] shadow-sm">
                            {post?.category}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <span className="flex items-center gap-1">
                            <FaCalendar className="text-[#34969E]" size={12} />
                            {moment(post?.date, "YYYY-MM-DDThh:mm:ss").format("MMMM DD, YYYY")}
                        </span>
                        <span>•</span>
                        <span className="hidden items-center gap-1">
                            <FaClock className="text-[#34969E]" size={12} />
                            {post?.readTime} min read
                        </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#113F64] mb-3 group-hover:text-[#34969E] transition-colors duration-300 font-lato leading-tight">
                        {post?.title}
                    </h3>

                    <div
                        dangerouslySetInnerHTML={{ __html: post?.content }}
                        className="text-gray-600 mb-4 line-clamp-2 flex-1 font-raleway leading-relaxed"
                    />

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2">
                            <Image
                                src={post?.author?.node?.avatar?.url || ""}
                                alt={post?.author?.node?.name || ""}
                                width={32}
                                height={32}
                                className="rounded-full"
                            />
                            <span className="text-sm text-gray-600 font-raleway">{post?.author?.node?.name || ""}</span>
                        </div>
                        <FaArrowRight className="text-[#34969E] group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                </div>
            </article>
        </Link>
    );
};

export default BlogCard;