import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

import {
  Main,
  DivCima,
  DivSessao,
  Horarios,
  DivHorario,
  Footer,
} from "./style.js";

function Filme() {
  const { filmeId } = useParams();
  const [sessoes, setSessoes] = useState([]);
  const [infos, setInfos] = useState({});

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/movies/${filmeId}/showtimes`
    );
    promise.then((resposta) => {
      const { days, title, posterURL } = resposta.data;

      setSessoes(days);
      setInfos({ title, posterURL });
    });
  }, [filmeId]);
  //console.log(infos);
  const { title, posterURL } = infos;

  return (
    <>
      <DivCima>
        <h1>Selecione o horário</h1>
      </DivCima>
      <Main>
        {sessoes.map((sessao) => {
          const { weekday, date, showtimes } = sessao;
          return (
            <DivSessao key={weekday + date}>
              <h1>
                {weekday} - {date}
              </h1>
              <Horarios>
                {showtimes.map((showtime) => {
                  const { id, name } = showtime;
                  return (
                    <Link to={`/assentos/${id}`}>
                      <DivHorario key={id + name}>
                        <h1>{name}</h1>
                      </DivHorario>
                    </Link>
                  );
                })}
              </Horarios>
            </DivSessao>
          );
        })}
        <Footer>
          <img src={posterURL} alt={title}></img>
          <p>{title}</p>
        </Footer>
      </Main>
    </>
  );
}

export default Filme;
