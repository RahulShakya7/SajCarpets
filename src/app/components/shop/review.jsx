const Reviews = ({ reviews }) => (
  <div className="flex flex-col gap-4 mt-4">
    {reviews.map((review, idx) => (
      <div key={idx} className="bg-white p-4 rounded shadow">
        <div className="flex items-center justify-between">
          <h4 className="font-bold">{review.user}</h4>
          <StarRating rating={review.rating} size="w-4 h-4" />
        </div>
        <p className="mt-2 text-gray-600">{review.comment}</p>
      </div>
    ))}
  </div>
);