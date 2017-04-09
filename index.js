/**
 * Sort array using comb sort algorithm.
 *
 * @param {Array} array
 * @return {Array}
 * @api public
 */

module.exports = function(array, distance = ((prev, next) => prev < next)) {
  array = array.slice(0)
  var length = array.length
  var gap = Math.floor(length / 1.3)
  while (gap > 0) {
    for(var i = 0; i + gap < length; i++) {
      var small = array[i + gap]
      var big = array[i]
      if (distance(small, big)) {
        array[i + gap] = big
        array[i] = small
      }
    }
    gap = Math.floor(gap/ 1.3)
  }
  return array
}
