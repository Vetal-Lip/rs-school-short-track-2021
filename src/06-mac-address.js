/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  // split('-'):["00","1B","63","84","45","E6"] =>
  // split('-').join(''): "001B638445E6" =>
  // split('-').join('').split(''): ["0","0","1","B","6","3","8","4","4","5","E","6"]
  const arr = n.split('-').join('').split('');

  let result = true;
  arr.forEach((element) => {
    // Number.isNaN() определяет, является ли переданное значение NaN
    // parseInt() принимает строку
    // и возвращает целое число в соответствии с указанным основанием системы счисления.
    if (Number.isNaN(parseInt(element, 16))) {
      result = false;
    }
  });
  return result;
}

module.exports = isMAC48Address;
