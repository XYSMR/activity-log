import assert from 'node:assert';
import fs from 'node:fs';

assert.ok(fs.existsSync('dist/index.js'), 'dist/index.js should exist after build');
assert.ok(fs.statSync('dist/index.js').size > 0, 'dist/index.js should not be empty');
console.log(`[integration] TEST_ENV=${process.env.TEST_ENV || 'local'} - integration tests passed`);
