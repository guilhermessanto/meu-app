import { useState } from "react";
import Menu from "../Menu";
const Cabecalho = () => {
  const exemplo2 = () => {
    console.log("Exemplo2");
  };

  const atualizaTitulo = () => {
    setTitulo("Hello World");
  };
  /* Exemplo 1 de gerenciamento de states 
  Aqui, definimos no useState um valor inicial( colocando entre os parenteses do useState), alem de desestruturar o state em uma variavel (titulo) e em uma função (setTitulo) que sera responsavel por atualizar este state/titulo */
  const [titulo, setTitulo] = useState("Exemplo de State");
  return (
    <header>
      <button onClick={() => console.log("exemplo1")}>Exemplo 1 </button>
      <button onClick={exemplo2}>Exemplo 2 </button>
      <hr />
      {/* Aqui, aplicamos a variavel de state chamada titulo */}
      <h1 onClick={atualizaTitulo}>{titulo}</h1>
      <Menu />
    </header>
  );
};
export default Cabecalho;
