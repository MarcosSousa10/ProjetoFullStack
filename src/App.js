import Home from './pages/Home/index';
import Details from './pages/Details/index';
import { BrowserRouter, Routes, Route  } from "react-router-dom";

import './styles.css';
function Routess() {
  return (
    <BrowserRouter>

    <Routes>
    <Route path = '/'  element = { < Home/>}/> 
    <Route path = '/services' element = { <Details/>}/> 
    </Routes>
    </BrowserRouter> 
  );
}

export default Routess;
