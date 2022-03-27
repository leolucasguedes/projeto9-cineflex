import { Link } from "react-router-dom";

import { Main, DivCima, Div, Home } from "./style.js";

function Sucesso() {
  return (
    <>
      <DivCima>
        <h1>Pedido feito com sucesso!</h1>
      </DivCima>
      <Main>
        <Div>
          <h1>Filme e sessão</h1>
          <p></p>
          <p></p>
        </Div>
        <Div>
          <h1>Ingressos</h1>
          <p></p>
        </Div>
        <Div>
          <h1>Comprador</h1>
          <p></p>
          <p></p>
        </Div>
        <Link to={`/`}>
          <Home>Voltar para Home</Home>
        </Link>
      </Main>
    </>
  );
}

export default Sucesso;
