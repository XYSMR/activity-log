const assert = require('assert');
const { add, multiply } = require('../src/calc');

assert.strictEqual(add(1, 1), 2);
assert.strictEqual(multiply(2, 3), 6);
console.log(`[unit] TEST_ENV=${process.env.TEST_ENV || 'local'} - unit tests passed`);
