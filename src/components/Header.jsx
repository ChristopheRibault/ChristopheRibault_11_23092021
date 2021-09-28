import { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

import Logo from '../assets/logo/logo_kasa.svg';

class Header extends Component {
  render() {
    return (
      <header className='Header'>
        <Link to='/'>
          <img className='logo' src={Logo} alt='logo kasa' />
        </Link>
        <nav>
          <NavLink className='navlink' exact to='/'>Accueil</NavLink>
          <NavLink className='navlink' to='/about'>A propos</NavLink>
        </nav>
      </header>
    );
  }
}

export default Header;
