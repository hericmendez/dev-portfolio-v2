import { FC } from "react";
import AppLayout from "@/layout/AppLayout";
import NotFound from "@/pages/NotFound";
import { Routes, Route } from "react-router-dom";
import navItems from "./navigationConfig";
import BlogPost from "@/pages/BlogPost";

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        {navItems.map((item) => (
          <Route key={item.id} path={item.path} element={item.component} />
        ))}
        <Route path="/posts/:slug" element={<BlogPost />} />

      </Route>
    </Routes>
  );
};

export default AppRouter;
