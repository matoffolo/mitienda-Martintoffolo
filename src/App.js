import './App.css';
import NavBar from "./Componentes/NavBar/NavBar"

const redNav = "red"

function App() {
  return (
    <>
      <h1 className='App' >MI TIENDA</h1>
      <NavBar color={redNav}/>
    </>
  );
}

export default App;
