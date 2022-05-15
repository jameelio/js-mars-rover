const { parseInput ,splitNewLine } = require("../utils");
const expect = require("chai").expect;


describe('Utils',() => {
    describe('Raw Input Parser',()=>{
        it('should split data using new line character into array',() =>{
            const exampleString = `8 8\n1 2 E\nMMLMRMMRRMML`

            const expected = ['8 8', '1 2 E', 'MMLMRMMRRMML'];
            const results = splitNewLine(exampleString);

            expect(results).to.eql(expected)
        });

        it('should return object contain properties', () => {
            const exampleString = `8 8\n1 2 E\nMMLMRMMRRMML`;
            const expected = {
                cartesian: 64,
                position : [ '1', '2', 'E' ],
                commands: [
                    'M', 'M', 'L', 'M',
                    'R', 'M', 'M', 'R',
                    'R', 'M', 'M', 'L'
                  ]
            };

            const results = parseInput(exampleString);

            expect(results).to.have.all.keys('cartesian', 'position','commands');
            expect(results).to.eqls(expected);
         });
    });
});
