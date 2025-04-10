import { FC } from "react";
import Card from "@/components/RpguiCard";
import Toriel from "@/assets/img/toriel.png";
import { useNavigate } from "react-router-dom";
const NotFound: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="rpgui-container framed-grey p-5 mb-4 mt-2 flex flex-col items-center justify-center">
      <h2 className="!text-4xl !mb-0">ERRO 404</h2>
      <p>Página não encontrada</p>
      <hr className="golden w-full my-5" />
      <img className="h-[40vh]" src={Toriel} alt="Toriel pistola" />
      <Card
        variant="framed-golden"
        className="w-full h-[200px] p-4 flex flex-col items-center justify-center"
      >
        {" "}
        <h2 className="!text-3xl !font-bold">Toriel bloqueia o caminho!</h2>
        <p className="!text-xl">
          {" "}
          A página que você está procurando não existe. Volte para casa,
          criança.
        </p>
      </Card>
      <button onClick={() => navigate("/")} className="rpgui-button">
        <span>Voltar para a página inicial</span>
      </button>
    </div>
  );
};

export default NotFound;
