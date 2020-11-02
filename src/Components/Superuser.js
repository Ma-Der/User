
export class SuperUser extends User {
    constructor(name, surname) {
        super(name, surname);
        this.accessLevel = "admin";
    }

    changeUserEmail(user, email) {
        if(!is.object(user) && user instanceof User) throw new Error("First argument should be an User Object.");
        user.changeEmail(email);

    }

    changeUserPass(user, pass) {
        if(!is.object(user) && user instanceof User) throw new Error("First argument should be an User Object.");
        user.changePass(pass);
    }
}