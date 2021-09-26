import { Component } from 'react';
import Fetcher from '../utils/fetcher';
import { RatingStars, TagList, Host, Dropdown, Carusel } from '../components';

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
    console.log(data);
    return (
      <main className='accomodation'>
        <Carusel pictures={data.pictures} />
        <h2 className='accomodation__title'>{data.title}</h2>
        <p className='accomodation__location'>{data.location}</p>
        <TagList tags={data.tags}/>
        <Host host={data.host} />
        <RatingStars rating={data.rating} />
        <Dropdown title='Description' content={data.description} />
        <Dropdown title='Equipements' content={data.equipments} />
      </main>
    );
  }
}

export default Accomodation;
