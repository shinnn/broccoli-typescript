# broccoli-typescript

[![NPM version](https://badge.fury.io/js/broccoli-typescript.png)](http://badge.fury.io/js/broccoli-typescript)
[![Build Status](https://travis-ci.org/shinnn/broccoli-typescript.png?branch=master)](https://travis-ci.org/shinnn/broccoli-typescript)
[![Dependency Status](https://david-dm.org/shinnn/broccoli-typescript.png)](https://david-dm.org/shinnn/broccoli-typescript)
[![devDependency Status](https://david-dm.org/shinnn/broccoli-typescript/dev-status.png)](https://david-dm.org/shinnn/broccoli-typescript#info=devDependencies)

[TypeScript](http://typescript.codeplex.com/) compiler for [Broccoli](https://github.com/joliss/broccoli)

## Installation

```
npm i --save broccoli-typescript
```

Make sure you have installed [Node](http://nodejs.org/) before running this command.

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
