import assert from 'node:assert';

import {nth} from '@iterable-iterator/select';
import {list} from '@iterable-iterator/list';
import {map} from '@iterable-iterator/map';
import {range} from '@iterable-iterator/range';
import {take} from '@iterable-iterator/slice';

import {query, gen} from '#module';

// eslint-disable-next-line no-return-assign
export const iadd = (a, b) => (a += b);
export const zero = () => 1;
export const one = () => 2;
export const type = {zero, one, iadd};

export const zeron = () => 1n;
export const onen = () => 2n;
export const typen = {zero: zeron, one: onen, iadd};

export const repr = (x) => {
	const s = typeof x === 'bigint' ? `${x}n` : JSON.stringify(x);
	if (s.length <= 40) return s;
	return s.slice(0, 19) + '..' + s.slice(-19);
};

const concat = (a, b) => a.concat(b);
export const string = (x, y) => (n) => nth(gen(concat, y, x), n - 1);

export const gs = function* ({a, b}, n) {
	if (n === 0) return;
	if (n === 1) {
		for (let i = 0; i < b.length; ++i) {
			yield a.length + i;
		}

		return;
	}

	const F = Array.from(take(gen(iadd, a.length, a.length + b.length), n - 1));
	const Fn = F.pop();
	for (const i of range(Fn)) yield query(F, i);
};

export const makeSymbol = ({a, b}) => {
	const m = a.length;
	const n = b.length;
	const number = (i) => {
		assert(i >= 0);
		assert(i <= m + n);
		return i < m ? a[i] : b[i - m];
	};

	const mn = BigInt(m);
	const nn = BigInt(n);
	const bigint = (_in) => {
		assert(_in >= 0n);
		assert(_in <= mn + nn);
		const i = Number(_in);
		return i < m ? a[i] : b[i - m];
	};

	return (x) => (typeof x === 'bigint' ? bigint(x) : number(x));
};

export const fs = (alphabet, n) =>
	list(map(makeSymbol(alphabet), gs(alphabet, n))).join('');
