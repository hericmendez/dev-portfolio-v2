import { ReactNode, FC } from "react";




const Card: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="rpgui-container framed-grey p-5 mb-4">

    {children}
  </div>
);

export default Card