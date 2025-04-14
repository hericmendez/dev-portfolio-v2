import { FC } from "react";
import AppLayout from "@/layout/AppLayout";
import NotFound from "@/pages/NotFound";
import { Routes, Route } from "react-router-dom";
import navItems from "./navigationConfig";

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        {navItems.map((item) => (
          <Route key={item.id} path={item.path} element={item.component} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
