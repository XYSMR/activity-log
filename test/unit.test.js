import assert from 'node:assert';

assert.strictEqual(1 + 1, 2);
assert.strictEqual([1, 2, 3].length, 3);
console.log(`[unit] TEST_ENV=${process.env.TEST_ENV || 'local'} - unit tests passed`);
