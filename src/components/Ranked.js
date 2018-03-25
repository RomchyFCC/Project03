import React, { Component } from 'react';

import Platform from './Platform';
import Roles from './Roles';

import '../Game.css';

class Ranked extends Component {
  constructor() {
    super();
    this.state = {
      roles: ['Jailor', 'Town Investigative', 'Town Investigative', 'Town Protective', 'Town Killing', 'Town Support', 'Random Town', 'Random Town', 'Random Town', 'Godfather', 'Mafioso', 'Random Mafia', 'Random Mafia', 'Neutral Evil', 'Neutral Killing'],
      usedRoles: [],
      possibleRoles: [],
      allRoles: [],
    }
  }
  componentWillMount() {
    const roles = this.state.roles;
    const possibleRoles = this.state.possibleRoles;
    roles.map(item => {
      if (item === 'Random Town') {
        return possibleRoles.push(...Roles.town)
      } else if (item === 'Town Killing') {
        return possibleRoles.push(...Roles.townKilling)
      } else {
        return possibleRoles.push(item)
      }
    })
    possibleRoles.sort();
    let uniqueArr = [];
    for (let i = 0; i < possibleRoles.length; i++) {
      if (possibleRoles[i] !== possibleRoles[i+1]) {
        uniqueArr.push(possibleRoles[i]);
      }
    }
    this.setState({
      possibleRoles: uniqueArr,
    })
  }
  toggleRole(e){
    const item = e.target.innerHTML;
    const state = this.state;
    // if the role not used but in the game
    if (!state.usedRoles.includes(item) && state.roles.includes(item)) {
      this.setState({
        usedRoles: this.state.usedRoles.concat(item)
      })
    // if the role used
    } else {
      // if role = town and usedRoles doesn't have random town and its not unique
      if (Roles.town.includes(item) && !state.usedRoles.includes('Random Town') && !Roles.uniqueRoles.includes(item)) {
        this.setState({
          usedRoles: state.usedRoles.concat('Random Town')
        })
      // if role = town killing and town killing is not in usedRoles and the role is not unique
      } else if (Roles.townKilling.includes(item) && !state.usedRoles.includes('Town Killing') && !Roles.uniqueRoles.includes(item)) {
        this.setState({
          usedRoles: state.usedRoles.concat('Town Killing')
        })
      // if the role has been used and the array of used roles already containcs random town then remove the clicked role  
      } else {
        state.usedRoles.splice(state.usedRoles.indexOf(item), 1)
        this.setState({
          usedRoles: state.usedRoles
        })
      }
    }
  }
  render() {
    return(
      <div className="game">
        <Platform allRoles={this.state.allRoles} roles={this.state.roles} possibleRoles={this.state.possibleRoles} toggler={this.toggleRole.bind(this)} />       
        <div className="display">
          <ul>
            {this.state.roles.map((item, key) => {
              if (this.state.usedRoles.includes(item)) {
                return <li className="cross-off" key={key}>{item}</li>
              } else {
                return <li key={key}>{item}</li>
              }
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default Ranked;