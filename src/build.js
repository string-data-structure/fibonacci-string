import {takewhile} from '@iterable-iterator/slice';
import {le} from '@functional-abstraction/predicate';

import gen from './gen.js';

/**
 * Build.
 *
 * @param {Object}
 * @param {number|bigint} n
 * @return {number[]|bigint[]}
 */
const build = ({zero, one, iadd}, n) => {
	const g = gen(iadd, zero(), one());
	return Array.from(takewhile(le(n), g));
};

export default build;
