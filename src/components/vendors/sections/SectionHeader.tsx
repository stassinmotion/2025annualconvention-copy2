
interface SectionHeaderProps {
  title: string;
}

const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-200"></div>
      </div>
      <div className="relative flex justify-center">
        <h2 className="px-4 text-2xl font-display bg-white text-racing-blue">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default SectionHeader;
