import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import axios from "axios";

import { Main, DivCima, SelecioneH1, DivImagem, Cartaz } from "./style.js";

import Filme from "./../../assets/images/batman.jpg";

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
        <SelecioneH1>Selecione o filme</SelecioneH1>
      </DivCima>
      <Main>
        <DivImagem>
          <Cartaz src={Filme} alt="Filme em Cartaz" />
        </DivImagem>
        <DivImagem>
          <Cartaz src={Filme} alt="Filme em Cartaz" />
        </DivImagem>
        {filmes.map((filme) => {
          const { id, title, posterURL } = filme;
          return (
            <DivImagem key={id}>
               <Link to={`/filme/${id}/showtimes`}>
                 <Cartaz src={posterURL} alt={title} />
               </Link>
            </DivImagem>
          );
        })}
      </Main>
    </>
  );
}

export default TelaInicial;
