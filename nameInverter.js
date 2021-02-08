const nameInverter = function(name) {
  let doubleName =[]
  if (name === '') {
    return '';
  }
  name = name.trim();
  // seperate string on 1 or more space and return array of strings
  doubleName = name.split(/\s+/);
  //console.log(doubleName);
  return name;
};
console.log(nameInverter("  dr. joe        dirt "));
module.exports = nameInverter;