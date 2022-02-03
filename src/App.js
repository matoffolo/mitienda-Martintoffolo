import './App.css';
import NavBar from "./Componentes/NavBar/NavBar"
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from './Componentes/ItemList/ItemList';


const redNav = "red"

function App() {
  return (
    <>
      <h1 className='App' >MI TIENDA</h1>
      <NavBar color={redNav}/>
      <div className='container'>
      <ItemListContainer
        imagen = 'https://www.nationalgeographic.com.es/medio/2021/10/02/a-beakful_1c4c8602_1200x799.jpg'
        titulo = 'Pinguino'
        descripcion = 'Fotografía ganadora en la categoría: Aves'
      />
       <ItemListContainer
        imagen = 'https://www.nationalgeographic.com.es/medio/2021/10/02/emancipacion_124a8ca1_1200x799.jpg'
        titulo = 'Tigre'
        descripcion = 'Fotografía ganadora absoluta de la competición'
      />
       <ItemListContainer
        imagen = 'https://www.nationalgeographic.com.es/medio/2021/10/02/bajo-la-luna_232f955d_1200x799.jpg'
        titulo = 'Bajo la luna'
        descripcion = 'Fotografía ganadora en la categoría: Mundo Subacuático'
      />
      </div>
      <h2>Lista</h2>
      <div className ='card'>
          <ItemList />                
      </div>
    </>
  );
}

export default App;
