const {Isocele} = require("../src/app");
const Cube = require('../src/app').Cube;
const expect = require('chai').expect;

const Triangle = require('../src/app').Triangle;




describe('Testing the Cube Functions', function() {
    it('1. The side length of the Cube', function(done) {
        let c1 = new Cube(2);
        expect(c1.getSideLength()).to.equal(2);
        done();
    });
    
    it('2. The surface area of the Cube', function(done) {
        let c2 = new Cube(5);
        expect(c2.getSurfaceArea()).to.equal(150);
        done();
    });
    
    it('3. The volume of the Cube', function(done) {
        let c3 = new Cube(7);
        expect(c3.getVolume()).to.equal(343);
        done();
    });
    
});




//
// describe('Testing triangle Functions', function() {
//
//     it('1: la longueur des 3 cotes du triangle', function(done) {
//         let LH = new Triangle(4,8,3);
//         expect(LH.getPerimetre()).to.equal(15);
//
//         done();
//     });
//     // it("2. Les bases de cotes a,b,c", function(done) {
//     //     let base = new Triangle(5,9,6);
//     //     expect(base.getBase()).to.equal(5);
//     //     done();
//     // });
//     it("2. Les  cotes a,b,c", function(done) {
//         let base = new Triangle(5,9,6);
//         expect(base.getA()).to.equal(5);
//         expect(base.getB()).to.equal(9);
//         expect(base.getC()).to.equal(6);
//         done();
//     });
//     it('3: la hauteur du triangle', function (done){
//         let h = new Triangle(4,3,2);
//         expect(h.getHeight()).to.equal(21.737);
//         done();
//         }
//     )
//
//
// });

describe('Testing Triangle.js FUNCTION  ', function() {

    it('1: la longueur des 3 cotes du triangle', function(done) {
        let LH = new Triangle(4,8);
        expect(LH.getBase()).to.equal(4);
        expect(LH.getHeight()).to.equal(8);

        done();
    });
    it('2:AIRE du triangle', function(done) {
        let LH = new Triangle(4,2);
        expect(LH.getSurfaceArea()).to.equal(4);
        done();
    });

    it('3:Isocele ', function(done) {
        let LH = new Isocele(4,2,3);
        expect(LH.getIsocele()).to.equal(false);
        done();
    });
});