describe('Heads Or Tails', () => {
    describe('when the coin flip is true', () => {
        it('should return heads', () => {
          spyOn(coin, 'flip').and.returnValue(true);
          const result = headsOrTails();
          expect(result).toBe('heads');
        });
    });

    describe('when the coin flip is false', () => {
      it('should return tails', () => {
        spyOn(coin, 'flip').and.returnValue(false);
        const result = headsOrTails();
        expect(result).toBe('tails');
      });
    });
});
