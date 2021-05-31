import assert from 'node:assert';

/**
 * Query ϕ[i].
 *
 * @param {number[]|bigint[]} F
 * @param {number|bigint} i
 * @return {number|bigint}
 */
const query = (F, i) => {
	assert(typeof i === 'bigint' || (Number.isInteger(i) && i >= 0));
	assert(typeof i !== 'bigint' || i >= 0n);
	let n_1 = F.length - 1;
	const zero = n_1 === -1 ? i : F[0] - F[0];
	// eslint-disable-next-line no-constant-condition
	while (true) {
		assert(i >= zero);
		if (n_1 <= 0) return i;
		assert(n_1 + 1 >= 2);
		assert(i < F[n_1] + F[n_1 - 1]); // Equivalent to i < F[n] = F[n_1 + 1]
		if (i >= F[n_1]) {
			i -= F[n_1];
			--n_1;
		}

		--n_1;
	}
};

export default query;
