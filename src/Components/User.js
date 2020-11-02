import moment from 'moment';
import is from 'is_js';


export class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
        this.birthDate;
        this.password;
        this.gender;
        this.email;
        this.accessLevel = "user";
    }

    changeEmail(email) {
        if(!is.email(email)) throw new Error("Invalid email address.");
        this.email = email;
        return this;
    }

    changePass(pass) {
        this.password = pass;
        return this;
    }
}