# array-find

**ES6&ast; `Array.find` ponyfill.**

**Ponyfill: A polyfill that doesn't overwrite the native method.**

Find array elements. Executes a callback for each element, returns the first element for which its callback returns a truthy value.

&ast; ES6 – also referred to as [ES 2015][].

[ES 2015]:  http://webreflection.blogspot.de/2015/01/javascript-and-living-ecmascript.html  "JavaScript and the living ECMAScript Standard"

## Usage

```javascript
var find = require('array-find');
var numbers = [1, 2, 3, 4];

find(numbers, function (element, index, array) {
  return element === 2;
});
// => 2

var robots = [{name: 'Flexo'}, {name: 'Bender'}, {name: 'Buster'}];

find(robots, function (robot, index, array) {
  return robot.name === 'Bender';
});
// => {name: 'Bender'}

find(robots, function (robot, index, array) {
  return robot.name === 'Fry';
});
// => undefined
```

Optionally pass in an object as third argument to use as `this` when executing callback.

## Install

```bash
$ npm install array-find
```

## License
MIT
