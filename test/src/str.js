import test from 'ava';

import {fs, string, repr} from './_fixtures.js';

const macro = (t, alphabet, n, expected) => {
	t.is(fs(alphabet, n), expected);
};

macro.title = (title, alphabet, n, expected) =>
	title ?? `[${repr(alphabet)}] fs(${n}) is ${repr(expected)}`;

const expected = ({a, b}, n) => string(a, b)(n);

const auto = (t, alphabet, n) => {
	return macro(t, alphabet, n, expected(alphabet, n));
};

auto.title = (title, alphabet, n) =>
	macro.title(title, alphabet, n, expected(alphabet, n));

const ab = {a: 'a', b: 'b'};

const alphabets = [
	ab,
	{a: 'x', b: 'y'},
	{a: 'ii', b: 'oo'},
	{a: 'abra', b: 'cadabra'},
];

test(macro, ab, 0, '');
test(macro, ab, 1, 'b');
test(macro, ab, 2, 'a');
test(macro, ab, 3, 'ab');
test(macro, ab, 4, 'aba');
test(macro, ab, 5, 'abaab');
test(macro, ab, 6, 'abaababa');
test(macro, ab, 7, 'abaababaabaab');
test(macro, ab, 8, 'abaababaabaababaababa');
test(macro, ab, 9, 'abaababaabaababaababaabaababaabaab');
test(macro, ab, 10, 'abaababaabaababaababaabaababaabaababaababaabaababaababa');

for (const alphabet of alphabets) {
	test(auto, alphabet, 15);
	test(auto, alphabet, 20);
}
