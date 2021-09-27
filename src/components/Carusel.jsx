import { Component } from 'react';

class Carusel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentId: 0
    }
  }

  next() {
    const newId = this.state.currentId === this.props.pictures.length - 1 ?
    0 : 
    this.state.currentId + 1;

    this.setState({currentId: newId})
  }

  previous() {
    const newId = this.state.currentId === 0 ?
    this.props.pictures.length - 1 :
    this.state.currentId - 1;

    this.setState({currentId: newId})
  }

  render() {
    return (
      <div className='carusel'>
        { this.props.pictures?.length > 1 &&
          <><div 
            className='carusel__btn carusel__btn--prev' 
            onClick={this.previous.bind(this)}
          ></div>
          <div 
            className='carusel__btn carusel__btn--next' 
            onClick={this.next.bind(this)}
          ></div></>
        }
        <img className='carusel__img' src={this.props.pictures?.[this.state.currentId]} alt='' />
      </div>
    )
  }
}

export default Carusel;
