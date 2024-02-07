:shell: [@string-data-structure/fibonacci-string](https://string-data-structure.github.io/fibonacci-string)
==

Fibonacci string for JavaScript.
See [docs](https://string-data-structure.github.io/fibonacci-string/index.html).

> :warning: Depending on your environment, the code may require
> `regeneratorRuntime` to be defined, for instance by importing
> [regenerator-runtime/runtime](https://www.npmjs.com/package/regenerator-runtime).

```js
import {makeIndex, query} from '@string-data-structure/fibonacci-string';

const F = makeIndex({iadd: (x, y) => x+y, zero: () => 1, one: () => 2}, 10);

query(F, 0); // 0
query(F, 1); // 1
query(F, 2); // 0
query(F, 3); // 0
query(F, 4); // 1
query(F, 5); // 0
query(F, 6); // 1
query(F, 7); // 0
query(F, 8); // 0
query(F, 9); // 1
query(F, 10); // 0

const Fn = makeIndex({iadd: (x, y) => x+y, zero: () => 1n, one: () => 2n}, 10n**100n);
query(Fn, 4802349082340928340983n); // 1n
query(Fn, 123456748023490823409283409834802349082340928340983n); // 0n
```

[![License](https://img.shields.io/github/license/string-data-structure/fibonacci-string.svg)](https://raw.githubusercontent.com/string-data-structure/fibonacci-string/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@string-data-structure/fibonacci-string.svg)](https://www.npmjs.org/package/@string-data-structure/fibonacci-string)
[![Tests](https://img.shields.io/github/workflow/status/string-data-structure/fibonacci-string/ci:test?event=push&label=tests)](https://github.com/string-data-structure/fibonacci-string/actions/workflows/ci:test.yml?query=branch:main)
[![Dependencies](https://img.shields.io/librariesio/github/string-data-structure/fibonacci-string.svg)](https://github.com/string-data-structure/fibonacci-string/network/dependencies)
[![GitHub issues](https://img.shields.io/github/issues/string-data-structure/fibonacci-string.svg)](https://github.com/string-data-structure/fibonacci-string/issues)
[![Downloads](https://img.shields.io/npm/dm/@string-data-structure/fibonacci-string.svg)](https://www.npmjs.org/package/@string-data-structure/fibonacci-string)

[![Code issues](https://img.shields.io/codeclimate/issues/string-data-structure/fibonacci-string.svg)](https://codeclimate.com/github/string-data-structure/fibonacci-string/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/string-data-structure/fibonacci-string.svg)](https://codeclimate.com/github/string-data-structure/fibonacci-string/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/string-data-structure/fibonacci-string/main.svg)](https://codecov.io/gh/string-data-structure/fibonacci-string)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/string-data-structure/fibonacci-string.svg)](https://codeclimate.com/github/string-data-structure/fibonacci-string/trends/technical_debt)
[![Documentation](https://string-data-structure.github.io/fibonacci-string/badge.svg)](https://string-data-structure.github.io/fibonacci-string/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@string-data-structure/fibonacci-string)](https://bundlephobia.com/result?p=@string-data-structure/fibonacci-string)
