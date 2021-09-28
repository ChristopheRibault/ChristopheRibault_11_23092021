import { Component } from 'react';
import Logo from '../assets/logo/logo_white.svg';

class Footer extends Component {
  render() {
    return (
      <footer data-testid='footer'>
        <img src={Logo} alt='logo kasa' />
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    )
  }
}

export default Footer;
