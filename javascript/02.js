// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript
var maxSequence = function (arr) {
  let accum = [];

  for (let i = 0; i < arr.length; i++) {
    if (accum.length === 0) {
      if (arr[i] + arr[i + 1] > 0) {
        accum.push(arr[i] + arr[i + 1]);
      }
    } else {
      if (accum[accum.length - 1] + arr[i + 1] > 0) {
        accum.push(accum[accum.length - 1] + arr[i + 1]);
      } else {
        if (arr[i] + arr[i + 1] > accum[accum.length - 1]) {
          accum.push(arr[i] + arr[i + 1]);
        }
      }
    }
  }

  return accum.length === 0 ? 0 : Math.max(...accum);
};
