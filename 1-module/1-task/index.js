/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow (m, n) {
  let number = n;
  let count = m;
  while (number > 1) {
    count *= m;
    number--;
  }
  return count;
}