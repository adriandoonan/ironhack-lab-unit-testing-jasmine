describe("Iteration 1 | Getting Started", () => {
    describe("Function add", () => {
      it("should be defined", () => {
        expect(add).toBeDefined();
      });
  
      it("should take two arguments", () => {
        expect(add.length).toBe(2);
      });
  
      it("should return the sum of the two numbers", () => {
        expect(add(1, 2)).toEqual(3);
        expect(add(3, 4)).toEqual(7);
        expect(add(100, 47)).toEqual(147);
        expect(add(100.420, 47.123)).toEqual(147.543);
        expect(add(Math.floor(Math.PI),0)).toEqual(3)
      });
  
      it("should return undefined if any of the arguments is not provided", () => {
        expect(add(1)).toEqual(undefined);
        expect(add()).toEqual(undefined);
        expect(add(undefined, 1)).toEqual(undefined);
      });

      it("should return undefined if any of the arguments is not a number", () => {
        expect(add(1,'string')).withContext(`expected string to return 'undefined', got ${add(1,'string')}\n`).toEqual(undefined);
        expect(add(['array'],2)).withContext(`expected array to return 'undefined', got ${add(['array'],2)}\n`).toEqual(undefined);
        expect(add(null, 1)).withContext(`expected null to return 'undefined', got ${add(null, 1)}\n`).toEqual(undefined);
        expect(add(1, {my: 'object'})).withContext(`expected object to return 'undefined', got ${add(1, {my: 'object'})}\n`).toEqual(undefined);
        expect(add(NaN,2)).withContext(`expected NaN to return 'undefined', got ${add(NaN,2)}\n`).toEqual(undefined);
        expect(add(1,Infinity)).withContext(`expected infinity to return 'undefined', got ${add(1,Infinity)}\n`).toEqual(undefined);
      });
    });
  });
  