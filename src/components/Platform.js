import React, { Component } from 'react';

import Roles from './Roles';

class Platform extends Component {
  spread(faction) {
    return (
      <div className={faction}>
        <h3 className="faction-header">{faction}</h3>
        <ul>
          {Roles[faction].map((item, index) => {
            if (this.props.possibleRoles.includes(item)) {
              return <li className={this.props.usedRoles.includes(item) ? 'used' : ' '} onClick={this.props.toggler} key={faction + index} >{item}</li>
            }
            return null;
          })}
        </ul>
      </div>
    )
  }
  render() {
    return(
      <div className="platform">
        {this.spread('town')}
        {this.spread('mafia')}
        {this.spread('neutral')}
      </div>
    )
  }
}

export default Platform;