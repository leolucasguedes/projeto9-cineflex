import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./../Header";
import TelaInicial from "./../TelaInicial";
import Filme from "./../Filme";
import Sessao from "./../Sessao";
import Sucesso from "./../Sucesso";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<TelaInicial />}></Route>
        <Route path="/sessoes/:filmeId" element={<Filme />}></Route>
        <Route path="/assentos/:sessaoId" element={<Sessao />}></Route>
        <Route path="/sucesso" element={<Sucesso />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//filme/:filmeId/showtimes/:sessaoId/seats
