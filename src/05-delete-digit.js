/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numToStr = String(n);
  const arr = numToStr.split('');
  const newArr = [...arr];
  const minNum = newArr.sort((a, b) => a - b)[0];
  const indexOfNum = numToStr.indexOf(minNum);
  arr.splice(indexOfNum, 1);
  return +arr.join('');
}

module.exports = deleteDigit;
