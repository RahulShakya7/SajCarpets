import Image from "next/image";

const TeamMemberCard = ({ image, name, role }) => {
  return (
    <div className="flex flex-col items-center gap-4 flex-1">
      <Image
        src={image}
        alt={name}
        width={300}
        height={372}
        className="w-full h-full object-cover rounded-lg"
      />
      <h4 className="text-lg font-semibold text-black">{name}</h4>
      <p className="text-sm text-gray-700">{role}</p>
    </div>
  );
};

export default TeamMemberCard;
