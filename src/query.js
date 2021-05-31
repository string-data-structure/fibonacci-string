import assert from 'node:assert';
import build from './build.js';

/**
 * Query ϕ[i].
 *
 * @param {Object} type
 * @param {number[]|bigint[]} array
 * @param {number|bigint} i
 * @return {number|bigint}
 */
const query = (type, array, i) => {
	assert(typeof i === 'bigint' || (Number.isInteger(i) && i >= 0));
	assert(typeof i !== 'bigint' || i >= 0n);
	assert(array || type);
	const F = array ?? build(type, i);
	let n_1 = F.length - 1;
	const zero = n_1 === -1 ? i : F[0] - F[0];
	assert(array || i === zero || i >= F[n_1]);
	// eslint-disable-next-line no-constant-condition
	while (true) {
		assert(i >= zero);
		assert(array || n_1 + 1 === F.length);
		if (n_1 <= 0) return i;
		assert(n_1 + 1 >= 2);
		assert(i < F[n_1] + F[n_1 - 1]); // Equivalent to i < F[n] = F[n_1 + 1]
		if (i >= F[n_1]) {
			i -= F[n_1];
			--n_1;
			if (F !== array) F.pop();
		}

		if (F !== array) F.pop();
		--n_1;
	}
};

export default query;
