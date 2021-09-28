import { Component } from 'react';

class Dropdown extends Component {

  constructor(props) {
    super(props)
    this.state = {
      expanded: false,
    }
  }

  toggle(bool) {
    this.setState({
      expanded: typeof bool === 'boolean' ? bool : !this.state.expanded
    })
  }

  handleKeyDown(e) {
    switch (e.code) {
      case 'Enter':
        this.toggle()
        break;
      case 'ArrowDown':
        this.toggle(true)
        break;
      case 'ArrowUp':
        this.toggle(false)
        break
      default:
        break;
    }
  }

  render() {
    const content = Array.isArray(this.props.content) ?
      <ul className='dropdown__content'>
        {this.props.content.map(el => <li>{el}</li>)}
      </ul> :
      <p className='dropdown__content'>{this.props.content}</p>

    return (
      <div className={`dropdown ${this.props.className}`}>
        <h3
          tabIndex='0'
          className={`dropdown__title ${this.state.expanded ? 'dropdown__title--expanded' : ''}`}
          onClick={this.toggle.bind(this)}
          onKeyDown={(e) => this.handleKeyDown(e)}
        >{this.props.title}</h3>
        {this.state.expanded && content}
      </div>
    )
  }
}

export default Dropdown;
