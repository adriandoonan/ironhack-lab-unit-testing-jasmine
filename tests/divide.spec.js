

describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        it("should be defined", () => {
            expect(divide).toBeDefined();
          });
      
          it("should take two or more arguments", () => {
            expect(divide(1)).toBe(undefined);
            expect(divide(1,2)).toEqual(0.5)
            expect(divide(1,2,2)).toEqual(0.25)
          });
      
          it("should return the sum of the two numbers", () => {
            expect(divide(0, 1)).toBe(0);
            expect(divide(3, 4)).toEqual(0.75);
            expect(divide(4, 2)).toEqual(2);
            expect(divide(100.420, 47.123)).toEqual(2.1310188230800247);
            expect(divide(Math.floor(Math.PI),1)).toEqual(3)
          });
      
          it("should return undefined if one or no arguments are provided, or the first is undefined", () => {
            expect(divide(1,0)).toEqual(undefined);
            expect(divide(1,2,3,0)).toEqual(undefined);
            expect(divide(1,2,3,0,3,2,1)).toEqual(undefined);
          });

          it("should return undefined if the user tries to divide by 0", () => {
            expect(divide(1,0)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 1)).toEqual(undefined);
          });
    
          it("should return undefined if any of the arguments is not a number", () => {
            expect(divide(1,'string')).withContext(`expected string to return 'undefined', got ${add(1,'string')}\n`).toEqual(undefined);
            expect(divide(['array'],2)).withContext(`expected array to return 'undefined', got ${add(['array'],2)}\n`).toEqual(undefined);
            expect(divide(null, 1)).withContext(`expected null to return 'undefined', got ${add(null, 1)}\n`).toEqual(undefined);
            expect(divide(1, {my: 'object'})).withContext(`expected object to return 'undefined', got ${add(1, {my: 'object'})}\n`).toEqual(undefined);
            expect(divide(NaN,2)).withContext(`expected NaN to return 'undefined', got ${add(NaN,2)}\n`).toEqual(undefined);
            expect(divide(1,Infinity)).withContext(`expected infinity to return 'undefined', got ${add(1,Infinity)}\n`).toEqual(undefined);
          });

    })    
})
