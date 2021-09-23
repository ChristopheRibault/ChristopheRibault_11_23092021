import { Route } from 'react-router-dom';
import Header from '../Header';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path='/'>
        Home
      </Route>
      <Route path='/accomodation/:id'>
        Accomodation
      </Route>
      <Route path='/about'>
        About
      </Route>
      <Route>
        Error
      </Route>
    </div>
  );
}

export default App;
