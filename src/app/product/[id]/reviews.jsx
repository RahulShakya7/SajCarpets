// app/product/[id]/reviews.jsx
"use client";

function Star({ filled }) {
  return (
    <svg
      className={`w-4 h-4 ${filled ? "text-product-star fill-current" : "text-gray-300"}`}
      viewBox="0 0 20 21"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.99922 15.3789L14.2742 18.0078C14.3851 18.0751 14.5135 18.1081 14.6432 18.1024C14.7728 18.0968 14.8979 18.0529 15.0025 17.9762C15.1072 17.8996 15.1868 17.7936 15.2313 17.6717C15.2758 17.5498 15.2831 17.4174 15.2523 17.2914L14.0898 12.3859L17.8945 9.10465C17.9915 9.01948 18.0615 8.90776 18.0957 8.78328C18.13 8.65881 18.127 8.52704 18.0872 8.40423C18.0474 8.28143 17.9725 8.17297 17.8718 8.09224C17.771 8.01151 17.6488 7.96205 17.5203 7.94997L12.5273 7.54372L10.6039 2.88747C10.5549 2.76734 10.4712 2.66454 10.3635 2.59218C10.2558 2.51982 10.129 2.48117 9.99922 2.48117C9.86947 2.48117 9.74266 2.51982 9.63497 2.59218C9.52727 2.66454 9.44357 2.76734 9.39453 2.88747L7.4711 7.54372L2.47813 7.94997C2.34873 7.96133 2.22554 8.01057 2.12396 8.09154C2.02239 8.17251 1.94692 8.28161 1.90699 8.40522C1.86707 8.52884 1.86445 8.66147 1.89947 8.78656C1.9345 8.91165 2.0056 9.02365 2.10391 9.10856L5.9086 12.3898L4.7461 17.2914C4.71536 17.4174 4.72269 17.5498 4.76716 17.6717C4.81162 17.7936 4.89122 17.8996 4.9959 17.9762C5.10058 18.0529 5.22564 18.0968 5.35528 18.1024C5.48491 18.1081 5.6133 18.0751 5.72422 18.0078L9.99922 15.3789Z"
        stroke={filled ? "#FFD230" : "#000"}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Reviews({ reviews = [] }) {
  if (!reviews.length) {
    return <p className="text-base font-montserrat text-product-text">No reviews yet.</p>;
  }

  return (
    <div className="space-y-3">
      {reviews.map((r, i) => (
        <div key={i} className="p-3 bg-white rounded border">
          <div className="flex items-center justify-between">
            <p className="font-semibold">{r.user}</p>
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} filled={idx < (r.rating || 0)} />
              ))}
            </div>
          </div>
          <p className="text-gray-700 mt-1">{r.comment}</p>
        </div>
      ))}
    </div>
  );
}
