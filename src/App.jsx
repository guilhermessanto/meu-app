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
      <BrowserRouter>
        <Cabecalho />
        <Switch>
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
