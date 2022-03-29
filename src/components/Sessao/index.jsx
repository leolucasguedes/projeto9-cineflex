import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  Main,
  DivCima,
  DivAssentos,
  Assento,
  DivLegenda,
  Selecionado,
  Disponivel,
  Indisponivel,
  DivTextos,
  DivInputs,
  Input,
  Reservar,
  Footer,
} from "./style.js";

function Sessao() {
  /*const assentos = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
  ];*/
  //let contador = 1;
  const { sessaoId } = useParams();
  const [seats, setSeats] = useState([]);
  const [infos, setInfos] = useState({});
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [ids, setIds] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessaoId}/seats`
    );
    promise.then((resposta) => {
      const { name, day, movie, seats } = resposta.data;
      //console.log(seats);

      setSeats(seats);
      setInfos({ name, day, movie });
    });
  }, [sessaoId]);

  const { name, day, movie } = infos;
  const weekday = day ? day.weekday : "";
  const date = day ? day.date : "";
  const title = movie ? movie.title : "";
  const posterURL = movie ? movie.posterURL : "";

  //console.log(day);
  const POST_URL =
    "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many";

  function enviarDados(event) {
    event.preventDefault();
    const promise = axios.post(POST_URL, {
      ids: ids,
      name: nome,
      cpf: cpf,
    });
    promise.then((response) => {
      alert("Foi enviado com sucesso");
      navigate("/sucesso", { state: { title, date, name, ids, nome, cpf } });
    });
    promise.catch((err) => alert("deu ruim"));
  }

  function escolherAssento(id) {
    if (ids.includes(id)) {
      setIds([...ids.filter((el) => el !== id)]);
      return;
    }else if(!isAvailable) alert("Esse assento não está disponível");
    setIds([...ids, id]);
  }
  //console.log(ids);

  return (
    <>
      <DivCima>
        <h1>Selecione o(s) assento(s)</h1>
      </DivCima>
      <Main>
        <DivAssentos>
          {seats.map((seat) => {
            const { id, name, isAvailable } = seat;
            //console.log(id, isAvailable);
            return (
              <Assento
                selecionado={ids.includes(id)}
                onClick={() => escolherAssento(id)}
                habilitado={isAvailable}
                key={id}
                disabled={!isAvailable}
              >
                <p>{name}</p>
              </Assento>
            );
          })}
        </DivAssentos>
        <DivLegenda>
          <Selecionado />
          <Disponivel />
          <Indisponivel />
        </DivLegenda>
        <DivTextos>
          <p>Selecionado</p>
          <p>Disponível</p>
          <p>Indisponível</p>
        </DivTextos>
        <form onSubmit={enviarDados}>
          <DivInputs>
            <p>Nome do comprador</p>
            <Input
              type="text"
              onChange={(e) => setNome(e.target.value)}
              value={nome}
              placeholder="Digite seu nome..."
              required
            />
            <p>CPF do comprador:</p>
            <Input
              type="text"
              onChange={(e) => setCpf(e.target.value)}
              value={cpf}
              placeholder="Digite seu CPF..."
              required
            />
          </DivInputs>
          <Reservar type="submit">Reservar assento(s)</Reservar>
        </form>
        <Footer>
          <img src={posterURL} alt={title} />
          <h1>{title}</h1>
          <p>
            {weekday} - {name}
          </p>
        </Footer>
      </Main>
    </>
  );
}

export default Sessao;
