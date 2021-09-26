import { Component } from 'react';

class Tag extends Component {
  render() {
    return <ul className='accomodation__tags-list'>
    {
      this.props.tags?.map((tag, id) => 
        <div key={`${tag}-${id}`} className='tag'>{tag}</div>
      )
    }
  </ul>
    
  }
}

export default Tag;
