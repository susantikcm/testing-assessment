describe('When can Buy Beer', () => {
    const age18Above = 18;
    const ageUnder18 = 15;

    describe('When age is 18', () => {
        it(`Greg is ${age18Above}, he can buy beer!`, () => {
            const gregAge = greg.age;
            greg.age = age18Above;

            const result = canGregBuyBeer();

            expect(result).toBe(`Greg is ${age18Above}, he can buy beer!`);
            greg.age = gregAge;
        });
    });

    describe('When age is under 18', () => {
        it(`Greg is ${ageUnder18}, he can't buy beer :(`, () => {
            const gregAge = greg.age;
            greg.age = ageUnder18;

            const result = canGregBuyBeer();

            expect(result).toBe(`Greg is ${age18Above}, he can't buy beer :(`);
            greg.age = gregAge;
        });
    });
});