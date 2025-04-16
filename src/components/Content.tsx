import { FC, ReactNode } from "react";

const Content: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="rpgui-container framed w-full !px-0 !py-5 md:ml-4 overflow-y-auto overflow-x-hidden content-scroll height-fix z-1">
    <div className="mb-5 pb-25 pt-5 !px-0" style={{ zoom: "80%" }}>
      {children}
    </div>
  </div>
);

export default Content;
