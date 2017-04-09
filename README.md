# Comb sort
[![Build Status](https://travis-ci.org/bredele/algo-sort-comb.svg?branch=master)](https://travis-ci.org/bredele/algo-sort-comb)
[![NPM](https://img.shields.io/npm/v/algo-sort-comb.svg?style=flat-square)](https://www.npmjs.com/package/algo-sort-comb)
[![Downloads](https://img.shields.io/npm/dm/algo-sort-comb.svg?style=flat-square)](http://npm-stat.com/charts.html?package=algo-sort-comb)
[![pledge](https://bredele.github.io/contributing-guide/community-pledge.svg)](https://github.com/bredele/contributing-guide/blob/master/community.md)


Very similar to [bubble sort](https://github.com/bredele/algo-sort-bubble) except that the gap between two elements to compare is greater than 1.

![](https://upload.wikimedia.org/wikipedia/commons/4/46/Comb_sort_demo.gif)

The gap is calculated at each pass from the previous gap (starts with the list size) divided by shrink factor until it is 1.

## Usage

```js
const sort = require('algo-sort-comb')
sort([
  0, 67, 7, 34, 54, 3, 2, 54, 1
])
// => [0, 1, 2, 3, 7, 34, 54, 54, 67]

sort([
  'world',
  'foo',
  'olivier',
  'a'
], (prev, next) => prev.length < next.length)
// => ['a', 'foo', 'world', 'olivier']
```

## Installation

```shell
npm install algo-sort-comb --save
```

[![NPM](https://nodei.co/npm/algo-sort-comb.png)](https://nodei.co/npm/algo-sort-comb/)

## Licence

The MIT License (MIT)

Copyright (c) 2016 Olivier Wietrich

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. 
