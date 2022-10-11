import styled from "styled-components";
import Menu from "../Menu";
const periodo = "diurno";
const StyledCabecalho = styled.header`
  background-color: ${periodo === "diurno" ? "lightblue" : "darkblue"};
  text-align: center;

  h1 {
    color: black;
  }
  p {
    font-weight: bold;
    color: blue;
    font-size: 2rem;
    &:hover {
      color: red;
      cursor: pointer;
    }
  }
`;

const Cabecalho = () => {
  return (
    <StyledCabecalho>
      <h1>Interface react</h1>
      <Menu />
      <p>teste</p>
    </StyledCabecalho>
  );
};
export default Cabecalho;
