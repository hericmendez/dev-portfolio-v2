import navItems from "@/routes/navigationConfig";

import Revi from "@/assets/images/avatar/revi_machinga.png";
import NavItem from "./NavItem";

const NavDesktop: React.FC = () => {
  return (
    <aside
      className={`rpgui-container framed fixed md:relative h-screen pt-5 w-100 p-5 transition-transform duration-300 height-fix md:translate-x-0`}
    >
      <div className="flex flex-col items-center ">
        <img
          src={Revi}
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
