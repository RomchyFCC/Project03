import Roles from './Roles';

const Functions = {
  setup: function(roles, possibleRoles) {
    
    roles.map(item => {
      if (item === 'Random Town') {
        return possibleRoles.push(...Roles.town)
      } else if (item === 'Town Killing') {
        return possibleRoles.push(...Roles.townKilling)
      } else if (item === 'Town Investigative') {
        return possibleRoles.push(...Roles.townInvestigative)
      } else if (item === 'Town Protective') {
        return possibleRoles.push(...Roles.townProtective)
      } else if (item === 'Town Support') {
        return possibleRoles.push(...Roles.townSupport)
      } else if (item === 'Random Mafia') {
        return possibleRoles.push(...Roles.mafia)
      } else if (item === 'Neutral Evil') {
        return possibleRoles.push(...Roles.neutralEvil)
      } else if (item === 'Neutral Killing') {
        return possibleRoles.push(...Roles.neutralKilling)
      } else {
        return possibleRoles.push(item)
      }
    })
  },
  determine: function(faction, state) {
    Roles[faction].forEach(role => {
      if (state.allRoles.includes(role)) {
        return state.allRoles.splice(state.allRoles.indexOf(role), 1)
      }
    })
  },
  count: function(arr1, arr2, item) {
    let count1 = 0;
    let count2 = 0;
    arr1.forEach(role => {
      if (item === role) {
        count1++;
      }
    });
    arr2.forEach(role => {
      if (item === role) {
        count2++;
      }
    });
    if (count1 < count2) {
      return true;
    } else {
      return false;
    }
  },
  compare: function(arr1, arr2, item) {
    console.log(arr1,arr2,item);
    let count1 = 0;
    let count2 = 0;
    arr1.forEach(role => {
      if (item === role) {
        count1++;
      }
    });
    arr2.forEach(role => {
      if (item === role) {
        count2++;
      }
    });
    if (count1 === count2) {
      return true;
    } else {
      return false;
    }
  }
}

export default Functions;