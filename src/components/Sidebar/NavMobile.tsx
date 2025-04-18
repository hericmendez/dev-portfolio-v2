

import navItems from "@/routes/navigationConfig";
import NavItem from "./NavItem";
import { GiCancel } from "react-icons/gi";
import Revi from "@/assets/images/avatar/revi_machinga.png";

type NavMobileProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

const NavMobile: React.FC<NavMobileProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <aside
      className={`rpgui-container framed-golden !fixed md:relative pt-5 w-[75vw] p-5 transition-transform duration-300 z-20 height-fix  ${
        isOpen ? "translate-x-0" : "-translate-x-150"
      } md:translate-x-0`}
    >
      <button
        onClick={toggleSidebar}
        className="rpgui-container framed-grey top-0 right-0 !fixed !h-12 !w-12 text-2xl "
      >
        <span>
          <GiCancel className="" />
        </span>
      </button>
      <div className="h-full overflow-y-scroll z-30">
        <div className="flex flex-col items-center mb-5 ">
          <img
            src={Revi}
            alt="Profile"
            className="w-36 h-36  rpgui-container framed-grey p-0"
          />
          <h4 className="text-gray-300">Héric Mendes</h4>
        </div>
        <nav style={{ zoom: "80%" }} onClick={toggleSidebar} className="">
          {navItems.map((item) => (
            <NavItem
              key={item.id}
              id={item.id}
              path={item.path}
              title={item.title}
            />
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default NavMobile;
