"use client";

import { useEffect, useState } from "react";

/* ---------------- Star Rating ---------------- */
function StarRating({ rating = 4, totalStars = 5, size = "w-5 h-5" }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1">
        {Array.from({ length: totalStars }).map((_, index) => (
          <svg
            key={index}
            className={`${size} ${index < rating ? "text-product-star fill-current" : "text-gray-300"}`}
            viewBox="0 0 20 21"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.99922 15.3789L14.2742 18.0078C14.3851 18.0751 14.5135 18.1081 14.6432 18.1024C14.7728 18.0968 14.8979 18.0529 15.0025 17.9762C15.1072 17.8996 15.1868 17.7936 15.2313 17.6717C15.2758 17.5498 15.2831 17.4174 15.2523 17.2914L14.0898 12.3859L17.8945 9.10465C17.9915 9.01948 18.0615 8.90776 18.0957 8.78328C18.13 8.65881 18.127 8.52704 18.0872 8.40423C18.0474 8.28143 17.9725 8.17297 17.8718 8.09224C17.771 8.01151 17.6488 7.96205 17.5203 7.94997L12.5273 7.54372L10.6039 2.88747C10.5549 2.76734 10.4712 2.66454 10.3635 2.59218C10.2558 2.51982 10.129 2.48117 9.99922 2.48117C9.86947 2.48117 9.74266 2.51982 9.63497 2.59218C9.52727 2.66454 9.44357 2.76734 9.39453 2.88747L7.4711 7.54372L2.47813 7.94997C2.34873 7.96133 2.22554 8.01057 2.12396 8.09154C2.02239 8.17251 1.94692 8.28161 1.90699 8.40522C1.86707 8.52884 1.86445 8.66147 1.89947 8.78656C1.9345 8.91165 2.0056 9.02365 2.10391 9.10856L5.9086 12.3898L4.7461 17.2914C4.71536 17.4174 4.72269 17.5498 4.76716 17.6717C4.81162 17.7936 4.89122 17.8996 4.9959 17.9762C5.10058 18.0529 5.22564 18.0968 5.35528 18.1024C5.48491 18.1081 5.6133 18.0751 5.72422 18.0078L9.99922 15.3789Z"
              stroke={index < rating ? "#FFD230" : "#000"}
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Countdown Timer ---------------- */
function CountdownTimer() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      // demo zeros; replace with real countdown if needed
      setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { value: time.days, label: "Days" },
    { value: time.hours, label: "Hours" },
    { value: time.minutes, label: "Mins" },
    { value: time.seconds, label: "Secs" },
  ];

  return (
    <div className="flex items-center gap-3">
      {timeBlocks.map((block, index) => (
        <div
          key={index}
          className="bg-product-gray border-r border-product-border rounded-lg px-6 py-4 flex flex-col items-center"
        >
          <div className="text-product-orange text-lg font-montserrat leading-7 uppercase">
            {String(block.value).padStart(2, "0")}
          </div>
          <div className="text-product-orange text-xs font-montserrat leading-7 uppercase">
            {block.label}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------------- Product Card (Similar) ---------------- */
function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg p-4 flex flex-col gap-3">
      <img src={product.image} alt={product.title} className="w-full h-70 object-cover rounded-md" />
      <div className="flex items-center gap-3">
        <StarRating rating={4} />
        <div className="flex items-center gap-1">
          <span className="text-sm font-open-sans text-black">12 Reviews</span>
          <svg className="w-5 h-5" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17.168 8.10574L10.918 14.3557L4.66797 8.10574"
              stroke="black"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <h3 className="text-xl font-open-sans text-black uppercase leading-6">{product.title}</h3>
      <div className="flex items-end gap-3">
        <span className="text-2xl font-open-sans font-bold text-product-orange leading-8">£24.99 m2</span>
        <span className="text-base font-open-sans text-black line-through">£24.99 m2</span>
      </div>
    </div>
  );
}

/* ---------------- Page ---------------- */
export default function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState("description");

  const productImages = [
    "https://api.builder.io/api/v1/image/assets/TEMP/f839fa5a4a3704776e443f016184faa1506663c6?width=1192",
    "https://api.builder.io/api/v1/image/assets/TEMP/58393e257ed7b276f3a50c64044d47584f00fe83?width=262",
    "https://api.builder.io/api/v1/image/assets/TEMP/626d3bbf1551f6f82a53bc103b19fcbf0c016515?width=262",
    "https://api.builder.io/api/v1/image/assets/TEMP/3204134b0b48126122c2ee581ecea1c0996de77f?width=262",
    "https://api.builder.io/api/v1/image/assets/TEMP/57398b4d5b47cd409e0b45b91ddb9d7f393e02cc?width=262",
  ];

  const similarProducts = [
    { id: 1, title: "Light Square Carpet", image: "https://api.builder.io/api/v1/image/assets/TEMP/8bb2c6c2c0faa4a7877cee1d8ad41dffb317ab5c?width=569", price: "£24.99", originalPrice: "£24.99" },
    { id: 2, title: "Light Square Carpet", image: "https://api.builder.io/api/v1/image/assets/TEMP/fef8822f0db49bc0a8522311d457f287e994ef88?width=569", price: "£24.99", originalPrice: "£24.99" },
    { id: 3, title: "Light Square Carpet", image: "https://api.builder.io/api/v1/image/assets/TEMP/4ca2f6d162625de347237ce864b7b3753248e416?width=569", price: "£24.99", originalPrice: "£24.99" },
    { id: 4, title: "Light Square Carpet", image: "https://api.builder.io/api/v1/image/assets/TEMP/31f9365cd151c2a9af782501b18db1ba8c5d65e4?width=569", price: "£24.99", originalPrice: "£24.99" },
    { id: 5, title: "Light Square Carpet", image: "https://api.builder.io/api/v1/image/assets/TEMP/cff1c119b22152aef32b0c75aa92fdab2b59a303?width=569", price: "£24.99", originalPrice: "£24.99" },
    { id: 6, title: "Light Square Carpet", image: "https://api.builder.io/api/v1/image/assets/TEMP/c896f0abd898a4d66bf079a6f882fee3bfdbd1b0?width=569", price: "£24.99", originalPrice: "£24.99" },
    { id: 7, title: "Light Square Carpet", image: "https://api.builder.io/api/v1/image/assets/TEMP/de896b0e17d5da3a339b15dcc87ee8c127b5af29?width=569", price: "£24.99", originalPrice: "£24.99" },
    { id: 8, title: "Light Square Carpet", image: "https://api.builder.io/api/v1/image/assets/TEMP/cb014280f05b1ced936b6c79f799b294e771f6a1?width=569", price: "£24.99", originalPrice: "£24.99" },
  ];

  const socialIcons = [
    /* Twitter */ (
      <svg className="w-4 h-4" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" key="tw">
        <path d="M15.4054 3.73277C15.0066 4.3161 14.5245 4.81313 13.959 5.22384C13.9649 5.30717 13.9679 5.43217 13.9679 5.59884C13.9679 6.37265 13.8548 7.14497 13.6286 7.91581C13.4024 8.68664 13.0587 9.42622 12.5974 10.1346C12.1361 10.8429 11.587 11.4694 10.9501 12.014C10.3132 12.5587 9.54529 12.9932 8.64648 13.3176C7.74767 13.642 6.78637 13.8042 5.76256 13.8042C4.14946 13.8042 2.67327 13.3727 1.33398 12.5096C1.54232 12.5334 1.77446 12.5453 2.03041 12.5453C3.3697 12.5453 4.56315 12.1346 5.61077 11.3131C4.98577 11.3012 4.42625 11.1093 3.9322 10.7372C3.43815 10.3652 3.09887 9.89051 2.91434 9.31313C3.11077 9.34289 3.29232 9.35777 3.45898 9.35777C3.71494 9.35777 3.96791 9.32503 4.21791 9.25956C3.55125 9.12265 2.99916 8.79081 2.56166 8.26402C2.12416 7.73723 1.90541 7.12563 1.90541 6.4292V6.39348C2.31017 6.61968 2.7447 6.7417 3.20898 6.75956C2.81613 6.49765 2.50363 6.15539 2.27148 5.73277C2.03934 5.31015 1.92327 4.85182 1.92327 4.35777C1.92327 3.83396 2.05422 3.34884 2.31613 2.90241C3.03637 3.78932 3.91285 4.49914 4.94559 5.03188C5.97833 5.56462 7.08398 5.86075 8.26256 5.92027C8.21494 5.69408 8.19113 5.47384 8.19113 5.25956C8.19113 4.46194 8.47238 3.78188 9.03488 3.21938C9.59738 2.65688 10.2774 2.37563 11.0751 2.37563C11.9084 2.37563 12.6108 2.6792 13.1822 3.28634C13.831 3.16134 14.4411 2.9292 15.0126 2.58991C14.7923 3.27444 14.3697 3.8042 13.7447 4.1792C14.2983 4.11967 14.8518 3.97087 15.4054 3.73277Z" fill="#555555" />
      </svg>
    ),
    /* Facebook */ (
      <svg className="w-2 h-4" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg" key="fb">
        <path d="M9.27093 0.197143V2.55429H7.86914C7.35724 2.55429 7.012 2.66143 6.83343 2.87571C6.65486 3.09 6.56557 3.41143 6.56557 3.84V5.5275H9.18164L8.83343 8.17036H6.56557V14.9471H3.83343V8.17036H1.55664V5.5275H3.83343V3.58107C3.83343 2.47393 4.14295 1.6153 4.762 1.00518C5.38105 0.39506 6.20545 0.0900002 7.23521 0.0900002C8.11021 0.0900002 8.78878 0.125714 9.27093 0.197143Z" fill="#555555" />
      </svg>
    ),
    /* Google+ */ (
      <svg className="w-5 h-4" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg" key="g+">
        <path d="M13.594 8.24179C13.594 9.47988 13.3351 10.5826 12.8172 11.5498C12.2994 12.5171 11.5613 13.273 10.603 13.8177C9.64462 14.3623 8.54641 14.6346 7.30831 14.6346C6.42141 14.6346 5.5732 14.462 4.76367 14.1168C3.95415 13.7715 3.25772 13.3073 2.67439 12.7239C2.09105 12.1406 1.62677 11.4442 1.28153 10.6346C0.936291 9.82512 0.763672 8.97691 0.763672 8.09C0.763672 7.2031 0.936291 6.35488 1.28153 5.54536C1.62677 4.73583 2.09105 4.0394 2.67439 3.45607C3.25772 2.87274 3.95415 2.40845 4.76367 2.06321C5.5732 1.71798 6.42141 1.54536 7.30831 1.54536C9.0107 1.54536 10.472 2.11679 11.6922 3.25964L9.91546 4.965C9.21903 4.29238 8.34998 3.95607 7.30831 3.95607C6.57617 3.95607 5.89909 4.1406 5.27706 4.50964C4.65504 4.87869 4.16248 5.38018 3.79939 6.01411C3.43629 6.64804 3.25474 7.34 3.25474 8.09C3.25474 8.84 3.43629 9.53196 3.79939 10.1659C4.16248 10.7998 4.65504 11.3013 5.27706 11.6704C5.89909 12.0394 6.57617 12.2239 7.30831 12.2239C7.80236 12.2239 8.25623 12.1555 8.66992 12.0186C9.08361 11.8817 9.42439 11.7105 9.69224 11.5052C9.9601 11.2998 10.1937 11.0662 10.3931 10.8043C10.5925 10.5424 10.7384 10.2954 10.8306 10.0632C10.9229 9.83107 10.9869 9.61083 11.0226 9.4025H7.30831V7.1525H13.4869C13.5583 7.5275 13.594 7.8906 13.594 8.24179Z" fill="#555555" />
        <path d="M21.3351 7.1525V9.0275H19.469V10.8936H17.594V9.0275H15.728V7.1525H17.594V5.28643H19.469V7.1525H21.3351Z" fill="#555555" />
      </svg>
    ),
    /* Pinterest */ (
      <svg className="w-4 h-4" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg" key="pin">
        <path d="M13.0368 4.64804C13.0368 4.64804 13.1901 4.91068 13.4967 5.43598C13.8032 5.96128 13.9565 6.84595 13.9565 8.09C13.9565 9.33405 13.6499 10.4814 13.0368 11.532C12.4237 12.5826 11.5919 13.4144 10.5413 14.0275C9.4907 14.6406 8.34338 14.9471 7.09933 14.9471C6.43862 14.9471 5.78981 14.8519 5.1529 14.6614C5.50409 14.1079 5.73624 13.6198 5.84933 13.1971C5.9029 12.9948 6.06362 12.3668 6.33147 11.3132C6.45052 11.5454 6.66778 11.7463 6.98326 11.9159C7.29874 12.0855 7.63802 12.1704 8.00112 12.1704C8.72135 12.1704 9.36421 11.9665 9.92969 11.5588C10.4952 11.151 10.9327 10.59 11.2422 9.87571C11.5517 9.16143 11.7065 8.35786 11.7065 7.465C11.7065 6.78643 11.5294 6.14952 11.1752 5.55429C10.8211 4.95905 10.3077 4.47393 9.63505 4.09893C8.96243 3.72393 8.2035 3.53643 7.35826 3.53643C6.73326 3.53643 6.14993 3.62274 5.60826 3.79536C5.06659 3.96798 4.60677 4.19714 4.22879 4.48286C3.85082 4.76857 3.52641 5.09744 3.25558 5.46946C2.98475 5.84149 2.78534 6.2269 2.65737 6.62571C2.52939 7.02452 2.4654 7.42333 2.4654 7.82214C2.4654 8.44119 2.58445 8.98583 2.82254 9.45607C3.06064 9.92631 3.40885 10.2567 3.86719 10.4471C4.04576 10.5186 4.15885 10.459 4.20647 10.2686C4.21838 10.2269 4.24219 10.1346 4.2779 9.99179C4.31362 9.84893 4.33743 9.75964 4.34933 9.72393C4.38505 9.58702 4.35231 9.45905 4.25112 9.34C3.94754 8.97691 3.79576 8.5275 3.79576 7.99179C3.79576 7.09298 4.10677 6.32065 4.7288 5.67482C5.35082 5.02899 6.16481 4.70607 7.17076 4.70607C8.06957 4.70607 8.77046 4.95012 9.27344 5.43821C9.77641 5.92631 10.0279 6.56024 10.0279 7.34C10.0279 8.35191 9.82403 9.21202 9.4163 9.92036C9.00856 10.6287 8.48624 10.9829 7.84933 10.9829C7.48624 10.9829 7.19457 10.8534 6.97433 10.5945C6.75409 10.3355 6.68564 10.0245 6.76897 9.66143C6.81659 9.4531 6.89546 9.17482 7.00558 8.82661C7.1157 8.47839 7.20499 8.17185 7.27344 7.90696C7.34189 7.64208 7.37612 7.41738 7.37612 7.23286C7.37612 6.93524 7.29576 6.68821 7.13505 6.49179C6.97433 6.29536 6.74516 6.19714 6.44755 6.19714C6.0785 6.19714 5.766 6.36679 5.51005 6.70607C5.25409 7.04536 5.12612 7.46798 5.12612 7.97393C5.12612 8.40845 5.20052 8.77155 5.34933 9.06321L4.4654 12.7954C4.36421 13.212 4.32552 13.7388 4.34933 14.3757C3.12314 13.834 2.13207 12.9977 1.37612 11.8668C0.620164 10.7358 0.242188 9.47691 0.242188 8.09C0.242188 6.84595 0.548735 5.69863 1.16183 4.64804C1.77493 3.59744 2.60677 2.7656 3.65737 2.1525C4.70796 1.5394 5.85528 1.23286 7.09933 1.23286C8.34338 1.23286 9.4907 1.5394 10.5413 2.1525C11.5919 2.7656 12.4237 3.59744 13.0368 4.64804Z" fill="#555555" />
      </svg>
    ),
    /* Instagram */ (
      <svg className="w-4 h-4" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg" key="ig">
        <path d="M9.33454 9.70607C9.33454 9.70607 9.44615 9.59446 9.66936 9.37125C9.89258 9.14804 10.0042 8.72095 10.0042 8.09C10.0042 7.45905 9.78097 6.92036 9.33454 6.47393C8.88811 6.0275 8.34942 5.80429 7.71847 5.80429C7.08752 5.80429 6.54883 6.0275 6.1024 6.47393C5.65597 6.92036 5.43276 7.45905 5.43276 8.09C5.43276 8.72095 5.65597 9.25964 6.1024 9.70607C6.54883 10.1525 7.08752 10.3757 7.71847 10.3757C8.34942 10.3757 8.88811 10.1525 9.33454 9.70607Z" fill="#555555" />
      </svg>
    ),
    /* Vimeo */ (
      <svg className="w-4 h-4" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" key="vi">
        <path d="M15.7377 4.71502C15.6782 6.11978 14.6901 8.05728 12.7734 10.5275C10.7913 13.093 9.11868 14.3757 7.75558 14.3757C6.91034 14.3757 6.19606 13.593 5.61272 12.0275C5.35082 11.0751 4.95796 9.64061 4.43415 7.72395C4.00558 6.16442 3.53832 5.38466 3.03237 5.38466C2.92522 5.38466 2.54725 5.61085 1.89844 6.06323L1.21094 5.18823C1.35379 5.06323 1.67522 4.77603 2.17522 4.32662C2.67522 3.87722 3.06213 3.53347 3.33594 3.29537C4.26451 2.47395 4.98177 2.03942 5.48772 1.9918C6.0532 1.93823 6.50856 2.10341 6.8538 2.48734C7.19903 2.87127 7.4401 3.47692 7.57701 4.3043C7.83891 6.01264 8.03534 7.12276 8.1663 7.63466C8.49368 9.1168 8.85082 9.85787 9.23772 9.85787C9.5413 9.85787 9.99963 9.37871 10.6127 8.42037C11.2139 7.46204 11.5383 6.7299 11.5859 6.22395C11.6633 5.39657 11.3389 4.98287 10.6127 4.98287C10.2734 4.98287 9.91332 5.06026 9.53237 5.21502C10.2467 2.87573 11.6127 1.73883 13.6306 1.8043C15.1246 1.85192 15.827 2.82216 15.7377 4.71502Z" fill="#555555" />
      </svg>
    ),
  ];

  return (
    <div className="min-h-screen bg-white font-open-sans">
      {/* Product Detail Section */}
      <div className="px-6 py-18 sm:px-12 sm:py-16 lg:px-24 lg:py-18 xl:px-75 xl:py-18">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Product Images */}
          <div className="w-full lg:w-[596px] flex flex-col gap-6">
            <div className="relative">
              <img
                src={productImages[selectedImage]}
                alt="Product"
                className="w-full h-[400px] lg:h-[717px] object-cover rounded-lg"
              />

              {/* Zoom Icon */}
              <div className="absolute bottom-6 right-6 w-12 h-12 bg-product-border-light rounded flex items-center justify-center">
                <svg className="w-3 h-4" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.17248 8.54887C6.22674 8.60313 6.25387 8.66552 6.25387 8.73606C6.25387 8.80659 6.22674 8.86898 6.17248 8.92324L3.47053 11.6252L4.64246 12.7971C4.74555 12.9002 4.79709 13.0223 4.79709 13.1633C4.79709 13.3044 4.74555 13.4265 4.64246 13.5296C4.53938 13.6327 4.4173 13.6842 4.27624 13.6842H0.630233C0.489167 13.6842 0.367091 13.6327 0.264005 13.5296C0.160918 13.4265 0.109375 13.3044 0.109375 13.1633V9.51734C0.109375 9.37628 0.160918 9.2542 0.264005 9.15112C0.367091 9.04803 0.489167 8.99649 0.630233 8.99649C0.771298 8.99649 0.893374 9.04803 0.996461 9.15112L2.16839 10.323L4.87034 7.6211C4.92459 7.56684 4.98699 7.53971 5.05752 7.53971C5.12805 7.53971 5.19045 7.56684 5.24471 7.6211L6.17248 8.54887ZM12.61 1.70448V5.35048C12.61 5.49155 12.5584 5.61362 12.4553 5.71671C12.3522 5.8198 12.2302 5.87134 12.0891 5.87134C11.948 5.87134 11.826 5.8198 11.7229 5.71671L10.5509 4.54478L7.84899 7.24673C7.79474 7.30099 7.73234 7.32811 7.66181 7.32811C7.59128 7.32811 7.52888 7.30099 7.47463 7.24673L6.54685 6.31895C6.49259 6.2647 6.46547 6.2023 6.46547 6.13177C6.46547 6.06124 6.49259 5.99884 6.54685 5.94459L9.2488 3.24264L8.07687 2.07071C7.97378 1.96762 7.92224 1.84555 7.92224 1.70448C7.92224 1.56341 7.97378 1.44134 8.07687 1.33825C8.17995 1.23517 8.30203 1.18362 8.4431 1.18362H12.0891C12.2302 1.18362 12.3522 1.23517 12.4553 1.33825C12.5584 1.44134 12.61 1.56341 12.61 1.70448Z"
                    fill="#B23017"
                  />
                </svg>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-6 overflow-x-auto">
              {productImages.slice(1).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-32 h-44 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => setSelectedImage(index + 1)}
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex-1 w-full flex flex-col gap-4">
            {/* Title + Arrows */}
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-open-sans font-bold text-product-text leading-8">Classic Chair Wodden</h1>
              <div className="flex gap-2">
                <button className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center">
                  <svg className="w-1 h-4" viewBox="0 0 6 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.54073 4.64795C5.59643 4.70365 5.62428 4.7677 5.62428 4.84011C5.62428 4.91252 5.59643 4.97658 5.54073 5.03228L2.25725 8.31576L5.54073 11.5992C5.59643 11.6549 5.62428 11.719 5.62428 11.7914C5.62428 11.8638 5.59643 11.9279 5.54073 11.9836L5.12299 12.4013C5.06729 12.457 5.00323 12.4849 4.93082 12.4849C4.85841 12.4849 4.79436 12.457 4.73866 12.4013L0.845268 8.50792C0.789568 8.45222 0.761719 8.38817 0.761719 8.31576C0.761719 8.24335 0.789568 8.1793 0.845268 8.1236L4.73866 4.2302C4.79436 4.1745 4.85841 4.14666 4.93082 4.14666C5.00323 4.14666 5.06729 4.1745 5.12299 4.2302L5.54073 4.64795Z" fill="#B23017" />
                  </svg>
                </button>
                <button className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center">
                  <svg className="w-1 h-4" viewBox="0 0 6 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.21763 8.13827C5.27344 8.19407 5.30134 8.25825 5.30134 8.33079C5.30134 8.40334 5.27344 8.46751 5.21763 8.52332L1.31696 12.424C1.26116 12.4798 1.19699 12.5077 1.12444 12.5077C1.0519 12.5077 0.987723 12.4798 0.93192 12.424L0.513393 12.0055C0.457589 11.9497 0.429688 11.8855 0.429688 11.8129C0.429688 11.7404 0.457589 11.6762 0.513393 11.6204L3.80301 8.33079L0.513393 5.04117C0.457589 4.98537 0.429688 4.9212 0.429688 4.84865C0.429688 4.77611 0.457589 4.71193 0.513393 4.65613L0.93192 4.2376C0.987723 4.1818 1.0519 4.1539 1.12444 4.1539C1.19699 4.1539 1.26116 4.1818 1.31696 4.2376L5.21763 8.13827Z" fill="#B23017" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <StarRating rating={4} />
              <span className="text-base font-montserrat text-product-text">(1 customer review)</span>
            </div>

            {/* Price */}
            <div className="mb-4">
              <div className="text-2xl font-montserrat text-product-text">
                <span className="font-normal">$66.00 </span>
                <span className="line-through">$77.00</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-base font-montserrat text-product-text leading-6 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales nunc ut convallis porttitor. Nulla
              volutpat lectus ut mi laoreet, et egestas dolor lobortis. Duis ut erat nulla. Aenean sed urna a odio
              consectetur efficitur quis eget eros.
            </p>

            {/* Countdown */}
            <div className="mb-6">
              <CountdownTimer />
            </div>

            {/* Stock + Qty + CTA */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xl font-open-sans font-bold text-gray-400">In Stock</span>
              <div className="flex items-center border border-product-border rounded-lg">
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  className="w-30 px-3 py-4 text-center text-xl font-montserrat border-0 bg-transparent outline-none"
                  min="1"
                />
              </div>
              <button className="bg-product-orange text-white px-6 py-3 rounded-lg text-xl font-open-sans font-bold uppercase hover:bg-opacity-90 transition-colors">
                Enquire Now
              </button>
            </div>

            {/* Wishlist / Compare */}
            <div className="flex gap-6 mb-6">
              <button className="flex items-center gap-2 border border-product-border-light bg-white px-6 py-3 rounded-lg text-base font-open-sans text-gray-400 hover:border-gray-400 transition-colors">
                <span>Wishlist</span>
                <svg className="w-5 h-5" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10 17.59C10 17.59 1.875 13.215 1.875 8.05872C1.875 6.93983 2.31947 5.86678 3.11064 5.07561C3.90181 4.28444 4.97487 3.83997 6.09375 3.83997C7.85859 3.83997 9.37031 4.80168 10 6.33997C10.6297 4.80168 12.1414 3.83997 13.9062 3.83997C15.0251 3.83997 16.0982 4.28444 16.8894 5.07561C17.6805 5.86678 18.125 6.93983 18.125 8.05872C18.125 13.215 10 17.59 10 17.59Z"
                    stroke="#EC003F"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="border border-product-border-light bg-white px-6 py-3 rounded-lg text-base font-open-sans text-gray-400 hover:border-gray-400 transition-colors">
                Compare
              </button>
            </div>

            {/* Categories */}
            <div className="flex items-center gap-2 border-t border-b border-product-border py-4 mb-6">
              <span className="text-sm font-montserrat font-bold text-product-text uppercase">Categories:</span>
              <span className="text-sm font-montserrat text-product-text">Carpet</span>
              <span className="text-sm font-montserrat font-bold text-product-text">,</span>
              <span className="text-sm font-montserrat text-product-text">Hand Made</span>
            </div>

            {/* Social */}
            <div className="flex items-center gap-5">
              <span className="text-sm font-montserrat font-bold text-product-text uppercase">
                Share this product
              </span>
              <div className="flex gap-5">
                {socialIcons.map((icon, i) => (
                  <button key={i} className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity">
                    {icon}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-t border-b border-gray-200">
        <div className="px-6 sm:px-12 lg:px-24 xl:px-75">
          <div className="bg-product-tab-bg rounded-lg p-4 flex justify-center mb-8">
            <div className="flex gap-12">
              <button
                onClick={() => setActiveTab("description")}
                className={`text-xl font-montserrat font-medium capitalize leading-7 ${
                  activeTab === "description" ? "text-product-text" : "text-gray-600"
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab("reviews")}
                className={`text-xl font-montserrat font-medium capitalize leading-7 ${
                  activeTab === "reviews" ? "text-product-text" : "text-gray-600"
                }`}
              >
                Reviews (1)
              </button>
            </div>
          </div>

          <div className="pb-8">
            {activeTab === "description" && (
              <div className="space-y-4">
                <p className="text-base font-montserrat text-product-text leading-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor.
                  Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus
                  mi, vulputate adipiscing cursus eu, suscipit id nulla.
                </p>
                <p className="text-base font-montserrat text-product-text leading-6">
                  Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros
                  eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis
                  vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque.
                </p>
              </div>
            )}
            {activeTab === "reviews" && (
              <div className="text-base font-montserrat text-product-text">Customer reviews will be displayed here.</div>
            )}
          </div>
        </div>
      </div>

      {/* Similar Products */}
      <div className="px-6 py-16 sm:px-12 lg:px-24 xl:px-75">
        <h2 className="text-center text-5xl font-open-sans font-bold text-black leading-[120%] mb-12">
          Similar Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {similarProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
