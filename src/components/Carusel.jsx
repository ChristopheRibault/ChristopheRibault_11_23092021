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
        <div className='carusel__prev' onClick={this.previous.bind(this)}>X</div>
        <img src={this.props.pictures[this.state.currentId]} alt='' />
        <div className='carusel__next' onClick={this.next.bind(this)}>X</div>
      </div>
    )
  }
}

export default Carusel;
