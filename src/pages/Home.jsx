import { Component } from 'react';
import { AccomodationThumb } from '../components';
import Fetcher from '../utils/fetcher';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    new Fetcher().getAccomodations()
      .then(data => this.setState({ data }))
      .catch(console.log)
  }

  render() {
    document.title = 'Accueil - Kasa.com'

    return (
      <main className='home-page'>
        <div className='home-banner'>Chez vous, partout et ailleurs</div>
        <section className='accomodation-list'>
          {this.state.data.map(accomodation => <AccomodationThumb key={accomodation.id} data={accomodation}/>)}
        </section>
      </main>
    )
  }
}

export default Home;
