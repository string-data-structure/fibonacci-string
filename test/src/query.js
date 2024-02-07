import test from 'ava';

import {enumerate} from '@iterable-iterator/zip';

import {makeSymbol, type, typen, repr} from './_fixtures.js';
import {query, makeIndex} from '#module';

const symbol = makeSymbol({a: 'a', b: 'b'});

const macro = (t, type, i, expected) => {
	const F = makeIndex(type, i);
	t.is(symbol(query(F, i)), expected);
};

macro.title = (title, _, i, expected) =>
	title ?? `query(${repr(i)}) is ${repr(expected)}`;

const phi10 = 'abaababaabaababaababaabaababaabaababaababaabaababaababa';
const input = phi10;

for (const [i, x] of enumerate(input)) {
	test(macro, type, i, x);
	test(macro, typen, BigInt(i), x);
}
