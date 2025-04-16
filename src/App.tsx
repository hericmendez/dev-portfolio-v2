import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import BackToTopButton from "./components/BackToTopButton";
import Konami from "react-konami-code";

const App=()=> {

  const easterEgg = () => {
    alert("Hey, you typed the Konami Code!");
  };

  return (
    <>
      <div className="rpgui-content">
        <BrowserRouter>
          <AppRouter />
          <BackToTopButton />
        </BrowserRouter>
      </div>
      <Konami action={easterEgg}>
        {"Hey, I'm an Easter Egg! Look at me!"}
      </Konami>
    </>
  );
}

export default App;
