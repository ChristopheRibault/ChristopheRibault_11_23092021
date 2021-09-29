import { Component } from 'react';
import { Dropdown } from '../components';

class About extends Component {
  render() {
    document.title = 'A propos - Kasa.com'
    return (
      <main className='about-page' data-testid='about-page'>
        <div className='about-banner'></div>
        <div className='about-dropdowns'>
          <Dropdown
            className='about-dropdown'
            title='Fiabilité'
            content='Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
          />
          <Dropdown 
            className='about-dropdown'
            title='Respect'
            content='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
          />
          <Dropdown 
            className='about-dropdown'
            title='Service'
            content='Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N&quote;hésitez pas à nous contacter si vous avez la moindre question.'
          />
          <Dropdown 
            className='about-dropdown'
            title='Sécurité'
            content='La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l&quote;hôte qu&quote;au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.'
          />
        </div>
      </main>
    );
  }
}

export default About;
