import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import * as Pages from '../pages';
import Header from './Header';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Pages.Home} />
          <Route path='/accomodation/:id' component={Pages.Accomodation} />
          <Route path='/about' component={Pages.Accomodation} />
          <Route component={Pages.Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
