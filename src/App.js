import './App.css';
import NavBar from "./Componentes/NavBar/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 
//VIEWS
import Home from './views/Home/Home';
import Contacto from './views/Contacto/Contacto';
import Productos from './views/Productos/Productos';
import QuienesSomos from './views/QuienesSomos/QuienesSomos';
import ItemDetailContainer from './views/ItemDetailContainer/ItemDetailContainer';



const redNav = "red"

function App() {
  return (
  <Router>
    <>
      <h1 className='App' >MI TIENDA</h1>
      <NavBar color={redNav}/>
      <Routes>
        <Route path='/' element={<Home/>} />    
        <Route path='/productos' element={<Productos/>} /> 
        <Route path='/contacto' element={<Contacto/>} /> 
        <Route path='/quienesSomos' element={<QuienesSomos/>} /> 
        <Route path='/detail/:id' element={<ItemDetailContainer/>} /> 
     

      </Routes>
    </>
  </Router>
  );
}

export default App;
  