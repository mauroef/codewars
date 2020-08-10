// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript
function pigIt(str) {
  return str.split(' ').map(pigItOne).join(' ');
}

function pigItOne(word) {
  return `${word.substr(1)}${word.charAt(0)}${
    !hasPunctuationMarks(word) ? 'ay' : ''
  }`;
}

function hasPunctuationMarks(word) {
  return word.match(/^[A-Za-z]+$/) ? false : true;
}

console.log(pigIt('Pig latin is cool'));
