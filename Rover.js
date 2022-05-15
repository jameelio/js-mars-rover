
/**
 * Receive current postion in format  e.g '1 2 E'
 * @param { number } x 
 * @param { number } y 
 * @param { string } d 
 */
function Rover(input){
    if(!input){
        throw new Error('Invalid Rover Positions Provided')
    }
    let [x,y,d] = input;

    this.x = parseInt(x),
    this.y = parseInt(y);
    this.d = d;

    this.N = 0;
    this.E = 1;
    this.S = 2;
    this.W = 3;


    /**
     * 
     * @param {string} commandString 
     * @returns updates position
     */
    

    this.navigate = function(commandString){

        const cardinal = {
            0: 'N',
            1: 'E',
            2: 'S',
            3: 'W'
        }

        const movement = { 
            'N': () => this.y ++,
            'E': () => this.x ++,
            'S': () => this.y --,
            'W': () => this.x --
        }

        const commands = {
            'L': () => this.d = cardinal[this.d === "N" ? 3 : this[this.d] - 1],
            'R': () => this.d = cardinal[this.d === "W" ? 0 : this[this.d] + 1],
            'M': () => movement[this.d]()
            
        }

        commands[commandString]();
    }
    /**
     * Format and return position as a string
     * @returns string position
     */

    this.postion = function(){
        return `${this.x} ${this.y} ${this.d}`;
    }


    this.move = function(commands){
        for (let mve = 0; mve < commands.length; mve++) {
            this.navigate(commands[mve]);
        }
    }
}

module.exports = Rover;