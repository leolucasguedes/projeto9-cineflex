import { Link, useLocation } from "react-router-dom";

import { Main, DivCima, Div, Home } from "./style.js";

function Sucesso() {
  const navigate = useLocation();
  const { state } = navigate;
  const { title, date, name, ids, nome, cpf } = state;
  //console.log(navigate);
  return (
    <>
      <DivCima>
        <h1>Pedido feito com sucesso!</h1>
      </DivCima>
      <Main>
        <Div>
          <h1>Filme e sessão</h1>
          <p>{title}</p>
          <p>
            {date}-{name}
          </p>
        </Div>
        <Div>
          <h1>Ingressos</h1>
          {ids.map((id) => {
            return (
              <p key={id}>Assento {id}</p>
            );
          })}
        </Div>
        <Div>
          <h1>Comprador</h1>
          <p>Nome:{nome}</p>
          <p>CPF:{cpf}</p>
        </Div>
        <Link to={`/`}>
          <Home>Voltar para Home</Home>
        </Link>
      </Main>
    </>
  );
}

export default Sucesso;
