const Intern = require('../lib/Intern');

//This will test the intern class

describe('Intern', () => {
    it("should return an intern instance", () => {
        const newHire = new Intern("Ironman",0,"atombomb@mail.com");
        expect(typeof (newHire)).toEqual("object")
    });

    it("should check for a name given", () => {
        const newHire = new Intern("The Hulk", 1, "rager@mail.com");
        expect(newHire.getName).toEqual("The Hulk");
    });

    it ("should check for a id given", () => {
        const newHire = new Intern("Thor", 81, "thunderlord@mail.com");
        expect(newHire.getId).toEqual(81);
    });

    it ("should check for a email given", () => {
        const newHire = new Intern("Captain America", 47, "starsandstripes@mail.com");
        expect(newHire.getEmail()).toEqual("starsandstripes@mail.com");
    });

    it ("should check for Intern's role", () => {
        const newHire = new Intern("Hawkeye", 44, "bowsandarrows@mail.com");
        expect(newHire.getRole()).toEqual("Intern");
    });

    it ("should check for Intern's school", () => {
        const newHire = new Intern("Black Panther", 66, "clawmarks@mail.com", "Wakanda University");
        expect(newHire.getSchool()).toEqual("Wakanda University");
    });
})

