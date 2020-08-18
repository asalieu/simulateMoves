//@ts-nocheck
const readline = require("readline");
const simulateMove = require('./simulateMovement');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("enter table size ", function (tableSize) {
    rl.question("enter start position ", function (startPosition) {
        rl.question("enter commands ", function (commands) {            
            
            let finalPosition = simulateMove (parseInputs(tableSize), parseInputs(startPosition), parseInputs(commands));
            console.log(finalPosition);
            
            rl.close();
        });
    });
});

rl.on("close", function () {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});

function parseInputs(value){
    //make sure values are numbers
    //other clean up
    return value.split(',');
}
