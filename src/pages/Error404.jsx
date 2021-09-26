import { Component } from 'react';
import { Link } from 'react-router-dom';

class Error404 extends Component {
  render() {
    return (
      <main className='error-page'>
        <p className='error-page__title'>404</p>
        <p className='error-page__description'>Oups! La page que vous demandez n'existe pas.</p>
        <Link to='/' className='error-page__link'>Retourner sur la page d’accueil</Link>
      </main>
    );
  }
}

export default Error404;
