"use strict";
// JS Assessment: Find Your Hat //
import promptSync from "prompt-sync";
import clear from "clear-screen";

const prompt = promptSync({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
    constructor(field = [[]]) {
        this.field = field;

        // Replace with your own code //
        // Set the home position at (0, 0) before the game starts
        this.positionRow = 0; // จากบนลงล่าง updown
        this.positionCol = 0; // จากซ้ายไปขวา leftright
        this.field[this.positionRow][this.positionCol] = pathCharacter;
    }

    // Print field //
    print() {
        clear();
    for (let row of this.field) {
      console.log(row.join(" "));
    }
  
        while(true){
        const command = prompt("input :");
        console.log(`your input ${command}`);
        

        if(command === "r") {
            console.log(this.positionRow);
            console.log(this.positionCol);
            this.positionCol++;
            console.log(this.positionCol);
            this.field[this.positionRow][this.positionCol] = pathCharacter;
        
        }
            
        else if(command === "l") {
            console.log(this.positionRow);
            console.log(this.positionCol);
            this.positionCol--;
            console.log(this.positionCol);
            this.field[this.positionRow][this.positionCol] = pathCharacter;
        }
        
        else if(command === "u") {
            console.log(this.positionRow);
            console.log(this.positionCol);
            this.positionRow--;
            console.log(this.positionRow);
            this.field[this.positionRow][this.positionCol] = pathCharacter;
        }
        
        else if(command === "d") {
            console.log(this.positionRow);
            console.log(this.positionCol);
            this.positionRow++;
            console.log(this.positionRow);
            this.field[this.positionRow][this.positionCol] = pathCharacter;
        }
        
        else {
            console.log("Invalid input");
        }this.field[this.positionRow][this.positionCol] = pathCharacter;
    }


        

        // Replace with your own code //
        console.log(this.field); // Please REMOVE this line before you start your code!
    }

    // Your Code //
}


// Game Mode ON
// Remark: Code example below should be deleted and use your own code.
const newGame = new Field([
    ["░", "░", "O"],
    ["░", "O", "░"],
    ["░", "^", "░"],
]);
newGame.print();

