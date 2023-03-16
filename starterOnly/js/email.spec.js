describe('Email', () => {
    it('given a tata email it should not be valid', () => {
        const email = new Email('tata');
        expect(email.isValid()).toBeFalsy();
    })
    it('given a tata email it should not be valid', () => {
        const email = new Email('            ');
        expect(email.isValid()).toBeFalsy();
    })
    it('given a tata email it should not be valid', () => {
        const email = new Email('toto@yoyo.com');
        expect(email.isValid()).toBeTruthy();
    })
    it('given a tata email it should not be valid', () => {
        const email = new Email(2);
        expect(email.isValid()).toBeFalsy();
    })
})