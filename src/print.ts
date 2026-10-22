// TypeScript file to read JSON from stdin and print it
import { stdin } from 'node:process';

stdin.setEncoding('utf8');

stdin.on('data', (chunk: string) => {
  console.log(chunk);
});
