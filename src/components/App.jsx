import { Component } from 'react';
import Router from '../Router';
import { Header, Footer } from '.';

import '../style/index.sass';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
