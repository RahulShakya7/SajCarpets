// keyed by id as strings
const blogData = {
  "1": {
    id: 1,
    slug: "ultimate-guide-choosing-carpet",
    title: "The Ultimate Guide to Choosing Your Perfect Carpet",
    displayDate: "8th August, 2025",
    date: "8th August, 2025",              // added for BlogCard convenience
    likes: 25,
    coverImage: "https://c.animaapp.com/ypxcOp9T/img/image-9.svg",
    image: "https://c.animaapp.com/ypxcOp9T/img/image-9.svg", // for BlogCard
    contentHtml: `
      <p>Choosing the right carpet can redefine a room—adding warmth, texture, and acoustic comfort. This guide breaks down fibers, pile types, sizing, and care so you can shop with confidence.</p>
      <h2 class="text-2xl font-semibold mt-8 mb-3">1) Know Your Fibers</h2>
      <ul class="list-disc pl-6 space-y-1">
        <li><strong>Wool:</strong> Natural, resilient, luxurious feel.</li>
        <li><strong>Nylon:</strong> Durable and often stain-resistant.</li>
        <li><strong>Polyester (PET):</strong> Soft, colorfast, budget-friendly.</li>
        <li><strong>Olefin:</strong> Moisture resistant; better for low traffic.</li>
      </ul>
      <h2 class="text-2xl font-semibold mt-8 mb-3">2) Pile & Construction</h2>
      <p><strong>Cut pile</strong> feels plush; <strong>loop pile</strong> hides footprints; <strong>cut & loop</strong> gives subtle patterning.</p>
      <h2 class="text-2xl font-semibold mt-8 mb-3">3) Size & Layout</h2>
      <p>Front legs of furniture on the rug is a safe rule. Common sizes: <em>160×230 cm</em>, <em>200×300 cm</em>, <em>240×340 cm</em>.</p>
      <h2 class="text-2xl font-semibold mt-8 mb-3">4) Care</h2>
      <ol class="list-decimal pl-6 space-y-1">
        <li>Vacuum weekly.</li>
        <li>Blot spills immediately.</li>
        <li>Rotate yearly to even wear.</li>
      </ol>
    `,
    related: [
      { id: 2, title: "Top 10 Living Room Carpets (Editor’s Picks)", date: "10th August, 2025", likes: 18, image: "https://c.animaapp.com/ypxcOp9T/img/image-8.svg" },
      { id: 3, title: "How to Measure for a Rug (No Guesswork)", date: "12th August, 2025", likes: 32, image: "https://c.animaapp.com/ypxcOp9T/img/image-10.svg" }
    ]
  },
  "2": {
    id: 2,
    slug: "top-10-living-room-carpets",
    title: "Top 10 Living Room Carpets (Editor’s Picks)",
    displayDate: "10th August, 2025",
    date: "10th August, 2025",
    likes: 18,
    coverImage: "https://c.animaapp.com/ypxcOp9T/img/image-8.svg",
    image: "https://c.animaapp.com/ypxcOp9T/img/image-8.svg",
    contentHtml: `
      <p>We shortlisted living room carpets that balance durability and design. From textured neutrals to bold geometrics, here are our favorites.</p>
      <ul class="list-disc pl-6 space-y-1">
        <li>Textured loop in warm beige — hides footprints, great for busy spaces.</li>
        <li>Navy cut pile — luxe feel, pairs with oak and brass accents.</li>
        <li>Grey geometric flatweave — modern, low profile under doors.</li>
      </ul>
    `,
    related: [
      { id: 1, title: "The Ultimate Guide to Choosing Your Perfect Carpet", date: "8th August, 2025", likes: 25, image: "https://c.animaapp.com/ypxcOp9T/img/image-9.svg" },
      { id: 3, title: "How to Measure for a Rug (No Guesswork)", date: "12th August, 2025", likes: 32, image: "https://c.animaapp.com/ypxcOp9T/img/image-10.svg" }
    ]
  },
  "3": {
    id: 3,
    slug: "how-to-measure-for-a-rug",
    title: "How to Measure for a Rug (No Guesswork)",
    displayDate: "12th August, 2025",
    date: "12th August, 2025",
    likes: 32,
    coverImage: "https://c.animaapp.com/ypxcOp9T/img/image-10.svg",
    image: "https://c.animaapp.com/ypxcOp9T/img/image-10.svg",
    contentHtml: `
      <p>Measure your seating area first, not the whole room. Tape out potential sizes and check door swing clearance before buying.</p>
      <p>Typical living room: 200×300 cm or 240×340 cm. Bedroom: 160×230 cm for doubles, or runners on each side.</p>
    `,
    related: [
      { id: 1, title: "The Ultimate Guide to Choosing Your Perfect Carpet", date: "8th August, 2025", likes: 25, image: "https://c.animaapp.com/ypxcOp9T/img/image-9.svg" },
      { id: 2, title: "Top 10 Living Room Carpets (Editor’s Picks)", date: "10th August, 2025", likes: 18, image: "https://c.animaapp.com/ypxcOp9T/img/image-8.svg" }
    ]
  }
};

export default blogData;
