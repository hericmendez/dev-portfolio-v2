
import { Link } from "react-router-dom";
import navItems from "@/configs/navigationConfig";
import { NavItemProps } from "@/types/NavItemProps";

type SidebarProps = {
  isOpen: boolean;
};



const NavItem: React.FC<NavItemProps> = ({ title, path }) => (
  <Link
    to={path}
    className="flex items-center justify-center space-x-3 px-4 - transition duration-300 ease-in-out"
  >
    <button className="rpgui-button  w-full text-2xl flex justify-center">
      <span> {title}</span>
    </button>
  </Link>
);

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    
    <aside
      className={`rpgui-container framed fixed md:relative h-screen pt-5 w-100 p-5 transition-transform duration-300 z-20 height-fix ${
        isOpen ? "translate-x-0" : "-translate-x-100"
      } md:translate-x-0`}
    >
      <div className="flex flex-col items-center mb-5 ">
        <img
          src="hmg.jpg"
          alt="Profile"
          className="w-36 h-36  rpgui-container framed-grey p-0"
        />
        <h4 className="text-gray-300">Héric Mendes</h4>
      </div>
      <nav className="space-y-4">
        {navItems.map((item) => (
          <NavItem
            key={item.key}
            path={item.path}
            icon={item.icon}
            title={item.title}
          />
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
