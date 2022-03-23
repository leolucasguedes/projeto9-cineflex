import { Main, DivCima, SelecioneH1, DivImagem, Cartaz } from "./style.js";

import Filme from "./../../assets/images/batman.jpg";

function TelaInicial() {
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
        <DivImagem>
          <Cartaz src={Filme} alt="Filme em Cartaz" />
        </DivImagem>
        <DivImagem>
          <Cartaz src={Filme} alt="Filme em Cartaz" />
        </DivImagem>
        <DivImagem>
          <Cartaz src={Filme} alt="Filme em Cartaz" />
        </DivImagem>
        <DivImagem>
          <Cartaz src={Filme} alt="Filme em Cartaz" />
        </DivImagem>
        <DivImagem>
          <Cartaz src={Filme} alt="Filme em Cartaz" />
        </DivImagem>
        <DivImagem>
          <Cartaz src={Filme} alt="Filme em Cartaz" />
        </DivImagem>
      </Main>
    </>
  );
}

export default TelaInicial;
