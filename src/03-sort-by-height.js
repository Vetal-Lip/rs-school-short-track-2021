/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const newArr = [];
  arr.forEach((element) => {
    if (element !== -1) {
      newArr.push(element);
    }
  });
  newArr.sort((a, b) => a - b);
  const result = arr.map((element) => {
    if (element !== -1) {
      return Number(newArr.splice(0, 1));
    }
    return element;
  });
  return result;
}

module.exports = sortByHeight;
