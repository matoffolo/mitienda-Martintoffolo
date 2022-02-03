import "./NavBar.css";
import CardWidget from "../CartWidget/CartWidget";

const NavBar = (props) => {
  return (
    <nav>
      <ul style={{ backgroundColor: `${props.color}` }}>
        <li><CardWidget/></li>
        <li><a>Inicio</a></li>
        <li><a>Productos</a></li>  
        <li><a>Quines Somos</a></li>
        <li><a>Contacto</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;