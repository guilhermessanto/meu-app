const Artigo = (props) => {
  return (
    <article>
      <h1>{props.titulo}</h1>
      <h2>{props.subtitulo}</h2>
      <h4>{props.curso}</h4>
      <p>{props.children}</p>
    </article>
  );
};
export default Artigo;
