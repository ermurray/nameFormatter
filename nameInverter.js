const { diffTrimmedLines } = require("diff");

const nameInverter = function(name) {
  let multiName = [];
  let invertName = '';
  let honnorific;
  if (name === '') {
    return '';
  }
  if (name === undefined) {
    throw 'Error';
  }
  name = name.trim();
  // seperate string on 1 or more space and return array of strings
  multiName = name.split(/\s+/);
  
  // check if array includes 2-4 4 to include Msgr.letters followed by . at end of string case insensitive, set honnorific to the 0 index of match's return array.
  //remove leading and trailing white space.
  if (name.match(/\w{2,4}\./i) !== null) {
    honnorific = name.match(/\w{2,4}\./i)[0];
    if (multiName.length >= 3) {
      multiName.shift();
      multiName.reverse();
      invertName = `${honnorific} ` + multiName.join(', ');
    } else if (multiName.length === 2) {
      multiName.shift();
      invertName = `${honnorific} ${multiName[0]}`;
    } else {
      invertName = '';
    }
  } else if (multiName.length === 2) {
    invertName = multiName.reverse().join(', ');
  } else {
    invertName = name;
  }
  
  return invertName;
};

module.exports = nameInverter;