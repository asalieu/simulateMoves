function  simulateMovement (tableDimensions, startPosition, commands) { // [4,4,2,2]
    // console.log('table length: ', tableDimensions, 'startPos: ', startPosition, "command: ", commands )
    if (tableDimensions.length !== 2 || startPosition.length !== 2){
        return [-1,-1];
    } 
    //check if start exceeds tablecoordinates

    let tableXMax = parseInt(tableDimensions[0]) - 1;
    let tableYMax = parseInt(tableDimensions[1]) - 1;
    
    let xPos = parseInt(startPosition[0]); 
    let yPos = parseInt(startPosition[1]);

    // let currentPosition = [];

    //let commands = [1,4,1,3,2,3,2,4,1,0]; 
    //let commands = [1,4,1,3,2,3,2,4,1,0]; 

    while(commands.length){
        let currentMove = parseInt(commands.shift());

        if (xPos < 0 || yPos < 0  ){
            xPos = yPos = -1;
            break;
        }

        if (currentMove === 0 ){
            break;
        }

        switch(currentMove){
            case 1:
                //move forward;
                yPos = moveForward(yPos);
                break;
            case 2:
                //move backward
                yPos = moveBackward(yPos, tableYMax);
                break;
            case 3:
                //move from north to east
                yPos = moveForward(yPos);
                xPos = moveEast(xPos, tableXMax);
                break;
            case 4:
                //move west to south 
                yPos = moveBackward(yPos, tableYMax);
                xPos = moveWest(xPos);
                break;
            default:
                break;
            
        }
    }

    function moveForward(currentPos){
        if (currentPos > 0){
            currentPos--;
        } else {
            currentPos = -1;
        }
        return currentPos;
    }

    function moveBackward(currentPos, maximumPos){
        if (currentPos < maximumPos){
            currentPos++;
        } else {
            currentPos = -1;
        }
        return currentPos;
    }
    function moveEast(currentPos, maximumPos){
        if (currentPos < maximumPos){
            currentPos++;
        } else {
            currentPos = -1;
        }
        return currentPos;
    }
    function moveWest(currentPos ){
        if (currentPos > 0){
            currentPos--;
        } else {
            currentPos = -1;
        }
        return currentPos;
    }  
    return [xPos, yPos];            
}

module.exports = simulateMovement ;


class SimulateMovement {

    constructor(tableDimensions, startPosition, commands){
        this.tableDimensions = tableDimensions;
        this.startPosition = startPosition;
        this.commands = commands;
    }

    startProcess (){
            console.log('table length: ', this.tableDimensions, 'startPos: ', this.startPosition, "command: ", this.commands )
        if (this.tableDimensions.length !== 2 || this.startPosition.length !== 2){
            return [-1,-1];
        } 
        //check if start exceeds tablecoordinates

        let tableXMax = parseInt(this.tableDimensions[0]) - 1;
        let tableYMax = parseInt(this.tableDimensions[1]) - 1;
    
        let xPos = parseInt(this.startPosition[0]); 
        let yPos = parseInt(this.startPosition[1]);

        while(this.commands.length){
            let currentMove = parseInt(this.commands.shift());

            if (xPos < 0 || yPos < 0  ){
                xPos = yPos = -1;
                break;
            }

            if (currentMove === 0 ){
                break;
            }

            switch(currentMove){
                case 1:
                    //move forward;
                    yPos = this.moveForward(yPos);
                    break;
                case 2:
                    //move backward
                    yPos = this.moveBackward(yPos, tableYMax);
                    break;
                case 3:
                    //move from north to east
                    yPos = this.moveForward(yPos);
                    xPos = this.moveEast(xPos, tableXMax);
                    break;
                case 4:
                    //move west to south 
                    yPos = this.moveBackward(yPos, tableYMax);
                    xPos = this.moveWest(xPos);
                    break;
                default:
                    break;
                
            }
        }
        return [xPos, yPos];  

    }

    moveForward(currentPos){
        if (currentPos > 0){
            currentPos--;
        } else {
            currentPos = -1;
        }
        return currentPos;
    }

    moveBackward(currentPos, maximumPos){
        if (currentPos < maximumPos){
            currentPos++;
        } else {
            currentPos = -1;
        }
        return currentPos;
    }

    moveEast(currentPos, maximumPos){
        if (currentPos < maximumPos){
            currentPos++;
        } else {
            currentPos = -1;
        }
        return currentPos;
    }
    
    moveWest(currentPos ){
        if (currentPos > 0){
            currentPos--;
        } else {
            currentPos = -1;
        }
        return currentPos;
    }  
}

let newInstance = new SimulateMovement([5,5], [2,2], [1]);
let positionx = newInstance.startProcess();

console.log(positionx);