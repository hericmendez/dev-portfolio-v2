import { ReactNode, FC } from "react";

interface RpguiCardProps {
  children: ReactNode;
  variant?: "framed" | "framed-grey" | "framed-golden" | "framed-golden-2";
  className?: string;
}

const RpguiCard: FC<RpguiCardProps> = ({
  children,
  variant = "framed-grey",
  className,
}) => (
  <div className={`rpgui-container p-5 mb-4 ${variant} ${className}`}>
    {children}
  </div>
);

export default RpguiCard;