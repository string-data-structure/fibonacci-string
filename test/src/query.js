import test from 'ava';

import {enumerate} from '@iterable-iterator/zip';

import {query} from '../../src/index.js';

import {makeSymbol, type, typen, repr} from './_fixtures.js';

const symbol = makeSymbol({a: 'a', b: 'b'});

const macro = (t, type, i, expected) => {
	t.is(symbol(query(type, undefined, i)), expected);
};

macro.title = (title, _, i, expected) =>
	title ?? `query(${repr(i)}) is ${repr(expected)}`;

const phi10 = 'abaababaabaababaababaabaababaabaababaababaabaababaababa';
const input = phi10;

for (const [i, x] of enumerate(input)) {
	test(macro, type, i, x);
	test(macro, typen, BigInt(i), x);
}
