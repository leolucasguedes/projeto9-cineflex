import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import {
  Main, DivCima,
  DivAssentos, Assento,
  DivLegenda,
  Selecionado,
  Disponivel,
  Indisponivel,
  DivInputs, Input,
  Reservar,
  DivTextos,
  Footer
} from "./style.js";

function Sessao() {
  /*const assentos = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
  ];*/
  //let contador = 1;
  const { sessaoId } = useParams();
  const [seats, setSeats] = useState([{ "isAvaliable": false }]);
  const [infos, setInfos] = useState({});
  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessaoId}/seats`
    );
    promise.then((resposta) => {
      const { name, day, movie, seats } = resposta.data;
      //console.log(seats);

      setSeats(seats);
      setInfos({name, day, movie});
    });
  }, [sessaoId]);
  const { name, day, movie } = infos;
  const { weekday } = day;
  const { title, posterURL } = movie;
  return (
    <>
      <DivCima>
        <h1>Selecione o(s) assento(s)</h1>
      </DivCima>
      <Main>
        <DivAssentos>
          {seats.map((seat) => {
            const { id, name, isAvaliable } = seat;
            return (
              <Assento habilitado={isAvaliable} key={id + name}>
                <p>{name}</p>
              </Assento>
            );
          })}
        </DivAssentos>
        <DivLegenda>
          <Selecionado></Selecionado>
          <Disponivel></Disponivel>
          <Indisponivel></Indisponivel>
          </DivLegenda>
          <DivTextos>
          <p>Selecionado</p>
          <p>Disponível</p>
          <p>Indisponível</p>
          </DivTextos>
          <DivInputs>
            <p>Nome do comprador</p>
            <Input placeholder="Digite seu nome..."></Input>
            <p>CPF do comprador:</p>
            <Input placeholder="Digite seu CPF..."></Input>
          </DivInputs>
          <Reservar>Reservar assento(s)</Reservar>
          <Footer>
          <img src={posterURL} alt={title}></img>
          <h1>{title}</h1>
          <p>{ weekday } - { name }</p> 
        </Footer>
      </Main>
    </>
  );
}

export default Sessao;
