import { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import * as Pages from './pages';

class Router extends Component {

  render() {
    return (
      <div className="Router">
        <BrowserRouter>
          {this.props.children[0]}
            <Switch>
              <Route exact path='/' component={Pages.Home} />
              <Route path='/about' component={Pages.About} />
              <Route path='/accomodation/:id' component={Pages.Accomodation} />
              <Route component={Pages.Error404} />
            </Switch>
          {this.props.children[1]}
        </BrowserRouter>
      </div>
    );
  }
}

export default Router;
