const assert = require('assert');
const Math = require('../src/math.js'); 
const expect = require('chai').expect;
const sinon = require('sinon');

let value = 0;

// Mocha example with node assert and with Chai
describe('Math class', function(){

    //hooks - to assure some values, functions etc that will be repeated
    beforeEach(function(){
        value = 0;
    });

    it('Sum two numbers', function(done){  // calling as function, not arrow function to receive 'this'
        const math = new Math();
        this.timeout(3000);
        
        value = 5;

        math.sum(value,5, value => {
            // assert.strictEqual(value, 10); //node assert
            expect(value).to.equal(10); // chai
            done(); // where async promises
        });
    });

    // it('Multiply two numbers'); // shows as pending test

    // it.only('Multiply two numbers', function(){   // only executes only this one
    //     const math = new Math();
    //     assert.strictEqual(math.multiply(5,5), 25);
    // })

    // it.skip('Multiply two numbers', function(){   // skip, skips this one
    //     const math = new Math();
    //     assert.strictEqual(math.multiply(5,5), 25);
    // })

    it('Multiply two numbers', function(){   // skip, skips this one
        const math = new Math();
 
        //assert.strictEqual(math.multiply(value,5), 0);
        expect(math.multiply(value, 5)).to.equal(0); 
      
    })

    it('obj have property', function(){
        const obj = {
            name: 'Andre'
        }

        const obj2 = {
            name: 'Andre'
        }
        expect(obj).to.have.property('name').equal('Andre');
        expect(obj).to.deep.equal(obj2);
    });

    it.only('Calls req with sum and index values', function(){
        const req = {};
        const res = {
            load: sinon.spy() // to spy on certain function
        };
        const math = new Math();

        math.printSum(req, res, 5, 5);

        expect(res.load.calledOnce).to.be.true; // to test if a function was called once
        expect(res.load.args[0][0]).to.equal('index');
    })
});

