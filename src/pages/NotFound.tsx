import { FC } from "react";
import Card from "@/components/Card";

const Skills: FC = () => (
  <div className="p-5 mb-4">
    <Card>
      {" "}
      <h2 className="text-red-500 text-xl font-bold">
        404 - Página não encontrada
      </h2>
      <p>A página que você procura não existe.</p>
    </Card>
  </div>
);

export default Skills;
