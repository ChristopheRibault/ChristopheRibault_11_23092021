import { Component } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/logo/logo_kasa.svg';
import '../style/Header.sass';

class Header extends Component {
  render() {
    return (
      <header className='Header'>
        <Link to='/'>
          <img class='logo' src={Logo} alt='logo kasa' />
        </Link>
        <nav>
          <Link class='navlink' to='/'>Accueil</Link>
          <Link class='navlink' to='/about'>A propos</Link>
        </nav>
      </header>
    );
  }
}

export default Header;
