# broccoli-typescript

[![NPM version](https://badge.fury.io/js/broccoli-typescript.svg)](http://badge.fury.io/js/broccoli-typescript)
[![Build Status](https://travis-ci.org/shinnn/broccoli-typescript.svg?branch=master)](https://travis-ci.org/shinnn/broccoli-typescript)
[![Dependency Status](https://david-dm.org/shinnn/broccoli-typescript.svg)](https://david-dm.org/shinnn/broccoli-typescript)
[![devDependency Status](https://david-dm.org/shinnn/broccoli-typescript/dev-status.svg)](https://david-dm.org/shinnn/broccoli-typescript#info=devDependencies)

[TypeScript](http://typescript.codeplex.com/) compiler for [Broccoli](https://github.com/joliss/broccoli)

## Installation

Install with [npm](https://www.npmjs.org/). (Make sure you have installed [Node](http://nodejs.org/).)

```
npm i --save-dev broccoli-typescript
```

## Example

```javascript
var filterTypeScript = require('broccoli-typescript');
tree = filterTypeScript(tree, options);
```

## API

### filterTypeScript(tree)

Currently this plugin doesn't support Source Map.

## License

Copyright (c) 2014 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT LIcense](./LICENSE).
