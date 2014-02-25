'use strict';

var assert = require('assert');
var fs = require('fs');

var expected = 'function greeter(person) {\n' +
               '    return "Hello, " + person;\n' +
               '}\n';

describe('broccoli-esformatter', function () {
  it('should compile TyeScript', function (done) {
    fs.readFile('test/actual/src.js', function(err, data) {
      assert.strictEqual(data.toString(), expected);
      done();
    });
  });
});