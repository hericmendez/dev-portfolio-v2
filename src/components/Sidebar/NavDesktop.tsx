import { Link } from "react-router-dom";
import navItems from "@/constants/navigation";
import { NavItemProps } from "@/types/NavItemProps";
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

const NavDesktop: React.FC = () => {
  return (
    <aside
      className={`rpgui-container framed fixed md:relative h-screen pt-5 w-100 p-5 transition-transform duration-300 height-fix md:translate-x-0`}
    >
      <div className="flex flex-col items-center ">
        <img
          src="hmg.jpg"
          alt="Profile"
          className="w-36 h-36  rpgui-container framed-grey p-0"
        />
        <h2 className="text-2xl !mb-0">Héric Mendes</h2>
        <p>Front-end Dev</p>
      </div>
      <hr className="golden my-3" />
      <nav style={{ zoom: "90%" }} className="space-y-4">
        {navItems.map((item) => (
          <NavItem
            key={item.id}
            id={item.id}
            path={item.path}
            title={item.title}
          />
        ))}
      </nav>
      <p className="absolute bottom-0 !text-slate-200 !text-sm !text-center">
        Pressione ⬆️ e ⬇️ no teclado para navegar!
      </p>
    </aside>
  );
};

export default NavDesktop;
