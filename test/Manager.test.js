const Manager = require('../lib/Manager');

//This will test the manager class

describe('Manager', () => {
    it ('should return a manager instance', () => {
        const newHire = new Manager("Ironman", 0,"atombomb@mail.com");
        expect(typeof(newHire)).toEqual("object");
    });

    it ('should check for a name given', () =>{
        const newHire = new Manager("The Hulk", 1, "rager@mail.com");
        expect(newHire.getName()).toEqual("The Hulk");
    })

    it ("should check for a id given", () =>{
        const newHire = new Manager("Thor", 81, "thunderlord@mail.com");
        expect(newHire.getId()).toEqual(81);
    })

    it ("should check for a email given", () =>{
        const newHire = new Manager("Captain America", 47, "starsandstripes@mail.com");
        expect(newHire.getEmail()).toEqual("starsandstripes@mail.com");
    });
    
    it ("should check for Manager's role", () =>{
        const newHire = new Manager("Hawkeye", 44, "bowsandarrows@mail.com");
        expect(newHire.getRole()).toEqual("Manager");
    });

    it ("should check for Manager's office number", () =>{
        const newHire = new Manager("Nick Fury", 99, "eyepatchandcigars@mail.com",2567);
        expect(newHire.getOfficeNumber()).toEqual(2567)
    })
})