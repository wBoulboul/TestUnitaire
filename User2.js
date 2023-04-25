var PasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,40}$/;
var EmailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;


module.exports = class user {
    constructor (nom, prenom, email, password, birthDate, externalApi) {
        this.nom = nom,
        this.prenom = prenom,
        this.email = email,
        this.password = password,
        this.birthDate = birthDate,
        this.externalApi = externalApi
    }

    isValid () {
        return (this.checkLastName() && this.checkFirstName() && this.checkEmail() && this.checkPassword() && this.checkAge())
    }

    checkLastName () {
        if (this.nom) {
            if (typeof this.nom =='string') {
                return true
            }
        }
        
        throw new Error('Last name not valid');
    }
    checkFirstName () {
        if (this.prenom) {
            if (typeof this.prenom =='string') {
                return true
            }
        }

        throw new Error('First name not valid')
    }
    checkEmail () {
        if (this.email) {
            if (this.email.length<254) {
                if (EmailRegex.test(this.email)) {
                    var parts = this.email.split("@");
                    if (parts[0].length<64) {
                        var domainParts = parts[1].split(".");
                        if (domainParts.some(function(part) { return part.length<63; })) {
                            return true
                        }
                    }
                }
            }
        }

        throw new Error('Email not valid')
    }
    checkPassword () {
        if (PasswordRegex.test(this.password)) {
            return true
        }

        throw new Error('Password not valid')
    }
    checkAge () {
        
        const birth = new Date(this.birthDate)
        const now = new Date();
        const age = now.getFullYear() - birth.getFullYear();

        if (age >= 13){
            return true;
        }
        else {
            throw new Error('User too young')
        }

    }
}



