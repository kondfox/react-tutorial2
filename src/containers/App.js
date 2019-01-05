import React, { Component } from 'react';
import BuyAcorn from './BuyAcorn';
import EatAcorn from './EatAcorn';
import DisplayAcorn from './DisplayAcorn';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <BuyAcorn />
        <DisplayAcorn />
        <EatAcorn />
      </main>
    );
  }
}

export default App;