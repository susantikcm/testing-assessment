describe('When can Buy Beer', () => {
    const ageAbove18 = 19;
    const ageUnder18 = 15;
    const gregAge = greg.age;

    describe('When age is 18', () => {
        it(`Greg is ${ageAbove18}, he can buy beer!`, () => {
            greg.age = ageAbove18;

            const result = canGregBuyBeer();

            expect(result).toBe(`Greg is ${greg.age}, he can buy beer!`);
        });
    });

    describe('When age is under 18', () => {
        it(`Greg is ${ageUnder18}, he can't buy beer :(`, () => {
            greg.age = ageUnder18;

            const result = canGregBuyBeer();

            expect(result).toBe(`Greg is ${greg.age}, he can't buy beer :(`);
        });
    });

    afterEach(() => {
        greg.age = gregAge;
    });
});
