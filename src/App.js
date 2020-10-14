import React from 'react';

import { Calendar, Details, Features, Footer, Header, Main } from './components';
import './style.css';

class App extends React.Component {

  state = {
    rocket: 'Falcon-1',
  };

  method() {

  };

  render() {
    return(
      <>
        <Header />
        <Main rocket={this.state.rocket}/>
        <Features />
        <Footer />
      </>
    )
  }
}

export default App;
