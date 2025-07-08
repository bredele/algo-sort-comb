/**
 * Sort array using comb sort algorithm.
 *
 * @param {Array} array
 * @return {Array}
 * @api public
 */

module.exports = function (array, distance = (prev, next) => prev < next) {
  const length = array.length;
  let gap = Math.floor(length / 1.3);
  let swapped = true;
  while (gap > 1 || swapped) {
    gap = Math.floor(gap / 1.3);
    if (gap < 1) gap = 1;
    swapped = false;
    for (var i = 0; i + gap < length; i++) {
      const right = array[i + gap];
      const left = array[i];
      if (distance(right, left)) {
        [array[i], array[i + gap]] = [right, left];
        swapped = true;
      }
    }
  }
  return array;
};
