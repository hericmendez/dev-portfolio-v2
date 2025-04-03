import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Content from "./Content";

import { Outlet } from "react-router-dom";


const AppLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <main className="flex flex-col md:flex-row w-full min-h-screen max-w-[133.33vh] md:aspect-[4/3] m-auto">
      <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex flex-row w-full overflow-hidden">
        <Sidebar isOpen={sidebarOpen} />
        <Content ><Outlet/></Content>
      </div>
    </main>
  );
};

export default AppLayout;
