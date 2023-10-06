import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Cursos } from "./Pages/Cursos";
import { Detalhes } from "./Pages/Detalhes";
import { Contato } from "./Pages/Contato";
import { Page404 } from "./Pages/Page404";
import { Menu } from "./components/Menu";
import { Home } from "./Pages/Home";
import { GlobalStyles } from "./Pages/styles";

export const App =()=> {
  return (
   <BrowserRouter>
   <GlobalStyles/>
   <Menu/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="cursos" element={<Cursos/>}/>
    <Route path="detalhes/:id" element={<Detalhes/>}/>
    <Route path="contato" element={<Contato/>}/>
    <Route path="*" element={<Page404/>}/>
   </Routes> 
  
   </BrowserRouter>
    
  );
}

