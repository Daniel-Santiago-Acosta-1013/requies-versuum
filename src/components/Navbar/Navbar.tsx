import { Link } from 'react-router-dom';
import './Navbar.scss'

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Canto sinte</h1>
      <div className="links">
        <Link to="/">Inicio</Link>
        <Link to="/create">Crear Poema</Link>
      </div>
    </nav>
  );
}
export default Navbar;
