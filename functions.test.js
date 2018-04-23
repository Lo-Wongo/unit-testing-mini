const functions = require('./functions');

test("returnTwo() should return 2.", () => {
    expect( functions.returnTwo() ).toEqual( 2 );
});

test("greeting() should return a dynamic greeting based on name.", () => {
    expect(functions.greeting('James')).toEqual('Hello, James.');
    expect(functions.greeting('Jill')).toEqual('Hello, Jill.');
});

//Grouping test cases using "describe" to help keep tests organized
//---give the group any name of your choice....eg Math functions below-----/

describe("Math functions:", () => {

    test("add() should return a dynamic sum based on two number parameters.", () => {
        expect(functions.add(2 , 3)).toEqual(5);
        expect(functions.add(10 , 10)).toEqual(20);
    });

    test("multiply() should return a dynamic product based on two number parameters.", () => {
        expect(functions.multiply(3, 3)).toEqual(9);
        expect(functions.multiply(10, 10)).toEqual(100);
    });

    test("divide() should return a dynamic quotient based on two number parameters.", () => {
        expect(functions.divide(100, 2)).toEqual(50);
        expect(functions.divide(50, 2)).toEqual(25);
    });

    test("subtract() should return a dynamic difference based on two number parameters.", () => {
        expect(functions.subtract(100, 50)).toEqual(50);
        expect(functions.subtract(50, 25)).toEqual(25);
    });
});