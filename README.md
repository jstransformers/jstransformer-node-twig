# jstransformer-node-twig

[node-twig](https://github.com/bitmade/node-twig) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-node-twig/master.svg)](https://travis-ci.org/jstransformers/jstransformer-node-twig)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-node-twig/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-node-twig)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-node-twig/master.svg)](http://david-dm.org/jstransformers/jstransformer-node-twig)
[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-node-twig.svg)](https://greenkeeper.io/)
[![NPM version](https://img.shields.io/npm/v/jstransformer-node-twig.svg)](https://www.npmjs.org/package/jstransformer-node-twig)

## Installation

    npm install jstransformer-node-twig

## API

```js
var twig = require('jstransformer')(require('jstransformer-node-twig'));

// Hello, {{world}}!
twig.renderFileAsync('hello.twig', {}, {world: Earth}).body
//=> 'Hello, Earth'
```

## License

MIT
