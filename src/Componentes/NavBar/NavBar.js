import "./NavBar.css";
import CardWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <nav>
      <ul style={{ backgroundColor: `${props.color}` }}>
        <li><CardWidget/></li>
        <li><Link  to='/' className='Link'>INICIO</Link></li>
        <li><Link  to='/productos' className='Link'>PRODUCTOS</Link></li>
        <li><Link  to='/quienessomos' className='Link'>QUIENES SOMOS</Link></li>
        <li><Link  to='contacto' className='Link'>CONTACTO</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;