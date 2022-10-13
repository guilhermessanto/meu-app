import Artigo from "../Artigo";
const Conteudo = () => {
  const artigos = [
    {
      titulo: "Artigo 1",
      subtitulo: "subtitulo artigo 1",
      texto: "Este é o conteudo do artigo 1",
      curso: "Front-end",
    },
    {
      titulo: "Artigo 2",
      subtitulo: "subtitulo artigo 2",
      texto: "Este é o conteudo do artigo 2",
      curso: "Back-end",
    },
    {
      titulo: "Artigo 3",
      subtitulo: "subtitulo artigo 3",
      texto: "Este é o conteudo do artigo 3",
      curso: "Mobile",
    },
  ];
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
        {artigos.map((artigo) => {
          return (
            <Artigo
              titulo={artigo.titulo}
              subtitulo={artigo.subtitulo}
              curso={artigo.curso}
            >
              {artigo.texto}
            </Artigo>
          );
        })}
      </section>
    </main>
  );
};
export default Conteudo;
