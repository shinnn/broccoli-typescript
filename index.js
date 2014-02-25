'use strict';

var Filter = require('broccoli-filter');
var ts2js = require('typestring').compile;

function TypeScriptFilter(inputTree, options) {
  if (!(this instanceof TypeScriptFilter)) {
    return new TypeScriptFilter(inputTree, options);
  }
  
  this.inputTree = inputTree;
  this.options = options || {};
}

TypeScriptFilter.prototype = Object.create(Filter.prototype);
TypeScriptFilter.prototype.constructor = TypeScriptFilter;

TypeScriptFilter.prototype.extensions = ['ts'];
TypeScriptFilter.prototype.targetExtension = 'js';

TypeScriptFilter.prototype.processString = function(str) {
  return ts2js(str);
};

module.exports = TypeScriptFilter;