// https://www.codewars.com/kata/587731fda577b3d1b0001196/train/javascript
String.prototype.camelCase = function () {
  return this.length === 0
    ? ''
    : this.trim()
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.substr(1))
        .join('');
};

var foo = 'say hello';

console.log(foo.camelCase());
