import React, { Component } from 'react';

import Classic from './Classic';
import Ranked from './Ranked';

class Button extends Component {
  render() {
    return(
      <div className="window">
          {this.props.mode === 'classic' ?  <Classic /> :  <Ranked />}
      </div>
    )
  }
}

export default Button;