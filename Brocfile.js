'use strict';

var mergeTrees = require('broccoli-merge-trees');
var compileTypeScript = require('./');

var multipleOut = compileTypeScript('test/fixtures/multiple');

var singleOut = compileTypeScript('test/fixtures/single', {
  outDir: 'this/dir/should/not/be/created',
  out: 'nested/single.js',
  removeComments: true,
  sourcemap: true
});

var nestedMultipleOut = compileTypeScript('test/fixtures/multiple', {
  outDir: 'nested'
});

var emptyDir = compileTypeScript('test/fixtures/empty');

module.exports = mergeTrees([
  singleOut,
  multipleOut,
  nestedMultipleOut,
  emptyDir
]);
