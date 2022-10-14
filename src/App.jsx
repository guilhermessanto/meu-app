import Cabecalho from "./components/layouts/Cabecalho";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Servicos from "./pages/Servicos";
import Footer from "./components/layouts/Footer";
const App = () => {
  return (
    <>
      {/* Fragmento */}
      <Cabecalho />
      <Home />
      <Produtos />
      <Servicos />
      <Footer />
      {/* Fim fragmento */}
    </>
  );
};

export default App;
