import Cabecalho from "./components/layouts/Cabecalho/Cabecalho";
import Conteudo from "./components/layouts/Conteudo/Conteudo";
import Footer from "./components/layouts/Footer/Footer";
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
