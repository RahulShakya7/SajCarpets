
import Helmet from "app/components/helmet/helmet";
import CataloguePageClient from "../catalogue/cataloguepageclient";

async function fetchCatalogue() {
  // 🔌 Swap to your real API later
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/catalogue`, {
      // revalidate as needed
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error("Bad status");
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch {
    // ✅ Fallback demo data (local images so Next/Image config not required)
    return [
      {
        id: 1,
        title: "The Emerald Grass",
        category: "Artificial Grass, Outdoor",
        description:
          "Low-maintenance, year-round green space with a lush natural look. Durable & weather-resistant.",
        image: "/images/carpet1.jpg",
      },
      {
        id: 2,
        title: "The Kensington Loop",
        category: "Loop Pile, High-Traffic",
        description:
          "Durable and elegant. Tightly woven loop pile resists wear—great for hallways and living rooms.",
        image: "/images/carpet2.jpg",
      },
      {
        id: 3,
        title: "The Mayfair Saxony",
        category: "Cut Pile, Luxury",
        description:
          "Deep, plush Saxony comfort—perfect for bedrooms. Rich, luxurious colors.",
        image: "/images/carpet3.jpg",
      },
      {
        id: 4,
        title: "The Hampshire Weave",
        category: "Wool, Natural Fibre",
        description:
          "Classic wool softness, resilience, and insulation. Naturally stain-resistant; timeless look.",
        image: "/images/carpet4.jpg",
      },
      {
        id: 5,
        title: "The Regent Flatweave",
        category: "Flatweave, Natural Fibre",
        description:
          "Low-profile texture ideal for busy rooms; easy to clean and beautifully understated.",
        image: "/images/carpet3.jpg",
      },
      {
        id: 6,
        title: "The Camden Pattern",
        category: "Pattern, Statement",
        description:
          "Bold geometric pattern that pulls a room together and adds visual interest.",
        image: "/images/carpet2.jpg",
      },
    ];
  }
}

export default async function CataloguePage() {
  const items = await fetchCatalogue();
  const total = items.length;

  return (

    <div className="min-h-screen bg-white">
        <Helmet title="Product Catalogue" breadcrumb="Home / Catalogue" />
        <div className="px-6 py-16 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-[300px]">
            <header className="mb-8 sm:mb-10">
            <div className="flex flex-wrap items-end gap-3">
                <h1 className="font-open-sans font-bold text-4xl sm:text-5xl lg:text-[49px] leading-[120%] text-[#b23017]">
                Product Catalogue
                </h1>
                <span className="font-open-sans text-2xl sm:text-3xl lg:text-[31px] leading-[120%] text-[#c5c5c5]">
                ({total} {total === 1 ? "Product" : "Products"})
                </span>
            </div>
            <p className="mt-4 text-[#444] text-lg sm:text-xl leading-[132%]">
                Explore durable loop piles, plush Saxonies, natural wool weaves, and bold patterned rugs.
            </p>
            </header>

            <CataloguePageClient initialItems={items} />
        </div>
    </div>
  );
}
