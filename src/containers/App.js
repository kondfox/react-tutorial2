import React, { Component } from 'react';
import Button from '../components/Button';
import Display from '../components/Display';

class App extends Component {
  constructor(props) {
    super(props);
    this.modifyAcorns.bind(this);
    this.state = {
      acorns: 0,
    }
  }
  
  modifyAcorns(diff) {
    this.setState({
      acorns : Math.max(0, this.state.acorns + diff),
    });
  }

  render() {
    return (
      <div>
        <Button label="Buy one" action={() => this.modifyAcorns(1)} />
        <Display>
          <h1>{this.state.acorns}</h1>
        </Display>
        <Button label="Eat one" action={() => this.modifyAcorns(-1)} />
      </div>
    );
  }
}

export default App;