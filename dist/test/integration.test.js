const assert = require('assert');
const fs = require('fs');

assert.ok(fs.existsSync('dist/calc.js'), 'dist/calc.js should exist');
const { add } = require('../dist/calc');
assert.strictEqual(add(2, 3), 5);
console.log(`[integration] TEST_ENV=${process.env.TEST_ENV || 'local'} - integration tests passed`);
