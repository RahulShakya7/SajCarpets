// src/data/tempdata.js
// Everything is a NAMED export. No default.

export const categories = [
  { id: 1, name: "Rugs", slug: "rugs", parent_id: null },
  { id: 2, name: "Living Room Rugs", slug: "living-room-rugs", parent_id: 1 },
  { id: 3, name: "Bedroom Rugs", slug: "bedroom-rugs", parent_id: 1 },
];

export const attributes = [
  { id: 1, name: "Color" },
  { id: 2, name: "Size" },
  { id: 3, name: "Material" },
  { id: 4, name: "Pile Height" },
  { id: 5, name: "Shape" },
];

export const attributeValues = [
  { id: 101, value: "Ivory", attribute_id: 1 },
  { id: 102, value: "Grey", attribute_id: 1 },
  { id: 103, value: "Navy", attribute_id: 1 },
  { id: 201, value: "160×230 cm", attribute_id: 2 },
  { id: 202, value: "200×300 cm", attribute_id: 2 },
  { id: 203, value: "240×340 cm", attribute_id: 2 },
  { id: 301, value: "Wool", attribute_id: 3 },
  { id: 302, value: "Polypropylene", attribute_id: 3 },
  { id: 401, value: "10 mm", attribute_id: 4 },
  { id: 402, value: "14 mm", attribute_id: 4 },
  { id: 501, value: "Rectangular", attribute_id: 5 },
  { id: 502, value: "Runner", attribute_id: 5 },
];

export const products = [
  {
    id: 1,
    name: "Arran Hand-Tufted Wool Rug",
    slug: "arran-hand-tufted-wool-rug",
    description:
      "A soft, durable hand-tufted wool rug with a subtle heathered look. Perfect for living spaces.",
    price: 199,
    discount_price: 169,
    stock: 12,
    is_active: true,
    created_at: "2025-08-01T10:00:00Z",
    updated_at: "2025-10-01T10:00:00Z",
    category_id: 2,
  },
  {
    id: 2,
    name: "Skye Flatweave Rug",
    slug: "skye-flatweave-rug",
    description:
      "Low-profile flatweave with subtle stripes—easy to clean and great for high-traffic spaces.",
    price: 129,
    discount_price: null,
    stock: 25,
    is_active: true,
    created_at: "2025-07-15T10:00:00Z",
    updated_at: "2025-09-20T10:00:00Z",
    category_id: 2,
  },
  {
    id: 3,
    name: "Harris Shag Rug",
    slug: "harris-shag-rug",
    description: "Super-plush shag with dense pile for a cozy, luxe feel.",
    price: 249,
    discount_price: 219,
    stock: 7,
    is_active: true,
    created_at: "2025-06-05T10:00:00Z",
    updated_at: "2025-09-10T10:00:00Z",
    category_id: 3,
  },
];

// 👉 All images are local under /public/images/
export const productImages = [
  { id: 1001, product_id: 1, image: "/images/carpet1.jpg", alt_text: "Arran rug in living room" },
  { id: 1002, product_id: 1, image: "/images/carpet2.jpg", alt_text: "Tufted detail" },
  { id: 1003, product_id: 1, image: "/images/carpet3.jpg", alt_text: "Rug corner" },
  { id: 2001, product_id: 2, image: "/images/carpet4.jpg", alt_text: "Skye flatweave" },
  { id: 3001, product_id: 3, image: "/images/carpet1.jpg", alt_text: "Harris shag" },
];

export const productAttributeValues = [
  { id: 1, product_id: 1, attributevalue_id: 101 },
  { id: 2, product_id: 1, attributevalue_id: 201 },
  { id: 3, product_id: 1, attributevalue_id: 202 },
  { id: 4, product_id: 1, attributevalue_id: 301 },
  { id: 5, product_id: 1, attributevalue_id: 401 },
  { id: 6, product_id: 1, attributevalue_id: 501 },
  { id: 7, product_id: 2, attributevalue_id: 102 },
  { id: 8, product_id: 2, attributevalue_id: 201 },
  { id: 9, product_id: 2, attributevalue_id: 302 },
  { id: 10, product_id: 2, attributevalue_id: 502 },
  { id: 11, product_id: 3, attributevalue_id: 103 },
  { id: 12, product_id: 3, attributevalue_id: 203 },
  { id: 13, product_id: 3, attributevalue_id: 302 },
  { id: 14, product_id: 3, attributevalue_id: 402 },
  { id: 15, product_id: 3, attributevalue_id: 501 },
];

export const reviews = [
  { id: 1, product_id: 1, user: "Alice", rating: 5, comment: "Excellent quality—dense and soft.", created_at: "2025-09-01T12:00:00Z" },
  { id: 2, product_id: 1, user: "Bob", rating: 4, comment: "Premium look; slight shedding initially.", created_at: "2025-09-10T09:30:00Z" },
  { id: 3, product_id: 2, user: "Charlie", rating: 4, comment: "Low pile, easy to clean.", created_at: "2025-08-25T14:45:00Z" },
];
