import React, { Component } from 'react';

import Platform from './Platform';
import Roles from './Roles';

import '../Game.css';

class Classic extends Component {
  constructor() {
    super();
    this.state = {
      roles: ['Sheriff', 'Doctor', 'Investigator', 'Jailor', 'Medium', 'Godfather', 'Framer', 'Executioner', 'Escort', 'Mafioso', 'Lookout', 'Serial Killer', 'Town Killing', 'Jester', 'Random Town'],
      usedRoles: [],
      possibleRoles: [],
      allRoles: []
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
    let allRoles = [];
    for (let i = 0; i < possibleRoles.length; i++) {
      if (possibleRoles[i] !== possibleRoles[i+1]) {
        uniqueArr.push(possibleRoles[i]);
      }
      if (!Roles.uniqueRoles.includes(possibleRoles[i])) {
        allRoles.push(possibleRoles[i]);
      } else if (Roles.uniqueRoles.includes(possibleRoles[i]) && !allRoles.includes(possibleRoles[i])){
        allRoles.push(possibleRoles[i]);
      }
    }
    this.setState({
      possibleRoles: uniqueArr,
      allRoles: possibleRoles
    })
  }
  toggleRole(e){
    let item = e.target.innerHTML;
    const state = this.state;

    // if not used yet
    if (!state.usedRoles.includes(item)) {
      // if role = predetermined
      if (state.roles.includes(item)) {
        // if role is unique
        if (Roles.uniqueRoles.includes(item)) {
          this.setState({
            allRoles: state.allRoles.filter(role => (role !== item)),
            usedRoles: state.usedRoles.concat(item)
          }) 
        // if role isn't unique
        } else {
          state.allRoles.splice(this.state.allRoles.indexOf(item), 1);
          this.setState({
            allRoles: state.allRoles,
            usedRoles: state.usedRoles.concat(item)
          })
        }
      // if role isn't predetermined
      } else {
        // if role is unique
        if (Roles.uniqueRoles.includes(item)) {
          // if role is town killing or random town
          if (!state.usedRoles.includes('Town Killing') && Roles.townKilling.includes(item)) {

            Roles.townKilling.forEach(role => {
              if (state.allRoles.includes(role)) {
                state.allRoles.splice(state.allRoles.indexOf(role), 1)
              }
            })
            this.setState({
              allRoles: state.allRoles.filter(role => (role !== item)),
              usedRoles: state.usedRoles.concat(item, 'Town Killing')
            })

          } else if (!state.usedRoles.includes('Random Town') && Roles.town.includes(item)) {
            Roles.town.forEach(role => {
              if (state.allRoles.includes(role)) {
                state.allRoles.splice(state.allRoles.indexOf(role), 1)
              }
            })
            this.setState({
              allRoles: state.allRoles.filter(role => (role !== item)),
              usedRoles: state.usedRoles.concat(item, 'Random Town')
            })
          }
           
        // if role isn't unique
        } else {

          // if TK wasnt used yet and the role is in the TK array
          if (!state.usedRoles.includes('Town Killing') && Roles.townKilling.includes(item)) {
            
            Roles.townKilling.forEach(role => {
              if (state.allRoles.includes(role)) {
                state.allRoles.splice(state.allRoles.indexOf(role), 1)
              }
            })
            this.setState({
              allRoles: state.allRoles,
              usedRoles: state.usedRoles.concat(item, 'Town Killing')
            })

          // if RT wasn't used yet and the role is included in RT array
          } else if (!state.usedRoles.includes('Random Town') && Roles.town.includes(item)) {
            Roles.town.forEach(role => {
              if (state.allRoles.includes(role)) {
                state.allRoles.splice(state.allRoles.indexOf(role), 1)
              }
            })
            this.setState({
              allRoles: state.allRoles,
              usedRoles: state.usedRoles.concat(item, 'Random Town')
            })
          }
        }
      }

    // if used already
    } else {
      // TO DO
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
                return <li className="cross-off" key={key}>{item}<input placeholder={item} /></li>
              } else {
                return <li key={key}>{item}<input placeholder={item} /></li>
              }
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default Classic;