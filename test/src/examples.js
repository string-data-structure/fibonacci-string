import test from 'ava';

import {makeIndex, query} from '#module';

test('README.md (Number)', (t) => {
	const F = makeIndex({iadd: (x, y) => x + y, zero: () => 1, one: () => 2}, 10);

	t.is(query(F, 0), 0);
	t.is(query(F, 1), 1);
	t.is(query(F, 2), 0);
	t.is(query(F, 3), 0);
	t.is(query(F, 4), 1);
	t.is(query(F, 5), 0);
	t.is(query(F, 6), 1);
	t.is(query(F, 7), 0);
	t.is(query(F, 8), 0);
	t.is(query(F, 9), 1);
	t.is(query(F, 10), 0);
});

test('README.md (BigInt)', (t) => {
	const Fn = makeIndex(
		{iadd: (x, y) => x + y, zero: () => 1n, one: () => 2n},
		10n ** 100n,
	);

	t.is(query(Fn, 4_802_349_082_340_928_340_983n), 1n);
	t.is(
		query(
			Fn,
			123_456_748_023_490_823_409_283_409_834_802_349_082_340_928_340_983n,
		),
		0n,
	);
});
