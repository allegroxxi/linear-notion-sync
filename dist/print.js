"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// TypeScript file to read JSON from stdin and print it
const node_process_1 = require("node:process");
node_process_1.stdin.setEncoding('utf8');
node_process_1.stdin.on('data', (chunk) => {
    console.log(chunk);
});
//# sourceMappingURL=print.js.map