
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import BackToTopButton from "./components/BackToTopButton";
import { useKonamiCode } from "@/hooks/useSecretCode"; // ajuste o path

function App() {
  const secretUnlocked = useKonamiCode();
  console.log("secretUnlocked ==> ", secretUnlocked);
  return (
    <>
      <div className="rpgui-content">
        <BrowserRouter>
          <AppRouter />
          <BackToTopButton />
        </BrowserRouter>
        {secretUnlocked && (
          <div className="secret-modal">
            <h2>✨ Fase Secreta Desbloqueada!</h2>
            <p>Você dominou o Konami Code como um verdadeiro dev retrô!</p>
            {/* Aqui você pode colocar imagem, som, confetes, etc. */}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
