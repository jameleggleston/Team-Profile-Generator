const { it } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    it('should return an Engineer instance', () => {
        const newHire = new Engineer("Ironman",0,"atombomb@mail.com");
        expect(typeof(newHire)).toEqual("object");
    });

    it('should check for a name given', () => {
        const newHire = new Engineer("The Hulk", 1, "rager@mail.com");
        expect(newHire.getName()).toEqual("The Hulk");
    });

    it('should check for a id given', () => {
        const newHire = new Engineer("Thor", 81, "thunderlord@mail.com");
        expect(newHire.getId()).toEqual(81);
    });

    it('should check for a email given', () => {
        const newHire = new Engineer("Captain America", 47, "starsandstripes@mail.com");
        expect(newHire.getEmail()).toEqual("starsandstripes@mail.com");
    });

    it("should check for the Engineer's role", () => {
        const newHire = new Engineer("Hawkeye", 44, "bowsandarrows@mail.com");
        expect(newHire.getRole()).toEqual("Engineer");
    })

    it("should check for the Engineer's github username", () => {
        const newHire = new Engineer("Black Widow", 25, "gunsandfist@mail.com", "blackspiderbite");
        expect(newHire.getGithub()).toEqual("blackspiderbite");
    });
})