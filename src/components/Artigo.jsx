/* Acesso às props usando destructuring de objeto */
/* const Artigo = (props)=>{}  */
const Artigo = ({ titulo, subtitulo, curso, children }) => {
  return (
    <article>
      {/* <h1>{props.titulo}</h1> */}
      <h1>{titulo}</h1>
      <h2>{subtitulo}</h2>
      <h4>{curso}</h4>
      <p>{children}</p>
    </article>
  );
};
export default Artigo;
