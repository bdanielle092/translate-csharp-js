
function main() {
    // define dieRoll in a function 
    dieRoll = () => {
        Math.ceil(Math.random() * 6)
        return dieValue;
    }
    //set empty arrays
    let die1 = {}
    let die2 = {}
    //you need a switch case 
    dieFace = (value) => {
        switch (value) {
            case 1:
                dieString = "\u2680";
                break;
            case 2:
                dieString = "\u2681";
                break;
            case 3:
                dieString = "\u2682";
                break;
            case 4:
                dieString = "\u2683";
                break;
            case 5:
                dieString = "\u2684";
                break;
            case 6:
                dieString = "\u2685";
                break;
        }
        return dieString;
    }

    // for loop

    for (i = 0; i < 10; i++) {
        die1 = dieRoll();
        die2 = dieRoll();



        // if/else statement
        let message = `${die1} + ${die2} === ${die1.Value + die2.Value}`;
        if (die1.Value === die2.Value) {
            console.log(message += " DOUBLES");
        } else {
            console.log(message)
        }
    }
}





