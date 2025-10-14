
import Link from "next/link";

export default function BlogCard({ blog }) {
  return (
    <Link href={`/blog/${blog.id}`}>
      <div className="cursor-pointer bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-56 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-black">{blog.title}</h3>
          <p className="text-gray-600 text-sm mt-2">{blog.date}</p>
          <p className="text-gray-500 text-sm">{blog.likes} Likes</p>
        </div>
      </div>
    </Link>
  );
}
