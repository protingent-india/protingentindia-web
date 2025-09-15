'use client'
import { useState, useMemo } from 'react';
import { FaSearch, FaArrowRight, FaLightbulb } from 'react-icons/fa';
import BlogCard from '@/components/BlogCard';
import { mockBlogPosts, blogCategories } from '@/utils/constants';
import Image from 'next/image';
import AOS from 'aos';
import { useEffect } from 'react';
import { blogsQuery, getLoadMoreData } from '@/utils';

const InsightsPage = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [blogData, setBlogData] = useState<any[]>([]);
    const [hasMoreBlog, setHasMore] = useState<any>(null);
    const [featuredPost, setFeaturedPost] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);
    const postsPerPage = 6;

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    useEffect(() => {
        (async function () {
            const response = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_URL || ''}`, {
                method: 'post',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(blogsQuery(postsPerPage))
            }).then((res) => res.json()).catch((err) => console.log('GraphQl API error :', err));

            if (response?.data?.posts?.nodes?.length > 0) {
                const fitlerFeatured = response?.data?.posts?.nodes?.find((el: any) => el?.featuredImage)
                setFeaturedPost(fitlerFeatured);
                setBlogData(response?.data?.posts?.nodes?.filter((el: any) => el !== fitlerFeatured));
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
            body: JSON.stringify(getLoadMoreData(hasMoreBlog?.endCursor))
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

    // Filter posts based on category and search
    const filteredPosts = useMemo(() => {
        let filtered = mockBlogPosts;

        if (activeCategory !== 'All') {
            filtered = filtered.filter(post => post.category === activeCategory);
        }

        if (searchQuery) {
            filtered = filtered.filter(post =>
                post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.category.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        return filtered;
    }, [activeCategory, searchQuery]);

    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#113F64] via-[#34969E] to-[#113F64] opacity-95"></div>
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                        alt="Technology and Innovation"
                        fill
                        className="object-cover mix-blend-multiply"
                    />
                </div>

                {/* Floating Elements */}
                <div className="absolute top-20 left-10 w-20 h-20 bg-[#C2D92C] rounded-full opacity-20 animate-bounce"></div>
                <div className="absolute top-40 right-20 w-16 h-16 border-4 border-white rounded-full opacity-30 animate-pulse"></div>
                <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full opacity-25 animate-ping"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div data-aos="fade-up" className="max-w-4xl mx-auto">
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <FaLightbulb className="text-[#C2D92C] text-3xl animate-pulse" />
                            <span className="text-[#C2D92C] font-bold tracking-wide uppercase text-sm">
                                Knowledge Hub
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-lato leading-tight">
                            Insights & Expertise
                            <span className="block text-[#C2D92C] mt-2">That Drive Success</span>
                        </h1>
                        <p className="text-xl md:text-2xl font-raleway text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
                            Stay ahead with industry trends, expert insights, and actionable strategies
                            from the world of talent acquisition and workforce solutions.
                        </p>
                    </div>

                    {/* Stats */}
                    <div data-aos="fade-up" data-aos-delay="200" className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
                        <div className="text-center">
                            <div className="text-3xl lg:text-4xl font-bold text-[#C2D92C] mb-2 font-lato">
                                {mockBlogPosts.length}+
                            </div>
                            <div className="text-gray-200 font-raleway">Expert Articles</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl lg:text-4xl font-bold text-[#C2D92C] mb-2 font-lato">
                                {blogCategories.length - 1}
                            </div>
                            <div className="text-gray-200 font-raleway">Industry Topics</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl lg:text-4xl font-bold text-[#C2D92C] mb-2 font-lato">
                                24/7
                            </div>
                            <div className="text-gray-200 font-raleway">Knowledge Access</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filter Section */}
            <section className="hidden py-8 bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                        {/* Categories */}
                        <div className="flex flex-wrap gap-2">
                            {blogCategories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => {
                                        setActiveCategory(category);
                                        setCurrentPage(1);
                                    }}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${activeCategory === category
                                        ? 'bg-[#34969E] text-white shadow-lg'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800'
                                        }`}
                                >
                                    {category}
                                    {activeCategory === category && (
                                        <span className="ml-2 bg-white/20 px-2 py-0.5 rounded-full text-xs">
                                            {filteredPosts.length}
                                        </span>
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Search */}
                        <div className="relative max-w-md w-full lg:w-auto">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => {
                                    setSearchQuery(e.target.value);
                                    setCurrentPage(1);
                                }}
                                placeholder="Search articles..."
                                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-full bg-gray-50 focus:bg-white focus:outline-none focus:border-[#34969E] focus:ring-4 focus:ring-[#34969E]/10 transition-all duration-300 font-raleway"
                            />
                            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>
                    </div>

                    {/* Active Filters */}
                    {(activeCategory !== 'All' || searchQuery) && (
                        <div className="mt-4 pt-4 border-t border-gray-100">
                            <div className="flex flex-wrap items-center gap-3">
                                <span className="text-sm text-gray-600 font-raleway">Active filters:</span>

                                {activeCategory !== 'All' && (
                                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#34969E]/10 text-[#34969E] rounded-full text-sm font-medium">
                                        Category: {activeCategory}
                                    </span>
                                )}

                                {searchQuery && (
                                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#C2D92C]/10 text-[#113F64] rounded-full text-sm font-medium">
                                        Search: "{searchQuery}"
                                    </span>
                                )}

                                <span className="text-sm text-gray-500 font-raleway">
                                    ({filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found)
                                </span>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Blog Content */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {filteredPosts.length === 0 ? (
                        <div className="text-center py-16">
                            <div className="text-6xl text-gray-300 mb-4">📝</div>
                            <h3 className="text-2xl font-bold text-gray-600 mb-2 font-lato">No articles found</h3>
                            <p className="text-gray-500 font-raleway">Try adjusting your search or filter criteria.</p>
                        </div>
                    ) : (
                        <>
                            {/* Featured Post */}
                            {featuredPost && activeCategory === 'All' && !searchQuery && (
                                <div data-aos="fade-up" className="mb-16">
                                    <BlogCard post={featuredPost} variant="featured" />
                                </div>
                            )}

                            {/* Regular Posts Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {blogData?.length > 0 && blogData.map((post: any, index: number) => (
                                    <div
                                        key={index}
                                        data-aos="fade-up"
                                        data-aos-delay={index * 100}
                                    >
                                        <BlogCard post={post} />
                                    </div>
                                ))}
                            </div>

                            {/* Load More Button */}
                            {hasMoreBlog?.hasNextPage && (
                                <div className="text-center mt-12">
                                    <button
                                        onClick={fetchData}
                                        className="cursor-pointer inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#34969E] to-[#113F64] text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                                    >
                                        Load More Articles
                                        <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-16 bg-gradient-to-r from-[#113F64] to-[#34969E] relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <div data-aos="fade-up">
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-lato">
                            Stay Updated with Industry Insights
                        </h2>
                        <p className="text-xl text-gray-200 mb-8 font-raleway">
                            Get the latest articles and expert insights delivered directly to your inbox.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-3 rounded-full border-0 focus:outline-none focus:ring-4 focus:ring-white/20"
                            />
                            <button className="px-8 py-3 bg-[#C2D92C] text-[#113F64] rounded-full font-bold hover:bg-[#B5C426] transition-colors duration-300">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default InsightsPage;