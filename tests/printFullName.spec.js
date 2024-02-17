// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 4", () => {
    describe("Function - printFullName", () => {
        
        it("should be defined", () => {
            expect(printFullName).toBeDefined();
          });
      
        it("should take a single object", () => {
            expect(printFullName.length).toBe(1);
          });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(printFullName({firstName: 'foo'})).toEqual(undefined);
            expect(printFullName({lastName: 'foo'})).toEqual(undefined);
            expect(printFullName({firstName: '',lastName: 'foo'})).toEqual(undefined);
            expect(printFullName({firstName: 'foo',lastName: null})).toEqual(undefined);
            expect(printFullName({firstName: undefined,lastName: 'foo'})).toEqual(undefined);
            expect(printFullName({firstName: undefined,lastName: 'foo'})).toEqual(undefined);
            expect(printFullName({firstName: ['some', 'name'],lastName: 'foo'})).toEqual(undefined);
          });
      
        it("should return the full name", () => {
            const testName = {firstName: 'Big', lastName: 'N'}
            const trimmableName = {firstName: '  foo  ', lastName: '  bar  '}
            const smileyName = {firstName: '  😾  ', lastName: '  angry Cat!  '}
            expect(printFullName(testName)).toEqual(`Big N`);
            expect(printFullName({firstName: 'Harold', lastName: 'Hardrader'})).toEqual('Harold Hardrader');
            expect(printFullName(trimmableName)).toEqual('foo bar');
            expect(printFullName(smileyName)).toBe('😾 angry Cat!');
        });
    
    
        //   it("should return undefined if any of the arguments is not a number", () => {
        //     expect(calculateArea(1,'string')).withContext(`expected string to return 'undefined', got ${calculateArea(1,'string')}\n`).toEqual(undefined);
        //     expect(calculateArea(['array'],2)).withContext(`expected array to return 'undefined', got ${calculateArea(['array'],2)}\n`).toEqual(undefined);
        //     expect(calculateArea(null, 1)).withContext(`expected null to return 'undefined', got ${calculateArea(null, 1)}\n`).toEqual(undefined);
        //     expect(calculateArea(1, {my: 'object'})).withContext(`expected object to return 'undefined', got ${calculateArea(1, {my: 'object'})}\n`).toEqual(undefined);
        //     expect(calculateArea(NaN,2)).withContext(`expected NaN to return 'undefined', got ${calculateArea(NaN,2)}\n`).toEqual(undefined);
        //     expect(calculateArea(1,Infinity)).withContext(`expected infinity to return 'undefined', got ${calculateArea(1,Infinity)}\n`).toEqual(undefined);
        //   });

    })    
})
