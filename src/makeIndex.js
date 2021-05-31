import {takewhile} from '@iterable-iterator/slice';
import {le} from '@functional-abstraction/predicate';

import gen from './gen.js';

/**
 * Make index up to at least a given query position.
 *
 * @param {Object}
 * @param {number|bigint} n
 * @return {number[]|bigint[]}
 */
const makeIndex = ({zero, one, iadd}, n) => {
	const g = gen(iadd, zero(), one());
	return Array.from(takewhile(le(n), g));
};

export default makeIndex;
