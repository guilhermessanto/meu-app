import { useState } from "react";

const Footer = () => {
  const [estilos, setEstilos] = useState({
    textAlign: "center",
    textTransform: "uppercase",
    border: "solid red 2px",
  });

  const esconder = () => setEstilos({ display: "none" });
  const exibir = () => setEstilos({ display: "block" });

  return (
    <>
      <p onMouseOver={exibir}>exibir</p>
      <p onMouseOver={esconder}>esconder</p>
      <footer style={estilos}>
        <h2>Rodapé</h2>
      </footer>
    </>
  );
};
export default Footer;
