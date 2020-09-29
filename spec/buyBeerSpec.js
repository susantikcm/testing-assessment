describe('When can Buy Beer', () => {
    const age18Above = 19;
    const ageUnder18 = 15;
    const gregAge = greg.age;

    describe('When age is 18', () => {
        it(`Greg is ${age18Above}, he can buy beer!`, () => {
            greg.age = age18Above;

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
