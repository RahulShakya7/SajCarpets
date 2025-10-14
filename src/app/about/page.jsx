import AboutUs from "../components/aboutus";

// Dummy data (future backend integration ready)
const introData = {
  title: "Best Quality Furniture For Our Client",
  description:
    "At Saj Carpets & Beds, we've been serving Hampshire, Surrey & Berkshire since 1998, offering extensive expertise in both domestic and commercial flooring.",
  secondaryText:
    "Let our team help you find the perfect flooring solution for your home or business. Call us at 07976 839153 to discuss your needs today.",
  imageUrl: "/images/aboutus.jpg",
};

const featuresData = [
  { id: 1, title: "Savings", description: "Beat competitors by 10%, savings of 5%-20%." },
  { id: 2, title: "Convenience", description: "Free estimating, no delivery charges, next-day delivery." },
  { id: 3, title: "Quality Service", description: "Seamless installation, huge selection of samples, expert advice." },
];

const teamMembers = [
  { id: 1, image: "/images/aboutus.jpg", name: "Alice", role: "Designer" },
  { id: 2, image: "/images/aboutus.jpg", name: "Bob", role: "Installer" },
  { id: 3, image: "/images/aboutus.jpg", name: "Charlie", role: "Manager" },
  { id: 4, image: "/images/aboutus.jpg", name: "David", role: "Sales" },
];

export default function Page() {
  return (
    <AboutUs
      introData={introData}
      featuresData={featuresData}
      teamMembers={teamMembers}
    />
  );
}
