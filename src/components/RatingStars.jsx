import { Component } from 'react';
import fullstar from '../assets/fullStar.svg';
import emptyStar from '../assets/emptyStar.svg';

class RatingStars extends Component {
  render() {
    return <ul className='accomodation__rating'>
          {
            new Array(5)
              .fill()
              .map((_, id) => 
                <img 
                  key={`star-${id+1}`}
                  src={id + 1 > this.props.rating ? emptyStar : fullstar} 
                  alt='rating star' 
                />
              )
          }
        </ul>
  }
}

export default RatingStars;
