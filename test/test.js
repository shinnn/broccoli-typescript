'use strict';

var assert = require('assert');
var fs = require('fs');

var readFiles = require('read-files-promise');

function compareFiles(filename) {
  return readFiles([
    'test/actual/' + filename,
    'test/expected/' + filename
  ], {encoding: 'utf-8'}).then(function(bufs) {
    assert.strictEqual(bufs[0], bufs[1]);
  });
}

describe('broccoli-typescript', function() {
  it('should compile TypeScript to JavaScript.', function() {
    return compareFiles('class.js');
  });
  it('should compile multiple .ts files recursively.', function() {
    return compareFiles('interface.js');
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
