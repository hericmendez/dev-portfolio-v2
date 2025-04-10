

import navItems from "@/constants/navigation";
import NavItem from "./NavItem";
import { GiCancel } from "react-icons/gi";

type NavMobileProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
};


const NavMobile: React.FC<NavMobileProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <aside
      className={`rpgui-container framed-golden fixed md:relative h-screen pt-5 w-[75vw] p-5 transition-transform duration-300 z-20 height-fix ${
        isOpen ? "translate-x-0" : "-translate-x-150"
      } md:translate-x-0`}
    >
              <button onClick={toggleSidebar} className="rpgui-container framed-grey top-0 right-0 !fixed !h-12 !w-12 text-2xl ">
                <span><GiCancel className="" />

                  </span>
              </button>

      <div className="flex flex-col items-center mb-5 ">
        <img
          src="hmg.jpg"
          alt="Profile"
          className="w-36 h-36  rpgui-container framed-grey p-0"
        />
        <h4 className="text-gray-300">Héric Mendes</h4>
      </div>
      <nav onClick={toggleSidebar} className="space-y-4">
        {navItems.map((item) => (
          <NavItem
            key={item.id}
            id={item.id}
            path={item.path}
            title={item.title}
          />
        ))}
      </nav>
    </aside>
  );
};

export default NavMobile;
