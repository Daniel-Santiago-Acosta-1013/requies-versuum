import { Link } from 'react-router-dom';
import './Navbar.scss'

function Navbar() {
  return (
    <div>
      <h1>Poemas</h1>
      <Link to="/">Inicio</Link>
      <Link to="/create">Crear Poema</Link>
      {/* Agrega más enlaces según lo necesario */}
    </div>
  );
}

export default Navbar;
