import assert from 'node:assert';
import { add, multiply, isEven } from '../lib/calc.js';

assert.strictEqual(add(2, 3), 5);
assert.strictEqual(multiply(4, 5), 20);
assert.strictEqual(isEven(4), true);
assert.strictEqual(isEven(7), false);
console.log(`[calc] TEST_ENV=${process.env.TEST_ENV || 'local'} - calc tests passed`);
