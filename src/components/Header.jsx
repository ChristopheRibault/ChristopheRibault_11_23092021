import { Component } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/logo/logo_kasa.svg';

class Header extends Component {
  render() {
    return (
      <header className='Header'>
        <Link to='/'>
          <img className='logo' src={Logo} alt='logo kasa' />
        </Link>
        <nav>
          <Link className='navlink' to='/'>Accueil</Link>
          <Link className='navlink' to='/about'>A propos</Link>
        </nav>
      </header>
    );
  }
}

export default Header;
