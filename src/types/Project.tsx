import { ReactNode } from "react";

export type Project = {
  id: number;
  title: string;
  thumbnail: string;
  status: string;
  screenshots: string[];
  tags: string[];
  meta_description: string;
  full_description: ReactNode;
  demo_link?: string;
  repository_link?: string;
};
