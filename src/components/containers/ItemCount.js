import React, { Component } from 'react';
import {Button} from '../containers/Button';

class ItemCount extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 1
    }
  }

  handleCount(value) {
    var stock = 5;
    if ((this.state.count < stock && value == 1) || (this.state.count > 0 && value == -1)) {
        this.setState((prevState) => ({ count: prevState.count + value }));
    }
  }

  render() {


    return (
      <div>
        Current count: {this.state.count}
        <hr />
        <Button sign="+" count={this.state.count} updateCount={this.handleCount.bind(this)} />
        <Button sign="-" count={this.state.count} updateCount={this.handleCount.bind(this)} />
      </div>
    );
  }
}

export default ItemCount;