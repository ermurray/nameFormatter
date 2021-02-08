const chai = require('chai');
const assert = chai.assert;

const nameInverter = require('../nameInverter.js');

describe('nameInverter', function() {
  it('should return and empty string when passed an empty string', function() {
    const inputName = '';
    const expectedOutput = '';
    assert.equal(nameInverter(inputName), expectedOutput);
  });
  
  it('should return a single name when passed a name', function() {
    const inputName = 'name';
    const expectedOutput = 'name';
    assert.equal(nameInverter(inputName), expectedOutput);
  });
  
  it('should return a single name when passed a name with leading and trailing white space', function() {
    const inputName = '  name  ';
    const expectedOutput = 'name';
    assert.equal(nameInverter(inputName), expectedOutput);
  });
  
  it('should return a last-name, first-name when passed a first and last-name', function() {
    const inputName = 'firstName lastName';
    const expectedOutput = 'lastName, firstName';
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it('should return a last-name, first-name when passed a first and last name with extraspaces around the names', function() {
    const inputName = '  firstName     lastName  ';
    const expectedOutput = 'lastName, firstName';
    assert.equal(nameInverter(inputName), expectedOutput);
  });
  
  it('should return a empty string when passed a single honorific', function() {
    const inputName = 'dr. ';
    const expectedOutput = '';
    assert.equal(nameInverter(inputName), expectedOutput);
  });
  
  it('should return a honnorific first-name when passed  honnorific first name', function() {
    const inputName = 'dr. joe';
    const expectedOutput = 'dr. joe';
    assert.equal(nameInverter(inputName), expectedOutput);
  });
  
  it('should return a honnorific last-name, first-name when passed honnorific first-name last-name ', function() {
    const inputName = 'dr. Joe dirt';
    const expectedOutput = 'dr. dirt, Joe';
    assert.equal(nameInverter(inputName), expectedOutput);
  });
  
  it('should return a honnorific last-name, first-name when passed honnorific first-name last-name with extra white space ', function() {
    const inputName = '    dr.    Joe  dirt   ';
    const expectedOutput = 'dr. dirt, Joe';
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it('should throw an error when name is undefined', function() {
    let inputName;
    const expectedOutput = 'Error';
  });
  
});