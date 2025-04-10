import { FC, ReactNode } from "react";

const Content: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="rpgui-container framed w-full p-5 pt-5 md:ml-4 overflow-y-auto overflow-x-hidden content-scroll height-fix z-1">
    <div style={{ zoom: "90%" }}>{children}</div>
  </div>
);

export default Content;
