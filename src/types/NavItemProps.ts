import { ReactNode } from "react";
import { JSX } from "react";

export type NavItemProps = {
  key: string;
  title: string;
  path: string;
  icon?: JSX.Element;
  component?: ReactNode;
};