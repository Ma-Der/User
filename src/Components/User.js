import is from 'is_js';
import { Misc } from './Misc';


export class User {
    constructor(name, surname, password, email, birthDate, gender) {
        this.name = name;
        this.surname = surname;
        if(is.empty(this.name)) throw new Error('Name is empty. Please type your name.');
        if(is.empty(this.surname)) throw new Error('Surname is empty. Please type your surname.');
        this.birthDate = Misc.dateCheck(birthDate);
        this.password = password;
        Misc.passwordCheck(this.password);
        
        this.gender = gender;
        Misc.genderCheck(this.gender);
        
        this.email = email;
        
        this.accessLevel = "user";
        
        if(is.empty(this.password) || is.undefined(this.password)) throw new Error("Please set password for you.");
        if(is.empty(this.email) || is.undefined(this.email)) throw new Error("Please set your email address.");
        if(is.not.email(this.email)) throw new Error("Invalid email.");
        if(is.undefined(this.gender)) throw new Error("Please choose your gender - 'm' for male and 'f' for female.");

    }

    changeEmail(email) {
        if(is.not.email(email)) throw new Error("Invalid email address.");
        this.email = email;
        return this;
    }

    changePass(pass) {
        Misc.passwordCheck(pass);
        this.password = pass;
        return this;
    }
}