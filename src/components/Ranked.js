import React, { Component } from 'react';

import Platform from './Platform';
import Roles from './Roles';
import Functions from './Functions';

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

          } else if (!state.usedRoles.includes('Town Investigative') && Roles.townInvestigative.includes(item)) {
            Functions.determine('townInvestigative', state);
            this.setState({
              allRoles: state.allRoles.filter(role => (role !== item)),
              usedRoles: state.usedRoles.concat(item, 'Town Investigative')
            })
          } else if (!state.usedRoles.includes('Town Protective') && Roles.townProtective.includes(item)) {
            Functions.determine('townProtective', state);
            this.setState({
              allRoles: state.allRoles.filter(role => (role !== item)),
              usedRoles: state.usedRoles.concat(item, 'Town Protective')
            })
          } else if (!state.usedRoles.includes('Town Support') && Roles.townSupport.includes(item)) {
            Functions.determine('townSupport', state);
            this.setState({
              allRoles: state.allRoles.filter(role => (role !== item)),
              usedRoles: state.usedRoles.concat(item, 'Town Support')
            })
          } else if (!state.usedRoles.includes('Random Town') && Roles.town.includes(item)) {
            Functions.determine('town', state);
            this.setState({
              allRoles: state.allRoles.filter(role => (role !== item)),
              usedRoles: state.usedRoles.concat(item, 'Random Town')
            })
          } else if (!state.usedRoles.includes('Random Mafia') && Roles.mafia.includes(item)) {
            Functions.determine('mafia', state);
            this.setState({
              allRoles: state.allRoles.filter(role => (role !== item)),
              usedRoles: state.usedRoles.concat(item, 'Random Mafia')
            })
          } else if (!state.usedRoles.includes('Neutral Evil') && Roles.neutralEvil.includes(item)) {
            Functions.determine('neutralEvil', state);
            this.setState({
              allRoles: state.allRoles.filter(role => (role !== item)),
              usedRoles: state.usedRoles.concat(item, 'Neutral Evil')
            })
          } else if (!state.usedRoles.includes('Neutral Killing') && Roles.neutralKilling.includes(item)) {
            Functions.determine('neutralKilling', state);
            this.setState({
              allRoles: state.allRoles.filter(role => (role !== item)),
              usedRoles: state.usedRoles.concat(item, 'Neutral Killing')
            })
          }
           
        // if role isn't unique
        } else {
          // if TK wasnt used yet and the role is in the TK array
          if (Functions.count(state.usedRoles, state.roles, 'Town Killing') && Roles.townKilling.includes(item)) {
            Functions.determine('townKilling', state);
            this.setState({
              allRoles: state.allRoles,
              usedRoles: state.usedRoles.concat(item, 'Town Killing')
            })
          } else if (Functions.count(state.usedRoles, state.roles, 'Town Investigative') && Roles.townInvestigative.includes(item)) {
            Functions.determine('townInvestigative', state);
            this.setState({
              allRoles: state.allRoles,
              usedRoles: state.usedRoles.concat(item, 'Town Investigative')
            })
          } else if (Functions.count(state.usedRoles, state.roles, 'Town Protective') && Roles.townProtective.includes(item)) {
            Functions.determine('townProtective', state);
            this.setState({
              allRoles: state.allRoles,
              usedRoles: state.usedRoles.concat(item, 'Town Protective')
            })
          } else if (Functions.count(state.usedRoles, state.roles, 'Town Support') && Roles.townSupport.includes(item)) {
            Functions.determine('townSupport', state);
            this.setState({
              allRoles: state.allRoles,
              usedRoles: state.usedRoles.concat(item, 'Town Support')
            })
          } else if (Functions.count(state.usedRoles, state.roles, 'Random Town') && Roles.town.includes(item)) {
            Functions.determine('town', state);
            this.setState({
              allRoles: state.allRoles,
              usedRoles: state.usedRoles.concat(item, 'Random Town')
            })
          } else if (Functions.count(state.usedRoles, state.roles, 'Random Mafia') && Roles.mafia.includes(item)) {
            Functions.determine('mafia', state);
            this.setState({
              allRoles: state.allRoles,
              usedRoles: state.usedRoles.concat(item, 'Random Mafia')
            })
          } else if (Functions.count(state.usedRoles, state.roles, 'Neutral Evil') && Roles.neutralEvil.includes(item)) {
            Functions.determine('neutralEvil', state);
            this.setState({
              allRoles: state.allRoles,
              usedRoles: state.usedRoles.concat(item, 'Neutral Evil')
            })
          } else if (Functions.count(state.usedRoles, state.roles, 'Neutral Killing') && Roles.neutralKilling.includes(item)) {
            Functions.determine('neutralKilling', state);
            this.setState({
              allRoles: state.allRoles,
              usedRoles: state.usedRoles.concat(item, 'Neutral Killing')
            })
          }
        }
      }

    // if used already
    } else {
      if (Functions.count(state.usedRoles, state.roles, 'Town Killing') && Roles.townKilling.includes(item)) {
        Functions.determine('townKilling', state);
        this.setState({
          allRoles: state.allRoles,
          usedRoles: state.usedRoles.concat(item, 'Town Killing')
        })
      } else if (Functions.count(state.usedRoles, state.roles, 'Town Investigative') && Roles.townInvestigative.includes(item)) {
        Functions.determine('townInvestigative', state);
        this.setState({
          allRoles: state.allRoles,
          usedRoles: state.usedRoles.concat(item, 'Town Investigative')
        })
      } else if (Functions.count(state.usedRoles, state.roles, 'Town Protective') && Roles.townProtective.includes(item)) {
        Functions.determine('townProtective', state);
        this.setState({
          allRoles: state.allRoles,
          usedRoles: state.usedRoles.concat(item, 'Town Protective')
        })
      } else if (Functions.count(state.usedRoles, state.roles, 'Town Support') && Roles.townSupport.includes(item)) {
        Functions.determine('townSupport', state);
        this.setState({
          allRoles: state.allRoles,
          usedRoles: state.usedRoles.concat(item, 'Town Support')
        })
      } else if (Functions.count(state.usedRoles, state.roles, 'Random Town') && Roles.town.includes(item)) {
        Functions.determine('town', state);
        this.setState({
          allRoles: state.allRoles,
          usedRoles: state.usedRoles.concat(item, 'Random Town')
        })
      } else if (Functions.count(state.usedRoles, state.roles, 'Random Mafia') && Roles.mafia.includes(item)) {
        Functions.determine('mafia', state);
        this.setState({
          allRoles: state.allRoles,
          usedRoles: state.usedRoles.concat(item, 'Random Mafia')
        })
      } else if (Functions.count(state.usedRoles, state.roles, 'Neutral Evil') && Roles.neutralEvil.includes(item)) {
        Functions.determine('neutralEvil', state);
        this.setState({
          allRoles: state.allRoles,
          usedRoles: state.usedRoles.concat(item, 'Neutral Evil')
        })
      } else if (Functions.count(state.usedRoles, state.roles, 'Neutral Killing') && Roles.neutralKilling.includes(item)) {
        Functions.determine('neutralKilling', state);
        this.setState({
          allRoles: state.allRoles,
          usedRoles: state.usedRoles.concat(item, 'Neutral Killing')
        })
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
                return <li className={Functions.compare(this.state.usedRoles, this.state.roles, item) ? "cross-off" : " "} key={key}>{item + ' - '}<input placeholder={item} /></li>
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

export default Ranked;