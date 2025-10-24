// src/app/product/[id]/page.jsx
import { notFound } from "next/navigation";
import { productImages, products, reviews } from "../../../data/tempdata";
import ProductDetailsClient from "./productdetailsclient";

export function generateStaticParams() {
  // Pre-render all product ids from tempdata
  return products.map((p) => ({ id: String(p.id) }));
}

export default async function ProductPage({ params }) {
  // Next 15: params is async
  const { id } = await params;
  const pid = String(id);

  const base = products.find((p) => String(p.id) === pid);
  if (!base) return notFound();

  const heroImages = productImages
    .filter((img) => img.product_id === base.id)
    .map((img) => img.image);

  const productReviews = reviews
    .filter((r) => r.product_id === base.id)
    .map(({ user, rating, comment }) => ({ user, rating, comment }));

  // Build the shape your client expects
  const product = {
    id: base.id,
    title: base.name,
    description: base.description,
    price: base.discount_price ?? base.price,
    originalPrice: base.discount_price ? base.price : null,
    inStock: base.stock > 0,
    heroImages: heroImages.length ? heroImages : ["/images/carpet1.jpg"],
    rating: productReviews.length ? productReviews.reduce((a, r) => a + r.rating, 0) / productReviews.length : 4.5,
    reviewsCount: productReviews.length,
    reviews: productReviews,
    // simple similar list: other products
    similar: products
      .filter((p) => p.id !== base.id)
      .slice(0, 4)
      .map((p, i) => ({
        id: p.id,
        title: p.name,
        image: productImages.find((im) => im.product_id === p.id)?.image || `/images/carpet${(i % 4) + 1}.jpg`,
        price: `${(p.discount_price ?? p.price).toFixed(2)}`,
        originalPrice: p.discount_price ? `£${p.price.toFixed(2)}` : null,
      })),
  };

  return <ProductDetailsClient product={product} />;
}
