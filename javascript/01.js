// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

// funcional
function spinWords(string) {
  const LIMIT = 5;

  return string
    .split(' ')
    .map((value) =>
      value.length < LIMIT ? value : value.split('').reverse().join('')
    )
    .join(' ');
}

// imperative
// function spinWords(string) {
//   let str = string.split(' ');
//   const limit = 5;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i].length >= limit) {
//       str[i] = str[i].split('').reverse().join('');
//     }
//   }

//   return str.join(' ');
// }
