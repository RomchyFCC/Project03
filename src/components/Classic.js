import React, { Component } from 'react';

import Platform from './Platform';
import Roles from './Roles';
import Functions from './Functions';

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
    const possibleRoles = [];
    Functions.setup(roles, possibleRoles);
    possibleRoles.sort();
    // create a unique array to display it
    let uniqueArr = [];
    for (let i = 0; i < possibleRoles.length; i++) {
      if (possibleRoles[i] !== possibleRoles[i+1]) {
        uniqueArr.push(possibleRoles[i]);
      }
    }
    this.setState({
      possibleRoles: uniqueArr,
      allRoles: possibleRoles
    })
  }
  resetState() {
    const roles = this.state.roles;
    const possibleRoles = [];
    Functions.setup(roles, possibleRoles);
    this.setState({
      allRoles: possibleRoles,
      usedRoles: []
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
            Functions.determine('townKilling', state);
            this.setState({
              allRoles: state.allRoles.filter(role => (role !== item)),
              usedRoles: state.usedRoles.concat(item, 'Town Killing')
            })

          } else if (!state.usedRoles.includes('Random Town') && Roles.town.includes(item)) {
            Functions.determine('town', state);
            this.setState({
              allRoles: state.allRoles.filter(role => (role !== item)),
              usedRoles: state.usedRoles.concat(item, 'Random Town')
            })
          }
           
        // if role isn't unique
        } else {
          // if TK wasnt used yet and the role is in the TK array
          if (!state.usedRoles.includes('Town Killing') && Roles.townKilling.includes(item)) {
            Functions.determine('townKilling', state);
            this.setState({
              allRoles: state.allRoles,
              usedRoles: state.usedRoles.concat(item, 'Town Killing')
            })

          // if RT wasn't used yet and the role is included in RT array
          } else if (!state.usedRoles.includes('Random Town') && Roles.town.includes(item)) {
            Functions.determine('town', state);
            this.setState({
              allRoles: state.allRoles,
              usedRoles: state.usedRoles.concat(item, 'Random Town')
            })
          }
        }
      }

    // if used already
    } else {
      if (!Roles.uniqueRoles.includes(item)) {
        if(!state.usedRoles.includes('Town Killing') && Roles.townKilling.includes(item)) {
          Functions.determine('townKilling', state);
          this.setState({
            allRoles: state.allRoles,
            usedRoles: state.usedRoles.concat(item, 'Town Killing')
          })
        } else if (!state.usedRoles.includes('Random Town') && Roles.town.includes(item)) {
          Functions.determine('town', state);
          this.setState({
            allRoles: state.allRoles,
            usedRoles: state.usedRoles.concat(item, 'Random Town')
          })
        }
      } 
    }
  }
  render() {
    return(
      <div className="game">
        <Platform allRoles={this.state.allRoles} possibleRoles={this.state.possibleRoles} toggler={this.toggleRole.bind(this)} />       
        <div className="display">
          <ul>
            {this.state.roles.map((item, key) => {
              if (this.state.usedRoles.includes(item)) {
                return <li className="cross-off" key={key}>{item + ' - '}<input placeholder={item} /></li>
              } else {
                return <li key={key}>{item + ' - '}<input placeholder={item} /></li>
              }
            })}
          </ul>
        </div>
        <button onClick={this.resetState.bind(this)}>Reset</button>
      </div>
    )
  }
}

export default Classic;