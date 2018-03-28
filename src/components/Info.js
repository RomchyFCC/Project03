import React, { Component } from 'react';

import '../Game.css';

class Info extends Component {
  render() {
    return(
      <div className="notice">
        <br/>
        <p>This application is not a part of blank media games.</p>
        <p>It uses and represents elements of Town of Salem game that all belong to Blank Media Games.</p>
        <p>You can find the game made by Blank Media Games here: <a href="https://www.blankmediagames.com/TownOfSalem/" target="_blank" rel="noopener noreferrer">Town of Salem</a></p>
        <p>If you are a Blank media games representative and you believe any of this is offensive to the game or is violating any of your copyrights, please contact me. <a href="mailto:romanstruna@romanstruna.com" target="_blank" rel="noopener noreferrer">E-mail</a></p>
        <br/>
        <p>This application is meant to be used while playing town of salem, it removes basic deducting and logic aspect of the game so you can focus on role playing and lying.</p>
        <p>It can also be used as a learning tool. example: if you know 5 roles in your game what are the options for other 10?</p>
        <br/>
        <p>I don't intend to profit on this application, this was a learning project for me.</p>
        <p>if you found this app helpful i would appreciate you reaching out and telling me what you liked and suggest imporvements (email above).</p>
        <br/>
      </div>
    )
  }
}

export default Info;