import { Link } from 'react-router-dom';
import './Header.css';

import Logo from '../../assets/logo/logo_kasa.svg'

function Header() {
  return (
    <header className="Header">
      <Link to='/'>
        <img src={Logo} alt="logo kasa" />
      </Link>
      <nav>
        <Link to='/'>Accueil</Link>
        <Link to='/about'>A propos</Link>
      </nav>
    </header>
  );
}

export default Header;
