describe('When get weather for city', () => {
    describe('When Sydney is passed as city', () => {
        it('should return 25', () => {
            // return getWeatherFor('Sydney').then(temp => expect(temp).toBe(25));
            return expectAsync(getWeatherFor('Sydney')).toBeResolved(25);
        });
    });
    
    describe('When Melbourne is passed as city', () => {
        it('should return 15', () => {
            return expectAsync(getWeatherFor('Melbourne')).toBeResolved(15);
        });
    });

    describe('When city other than Sydney or Melbourne is passed', () => {
        const city = 'Perth';
        it(`should reject with error -> City ${city} does not exist in our database`, () => {
            return expectAsync(getWeatherFor('Perth')).toBeRejectedWith(`City ${city} does not exist in our database`);
        });
    });
});