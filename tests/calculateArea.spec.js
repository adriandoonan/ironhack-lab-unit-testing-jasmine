// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
          });
      
          it("should take two arguments", () => {
            expect(calculateArea.length).toBe(2);
          });
      
          it("should return the product of the two numbers", () => {
            expect(calculateArea(1, 2)).toEqual(2);
            expect(calculateArea(3, 4)).toEqual(12);
            expect(calculateArea(100, 47)).toEqual(4700);
            expect(calculateArea(100.420, 47.123)).toEqual(4732.09166);
            expect(calculateArea(Math.floor(Math.PI),1)).toEqual(3)
          });
      
          it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
          });
    
          it("should return undefined if any of the arguments is not a number", () => {
            expect(calculateArea(1,'string')).withContext(`expected string to return 'undefined', got ${calculateArea(1,'string')}\n`).toEqual(undefined);
            expect(calculateArea(['array'],2)).withContext(`expected array to return 'undefined', got ${calculateArea(['array'],2)}\n`).toEqual(undefined);
            expect(calculateArea(null, 1)).withContext(`expected null to return 'undefined', got ${calculateArea(null, 1)}\n`).toEqual(undefined);
            expect(calculateArea(1, {my: 'object'})).withContext(`expected object to return 'undefined', got ${calculateArea(1, {my: 'object'})}\n`).toEqual(undefined);
            expect(calculateArea(NaN,2)).withContext(`expected NaN to return 'undefined', got ${calculateArea(NaN,2)}\n`).toEqual(undefined);
            expect(calculateArea(1,Infinity)).withContext(`expected infinity to return 'undefined', got ${calculateArea(1,Infinity)}\n`).toEqual(undefined);
          });

    })    
})

