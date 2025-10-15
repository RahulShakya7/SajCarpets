// data/buildProductForUI.js
import {
    attributes,
    attributeValues,
    categories,
    productAttributeValues,
    productImages,
    products,
    reviews,
} from "../data/tempdata";

// grab category chain (child → parent)
function getCategoryTrail(category_id) {
  const trail = [];
  let current = categories.find((c) => c.id === category_id);
  while (current) {
    trail.unshift(current); // build from top → down
    current = current.parent_id
      ? categories.find((c) => c.id === current.parent_id)
      : null;
  }
  return trail;
}

// collect images for a product
function getImages(product_id) {
  return productImages
    .filter((pi) => pi.product_id === product_id)
    .map((pi) => ({ src: pi.image, alt: pi.alt_text || "" }));
}

// attributes grouped (e.g., { Color: ["Ivory"], Size: ["160×230 cm", ...] })
function getAttributeGroups(product_id) {
  const rows = productAttributeValues.filter((pav) => pav.product_id === product_id);
  const groups = {};
  rows.forEach((r) => {
    const val = attributeValues.find((av) => av.id === r.attributevalue_id);
    if (!val) return;
    const attr = attributes.find((a) => a.id === val.attribute_id);
    if (!attr) return;
    if (!groups[attr.name]) groups[attr.name] = [];
    groups[attr.name].push(val.value);
  });
  return groups;
}

// simple “similar” = same category, different product
function getSimilar(product) {
  return products
    .filter((p) => p.id !== product.id && p.category_id === product.category_id && p.is_active)
    .slice(0, 8)
    .map((p) => {
      const firstImg = getImages(p.id)[0]?.src ||
        "https://via.placeholder.com/600x400?text=Rug";
      return {
        id: p.id,
        title: p.name,
        image: firstImg,
        price: `£${(p.discount_price ?? p.price).toFixed(2)}`,
        originalPrice: p.discount_price ? `£${p.price.toFixed(2)}` : null,
      };
    });
}

// reviews for product
function getReviews(product_id) {
  return reviews.filter((r) => r.product_id === product_id);
}

// MAIN: build UI object your page can render
export function buildProductForUI(productId) {
  const p = products.find((x) => String(x.id) === String(productId));
  if (!p) return null;

  const imgs = getImages(p.id);
  const heroImages = imgs.map((i) => i.src);
  const categoriesTrail = getCategoryTrail(p.category_id);
  const attributesGrouped = getAttributeGroups(p.id);
  const productReviews = getReviews(p.id);

  const rating =
    productReviews.length > 0
      ? Math.round(
          (productReviews.reduce((sum, r) => sum + (r.rating || 0), 0) /
            productReviews.length) * 10
        ) / 10
      : 0;

  return {
    id: p.id,
    title: p.name,
    slug: p.slug,
    description: p.description,
    details:
      "Care: Vacuum weekly; rotate every 6–12 months. Suitable for underfloor heating.",
    price: p.discount_price ?? p.price,         // what you show as current price
    originalPrice: p.discount_price ? p.price : null,
    inStock: (p.stock ?? 0) > 0,
    categories: categoriesTrail.map((c) => c.name), // ["Rugs","Living Room Rugs"]
    heroImages, // array of URLs for your gallery
    attributes: attributesGrouped, // { Color: ["Ivory"], Size: ["160×230 cm","200×300 cm"], ... }
    rating,
    reviewsCount: productReviews.length,
    reviews: productReviews.map((r) => ({
      user: r.user,
      rating: r.rating,
      comment: r.comment,
      created_at: r.created_at,
    })),
    similar: getSimilar(p), // array -> your ProductCard
  };
}
