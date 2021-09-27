import { Component } from 'react';

class Tag extends Component {
  render() {
    return <ul className={`tags-list ${this.props.className}`}>
    {
      this.props.tags?.map((tag, id) => 
        <li key={`${tag}-${id}`} className='tag'>{tag}</li>
      )
    }
  </ul>
    
  }
}

export default Tag;
