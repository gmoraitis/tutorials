let fs = require('fs');

let buffer = fs.readFileSync(process.argv[2], 'utf8');
let lines = buffer.split('\n');
let numLines = lines.length - 1;

console.log(numLines);