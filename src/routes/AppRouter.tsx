import { FC } from "react";
import AppLayout from "@/components/AppLayout";
import NotFound from "@/pages/NotFound"; // Importando a página 404
import { Routes, Route } from "react-router-dom";
import navItems from "@/configs/navigationConfig";

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        {navItems.map((item) => (
          <Route
            key={item.key}
            path={item.path}
            element={item.component}
          />
        ))}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
