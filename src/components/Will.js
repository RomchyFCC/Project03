import React, { Component } from 'react';

import '../Game.css';

class Will extends Component {
  render() {
    return(
      <div className="notice">
        <p>DOCTOR<br/>
        N1: 14 - Not Attacked<br/>
        N2: 7 - Attacked<br/>
        N3:<br/>
        N4:<br/>
        N5:</p>
        <br />
        <p>Lookout<br/>
        N1: 5 - 8 visited<br/>
        N2: 9 - 2 visited<br/>
        N3:<br/>
        N4:<br/>
        N5:</p>
        <br />
        <p>Investigator<br/>
        N1: 4 - Doctor, Disguiser or Serial Killer<br/>
        N2: 15 - Vigilante, Veteran or Mafioso<br/>
        N3: 13 - Framer or Jester<br/>
        N4:<br/>
        N5:</p>
        <br />
        <p>Sheriff<br/>
        N1: 11 - Member of the mafia<br/>
        N2: 2 - NS / GF<br/>
        N3: 8 - Your target is the serial killer<br/>
        N4:<br/>
        N5:</p>
      </div>
    )
  }
}

export default Will;