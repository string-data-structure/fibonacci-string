/**
 * Gen.
 *
 * @param {Function} iadd
 * @param {number|bigint} a
 * @param {number|bigint} b
 * @return {IterableIterator<number>|IterableIterator<bigint>}
 */
const gen = function* (iadd, a, b) {
	yield a;
	yield b;
	while (true) {
		yield (a = iadd(b, a));
		yield (b = iadd(a, b));
	}
};

export default gen;
