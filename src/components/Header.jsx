import { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Logo from '../assets/logo/logo_kasa.svg';

const HeaderWrapper = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  padding: 2rem;
  @media (max-width: 768px) {
    padding: .5rem;
  }
`
const StyledLogo = styled.img`
  height: 68px;
  @media (max-width: 768px) {
    height: 47px;
  }
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #FF6060;
  font-size: 1.5em;
  margin-left: 2em;
  @media (max-width: 768px) {
    text-transform: uppercase;
    font-size: .8em;
    margin-left: .8em;
  }
`

class Header extends Component {
  render() {
    return (
      <HeaderWrapper className="Header">
        <Link to='/'>
          <StyledLogo src={Logo} alt="logo kasa" />
        </Link>
        <nav>
          <StyledLink to='/'>Accueil</StyledLink>
          <StyledLink to='/about'>A propos</StyledLink>
        </nav>
      </HeaderWrapper>
    );
  }
}

export default Header;
