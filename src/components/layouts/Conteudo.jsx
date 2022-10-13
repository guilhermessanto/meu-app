import Artigo from "../Artigo";
const Conteudo = () => {
  /* Cire um array com o nome de tres cursos */
  const cursos = [
    "Front-end saia do zero",
    "Back-end como você nunca viu",
    "testes unitarios",
  ];
  /* Dentro das chamadas do artigo, passa como uma prop o nome de cada curso */
  return (
    <main>
      <section>
        <h2>Conteúdo do site</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati,
          aliquid fugit perferendis, molestiae in architecto, suscipit magnam
          debitis nam repudiandae hic! Porro maiores cupiditate, autem doloribus
          provident tempore tempora natus.
        </p>
        <Artigo curso={cursos[0]} titulo="Artigo 1" subtitulo="subtitulo 1">
          Este é o texto do primeiro artigo...
        </Artigo>
        <Artigo curso={cursos[1]} titulo="Artigo 2" subtitulo="subtitulo 2">
          Este é o texto do segundo artigo...
        </Artigo>
        <Artigo curso={cursos[2]} titulo="Artigo 3" subtitulo="subtitulo 2">
          Este é o texto do terceiro artigo...
        </Artigo>
      </section>
    </main>
  );
};
export default Conteudo;
