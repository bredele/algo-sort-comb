/**
 * Test dependencies
 */

const test = require('node:test');
const assert = require('node:assert');
const sort = require('..');

test('should sort array of numbers', () => {
  assert.deepStrictEqual(
    sort([6, 3, 98, 0, 1, 65, 7]),
    [0, 1, 3, 6, 7, 65, 98]
  );
});

test('should sort array of strings', () => {
  assert.deepStrictEqual(sort(['a', 'bc', 'c', 'b', 'bd', 'ab', 'd']), [
    'a',
    'ab',
    'b',
    'bc',
    'bd',
    'c',
    'd',
  ]);
});

test('should sort array with given distance comparaison', () => {
  const result = sort(
    ['hello', 'foo', 'calgary'],
    (prev, next) => prev.length < next.length
  );
  assert.deepStrictEqual(result, ['foo', 'hello', 'calgary']);
});
