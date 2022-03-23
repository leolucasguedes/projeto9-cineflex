import { Main, DivCima, SelecioneH1, DivSessao, Dia, Horarios, DivHorario, Hora } from "./style.js";


function Filme() {
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
      </Main>
      </>
  )
}

export default Filme;