import { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import * as Pages from '../pages';
import { Header, Footer } from '.';

import '../style/index.sass'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
            <Switch>
              <Route exact path='/' component={Pages.Home} />
              <Route path='/about' component={Pages.About} />
              <Route path='/accomodation/:id' component={Pages.Accomodation} />
              <Route component={Pages.Error404} />
            </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
