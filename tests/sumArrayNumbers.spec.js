describe("Iteration 5", () => {
    describe("Function - sumArrayNumbers", () => {
        
        it("should be defined", () => {
            expect(sumArrayNumbers).toBeDefined();
          });
      
        it("should take a single object", () => {
            expect(sumArrayNumbers.length).toBe(1);
          });

        it("should return undefined if any of the arguments is not an array", () => {
            expect(sumArrayNumbers([{obj: 'ect'},6])).toEqual(undefined);
            expect(sumArrayNumbers([1,NaN])).toEqual(undefined);
            expect(sumArrayNumbers(['string',6])).toEqual(undefined);
            expect(sumArrayNumbers([4, null])).toEqual(undefined);
            expect(sumArrayNumbers([undefined,2])).toEqual(undefined);
            expect(sumArrayNumbers([['some', 'array'],3])).toEqual(undefined);
          });
      
        it("should return undefined if any of the arguments is not a number", () => {
            expect(sumArrayNumbers([1,'string'])).withContext(`expected string to return 'undefined', got ${calculateArea(1,'string')}\n`).toEqual(undefined);
            expect(sumArrayNumbers([3,['array'],2])).withContext(`expected array to return 'undefined', got ${calculateArea(['array'],2)}\n`).toEqual(undefined);
            expect(sumArrayNumbers([null, 1])).withContext(`expected null to return 'undefined', got ${calculateArea(null, 1)}\n`).toEqual(undefined);
            expect(sumArrayNumbers([1, {my: 'object'}])).withContext(`expected object to return 'undefined', got ${calculateArea(1, {my: 'object'})}\n`).toEqual(undefined);
            expect(sumArrayNumbers([NaN,2])).withContext(`expected NaN to return 'undefined', got ${calculateArea(NaN,2)}\n`).toEqual(undefined);
            expect(sumArrayNumbers([1,Infinity])).withContext(`expected infinity to return 'undefined', got ${calculateArea(1,Infinity)}\n`).toEqual(undefined);
        });

        it("should return the sum of all numbers", () => {
            expect(sumArrayNumbers([69])).toEqual(69)
            expect(sumArrayNumbers([1,2,3,4])).toEqual(10);
            expect(sumArrayNumbers([2.3,4.20,6.9,696969,0.02,0.000069])).toEqual(696982.420069);
            expect(sumArrayNumbers([Number.parseFloat(Math.PI.toFixed(10)),80082])).toEqual(80085.1415926536);
            expect(sumArrayNumbers([7,(1/3),2])).toEqual(9.333333333333332);
            expect(sumArrayNumbers([-1,1,-2,2,-3,3])).toEqual(0);
            expect(sumArrayNumbers([-1,-2,-3,-4,-5])).toEqual(-15)
        });

    })    
})

