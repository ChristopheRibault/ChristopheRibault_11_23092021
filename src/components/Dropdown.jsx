import { Component } from 'react';

class Dropdown extends Component {

  constructor(props) {
    super(props)
    this.state = {
      expanded: false,
    }
  }

  toggle() {
    this.setState({expanded: !this.state.expanded})
  }

  render() {
    const content = Array.isArray(this.props.content) ?
      <ul className='dropdown__content'>
        {this.props.content.map(el => <li>{el}</li>)}
      </ul> :
      <p className='dropdown__content'>{this.props.content}</p>

    return (
      <div className='dropdown'>
        <h3 
          className={`dropdown__title ${this.state.expanded ? 'dropdown__title--expanded' : ''}`}
          onClick={this.toggle.bind(this)}
        >{this.props.title}</h3>
        {this.state.expanded && content}
      </div>
    )
  }
}

export default Dropdown;
