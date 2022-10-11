import Menu from "../Menu/Menu";
const estilo = {
  color: "white",
  backgroundColor: "darkblue",
};
const Cabecalho = () => {
  return (
    /* CSS inline  */
    <header style={{ backgroundColor: "lightblue", textAlign: "center" }}>
      <h1 style={estilo}>Interface react</h1>
      <Menu />
    </header>
  );
};
export default Cabecalho;
