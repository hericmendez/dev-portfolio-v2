import React, { useState } from "react";
import NavDesktop from "./Sidebar/NavDesktop";

import Content from "./Content";
import { useWindowSize } from "react-use";

import { Outlet } from "react-router-dom";

import NavMobile from "./Sidebar/NavMobile";
import { FaBars } from "react-icons/fa";

const AppLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const { width } = useWindowSize();
  return (
    <main className="flex flex-col md:flex-row w-full min-h-screen max-w-[133.33vh] md:aspect-[4/3] m-auto">
      <div className="flex flex-row w-full overflow-hidden">
        {width > 768 ? (
          <NavDesktop />
        ) : (
          <NavMobile isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        )}
        <Content>
          <div
            onClick={toggleSidebar}
            className=" !fixed rpgui-container framed-grey h-12 w-12 opacity-75 hover:opacity-100 top-5 left-5 z-[999] md:hidden"
          >
            <span>
              {" "}
              <FaBars />{" "}
            </span>
          </div>

          <Outlet />
        </Content>
      </div>
    </main>
  );
};

export default AppLayout;
