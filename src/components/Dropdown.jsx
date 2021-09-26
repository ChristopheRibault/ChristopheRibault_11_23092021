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
      <ul className='dropdown__list'>
        {this.props.content.map(el => <li className='dropdown__list-item'>{el}</li>)}
      </ul> :
      <p className='dropdown__description'>{this.props.content}</p>

    return (
      <div className='dropdown'>
        <h3 
          className='dropdown__title'
          onClick={this.toggle.bind(this)}
        >{this.props.title}</h3>
        {this.state.expanded && content}
      </div>
    )
  }
}

export default Dropdown;
