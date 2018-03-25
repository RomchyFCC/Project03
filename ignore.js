    // if a basic role
    if (state.roles.includes(item)) {
      //if used
      if (state.usedRoles.includes(item)) {
        // if unique
        if (Roles.uniqueRoles.includes(item)) {
          state.usedRoles.splice(state.usedRoles.indexOf(item), 1)
          this.setState({
            usedRoles: state.usedRoles
          })

        // not unique
        } else {
          // if town killing
          if (Roles.townKilling.includes(item) && !state.usedRoles.includes('Town Killing')) {
            item = 'Town Killing';
            this.setState({
              usedRoles: this.state.usedRoles.concat(item)
            })
          // if town random
          } else if (Roles.town.includes(item) && !state.usedRoles.includes('Random Town')) {
            item = 'Random Town';
            this.setState({
              usedRoles: this.state.usedRoles.concat(item)
            })
          } else {
            state.usedRoles.splice(state.usedRoles.indexOf('Random Town'), 1)
            state.usedRoles.splice(state.usedRoles.indexOf('Town Killing'), 1)
            this.setState({
              usedRoles: state.usedRoles
            })
          }
        }
      // if not used
      } else {
        this.setState({
          usedRoles: this.state.usedRoles.concat(item)
        })
      }
    // if it's not a basic role
    } else {
      if (state.usedRoles.includes(item)) {
        if (Roles.uniqueRoles.includes(item)) {
          if (Roles.townKilling.includes(item) && !state.usedRoles.includes('Town Killing')) {
            item = 'Town Killing';
          // if town random
          } else if (Roles.town.includes(item) && !state.usedRoles.includes('Random Town')) {
            item = 'Random Town';
          }
          state.usedRoles.splice(state.usedRoles.indexOf(item), 1)
          this.setState({
            usedRoles: state.usedRoles
          })
        } else {
          // if town killing
          if (Roles.townKilling.includes(item) && !state.usedRoles.includes('Town Killing')) {
            item = 'Town Killing';
            this.setState({
              usedRoles: this.state.usedRoles.concat(item)
            })
          // if town random
          } else if (Roles.town.includes(item) && !state.usedRoles.includes('Random Town')) {
            item = 'Random Town';
            this.setState({
              usedRoles: this.state.usedRoles.concat(item)
            })
          } else {
            state.usedRoles.splice(state.usedRoles.indexOf('Random Town'), 1)
            state.usedRoles.splice(state.usedRoles.indexOf('Town Killing'), 1)
            this.setState({
              usedRoles: state.usedRoles
            })
          }
        }
      } else {
        if (Roles.townKilling.includes(item) && !state.usedRoles.includes('Town Killing')) {
          item = 'Town Killing';
          
        // if town random
        } else if (Roles.town.includes(item) && !state.usedRoles.includes('Random Town')) {
          item = 'Random Town';
        }
        this.setState({
          usedRoles: this.state.usedRoles.concat(item)
        })
      }
    }

    /*if (!state.roles.includes(item)) {
      if (Roles.townKilling.includes(item) && !state.usedRoles.includes('Town Killing')) {
        item = 'Town Killing';
      } else if (Roles.town.includes(item) && !state.usedRoles.includes('Random Town')) {
        item = 'Random Town';
      }
    }


    // if the role not used but in the game
    if (Roles.uniqueRoles.includes(item) && state.usedRoles.includes(item)) {
    } else if (!state.usedRoles.includes(item) && state.roles.includes(item)) {
      this.setState({
        usedRoles: this.state.usedRoles.concat(item)
      })
    // if the role used
    } else {
      // if role = town and usedRoles doesn't have random town and its not unique
      if (Roles.town.includes(item) && !state.usedRoles.includes('Random Town')) {
        this.setState({
          usedRoles: state.usedRoles.concat('Random Town')
        })
      // if role = town killing and town killing is not in usedRoles and the role is not unique
      } else if (Roles.townKilling.includes(item) && !state.usedRoles.includes('Town Killing')) {
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
    }*/
    const townK = ['Town Killing', item];
          const unUsed = [];
          const used = [].concat(state.usedRoles).concat(townK);
          state.roles.forEach(role => {
            if (!used.includes(role)) {
              unUsed.push(role);
            }
          })
          used.push(...Roles.townKilling);
          unUsed.forEach(role => {
            if(used.includes(role)) {
              used.splice(used.indexOf(role), 1)
            }
          })
          this.setState({
            usedRoles: used
          })

 // ------------------------------------------------------------------*/
          const ranT = ['Random Town', item];
          const unUsed = [];
          const used = [].concat(state.usedRoles).concat(ranT);
          state.roles.forEach(role => {
            if (!used.includes(role)) {
              unUsed.push(role);
            }
          })
          used.push(...Roles.town);
          unUsed.forEach(role => {
            if(used.includes(role)) {
              used.splice(used.indexOf(role), 1)
            }
          })
          console.log(unUsed, used)
          this.setState({
            usedRoles: used
          })


/////////////////////////////////////////////////////////////////////////

    // if not used yet
    // priority in the if else statement as the statement is more common
    if (!state.usedRoles.includes(item)) {
      // if the role is predetermined
      if (state.roles.includes(item)) {
        // add the role to used roles
        this.setState({
          usedRoles: this.state.usedRoles.concat(item)
        })
      // if NOT predetermined
      } else {
        if (Roles.townKilling.includes(item) && !state.usedRoles.includes('Town Killing')) {
          const townK = ['Town Killing', item];
          const unUsed = [];
          const used = [].concat(state.usedRoles).concat(townK);
          state.roles.forEach(role => {
            if (!used.includes(role)) {
              unUsed.push(role);
            }
          })
          used.push(...Roles.townKilling);
          unUsed.forEach(role => {
            if(used.includes(role)) {
              used.splice(used.indexOf(role), 1)
            }
          })
          this.setState({
            usedRoles: used
          })
        } else if (Roles.town.includes(item) && !state.usedRoles.includes('Random Town')) {
          const ranT = ['Random Town', item];
          const unUsed = [];
          const used = [].concat(state.usedRoles).concat(ranT);
          state.roles.forEach(role => {
            if (!used.includes(role)) {
              unUsed.push(role);
            }
          })
          used.push(...Roles.town);
          unUsed.forEach(role => {
            if(used.includes(role)) {
              used.splice(used.indexOf(role), 1)
            }
          })
          console.log(unUsed, used)
          this.setState({
            usedRoles: used
          })
        }
        // add TR or TK to used roles
        // add TK - possible roles OR TR - possible roles to used roles
      }

    // if used
    } else {


    }
    console.log(this.state);