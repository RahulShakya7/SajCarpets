import FeatureSection from "../components/FeatureSection";
import IntroSection from "../components/IntroSection";
import TeamMemberCard from "../components/TeamMemberCard";

const introData = {
  title: "Best Quality Furniture For Our Client",
  description:
    "At Saj Carpets & Beds, we've been serving Hampshire, Surrey & Berkshire since 1998, offering extensive expertise in both domestic and commercial flooring.",
  secondaryText:
    "Let our team help you find the perfect flooring solution for your home or business. Call us at 07976 839153 to discuss your needs today.",
  imageUrl: "/frame-32.png",
};

const featuresData = [
  { id: 1, title: "Savings", description: "Beat competitors by 10%, savings of 5%-20%." },
  { id: 2, title: "Convenience", description: "Free estimating, no delivery charges, next-day delivery." },
  { id: 3, title: "Quality Service", description: "Seamless installation, huge selection of samples, expert advice." },
];

const teamMembers = [
  { id: 1, image: "/member-1.png", name: "Alice", role: "Designer" },
  { id: 2, image: "/member-2.png", name: "Bob", role: "Installer" },
  { id: 3, image: "/member-3.png", name: "Charlie", role: "Manager" },
];

const About = () => {
  return (
    <main className="flex flex-col gap-16 px-6 md:px-12 lg:px-24 py-12">
      <IntroSection {...introData} />
      <FeatureSection features={featuresData} />
      <section className="flex flex-col gap-6 w-full">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-black">
          Our Team
        </h2>
        <div className="flex flex-col md:flex-row gap-6">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} {...member} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default About;
