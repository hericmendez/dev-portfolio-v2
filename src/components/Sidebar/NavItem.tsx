import { NavItemProps } from "@/types/NavItemProps";

import { Link } from "react-router-dom";
import navItems from "@/constants/navigation";
import { useLocation } from "react-router-dom";
import { useMenuNavigation } from "@/hooks/useMenuNavigation";

const NavItem: React.FC<NavItemProps> = ({ title, path, id }) => {
  const { pathname } = useLocation();
  const currentPath = pathname.split("/").pop();
  useMenuNavigation(navItems, currentPath);

  return (
    <Link
      to={path}
      className="flex items-center justify-center space-x-3 px-4 - transition duration-300 ease-in-out"
    >
      <button
        className={`rpgui-button !py-0 w-full text-2xl flex justify-center ${
          id === currentPath ? "down" : ""
        }`}
      >
        <span> {title}</span>
      </button>
    </Link>
  );
};

export default NavItem;
