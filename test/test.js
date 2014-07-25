'use strict';

var assert = require('assert');
var fs = require('fs');
var Bluebird = require('bluebird');

var readFile = Bluebird.promisify(fs.readFile);
function compareFiles(filename) {
  return Bluebird.all([
    readFile('test/actual/' + filename),
    readFile('test/expected/' + filename)
  ]).spread(function(actual, expected) {
    assert.strictEqual(actual.toString(), expected.toString());
  });
}

describe('broccoli-typescript', function() {
  it('should compile multiple .ts files recursively.', function() {
    return Bluebird.all([
      compareFiles('interface.js'),
      compareFiles('class.js')
    ]);
  });
  it('should compile multiple .ts files into a single .js file.', function() {
    return compareFiles('nested/single.js');
  });
  it('should ignore "optDir" option when "out" option is specified.', function(done) {
    fs.exists('test/actual/this', function(exists) {
      assert.strictEqual(exists, false);
      done();
    });
  });
  it('should create a sourcemap file.', function() {
    return compareFiles('nested/single.js.map');
  });
  it('should not create an empty directory.', function(done) {
    fs.exists('test/actual/empty', function(exists) {
      assert.strictEqual(exists, false);
      done();
    });
  });
});
