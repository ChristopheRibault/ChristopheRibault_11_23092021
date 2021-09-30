import { Component } from 'react';
import { Link } from 'react-router-dom';

class AccomodationThumb extends Component {

  render() {
    return( 
      <Link to={`/accomodation/${this.props.data.id}`} data-testid='accomodation-thumb' className='accomodation-thumb'>
        <img className='accomodation-thumb__img' src={this.props.data.cover} alt={this.props.data.title} />
        <p className='accomodation-thumb__title'>{this.props.data.title}</p>
      </Link>
    );
  }
}

export default AccomodationThumb;
