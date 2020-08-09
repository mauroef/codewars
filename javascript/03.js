// https://www.codewars.com/kata/55e2adece53b4cdcb900006c/train/javascript
function race(v1, v2, g) {
  return v2 > v1 ? result(v1, v2, g) : null;

  function result(v1, v2, g) {
    const speedDiff = v2 - v1;
    const resultInSec = (g * 3600) / speedDiff;

    return [
      Math.floor(resultInSec / 3600),
      Math.floor((resultInSec % 3600) / 60),
      Math.floor((resultInSec % 3600) % 60),
    ];
  }
}

const foo = race(720, 850, 70); //=> [0, 32, 18] or "0 32 18"

console.log(foo);
