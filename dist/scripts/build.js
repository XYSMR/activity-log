const fs = require('fs');
fs.mkdirSync('dist', { recursive: true });
fs.copyFileSync('src/calc.js', 'dist/calc.js');
fs.writeFileSync('dist/version.txt', `build-time: ${new Date().toISOString()}\n`);
console.log('Build complete: dist/ created');
