# broccoli-typescript

[![npm version](https://badge.fury.io/js/broccoli-typescript.svg)](https://www.npmjs.org/package/broccoli-typescript)
[![Build Status](https://travis-ci.com/shinnn/broccoli-typescript.svg?branch=master)](https://travis-ci.com/shinnn/broccoli-typescript)

A [Broccoli](https://github.com/broccolijs/broccoli) pluin to compile [TypeScript](https://github.com/Microsoft/TypeScript)

## Installation

[Use](https://docs.npmjs.com/cli/install) [npm](https://docs.npmjs.com/about-npm/).

```
npm install --save-dev broccoli-typescript
```

## Example

```javascript
const broccoliTypeScript = require('broccoli-typescript');
compileTypeScript(tree, options);
```

## API

```javascript
const broccoliTypeScript = require('broccoli-typescript');
```

### broccoliTypeScript(tree[, options])

#### options.outDir

Type: `String` Default: Build target directory

Output compiled files to the directory.

#### options.out

Type: `String`

Concatenate and write compilation results to a single file. When this option is specified, the `outDir` option is ignored.

**Note:** Both `outDir` option and `out` option are treated as relative paths from build target directory.

And besides, [all options](https://github.com/jedmao/ts-compiler#tsicompileroptions) for [ts-compiler](https://github.com/jedmao/ts-compiler) are available.

## License

[ISC License](./LICENSE) © 2018 Shinnosuke Watanabe
