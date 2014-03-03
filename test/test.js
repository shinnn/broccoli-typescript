'use strict';

var assert = require('assert');
var fs = require('fs');

var expected = 'function greeter(person) {\n' +
               '    return "Hello, " + person;\n' +
               '}\n';

describe('broccoli-typescript', function () {
  it('should compile TyeScript', function (done) {
    fs.readFile('test/actual/simple.js', function(err, data) {
			if (err) done(err);
      assert.strictEqual(data.toString(), expected);
      done();
    });
  });
});