const Employee = require('../lib/Employee');

// This will test the Employee class bases on parameter inputs

describe('Employee', () => {
    
    it("should return an Employee instance", () => {
        const newHire = new Employee("Ironman",0,"atombomb@mail.com");
        expect(typeof (newHire)).toEqual("object");
    });

    it("should check for a name given", () => {
        const newHire = new Employee("The Hulk",1,"rager@mail.com");
        expect(typeof (newHire.getName())).toEqual("The Hulk");
    });

    it("should check for a id given", () => {
        const newHire = new Employee("Thor", 81, "thunderlord@mail.com");
        expect(typeof (newHire.getId())).toEqual(81);
    });

    it("should check for a email given", () => {
        const newHire = new Employee("Captain America",47,"starsandstripes@mail.com");
        expect(typeof (newHire.getEmail())).toEqual("starsandstripes@mail.com");
    });

    it("should check for a emplyee's role", () =>{
        const newHire = new Employee("Hawkeye", 44, "bowsandarrows@mail.com");
        expect(typeof (newHire.getRole())).toEqual("Employee")
    });
})