:shell: [@string-data-structure/fibonacci-string](https://string-data-structure.github.io/fibonacci-string)
==

Fibonacci string for JavaScript.
See [docs](https://string-data-structure.github.io/fibonacci-string/index.html).

> :building_construction: Caveat emptor! This is work in progress. Code may be
> working. Documentation may be present. Coherence may be. Maybe.

> :warning: Depending on your environment, the code may require
> `regeneratorRuntime` to be defined, for instance by importing
> [regenerator-runtime/runtime](https://www.npmjs.com/package/regenerator-runtime).

```js
import {build} from '@string-data-structure/fibonacci-string';

const f = build({iadd: (x, y) => x+y, zero: () => 1, one: () => 1});

f(0); // 1
f(1); // 0
f(2); // 1
f(3); // 1
f(4); // 0
f(5); // 1
f(6); // 0
f(7); // 1
f(8); // 1
f(9); // 0

const fn = build({iadd: (x, y) => x+y, zero: () => 1n, one: () => 1n});
f(4802349082340928340983n); // 0
```

[![License](https://img.shields.io/github/license/string-data-structure/fibonacci-string.svg)](https://raw.githubusercontent.com/string-data-structure/fibonacci-string/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@string-data-structure/fibonacci-string.svg)](https://www.npmjs.org/package/@string-data-structure/fibonacci-string)
[![Tests](https://img.shields.io/github/workflow/status/string-data-structure/fibonacci-string/ci:test?event=push&label=tests)](https://github.com/string-data-structure/fibonacci-string/actions/workflows/ci:test.yml?query=branch:main)
[![Dependencies](https://img.shields.io/david/string-data-structure/fibonacci-string.svg)](https://david-dm.org/string-data-structure/fibonacci-string)
[![Dev dependencies](https://img.shields.io/david/dev/string-data-structure/fibonacci-string.svg)](https://david-dm.org/string-data-structure/fibonacci-string?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/string-data-structure/fibonacci-string.svg)](https://github.com/string-data-structure/fibonacci-string/issues)
[![Downloads](https://img.shields.io/npm/dm/@string-data-structure/fibonacci-string.svg)](https://www.npmjs.org/package/@string-data-structure/fibonacci-string)

[![Code issues](https://img.shields.io/codeclimate/issues/string-data-structure/fibonacci-string.svg)](https://codeclimate.com/github/string-data-structure/fibonacci-string/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/string-data-structure/fibonacci-string.svg)](https://codeclimate.com/github/string-data-structure/fibonacci-string/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/string-data-structure/fibonacci-string/main.svg)](https://codecov.io/gh/string-data-structure/fibonacci-string)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/string-data-structure/fibonacci-string.svg)](https://codeclimate.com/github/string-data-structure/fibonacci-string/trends/technical_debt)
[![Documentation](https://string-data-structure.github.io/fibonacci-string/badge.svg)](https://string-data-structure.github.io/fibonacci-string/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@string-data-structure/fibonacci-string)](https://bundlephobia.com/result?p=@string-data-structure/fibonacci-string)
