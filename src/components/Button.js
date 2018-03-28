import React, { Component } from 'react';

import Classic from './Classic';
import Ranked from './Ranked';
import Info from './Info';
import Wills from './Wills';

class Button extends Component {
  modeSelect(mode) {
    if(mode === 'classic') {
      return <Classic />
    } else if (mode === 'ranked') {
      return <Ranked />
    } else if (mode === 'info') {
      return <Info />
    } else if (mode === 'wills') {
      return <Wills />
    }
  }
  
  render() {
    return(
      <div className="window">
        {this.modeSelect(this.props.mode)}
      </div>
    )
  }
}

export default Button;