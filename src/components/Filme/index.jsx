import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
} from "./style.js";

function Filme() {
  const { filmeId } = useParams();
  const [sessoes, setSessoes] = useState({});
  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/movies/${filmeId}/showtimes`
    );
    promise.then((resposta) => {
      const { data } = resposta;

      setSessoes(data);
    });
  }, []);
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
          const { days } = sessao;
          const { id, weekday, date, showtimes } = days;
          const { name } = showtimes;
          return (
            <DivSessao key={id}>
              <Dia>{weekday} - {date}</Dia>
              <Horarios>
                {showtimes.map(showtime => {
                  return (
                    <DivHorario>
                      <Hora>{name}</Hora>
                    </DivHorario>
                 );
                })}
              </Horarios>
            </DivSessao>
          );
        })}
      </Main>
    </>
  );
}

export default Filme;
