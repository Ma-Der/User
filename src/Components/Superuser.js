import { User } from './User';
import is from 'is_js';

export class SuperUser extends User {
    constructor(name, surname, password, email, birthDate, gender) {
        super(name, surname, password, email, birthDate, gender);
        this.accessLevel = "admin";
    }

    changeUserEmail(user, email) {
        if(!(user instanceof User)) throw new Error("First argument should be an User Object.");
        user.changeEmail(email);

    }

    changeUserPass(user, pass) {
        if(!(user instanceof User)) throw new Error("First argument should be an User Object.");
        user.changePass(pass);
    }
}