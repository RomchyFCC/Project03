import React, { Component } from 'react';

import Button from './Button';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      mode: 'classic',
    }
  }
  clickHandler(e){
    const mode = e.target.innerHTML.toLowerCase();

    if (mode === 'classic') {
      this.setState({
        mode
      })
    } else {
      this.setState({
        mode
      })
    }
  }
  render() {
    return(
      <div className="main">
        <button onClick={this.clickHandler.bind(this)} >Classic</button>
        <button onClick={this.clickHandler.bind(this)} >Ranked</button>
        <Button className="view" mode={this.state.mode} ></Button>
      </div>
    )
  }
}

export default Main;