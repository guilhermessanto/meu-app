import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cabecalho from "./components/layouts/Cabecalho";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Servicos from "./pages/Servicos";
import Footer from "./components/layouts/Footer";
const App = () => {
  return (
    <>
      {/* Fragmento */}
      {/* BrowserRouter: Container de rotas (precisa envolver todos os componentes do app) */}
      <BrowserRouter>
        <Cabecalho />
        {/*Switch: mecanismo para troca/alternância de rotas  */}
        <Switch>
          {/* Route: configuração de cada rota (qual caminho, qual componente) */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/produtos">
            <Produtos />
          </Route>
          <Route path="/servicos">
            <Servicos />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
      {/* Fim fragmento */}
    </>
  );
};

export default App;
