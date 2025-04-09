
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import BackToTopButton from "./components/BackToTopButton";

function App() {
  return (
    <div className="rpgui-content">
      <BrowserRouter>
        <AppRouter />
        <BackToTopButton />
      </BrowserRouter>
    </div>
  );
}

export default App;
