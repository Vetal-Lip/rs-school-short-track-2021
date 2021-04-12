/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const setFirstString = new Set(s1.split(''));
  let resultNumber = 0;

  setFirstString.forEach((el) => {
    let countS1 = 0;
    let countS2 = 0;
    s1.split('').forEach((element) => {
      if (el === element) {
        countS1++;
      }
    });
    s2.split('').forEach((element) => {
      if (el === element) {
        countS2++;
      }
    });

    if (countS1 > countS2) {
      resultNumber += countS2;
    } else {
      resultNumber += countS1;
    }
  });
  return resultNumber;
}

module.exports = getCommonCharacterCount;
