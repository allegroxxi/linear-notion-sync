"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// TypeScript file to read JSON from stdin and print it
const node_process_1 = require("node:process");
const chunks = [];
node_process_1.stdin.on('data', (chunk) => {
    chunks.push(chunk);
});
node_process_1.stdin.on('end', () => {
    const input = chunks.join('');
    console.log(input);
});
console.log("MARK5");
//# sourceMappingURL=print-json.js.map