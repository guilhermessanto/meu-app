import Cabecalho from "./components/layouts/Cabecalho";
import Conteudo from "./components/layouts/Conteudo";
import Footer from "./components/layouts/Footer";
const App = () => {
  return (
    <>
      {/* Fragmento */}
      <Cabecalho />
      <Conteudo />
      <Footer />
      {/* Fim fragmento */}
    </>
  );
};

export default App;
