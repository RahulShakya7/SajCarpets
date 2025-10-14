import Image from "next/image";
import { notFound } from "next/navigation";
import blogData from "../../../data/blogdata";
import BlogCard from "../../components/blog/blogcard";
import Helmet from "../../components/helmet/helmet";

export default function BlogDetailsPage({ params }) {
  const blog = blogData[String(params.id)];
  if (!blog) return notFound();

  const pageTitle = blog.title;

  const relatedForCard = Array.isArray(blog.related)
    ? blog.related.map((rb) => ({
        id: rb.id,
        title: rb.title,
        date: rb.date ?? blog.displayDate ?? "",
        likes: rb.likes ?? 0,
        image: rb.image ?? blog.coverImage,
      }))
    : [];

  return (
    <div>
      <Helmet title="Blog Details" breadcrumb={`Home / ${pageTitle}`} />
      <div className="px-4 sm:px-8 md:px-16 lg:px-[300px] py-12 md:py-[72px]">
        {/* <Link href="/blog" className="text-blue-600 hover:underline mb-6 inline-block">← Back to Blogs</Link> */}
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <article className="lg:col-span-8 bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="relative w-full h-72 md:h-[400px]">
              <Image src={blog.coverImage} alt={pageTitle} fill className="object-cover" />
            </div>
            <div className="p-6 md:p-10">
              <h1 className="text-3xl md:text-4xl font-bold text-black mb-2">{pageTitle}</h1>
              <p className="text-gray-600 text-sm mb-6">{blog.displayDate} • {blog.likes} likes</p>
              <div className="text-gray-700 leading-relaxed text-lg" dangerouslySetInnerHTML={{ __html: blog.contentHtml }} />
            </div>
          </article>

          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1200&auto=format" alt="Ad banner" className="w-full h-40 object-cover" />
              </div>
              <div className="gap-y-2 ">
                <div >
                  <h1 className="text-xl md:text-2xl font-bold text-primary mb-4">Related Blogs</h1>
                </div>
                {relatedForCard.length > 0 && (
                  <div className="space-y-4">
                    {relatedForCard.map((rb) => (
                      <BlogCard key={rb.id} blog={rb} />
                    ))}
                  </div>
                )}
              </div>
              
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
