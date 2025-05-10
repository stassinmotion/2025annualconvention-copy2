
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface SecondaryNavItem {
  name: string;
  path: string;
  icon: LucideIcon;
}

interface MobileSecondaryNavProps {
  items: SecondaryNavItem[];
  onItemClick: () => void;
}

const MobileSecondaryNav = ({ items, onItemClick }: MobileSecondaryNavProps) => {
  return (
    <div className="pt-4 mt-4 border-t border-gray-200">
      <h4 className="px-4 py-2 text-sm font-medium text-gray-500">More</h4>
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <Link
            key={index}
            to={item.path}
            className="block py-2 px-4 text-racing-black hover:bg-gray-100 rounded-lg flex items-center"
            onClick={onItemClick}
          >
            <Icon size={18} className="mr-3 text-racing-red" />
            {item.name}
          </Link>
        );
      })}
    </div>
  );
};

export default MobileSecondaryNav;
