import assert from 'node:assert';
import { add, multiply, isEven } from '../lib/calc.js';

assert.strictEqual(add(2, 3), 5);
console.log(`[calc] TEST_ENV=${process.env.TEST_ENV || 'local'} - calc tests passed`);
