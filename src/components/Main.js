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
    this.setState({
      mode
    })
  }
  render() {
    return(
      <div className="main">
        <div className="buttons">
          <button onClick={this.clickHandler.bind(this)} className={this.state.mode === 'classic' ? 'used' : ' '} >Classic</button>
          <button onClick={this.clickHandler.bind(this)} className={this.state.mode === 'ranked' ? 'used' : ' '}>Ranked</button>
          <button onClick={this.clickHandler.bind(this)} className={this.state.mode === 'wills' ? 'used' : ' '}>Wills</button>
          <button onClick={this.clickHandler.bind(this)} className={this.state.mode === 'info' ? 'used' : ' '}>Info</button>
        </div>
        <Button className="view" mode={this.state.mode} ></Button>
      </div>
    )
  }
}

export default Main;