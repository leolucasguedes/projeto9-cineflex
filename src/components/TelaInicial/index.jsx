import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { Main, DivCima, DivImagem } from "./style.js";

function TelaInicial() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const requisicao = axios.get(
      "https://mock-api.driven.com.br/api/v5/cineflex/movies"
    );

    requisicao.then((resposta) => {
      const { data } = resposta;
      setFilmes(data);
    });
    requisicao.catch((err) => console.log(err.resposta));
  }, []);

  return (
    <>
      <DivCima>
        <h1>Selecione o filme</h1>
      </DivCima>
      <Main>
        {filmes.map((filme) => {
          const { id, title, posterURL } = filme;
          return (
            <DivImagem key={id}>
              <Link to={`/sessoes/${id}`}>
                <img src={posterURL} alt={title} />
              </Link>
            </DivImagem>
          );
        })}
      </Main>
    </>
  );
}

export default TelaInicial;
