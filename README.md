# is-semver-static

Check if a version is a semver range or a static version

## Installation

```
$ npm install is-semver-static
```

## Usage

```js
const isSemverStatic = require('is-semver-static');
isSemverStatic('1.0.0'); // true
isSemverStatic('=1.0.0'); // true
isSemverStatic('v1.0.0'); // true
isSemverStatic('1.0.0-rc1'); // true
isSemverStatic('>1.0.0'); // false
isSemverStatic('^1.0.0'); // false
isSemverStatic('~1.0.0'); // false
isSemverStatic('1'); // false
```

## License
Copyright (c) 2017 Martin Kolárik. Released under the MIT license.
