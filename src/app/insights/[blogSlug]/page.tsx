import { blogsQuery } from '@/utils';
import ClientBlogPost from './ClientBlogPost';

// -------------------------------------------------------------------

// Generate static params for all blog posts
export const generateStaticParams = async () => {

    const response = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_URL || ''}`, {
        method: 'post',
        headers: {
            'Content-type': 'application/json'
        },
        next: { tags: ['blogChanges'] },
        body: JSON.stringify(blogsQuery(100))
    })
        .then((res) => res.json())
        .catch((err) => console.error('GraphQl API error :', err));

    if (response?.data?.posts?.nodes?.length > 0) {
        let data = response?.data?.posts?.nodes?.map((ele: any) => ({ blogSlug: ele?.slug }));
        return data;
    } else {
        return [{ blogSlug: `/` }]
    }
}

interface BlogPostPageProps {
    params: { blogSlug: string };
}

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
    const { blogSlug } = params;

    return <ClientBlogPost blogSlug={blogSlug} />;
};

export default BlogPostPage;