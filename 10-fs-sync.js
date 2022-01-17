const {readFileSync,writeFileSync} = require('fs')
console.log('start');
const first = readFileSync('./content/First.txt', 'utf8')
const second = readFileSync('./content/Second.txt', 'utf8')

writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second}`,
    { flag: 'a' }

)
console.log('done with this task');
console.log('starting the next one');
