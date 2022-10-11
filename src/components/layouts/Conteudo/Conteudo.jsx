import Artigo from "../../Artigo";
import estilos from "./Conteudo.module.css";
const Conteudo = () => {
  return (
    <main>
      <section>
        <h2 className={estilos.subtitulo}>Conteúdo do site</h2>
        <p>
          <span className={`${estilos["sombra-texto"]} ${estilos.destaque}`}>
            Lorem
          </span>
          ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, aliquid
          fugit perferendis, molestiae in architecto, suscipit magnam debitis
          nam repudiandae hic! Porro maiores cupiditate, autem doloribus
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
