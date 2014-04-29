'use strict';

var assert = require('assert');
var fs = require('fs');
var Q = require('q');

var readFile = Q.denodeify(fs.readFile);
function compareFiles(filename) {
  return Q.all([
    readFile('test/actual/' + filename),
    readFile('test/expected/' + filename)
  ]).spread(function(actual, expected) {
    assert.strictEqual(actual.toString(), expected.toString());
  });
}

function checkPathExists(filepath) {
  var defer = Q.defer();
  fs.exists(filepath, defer.resolve);
  return defer.promise.then(function(exists) {
    assert.strictEqual(exists, false);
  });
}

describe('broccoli-typescript', function() {
  it('should compile multiple .ts files recursively.', function() {
    return Q.all([
      compareFiles('interface.js'),
      compareFiles('class.js')
    ]);
  });
  it('should compile multiple .ts files into a single .js file.', function() {
    return compareFiles('nested/single.js');
  });
  it('should ignore "optDir" option when "out" option is specified.', function() {
    return checkPathExists('test/actual/this');
  });
  it('should create a sourcemap file.', function() {
    return compareFiles('nested/single.js.map');
  });
  it('should not create an empty directory.', function() {
    return checkPathExists('test/actual/empty');
  });
});
