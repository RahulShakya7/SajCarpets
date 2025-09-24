
export default function BlogCard({ blog }) {
  return (
    <div className="flex flex-col items-start gap-3 w-full">
      {/* Blog Image */}
      <div
        className="h-[248px] rounded-xl bg-cover bg-center w-full"
        style={{ backgroundImage: `url(${blog.image})` }}
      />

      {/* Blog Content */}
      <div className="flex flex-col items-start gap-3 w-full">
        {/* Date & Likes */}
        <div className="flex items-center gap-3 w-full">
          <div className="text-lg text-gray-700">{blog.date}</div>
          <div className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
          <div className="text-lg text-gray-700">{blog.likes} Likes</div>
        </div>

        {/* Title */}
        <p className="text-2xl font-semibold text-black">{blog.title}</p>

        {/* Read More */}
        <div className="text-primary text-xl underline cursor-pointer hover:text-grey hover:scale-105 transition-all duration-200">
          Read More
        </div>
      </div>    
    </div>
  );
}
