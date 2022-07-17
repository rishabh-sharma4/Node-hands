const {readFileSync, writeFileSync} = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');
console.log(first, second);
writeFileSync('./content/result-sync.txt',`Here is the result : ${first}, ${second}`, {flag: 'a'});
//this third argument flag: 'a' is used when we want to append to a file. Add to the end of the file.
console.log('done with this task')
console.log('starting the next one');