import { useState } from "react";
import Artigo from "../Artigo";
const Conteudo = () => {
  const [corFundo, setCorFundo] = useState();
  const [contador, setContador] = useState(0);

  const fundoAmarelo = () => setCorFundo("#FFEE71");
  const fundoAzul = () => setCorFundo("lightBlue");
  const fundoVermelho = () => setCorFundo("lightpink");

  const atualizaContagem = () => setContador(contador + 1);

  return (
    <main style={{ backgroundColor: corFundo }}>
      <button onMouseOver={fundoAmarelo}>Amarelo</button>
      <button onMouseOver={fundoAzul}>Azul</button>
      <button onMouseOver={fundoVermelho}>Vermelho</button>
      <section>
        <h2 onClick={atualizaContagem}>Contador: {contador}</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati,
          aliquid fugit perferendis, molestiae in architecto, suscipit magnam
          debitis nam repudiandae hic! Porro maiores cupiditate, autem doloribus
          provident tempore tempora natus.
        </p>
        <Artigo />
        <Artigo />
        <Artigo />
      </section>
    </main>
  );
};
export default Conteudo;
