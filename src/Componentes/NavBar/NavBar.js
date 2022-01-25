import "./NavBar.css";


const NavBar = (props) => {
  return (
    <nav>
      <ul style={{ backgroundColor: `${props.color}` }}>
        <li><a>Inicio</a></li>
        <li><a>Productos</a></li>  
        <li><a>Quines Somos</a></li>
        <li><a>contacto</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;