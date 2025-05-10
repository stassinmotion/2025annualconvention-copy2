
import { Link } from 'react-router-dom';

interface DropdownItem {
  title: string;
  path: string;
}

interface MobileDropdownItemsProps {
  items: DropdownItem[];
  onItemClick: () => void;
}

const MobileDropdownItems = ({ items, onItemClick }: MobileDropdownItemsProps) => {
  return (
    <div className="pl-6 space-y-1 border-l-2 border-gray-200 ml-4">
      {items.map((item, idx) => (
        <Link
          key={idx}
          to={item.path}
          className="block py-2 px-4 text-racing-black bg-gray-50 hover:bg-gray-100 rounded-lg"
          onClick={onItemClick}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default MobileDropdownItems;
