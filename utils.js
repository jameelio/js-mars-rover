const parseInput =  (raw_input) => {
   const newLineData = splitNewLine(raw_input);
   const cartesianSize = multiply(newLineData[0].split(" "));
   const currentPosition = newLineData[1].split(" ");
   const commandSet = newLineData[2].split("");
   return {
       cartesian: cartesianSize,
       position : currentPosition,
       commands : commandSet
   }
};

const splitNewLine = (data) => data.split("\n");
const multiply = (arr)=> arr.reduce( (a, b) => a * b )

module.exports = {
    parseInput,
    splitNewLine,
    multiply
}