const expect = require('chai').expect;
const Rover = require('../Rover.js')
const { parseInput } = require('../utils');

describe('Set new instance of Rover',() => {
    
   it('class should be an instance of Rover',() => {
        const rover = new Rover([0,0,"W"]);
        expect(rover instanceof Rover).to.be.true;
    });

    it('should return set position',() => {
        const rover = new Rover([0,0,"W"]);
        const results = rover.postion();
        expect(results).equal('0 0 W');
    });

    // it('should return cardinal letter by number',() => {
    //     const rover = new Rover([0,0,"W"]);
    //     const results = rover.getCardinalByNumber(0);
    //     const expected = "N";
    //     expect(results).to.be.equal(expected);
    // })

    // it('should throw Error when invalid cardinal number passed',() => {
    //    const rover = new Rover([0,0,"W"]);
    //    const expected = 'Invalid Cardinal Position Number provided';
    //    expect(() => rover.getCardinalByNumber(10)).to.throw(expected);
    // })
})

describe('Set Rover Positions',() => {
    it('should navigate for current position 7 2 E',()=>{
        const rawinput = `5 5\n7 2 E\nMMLMRMMRRMML`;
        const { position,commands } = parseInput(rawinput); 
        const rover = new Rover(position);
        rover.move(commands);
        const expected = '9 3 S';

        const getPosition = rover.postion();
        expect(getPosition).to.eqls(expected);
    })

    it('should navigate for current position 1 2 E',()=>{
        const rawinput = `8 8\n1 2 E\nMMLMRMMRRMML`;
        const { position,commands } = parseInput(rawinput); 
        const rover = new Rover(position);
        rover.move(commands);
        const expected = '3 3 S';

        const getPosition = rover.postion();

        expect(getPosition).to.eqls(expected);
    })

    it('should navigate for current position 5 2 E',()=>{
        const rawinput = `5 5\n5 2 E\nMMRMMRMRRM`;
        const { position,commands } = parseInput(rawinput); 
        const rover = new Rover(position);
        rover.move(commands);
        const expected = '7 0 E';

        const getPosition = rover.postion();

        expect(getPosition).to.eqls(expected);
    })
})