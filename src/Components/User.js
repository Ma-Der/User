import is from 'is_js';
import { Misc } from './Misc.js';
import { v4 as uuidv4 } from 'uuid';

export class User {
    constructor(name, surname, password, email, birthDate, gender) {
        if(is.empty(this.name)) throw new Error('Name is empty. Please type your name.');
        if(is.empty(this.surname)) throw new Error('Surname is empty. Please type your surname.');
        if(is.not.email(email)) throw new Error("Invalid email.");
        this.id = uuidv4();
        this.name = name;
        this.surname = surname;
        this.birthDate = Misc.dateCheck(birthDate);
        this.password = password;
        Misc.passwordCheck(this.password);
        this.gender = gender;
        Misc.genderCheck(this.gender);
        this.email = email;
        this.accessLevel = "user";
    }

    changePassword(password){
        Misc.passwordCheck(password);
        this.password = password;
    }

    changeEmail(email) {
        if(is.not.email(email)) throw new Error("Invalid email.");
        this.email = email;
    }
}