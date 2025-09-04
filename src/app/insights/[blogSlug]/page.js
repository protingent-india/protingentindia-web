import { BlogPageComponent } from '@/components';
import { blogsQuery } from '@/utils';

// -------------------------------

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
        let data = response?.data?.posts?.nodes?.map((ele) => ({ blogSlug: ele?.slug }));
        return data;
    } else {
        return [{ blogSlug: `/` }]
    }
}

const DynamicBlogPage = ({ params }) => {
    const { blogSlug } = params;

    return (
        <div className='min-h-screen' >
            <BlogPageComponent blogSlug={blogSlug} />
        </div>
    )
}

export default DynamicBlogPage
