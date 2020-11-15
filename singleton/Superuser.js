import { User } from './User.js';

export class SuperUser extends User {
    constructor(name, surname, password, email, birthDate, gender) {
        super(name, surname, password, email, birthDate, gender);
        this.accessLevel = "admin";
    }
}