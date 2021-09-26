import { Component } from 'react';

class Host extends Component {
  render() {
    return (
      <div className='host'>
        <p className='host__name'>{this.props.host?.name}</p>
        <img 
          className='host__picture' 
          src={this.props.host?.picture} 
          alt={this.props.host?.name} 
        />
      </div>
    )
  }
}

export default Host;
