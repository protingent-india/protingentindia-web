"use client"
import { useState } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';

interface BlogFiltersProps {
    categories: string[];
    activeCategory: string;
    onCategoryChange: (category: string) => void;
    searchQuery: string;
    onSearchChange: (query: string) => void;
    totalPosts: number;
}

const BlogFilters: React.FC<BlogFiltersProps> = ({
    categories,
    activeCategory,
    onCategoryChange,
    searchQuery,
    onSearchChange,
    totalPosts
}) => {
    const [isSearchFocused, setIsSearchFocused] = useState(false);

    const clearSearch = () => {
        onSearchChange('');
    };

    return (
        <section className="py-6 bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    {/* Categories */}
                    <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                            <button 
                                key={category}
                                onClick={() => onCategoryChange(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                                    activeCategory === category 
                                        ? 'bg-[#34969E] text-white shadow-lg' 
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800'
                                }`}
                            >
                                {category}
                                {activeCategory === category && (
                                    <span className="ml-2 bg-white/20 px-2 py-0.5 rounded-full text-xs">
                                        {totalPosts}
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>
                    
                    {/* Search */}
                    <div className="relative max-w-md w-full lg:w-auto">
                        <div className={`relative transition-all duration-300 ${
                            isSearchFocused ? 'scale-105' : ''
                        }`}>
                            <input 
                                type="text" 
                                value={searchQuery}
                                onChange={(e) => onSearchChange(e.target.value)}
                                onFocus={() => setIsSearchFocused(true)}
                                onBlur={() => setIsSearchFocused(false)}
                                placeholder="Search articles..."
                                className={`w-full pl-12 pr-12 py-3 border rounded-full bg-gray-50 focus:bg-white focus:outline-none transition-all duration-300 font-raleway ${
                                    isSearchFocused 
                                        ? 'border-[#34969E] shadow-lg ring-4 ring-[#34969E]/10' 
                                        : 'border-gray-200 hover:border-gray-300'
                                }`}
                            />
                            <FaSearch className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${
                                isSearchFocused ? 'text-[#34969E]' : 'text-gray-400'
                            }`} />
                            {searchQuery && (
                                <button
                                    onClick={clearSearch}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#34969E] transition-colors duration-300"
                                >
                                    <FaTimes />
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Active Filters Display */}
                {(activeCategory !== 'All' || searchQuery) && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="flex flex-wrap items-center gap-3">
                            <span className="text-sm text-gray-600 font-raleway">Active filters:</span>
                            
                            {activeCategory !== 'All' && (
                                <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#34969E]/10 text-[#34969E] rounded-full text-sm font-medium">
                                    Category: {activeCategory}
                                    <button
                                        onClick={() => onCategoryChange('All')}
                                        className="hover:text-[#113F64] transition-colors"
                                    >
                                        <FaTimes size={10} />
                                    </button>
                                </span>
                            )}
                            
                            {searchQuery && (
                                <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#C2D92C]/10 text-[#113F64] rounded-full text-sm font-medium">
                                    Search: "{searchQuery}"
                                    <button
                                        onClick={clearSearch}
                                        className="hover:text-[#34969E] transition-colors"
                                    >
                                        <FaTimes size={10} />
                                    </button>
                                </span>
                            )}
                            
                            <span className="text-sm text-gray-500 font-raleway">
                                ({totalPosts} article{totalPosts !== 1 ? 's' : ''} found)
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default BlogFilters;