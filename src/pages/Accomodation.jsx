import { Component } from 'react';
import Fetcher from '../utils/fetcher';
import { RatingStars, TagList, Host, Dropdown, Carusel } from '../components';
import { Error404 } from '.';

class Accomodation extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: {}
    }
  }

  componentDidMount() {
    new Fetcher().getAccomodation(this.props.match.params.id)
      .then(data => this.setState({ data }))
  }

  render() {
    const { data } = this.state;
    if (!data) {
      return <Error404/>
    }
    return (
      <main className='accomodation'>
        <Carusel pictures={data.pictures} />
        <div className='accomodation__grid'>
          <h2 className='accomodation__title'>{data.title}</h2>
          <p className='accomodation__location'>{data.location}</p>
          <TagList className='accomodation__tags' tags={data.tags}/>
          <Host className='accomodation__host' host={data.host} />
          <RatingStars className='accomodation__rating' rating={data.rating} />
        </div>
        <div className="accomodation__dropdowns">
          <Dropdown title='Description' content={data.description} />
          <Dropdown title='Equipements' content={data.equipments} />
        </div>
      </main>
    );
  }
}

export default Accomodation;
