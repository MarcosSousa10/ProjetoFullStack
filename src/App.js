import { BrowserRouter, Routes, Router  } from "react-router-dom";
import {Home} from './pages/Home';
import{Details} from './pages/Details';
import './styles.css';
function Routes() {
  return (
    <BrowserRouter>
    <Routes>
      <Router path="/" elemento={<Home/>}/>
      <Router path="/details:id" elemento={<Details/>}/>
    </Router>
    </BrowserRouter>
  );
}

export default Routes;
