import Artigo from "../Artigo";
import Alert from "react-bootstrap/Alert";
const Conteudo = () => {
  return (
    <main>
      <section>
        <Alert variant="primary">
          <h2>Conteúdo do site</h2>
        </Alert>
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
