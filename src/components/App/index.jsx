import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './../Header'
import TelaInicial from './../TelaInicial';
import Filme from './../Filme';
import Sessao from './../Sessao';
import Sucesso from './../Sucesso';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<TelaInicial />}></Route>
        <Route path="/filme" element={<Filme />}></Route>
        <Route path="/sessao" element={<Sessao />}></Route>
        <Route path="/sucesso" element={<Sucesso />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;