const path = require('path');
const { readFile } = require('./readFile');
const { parseInput } = require('./utils');
const Rover = require('./Rover');

(async () => {
    try {
       const comsData = await readFile(
            path.join(__dirname, '/commands', 'commands.txt')
          );
          const { position,commands } = parseInput(comsData);
          const rover = new Rover(position);
          rover.move(commands);
          const roverPosition = rover.postion();
          console.log(roverPosition);
    } catch (error) {
        throw new Error(error.message)
    }

})();