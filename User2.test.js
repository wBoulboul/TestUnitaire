const user = require("./User2");

const myMock = jest.fn();

test('User info classics to return true', () => {
    const testUser= new user("dc", "jas", "oui@oui.fr", "Abcdefghi7", "02/04/2000")
    
    expect(testUser.isValid()).toBeTruthy();
});
test('Name not string to throw an Error', () => {
    const testUser= new user(12, "jas", "oui@oui.fr", "Abcdefghi7", "02/04/2000")
    
    expect(() => {
        testUser.isValid()
    }).toThrow('Last name not valid') 
});
test('No name to throw an Error', () => {
    const testUser= new user("jas", "oui@oui.fr", "Abcdefghi7", "02/04/2000")
    
    expect(() => {
        testUser.isValid()
    }).toThrow('Last name not valid') 
});



//ensuite faire tous les autres test etc..
