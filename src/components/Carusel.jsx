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

  handleKeyDown(e, cb = this.next.bind(this)) {
    switch (e.code) {
      case 'Enter':
        cb();
        break;
      case 'ArrowLeft':
        this.previous();
        break;
      case 'ArrowRight':
        this.next();
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div
        data-testid='carusel'
        tabIndex='0'
        className='carusel'
        onKeyDown={(e) => this.handleKeyDown(e)}
      >
        { this.props.pictures?.length > 1 &&
          <><div
            data-testid='carusel-control'
            tabIndex='0'
            className='carusel__btn carusel__btn--prev' 
            onClick={this.previous.bind(this)}
            onKeyDown={(e) => this.handleKeyDown(e, this.previous.bind(this))}
          ></div>
          <div
            data-testid='carusel-control'
            tabIndex='0'
            className='carusel__btn carusel__btn--next' 
            onClick={this.next.bind(this)}
            onKeyDown={(e) => this.handleKeyDown(e, this.next.bind(this))}
          ></div></>
        }
        <img 
          data-testid='carusel-img' 
          className='carusel__img' 
          src={this.props.pictures?.[this.state.currentId]} 
          alt='' 
        />
      </div>
    )
  }
}

export default Carusel;
