import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Perfil from "./pages/Perfil";
import Game from "./pages/Game";
import Badge from "./pages/Badge";


function App(){
  return(
    <div id="rotas">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/perfil" element={<Perfil />}/>
          <Route path="/game" element={<Game />}/>
          <Route path="/badge" element={<Badge />}/>
          <Route path="/sobre" element={<Sobre />}/>
          <Route path="/contato" element={<Contato />}/>

        </Routes>
      </BrowserRouter>      
      
    </div>
  )
}
export default App