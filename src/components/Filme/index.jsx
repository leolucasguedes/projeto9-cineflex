import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";
import axios from "axios";

import {
  Main,
  DivCima,
  SelecioneH1,
  DivSessao,
  Dia,
  Horarios,
  DivHorario,
  Hora,
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
      setInfos({title, posterURL});
    });
  }, [filmeId]);
  //console.log(infos);
  const { title, posterURL } = infos;
  return (
    <>
      <DivCima>
        <SelecioneH1>Selecione o horário</SelecioneH1>
      </DivCima>
      <Main>
        <DivSessao>
          <Dia>Quinta-feira - 03/03/2022</Dia>
          <Horarios>
            <DivHorario>
              <Hora>15:00</Hora>
            </DivHorario>
            <DivHorario>
              <Hora>19:00</Hora>
            </DivHorario>
          </Horarios>
        </DivSessao>
        {sessoes.map((sessao) => {
          const { weekday, date, showtimes } = sessao;
          return (
            <DivSessao key={weekday + date}>
              <Dia>
                {weekday} - {date}
              </Dia>
              <Horarios>
                {showtimes.map((showtime) => {
                  const { id, name } = showtime;
                  return (
                    <Link to={`/sessao/${id}/seats`}>
                     <DivHorario key={id + name}>
                      <Hora>{name}</Hora>
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
