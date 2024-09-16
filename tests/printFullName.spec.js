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

    })    
})
