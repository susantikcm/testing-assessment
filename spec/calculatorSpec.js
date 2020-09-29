describe('Calculator', () => {
  let calculator;
  const operations = [
    { operator: 'add', fn: (x, y) => calculator.add(x, y), result: 3 },
    { operator: 'subtract', fn: (x, y) => calculator.subtract(x, y), result: -1 },
    { operator: 'multiply', fn: (x, y) => calculator.multiply(x, y), result: 2 },
    { operator: 'divide', fn: (x, y) => calculator.divide(x, y), result: 0.5 }
  ];

  beforeEach(() => {
    calculator = new Calculator();
  });
  
  operations.map(item => {
    describe(`#${item.operator}`, () => {
      if(item.operator === 'divide') {
        describe('when y is equal to 0', () => {
          it('should throw an error', () => {
            expect(() => item.fn(1, 0)).toThrow();
          });
        });
      }

      describe('when passed a string as a number', () => {
        it('should throw an error', () => {
          expect(() => item.fn('1', 2)).toThrow();
          expect(() => item.fn(1, '2')).toThrow();
        });
      });

      describe('when passed two numbers', () => {
        it('should not throw an error', () => {
          expect(()=> item.fn(1, 2)).not.toThrow();
        });

        it(`should ${item.operator} the numbers together`, () => {
          const result = item.fn(1, 2);
          expect(result).toBe(item.result);
        });
      });
    });
  });
});

  // describe('#add', () => {
  //   describe('when passed a string as a number', () => {
  //     it('should throw an error', () => {
  //       expect(() => calculator.add('1', 2)).toThrow();
  //       expect(() => calculator.add(1, '2')).toThrow();
  //     });
  //   });

  //   describe('when passed two numbers', () => {
  //     it('should not throw an error', () => {
  //       expect(() => calculator.add(1, 2)).not.toThrow();
  //     });

  //     it('should add the numbers together', () => {
  //       const result = calculator.add(1, 2);

  //       expect(result).toBe(3);
  //     });
  //   });
  // });

  // describe('#subtract', () => {
  //   describe('when passed a string as a number', () => {
  //     it('should throw an error', () => {
  //       expect(() => calculator.subtract('1', 2)).toThrow();
  //       expect(() => calculator.subtract(1, '2')).toThrow();
  //     });
  //   });

  //   describe('when passed two numbers', () => {
  //     it('should not throw an error', () => {
  //       expect(() => calculator.subtract(1, 2)).not.toThrow();
  //     });

  //     it('should subtract the numbers together', () => {
  //       const result = calculator.subtract(1, 2);

  //       expect(result).toBe(-1);
  //     });
  //   });    
  // });
  
  // describe('#multiply', () => {
  //   describe('when passed a string as a number', () => {
  //     it('should throw an error', () => {
  //       expect(() => calculator.multiply('1', 2)).toThrow();
  //       expect(() => calculator.multiply(1, '2')).toThrow();
  //     });
  //   });

  //   describe('when passed two numbers', () => {
  //     it('should not throw an error', () => {
  //       expect(() => calculator.multiply(1, 2)).not.toThrow();
  //     });

  //     it('should multiply the numbers together', () => {
  //       const result = calculator.multiply(1, 2);

  //       expect(result).toBe(2);
  //     });
  //   });    
  // });
  
  // describe('#divide', () => {
  //   describe('when passed a string as a number', () => {
  //     it('should throw an error', () => {
  //       expect(() => calculator.divide('1', 2)).toThrow();
  //       expect(() => calculator.divide(1, '2')).toThrow();
  //     });
  //   });

  //   describe('when y is equal to 0', () => {
  //     it('should throw an error', () => {
  //       expect(() => calculator.divide(1, 0)).toThrow();
  //     });
  //   });
  // });
