// code based on the one from "Node.js 17 is here!" 
// https://medium.com/the-node-js-collection/node-js-17-is-here-8dba1e14e382
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

// Printing a question and saving the answer to the "answer" variable
const answer = await rl.question("What is your opinion on 360° IT Check?");
// Printing the answer out
console.log(`Thank you for your invaluable feedback: "${answer}"`);

// Remember to call "close"!
rl.close();